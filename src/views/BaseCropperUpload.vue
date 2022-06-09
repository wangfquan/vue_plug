<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-15 16:10:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:19:36
-->

<template>
  <div id="BaseCropperUpload">
    <h1>图片上传裁减</h1>
    <el-upload
      class="heightCredential"
      :action="action"
      :headers="headers"
      :file-list="list"
      :show-file-list="isList"
      :accept="accept"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    >
      <div class="uploadBorder flex_jc_center flex_ai_center">
        <img v-if="!isList && list.length" :src="list[0].url" @click.stop="" />
        <i v-else class="el-icon-plus"></i>
        <slot />
      </div>
      <i
        v-show="!isList && list.length"
        class="el-icon-close img-close"
        @click.stop="clearFile"
      ></i>
    </el-upload>
    <el-dialog
      append-to-body
      title="图片裁剪"
      ref="dialog"
      width="1200"
      class="img-cropper"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
    >
      <div class="cropper-w">
        <div style="margin-bottom: 10px">
          <span>选择截取尺寸：</span>
          <el-radio-group v-model="picWidth" @change="picWidthChange">
            <el-radio :label="1200">1200px*158px</el-radio>
            <el-radio :label="380">380px*100px</el-radio>
          </el-radio-group>
        </div>
        <div class="cropper" :style="{ width: '100%', height: '360px' }">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="option.info"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
          ></vueCropper>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="finish">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
// import cookie from '@/storage/cookies'

export default {
  name: "BaseCropperUpload",
  props: {
    isDesign: {
      type: String,
      default: "",
    },
    accept: {
      type: String,
      default: "",
    },
    isList: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Number,
      default: 1,
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    // 图片的长宽限制 [width,height]
    sizeRule: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      return this.fileList;
    },
  },
  data() {
    return {
      picWidth: 1200,
      imageName: "",
      action: "process.env.VUE_APP_APIUSER" + "/file/add",
      headers: {
        Authorization: `Bearer {cookie.cookieRead('token')}`,
      },
      dialogVisible: false,
      option: {
        img: "", // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: "jpeg", // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 1200, // 默认生成截图框宽度
        autoCropHeight: 158, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: false, // 是否开启截图框宽高固定比例
        fixedNumber: [7, 5], // 截图框的宽高比例
        full: false, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: true, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        // enlarge:1, //图片根据截图框输出比例倍数
        // mode: '230px 150px' //图片默认渲染方式
      },
    };
  },
  created() {},
  methods: {
    picWidthChange(val) {
      if (val == 380) {
        this.option.autoCropWidth = 380;
        this.option.autoCropHeight = 100;
      } else if (val == 1200) {
        this.option.autoCropWidth = 1200;
        this.option.autoCropHeight = 158;
      }
      this.$forceUpdate();
    },
    beforeUpload(file) {
      if (file && file.name) {
        this.imageName = file.name;
      }
      return new Promise((resolve, reject) => {
        const FileExt = file.name.replace(/.+\./, "").toLowerCase();
        const isLt2M = file.size / 1024 / 1024 < this.size;
        const fileArr = this.accept.replace(/\./g, "").toLowerCase().split(",");
        // const imageExt = ['jpg', 'png', 'webp', 'jpeg', 'bmp', 'gif'];
        const fileCheck = () => {
          if (fileArr.indexOf(FileExt) === -1) {
            reject(
              this.$message({
                type: "warning",
                message: `请上传后缀名为${fileArr.join("/")}的文件！`,
              })
            );
          }
          this.$emit("beforeUpload", true);
          if (!isLt2M) {
            this.$emit("beforeUpload", false);
            reject(
              this.$_toast({
                type: "error",
                msg: `文件大小不能超过${this.size}MB`,
              })
            );
          }
          // resolve(true);
          // 图片转为base64
          let self = this;
          const _URL = window.URL || window.webkitURL;
          const image = new Image();
          image.src = _URL.createObjectURL(file);
          self.option.img = "";
          image.onload = function () {
            let base64 = self.transBase64FromImage(image);
            self.option.img = base64;
          };
          this.picWidth = 1200;
          this.picWidthChange(1200);
          this.dialogVisible = true;
        };
        fileCheck();
      });
    },
    // 将网络图片转换成base64格式
    transBase64FromImage(image) {
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);
      // 可选其他值 image/jpeg
      return canvas.toDataURL("image/png");
    },
    // base64转成files
    transformToFiles(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    handleSuccess({ data: url, code, msg }, { name }) {
      console.log(name);
      if (code !== 200) {
        this.$message.error(msg);
      } else {
        this.$emit("handleFile", [{ url, name: this.imageName }]);
      }
    },
    clearFile() {
      this.$emit("removeImage");
      this.imageName = "";
      this.$emit("handleFile", []);
    },
    finish() {
      let _this = this;
      this.$refs.cropper.getCropBlob(async (data) => {
        let formData = new FormData();
        console.log(data);
        if (data) {
          var timestamp = new Date().getTime() + ".jpg";
          //  将blob格式转换为文件。File() 构造器创建新的 File 对象实例。
          const newFile = new window.File([data], timestamp);

          formData.append("file", newFile);
          //调用axios上传
          console.log(formData);
          // let {data: res} = await axios.post(process.env.VUE_APP_APIUSER+'/file/add', formData)
          // if(res.code === 200){
          // 	let data = res.data.replace('[','').replace(']','').split(',');
          // 	let imgInfo = {
          // 		name : _this.filename,
          // 		url : data[0]
          // 	};
          //   console.log(imgInfo);
          //   this.dialogVisible = false
          //   this.$emit('handleFile', [{url:imgInfo.url, name:_this.imageName}])
          // }
        } else {
          this.$message.warning("请重新截图");
        }
      });
      _this.$forceUpdate();
    },
    handleConfirm() {
      console.log(this.$refs.cropper);
      this.$refs.cropper.getCropBlob((data) => {
        // if (data.size > 2097152) {
        //   this.showMsg("图片大于2M，请进行裁剪或重新选择");
        // }
        let blob = window.URL.createObjectURL(data);
        this.downImg = blob;
        // var base64;
        var img = new Image();
        img.src = blob;
        var _that = this;
        img.onload = function () {
          var that = this;
          //生成比例
          var w = that.width,
            h = that.height,
            scale = w / h;
          h = w / scale;
          //生成canvas
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(that, 0, 0, w, h);
          // 生成base64
          _that.cropperPic = canvas.toDataURL("image/jpeg", 0.8);
          let files = _that.transformToFiles(_that.cropperPic, _that.filename);
          _that.temporaryCloseCropper = true;

          // XMLHttpRequest 请求 --最后决定使用 XMLHttpRequest 来进行上传图片
          var xhr = new XMLHttpRequest();
          xhr.timeout = 3000;
          xhr.ontimeout = function () {
            console.log("请求超时！");
          };
          let param = new FormData();
          param.append("file", files, _that.filename);
          param.append("deadline", 0); // 按照接口需求情况添加
          param.append("file_size", 512 * 1024); // 按照接口需求情况添加
          xhr.open("POST", "https://api.sgbwl.com/memberCenter/file/add");
          xhr.send(param);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              console.log(JSON.parse(xhr.responseText));
              let res = JSON.parse(xhr.responseText);
              if (res.code == 200) {
                _that.$emit("handleFile", [
                  { url: res.data, name: _that.imageName },
                ]);
                _that.imageUrl = res.data;
                console.log(_that.imageUrl);
                _that.dialogVisible = false;
              } else {
                console.log(res.msg);
              }
            } else {
              console.log(xhr.statusText);
            }
          };

          // 生成图片
          //   _that.$refs.upload.$children[0].handleChange({
          //     target: { files: [files] },
          //   });

          //  使用此方法 需要在 upload 里 action 设置接口地址
          // _that.$refs.upload.$children[0].post(files)
        };
      });
    },
  },
};
</script>

<style lang="scss">
#BaseCropperUpload {
  // height: 249px;
  // width: 400px;
}
.heightCredential {
  position: relative;

  .uploadBorder {
    width: 170px;
    min-height: 170px;
    border: 1px dashed #e6ebf1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 36px;
    }
  }
  .img-close {
    font-size: 20px;
    position: absolute;
    left: 152px;
    top: 0;
    background-color: #e4e7ed;
  }
}
</style>
<style scoped>
/* .img-cropper{} */
/* /deep/.el-dialog {
  width: 1250px !important;
} */
</style>

<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangfquan
 * @Date: 2022-04-19 11:44:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-20 09:21:35
-->
<template>
  <div id="treeDraggable">
    <h1>前端element UI菜单拖拽</h1>
    <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      draggable
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
    </el-tree>
  </div>
</template>
<script>
export default {
  name: "TreeDraggableVue",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1",
                },
                {
                  id: 12,
                  label: "三级 3-2-2",
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },

  methods: {
    handleDragStart(node, ev) {
      console.log("drag start", node);
      console.log("drag start", ev);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
      console.log(draggingNode);
      console.log(ev);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
      console.log(draggingNode);
      console.log(ev);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
      console.log(draggingNode);
      console.log(ev);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
      console.log(draggingNode);
      console.log(ev);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
      console.log(draggingNode);
      console.log(ev);
    },
    allowDrop(draggingNode, dropNode, type) {
      console.log(draggingNode);
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-2-2") === -1;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#treeDraggable {
  // height: 600px;
  // width: 400px;
}
</style>
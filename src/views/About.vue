<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="handleClick">点击打开拖拽组件</div>
    <l-drag
      title="提示"
      :visible.sync="isShowDrag"
      width="40%"
      @open="handleOpen"
      @close="handleClose">
    </l-drag>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowDrag: false
    }
  },
  methods: {
    handleClick () {
      this.isShowDrag = true
    },
    handleOpen () {
      console.log(111)
    },
    handleClose () {
      console.log(222)
    }
  }
}
</script>

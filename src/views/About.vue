<template>
  <div class="about">
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
    },
    handleClose () {

    }
  }
}
</script>

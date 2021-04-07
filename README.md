# l-drag

## 查看源码

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## 使用组件 l-drag
```
main.js

1、安装： npm i l-drag
2、引入： import lDrag from 'l-drag'
3、引入样式： import 'l-drag/lib/ldrag.css'
4、使用插件： Vue.use(lDrag)
```
## 配置
```
一、属性配置

   属性              说明                             类型                    默认值 
   visible           是否显示drag 支持.sync           boolean                 false
   title             drag的标题                      string                   无
   width             drag的宽度                      string                   min-width: 500px
   top               drag距离浏览器的top值            string                   15vh



二、slot

    footer  drag 的底部slot



三、事件

    open                       drag打开的回调
    close                      drag关闭的回调



四、例子

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
```

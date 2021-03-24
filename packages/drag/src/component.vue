<template>
    <div
        class="l-drag"
        ref="lDrag"
        v-show="visible"
        :style="style"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp">
        <div class="l-drag-header">
            <span class="l-drag-title">{{title}}</span>
            <span class="l-drag-close" @click="handleClose">
                <i class="iconfont icon-guanbi"></i>
            </span>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'LDrag',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: String,
        width: String,
    },
    computed: {
        style () {
            let style = {}
            if (this.width) {
                style.width = this.width
            }
            return style
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.$emit('open')
                this.closed = false
            } else {
                if (!this.closed) this.$emit('close')
            }
        }
    },
    data () {
        return {
            closed: false
        }
    },
    methods: {
        handleMouseDown (e) {
            
            let spaceX = e.clientX - this.$refs.lDrag.offsetLeft
            let spaceY = e.clientY - this.$refs.lDrag.offsetTop
            document.onselectstart = function() { return false }
            document.ondragstart = function() { return false }
            this.$refs.lDrag.style.cursor = 'move'
            document.onmousemove = e => {
                let l = e.clientX - spaceX 
                let t = e.clientY - spaceY
                if (l < 0) {
                    l = 0
                } else if (l > window.innerWidth - this.$refs.lDrag.offsetWidth) {
                    l = window.innerWidth - this.$refs.lDrag.offsetWidth
                }
                if (t < 0) {  
                    t = 0
                } else if (t> window.innerHeight - this.$refs.lDrag.offsetHeight) {  
                    t = window.innerHeight - this.$refs.lDrag.offsetHeight
                } 
                this.$refs.lDrag.style.left = l + 'px'
                this.$refs.lDrag.style.top = t + 'px'
            }
        },
        handleMouseUp () {
            document.onmousemove = null
            this.$refs.lDrag.style.cursor = 'default'
        },
        handleClose () {
            this.$emit('update:visible', false)
            this.$emit('close')
            this.closed = true
        }
        
    }    
}
</script>
<style>
.l-drag {
    min-width: 500px;
    min-height: 200px;
    background: #fff;
    position: absolute;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    top: 15vh;
}
.l-drag-header {
    padding: 20px 20px 10px;
    position: relative;
}
.l-drag-title {
    font-size: 18px;
    line-height: 24px;
    color: #303133;
}
.l-drag-close {
    position: absolute;
    color: #909399;
    top: 20px;
    right: 20px;
    cursor: pointer;
}
</style>
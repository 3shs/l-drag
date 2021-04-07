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
        <div class="l-drag-body" v-if="rendered">
            <slot></slot>
        </div>
        <div class="l-drag-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
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
        top: {
            type: String,
            default: '15vh'
        }
    },
    data () {
        return {
            closed: false,
            rendered: false
        }
    },
    computed: {
        style () {
            let style = {}
            if (this.width) {
                style.width = this.width
                style.top = this.top
            }
            return style
        }
    },
    watch: {
        visible (val) {
            if (val) {
                if (!this.rendered) {
                    this.rendered = true
                }
                this.$emit('open')
                this.closed = false
            } else {
                if (!this.closed) this.$emit('close')
            }
        }
    },
    methods: {
        handleMouseDown (e) {
            let spaceX = e.clientX - this.$refs.lDrag.offsetLeft + (this.$refs.lDrag.offsetWidth / 2)
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
                this.$refs.lDrag.style.left = l + (this.$refs.lDrag.offsetWidth / 2) + 'px'
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
@font-face {font-family: "iconfont";
  src: url('../../../src/assets/icon/iconfont.eot?t=1615877054782'); /* IE9 */
  src: url('../../../src/assets/icon/iconfont.eot?t=1615877054782#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKcAAsAAAAABlQAAAJRAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApgbAE2AiQDCAsGAAQgBYRtBzAbkgXIHpIkgc6IECAJKhCAEMHTfr+fs3cxkSQZz6pJNBM6CWIjFRJfLGl+9z+nHQC5G8iyHLJCmxTuB/jnUnAjsAQSWM1WqG3Csd1bT/AMKTPgmvoJNJA8oLl1UlRyJODApgPswjXZJjTjDWMXuITzBKr188tbH59d8JXKrGmBeFSkmK8055dllqoUymvWZvGqTGV6Tq94Cb8fv8xFKUlZwarYuh5L+ga/ttsZxXJp2ZlPCBDQ5jIUmOWTib3a+IYCwTgFquOFhvn2VRp8bS+VfJvYq1mwv84qrgW9UHJPUld2q8UJ5Li/k0//qAeTauoOry5b0kcvF420X7Pbnjpcud9r8g7Ouz7H4Te3OPA+4f0tLm7PVx77E3c669u2FwdyH2AQ/6xYy18guPz/+0Ko8X9lTQbvT5QLTVk/J5V7cgR/RNqzLetyy5qyKq11Jp2jpiZUq0YJdjf7HGtoO306VGq7CWeFvhSFSqNkZmdRpsYCylVaQrUZE5trtOAKRK7CtA2A0OgZSb03FBq9kZn9QJl2/yjXGAWodhDsWWM8lPI4xgiTEM+CkrBM5tipPCqdQ8nTYzwrD7lLyF0lBJFguJiaQBP5HAvclBQlYsC4ZcA4uAx13QKbWyomKCgT2d2hEKt7UzBhGb5yazgUQ1ASiMsCigSLifm9SXnp83OQxKOL4S1VNdEliHMpg4OIoHAPckJj9qq6l2tcKZIoQhjAcBYDGAejkE5nAXb9KBVKIEHyiKitW8juxvpqguvrjA8oZnVYxhT2sEL5jRcz44rPBwA=') format('woff2'),
  url('../../../src/assets/icon/iconfont.woff?t=1615877054782') format('woff'),
  url('../../../src/assets/icon/../../../src/assets/icon/iconfont.ttf?t=1615877054782') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('../../../src/assets/icon/iconfont.svg?t=1615877054782#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-guanbi:before {
  content: "\e616";
}
.l-drag {
    box-sizing: border-box;
    min-width: 500px;
    min-height: 200px;
    background: #fff;
    position: absolute;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
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
.l-drag-body {
    padding: 30px 20px;
}
.l-drag-footer {
    padding: 10px 20px 20px;
}
</style>
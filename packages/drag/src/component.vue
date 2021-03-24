<template>
    <div
        class="l-drag"
        ref="lDrag"
        v-show="visible"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp">

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
    },
    data () {
        return {

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
</style>
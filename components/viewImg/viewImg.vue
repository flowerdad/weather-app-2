<template>
  <view class='viewImg'>
    <movable-area scale-area :style="{width:width,height:height}">
      <movable-view direction="all" :out-of-bounds='false' scale :scale-min="0.1" :style="{width:viewInfo.width+'px',height:viewInfo.height+'px'}">
        <image :src="src" mode='aspectFit'></image>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>  
export default {
  props: {
    src: String,
    width: {
      type: String,
      default: '90vw'
    },
    height: {
      type: String,
      default: '50vh'
    },
  },
  data() {
    return {
      imageInfo: '',
      viewInfo: '',
      x: 0,
      y: 0
    }
  },
  methods: {
    getImgInfo() {
      uni.getImageInfo({
        src: this.src,
        success: (image) => {
          this.imageInfo = image
          this.getViewInfo();
        }
      });
    },
    getViewInfo() {
      this.$u.getRect('.viewImg').then(res => {
        this.viewInfo = res;
        this.x = this.viewInfo.width - this.imageInfo.width
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getImgInfo();
    })
  }
}
</script>  

<style lang="scss" scoped>
movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
}

movable-area {
  overflow: hidden;
  background-color: #fff;
}
</style>  
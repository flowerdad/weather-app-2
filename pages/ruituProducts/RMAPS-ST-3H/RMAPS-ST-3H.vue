<template>
  <view class="content">
    <u-navbar back-text="返回" title='RMAPS-ST-3H' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
    <view class="content-body">
      <view-img :src="imgSrc" :width="'calc(100vw - 40rpx)'" :height="'calc(100vh - 420rpx)'"></view-img>
      <view class="u-padding-12 popup-tools">
        <type-selection :list='list' @value='listValue' key='list'></type-selection>
        <u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />
        <times></times>
      </view>
    </view>
  </view>
</template>

<script>
import viewImg from "components/viewImg/viewImg.vue";
import times from "components/times/times.vue";
import typeSelection from "components/typeSelection/typeSelection.vue";
export default {
  components: {
    viewImg,
    times,
    typeSelection
  },
  data() {
    return {
      imgSrc: '/static/data.png',
      background: {
        backgroundColor: 'rgb(69,71,85)'
      },
      list: [
        {
          name: '组合反射率因子',
        },
        {
          name: '1小时累计降水',
        },
        {
          name: '3小时累计降水',
        },
        {
          name: '6小时累计降水',
        },
        {
          name: '12小时累计降水',
        },
        {
          name: '24小时累计降水',
        },
        {
          name: '海平面气压+500hPa位势高度',
        },
        {
          name: '500hPa相对湿度+风场（风羽）',
        },
        {
          name: '700hPa相对湿度+风场（风羽）',
        },
        {
          name: '850hPa相对湿度+风场（风羽）',
        },
        {
          name: '整层可降水量',
        },
        {
          name: '地面2米温度',
        },
        {
          name: '总云量',
        },
        {
          name: '低云量',
        },
        {
          name: 'CIN',
        },
        {
          name: '10米风（风羽）+2米温度',
        },
        {
          name: '10米风（风羽）+2米露点温度',
        },
        {
          name: '10米风（风羽）+1小时累计降水',
        },
        {
          name: '200hPa风（风羽）+全风速',
        },
        {
          name: '500hPa风（风羽）+全风速',
        },
        {
          name: '700hPa风（风羽）+全风速',
        },
        {
          name: '850hPa风（风羽）+全风速',
        },
        {
          name: '500hPa比湿+风场（风羽）',
        },
        {
          name: '700hPa比湿+风场（风羽）',
        },
        {
          name: '850hPa比湿+风场（风羽）',
        },
        {
          name: '500hPa温度+风场（风羽）',
        },
        {
          name: '700hPa温度+风场（风羽）',
        },
        {
          name: '850hPa温度+风场（风羽）',
        },
        {
          name: 'CAPE',
        },
        {
          name: '单点TlogP图',
        }
      ]
    };
  },
  methods: {
    listValue(e) {
      console.log(e.id + '-' + e.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  height: 100vh;
}
.content-body {
  background-color: #ffffff;
  margin: 20rpx;
  border-radius: 20rpx;
  padding: 20rpx 0rpx;
  font-size: 28rpx;
  height: calc(100vh - 120rpx);
}
.popup-tools {
  background-color: #f8f8f8;
  border-radius: 12px;
  margin: 20rpx;
  position: absolute;
  bottom: 20rpx;
  width: calc(100% - 80rpx);
}
</style>

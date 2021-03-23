<template>
  <view class="content">
    <u-navbar back-text="返回" title='风廓线' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
    <view class="content-body">
      <view-img :src="imgSrc" :width="'calc(100vw - 40rpx)'" :height="'calc(100vh - 520rpx)'"></view-img>
      <view class="u-padding-12 popup-tools">
        <type-selection :list='list' @value='listValue' key='list'></type-selection>
        <u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />

        <type-selection v-if="zuwangTypeShow" :list='zuwangType' @value='zuwangTypeValue' key='zuwangType'></type-selection>
        <u-line v-if="zuwangTypeShow" color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />

        <type-selection v-if="jishujuSiteShow" :list='jishujuSite' @value='jishujuSiteValue' key='jishujuSite'></type-selection>
        <u-line v-if="jishujuSiteShow" color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />
        <type-selection v-if="jishujuTimeShow" :list='jishujuTime' @value='jishujuTimeValue' key='jishujuTime'></type-selection>
        <u-line v-if="jishujuTimeShow" color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />

        <type-selection v-if="fengkuoxianSiteShow" :list='fengkuoxianSite' @value='fengkuoxianSiteValue' key='fengkuoxianSite'></type-selection>
        <u-line v-if="fengkuoxianSiteShow" color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />
        <type-selection v-if="fengkuoxianLayerShow" :list='fengkuoxianLayer' @value='fengkuoxianLayerValue' key='fengkuoxianLayer'></type-selection>
        <u-line v-if="fengkuoxianLayerShow" color="#dadada" class="u-margin-top-20 u-margin-bottom-20" />

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
          id: '0',
          name: '组网',
        },
        {
          id: '1',
          name: '基数据',
        },
        {
          id: '2',
          name: '风廓线产品',
        }
      ],
      zuwangTypeShow: true,
      zuwangType: [
        {
          id: '0',
          name: '七站对比',
        },
        {
          id: '0',
          name: '150',
        },
        {
          id: '0',
          name: '510',
        },
        {
          id: '0',
          name: '1110',
        },
        {
          id: '0',
          name: '1500',
        },
        {
          id: '0',
          name: '1950',
        },
        {
          id: '0',
          name: '3030',
        },
        {
          id: '0',
          name: '3990',
        },
        {
          id: '0',
          name: '5070',
        },
        {
          id: '0',
          name: '6030',
        },
        {
          id: '0',
          name: '6990',
        },
        {
          id: '0',
          name: '7950',
        },
        {
          id: '0',
          name: '8910',
        },
        {
          id: '0',
          name: '10110',
        },
      ],
      jishujuSiteShow: false,
      jishujuSite: [
        {
          id: '0',
          name: '观象台',
        },
        {
          id: '0',
          name: '海淀',
        },
        {
          id: '0',
          name: '延庆',
        },
        {
          id: '0',
          name: '平谷',
        },
        {
          id: '0',
          name: '怀柔',
        },
        {
          id: '0',
          name: '上甸子',
        },
        {
          id: '0',
          name: '霞云岭',
        },
        {
          id: '0',
          name: '宝坻',
        },
        {
          id: '0',
          name: '静海',
        },
        {
          id: '0',
          name: '西青',
        },
        {
          id: '0',
          name: '东营',
        },
        {
          id: '0',
          name: '蓬莱',
        },
        {
          id: '0',
          name: '潍坊',
        },
        {
          id: '0',
          name: '青岛',
        },
        {
          id: '0',
          name: '张北',
        },
        {
          id: '0',
          name: '大厂',
        },
        {
          id: '0',
          name: '保定',
        },
        {
          id: '0',
          name: '卢龙',
        },
        {
          id: '0',
          name: '丰宁',
        },
        {
          id: '0',
          name: '咸安',
        },
        {
          id: '0',
          name: '围场',
        },
        {
          id: '0',
          name: '鹿泉',
        },
        {
          id: '0',
          name: '唐山',
        },
        {
          id: '0',
          name: '黄骅',
        },
        {
          id: '0',
          name: '冀州',
        },
        {
          id: '0',
          name: '五台山',
        },
        {
          id: '0',
          name: '沈阳',
        },
      ],
      jishujuTimeShow: false,
      jishujuTime: [
        {
          id: '0',
          name: '6分钟',
        }, {
          id: '0',
          name: '30分钟',
        }, {
          id: '0',
          name: '60分钟',
        },
      ],
      fengkuoxianSiteShow: false,
      fengkuoxianSite: [
        {
          id: '0',
          name: '观象台',
        },
        {
          id: '0',
          name: '海淀',
        },
        {
          id: '0',
          name: '延庆',
        },
        {
          id: '0',
          name: '上甸子',
        },
        {
          id: '0',
          name: '霞云岭',
        },
        {
          id: '0',
          name: '平谷',
        },
        {
          id: '0',
          name: '怀柔',
        },
      ],
      fengkuoxianLayerShow: false,
      fengkuoxianLayer: [
        {
          id: '0',
          name: '中层',
        },
        {
          id: '0',
          name: '高层',
        },
        {
          id: '0',
          name: '底层',
        },
      ],
    };
  },
  methods: {
    listValue(e) {
      console.log(e.id + '-' + e.name)
      switch (e.id) {
        case '0':
          this.zuwangTypeShow = true;
          this.jishujuSiteShow = false;
          this.jishujuTimeShow = false;
          this.fengkuoxianSiteShow = false;
          this.fengkuoxianLayerShow = false;
          break;
        case '1':
          this.zuwangTypeShow = false;
          this.jishujuSiteShow = true;
          this.jishujuTimeShow = true;
          this.fengkuoxianSiteShow = false;
          this.fengkuoxianLayerShow = false;
          break;
        case '2':
          this.zuwangTypeShow = false;
          this.jishujuSiteShow = false;
          this.jishujuTimeShow = false;
          this.fengkuoxianSiteShow = true;
          this.fengkuoxianLayerShow = true;
          break;
      }
    },
    zuwangTypeValue(e) {
      console.log(e.id + '-' + e.name)
    },
    jishujuSiteValue(e) {
      console.log(e.id + '-' + e.name)
    },
    jishujuTimeValue(e) {
      console.log(e.id + '-' + e.name)
    },
    fengkuoxianSiteValue(e) {
      console.log(e.id + '-' + e.name)
    },
    fengkuoxianLayerValue(e) {
      console.log(e.id + '-' + e.name)
    },
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

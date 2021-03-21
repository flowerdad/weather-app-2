<template>
	<view class="map-box">
	  <view id="lmap" class="map"></view>
	  <view class="content">
		<u-sticky offset-top="230">
			<view class="sticky">
				<u-card class='main-info' :border="false" :head-border-bottom="false" margin="20rpx" :show-head='false' style=''>
					<view class="" slot="body">
						<view class="" style="font-size: 38rpx;color:#d8d8d8"><u-icon name="map-fill" class='u-margin-right-16'></u-icon> 北京市 东城区</view>
						<view style="position: absolute;right: 30rpx;top: 30rpx; color:#909090">03:25 更新  <u-icon name="reload" class='u-margin-left-12'></u-icon></view>
						<u-row gutter="16" class='u-margin-top-30'>
							<u-col span="3">
								<view class="demo-layout bg-purple" style="font-size:90rpx;font-weight: bold;color:#d8d8d8">10°</view>
							</u-col>
							<u-col span="9">
								<view class="demo-layout bg-purple-light" style="color:#d8d8d8">晴</view>
								<view class="demo-layout bg-purple-light" style="color:#d8d8d8">AQI 良 西风3级</view>
							</u-col>
						</u-row>
					</view>
				</u-card>
			</view>
		</u-sticky>
		<view class="u-padding-30">今天白天晴，夜晚晴，现在10°，东南风，空气重度污染。</view>
	    <u-card :border="false" :head-border-bottom="false" margin="0rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
	      <view slot="head" @click='highObservationExtend'>
	        <text class="card-head-text">高空观测</text>
	        <u-icon :name="isHighObservationExtend==4?'arrow-down':'arrow-up'" color='#999' :size="40" class='card-head-icon'></u-icon>
	      </view>
	      <view class="u-type-primary-bg" slot="body" ref='cardbg'>
	        <u-grid :col="4" :border='false' hover-class="hover-class" style='background-color: #fff;'>
	          <template v-for="(item,index) in highObservation">
	            <u-grid-item :key="index" v-if='index < isHighObservationExtend'>
	              <navigator class="u-text-center" hover-class="none" :url="item.url" navigateTo>
	                <u-icon :name="item.icon" :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
	                <view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
	              </navigator>
	            </u-grid-item>
	          </template>
	        </u-grid>
	      </view>
	    </u-card>
	    <u-card title="地面观测" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
	      <view slot="head" @click='groundObservationExtend'>
	        <text class="card-head-text">地面观测</text>
	        <u-icon :name="isGroundObservationExtend==4?'arrow-down':'arrow-up'" color='#999' :size="40" class='card-head-icon'></u-icon>
	      </view>
	      <view class="u-type-primary-bg" slot="body">
	        <u-grid :col="4" :border='false' hover-class="hover-class" style='background-color: #fff;'>
	          <template v-for="(item,index) in groundObservation">
	            <u-grid-item :key="index" v-if='index < isGroundObservationExtend'>
	              <navigator class="u-text-center" hover-class="none" :url="item.url" navigateTo>
	                <u-icon :name="item.icon" :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
	                <view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
	              </navigator>
	            </u-grid-item>
	          </template>
	        </u-grid>
	      </view>
	    </u-card>
	    <u-card title="睿图产品" title-color='#888' :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
	      <view class="u-type-primary-bg" slot="body">
	        <u-grid :col="3" :border='false' hover-class="hover-class">
	          <u-grid-item v-for="(item,index) in ruituProducts" :key="index">
	            <navigator class="u-text-center" hover-class="none" :url="item.url" navigateTo>
	              <u-icon :name="item.icon" :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
	              <view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
	            </navigator>
	          </u-grid-item>
	        </u-grid>
	      </view>
	    </u-card>
	    <u-card title="" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
	      <view slot="head" @click='forecastProductsExtend'>
	        <text class="card-head-text">预报产品</text>
	        <u-icon :name="isForecastProductsExtend==4?'arrow-down':'arrow-up'" color='#999' :size="40" class='card-head-icon'></u-icon>
	      </view>
	      <view class="u-type-primary-bg" slot="body">
	        <u-cell-group :border="false">
	          <template v-for="(item,index) in forecastProducts">
	            <view :key="index" v-if='index < isForecastProductsExtend' @click="pdf">
	              <u-cell-item :border-bottom='index==forecastProducts.length-1?false:true' :title="item.name" :arrow='false' hover-class="hover-class">
	                <u-icon slot="icon" size="32" :name="item.icon" custom-prefix="custom-icon" :style="{color:item.color}"></u-icon>
	              </u-cell-item>
	            </view>
	          </template>
	        </u-cell-group>
	      </view>
	    </u-card>
	    <u-card title="" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
	      <view slot="head" @click='serviceProductsExtend'>
	        <text class="card-head-text">服务产品</text>
	        <u-icon :name="isServiceProductsExtend==4?'arrow-down':'arrow-up'" color='#999' :size="40" class='card-head-icon'></u-icon>
	      </view>
	      <view class="u-type-primary-bg" slot="body">
	        <u-cell-group :border="false">
	          <template v-for="(item,index) in serviceProducts">
	            <view :key="index" v-if='index < isServiceProductsExtend' @click="pdf">
	              <u-cell-item :border-bottom='index==serviceProducts.length-1?false:true' :title="item.name" :arrow='false' hover-class="hover-class">
	                <u-icon slot="icon" size="32" :name="item.icon" custom-prefix="custom-icon" :style="{color:item.color}"></u-icon>
	              </u-cell-item>
	            </view>
	          </template>
	        </u-cell-group>
	      </view>
	    </u-card>
	    <u-card title="全球数值" title-color='#888' :border="false" :head-border-bottom="false" :body-style="{'padding-top':'0px'}">
	      <view class="u-type-primary-bg" slot="body">
	        <u-grid :col="2" :border='false' hover-class="hover-class">
	          <u-grid-item v-for="(item,index) in globalValue" :key="index">
	            <navigator class="u-text-center" hover-class="none" :url="item.url" navigateTo>
	              <u-icon :name="item.icon" :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
	              <view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
	            </navigator>
	          </u-grid-item>
	        </u-grid>
	      </view>
	    </u-card>
	  </view>
	</view>
</template>

<script module="leafletMap" lang="renderjs">
	import L from '@/plugins/leaflet/leaflet'
	import '@/plugins/leaflet/leaflet.ChineseTmsProviders.js'
	export default {
		data() {
			return {
				map: null,
				layer: {}
			}
		},
		mounted() {
			this.handleCreateMap()
		},
		methods: {
			handleCreateMap() {
				this.map = L.map('lmap',{zoomControl:false}).setView([39.913943, 116.398419], 6);
				var amp = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
					maxZoom: 18,
					minZoom: 5
				})
				var geoqImage = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
					maxZoom: 18,
					minZoom: 5,
				})
				geoqImage.addTo(this.map)
			}
		}
	}
</script>

<script>
export default {
  data() {
    return {
      isHighObservationExtend: 4,
      highObservation: [
        {
          icon: 'leida',
          color: '#e54d42',
          name: '雷达回波',
          url: '/pages/highObservation/radarEcho/radarEcho'
        }, {
          icon: 'tankong',
          color: '#f37b1d',
          name: '探空',
          url: '/pages/highObservation/sounding/sounding'
        }, {
          icon: 'shandian',
          color: '#ff9900',
          name: '闪电',
          url: '/pages/highObservation/lightning/lightning'
        }, {
          icon: 'yuntu',
          color: '#8dc63f',
          name: '云图',
          url: '/pages/highObservation/cloudChart/cloudChart'
        }, {
          icon: 'yuntu',
          color: '#8dc63f',
          name: '云雷达',
          url: '/pages/highObservation/cloudRadar/cloudRadar'
        }, {
          icon: 'yuntu',
          color: '#8dc63f',
          name: '风廓线',
          url: '/pages/highObservation/fengkuoxian/fengkuoxian'
        }
      ],

      isGroundObservationExtend: 4,
      groundObservation: [
        {
          icon: 'shikuang',
          color: 'red',
          name: '天气实况',
          url: '/pages/groundObservation/weatherSituation/weatherSituation'
        }, {
          icon: 'turang',
          color: 'orange',
          name: '土壤',
          url: '/pages/groundObservation/weatherSituation/weatherSituation'
        }, {
          icon: 'daomianzhan',
          color: 'yellow',
          name: '道面站',
          url: '/pages/groundObservation/weatherSituation/weatherSituation'
        }, {
          icon: 'huanjing',
          color: 'olive',
          name: '环境',
          url: '/pages/groundObservation/weatherSituation/weatherSituation'
        }, {
          icon: 'huanjing',
          color: 'olive',
          name: '应急指挥车',
          url: '/pages/groundObservation/weatherSituation/weatherSituation'
        }
      ],

      ruituProducts: [
        {
          icon: 'in',
          color: 'red',
          name: 'RMAPS-IN',
          url: '/pages/ruituProducts/RMAPS-IN/RMAPS-IN'
        }, {
          icon: 'in',
          color: 'orange',
          name: 'RMAPS-NOW',
          url: '/pages/ruituProducts/RMAPS-NOW/RMAPS-NOW'
        }, {
          icon: 'in',
          color: 'yellow',
          name: 'RMAPS-ST-3H',
          url: '/pages/ruituProducts/RMAPS-ST-3H/RMAPS-ST-3H'
        }
      ],

      isForecastProductsExtend: 4,
      forecastProducts: [
        {
          icon: 'baogao',
          color: 'red',
          name: '天气公报'
        }, {
          icon: 'zhoubian',
          color: 'orange',
          name: '周边天气预报'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '未来240h小时预报'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '未来12h小时预报'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '未来12h小时预报'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '会商提示'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '延伸期10-30天（旬末）'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '短期预报'
        }, {
          icon: 'shijian',
          color: 'yellow',
          name: '中期预报'
        }
      ],

      isServiceProductsExtend: 4,
      serviceProducts: [
        {
          icon: 'baogao',
          color: 'red',
          name: '天气情况'
        }, {
          icon: 'baogao',
          color: 'orange',
          name: '天气快报'
        }, {
          icon: 'baogao',
          color: 'yellow',
          name: '重要天气报告'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '雨（雪）量实况表DOC'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '周报'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '旬报'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '森林火险专报'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '24小时北京地区空气污染'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '环境气象一周滚动预报'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '气象周刊'
        }, {
          icon: 'zhoubian',
          color: 'yellow',
          name: '延展期预报'
        }
      ],

      globalValue: [
        {
          icon: 'in',
          color: 'red',
          name: 'EC_thin',
          url: '/pages/globalValue/EC_thin/EC_thin'
        }, {
          icon: 'in',
          color: 'orange',
          name: 'Grapes预报',
          url: '/pages/globalValue/Grapes/Grapes'
        }
      ],
    };
  },
  onLoad() {

  },
  methods: {
    pdf() {
      uni.downloadFile({
        url: 'http://www.gov.cn/zhengce/pdfFile/2021_PDF.pdf',
        success: function (res) {
          var filePath = res.tempFilePath;
          uni.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功');
            }
          });
        }
      });
    },
    highObservationExtend() {
      this.isHighObservationExtend == 4 ? this.isHighObservationExtend = this.highObservation.length : this.isHighObservationExtend = 4
    },
    groundObservationExtend() {
      this.isGroundObservationExtend == 4 ? this.isGroundObservationExtend = this.groundObservation.length : this.isGroundObservationExtend = 4
    },
    forecastProductsExtend() {
      this.isForecastProductsExtend == 4 ? this.isForecastProductsExtend = this.forecastProducts.length : this.isForecastProductsExtend = 4
    },
    serviceProductsExtend() {
      this.isServiceProductsExtend == 4 ? this.isServiceProductsExtend = this.serviceProducts.length : this.isServiceProductsExtend = 4
    }
  }
}
</script>

<style lang="scss" scoped>
.map-box{
	position: relative;
}
.map{
	width:100%;
	height: 90vh;
	position:fixed;
	top:0px;
	z-index:10;
}
.content {
  background-color: #f8f8f8;
  position:absolute;
  top:85vh;
  z-index: 20;
  width:100%;
  padding-top: 140rpx;
}
.main-info{
	position: absolute;
	top: -150rpx;
	width:calc(100vw - 40rpx);
	background: linear-gradient(to right, #1e1f21 , #363d4b);
}
.card-head-icon {
  float: right;
}
.card-head-text {
  color: #888;
}
</style>

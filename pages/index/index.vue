<template>
	<view class="content">
		<image src="/static/bj.jpg" mode="widthFix" style="width: 100%;"></image>
		<u-card class="u-card-wrap" title="高空观测" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-grid :col="4" :border='false' hover-class="none">
					<u-grid-item v-for="(item,index) in highObservation" :key="index">
						<u-icon :name="item.icon"  :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
						<view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</u-card>
		<u-card class="u-card-wrap" title="地面观测" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-grid :col="4" :border='false' hover-class="none">
					<u-grid-item v-for="(item,index) in groundObservation" :key="index">
						<navigator class="content" hover-class="none" :url="item.url" navigateTo>
							<u-icon :name="item.icon" :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
							<view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
						</navigator>
					</u-grid-item>
				</u-grid>
			</view>
		</u-card>
		<u-card class="u-card-wrap" title="睿图产品" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-grid :col="3" :border='false' hover-class="none">
					<u-grid-item v-for="(item,index) in ruituProducts" :key="index">
						<u-icon :name="item.icon"  :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
						<view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</u-card>
		<u-card class="u-card-wrap" title="预报产品" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-cell-group :border="false">
					<u-cell-item v-for="(item,index) in forecastProducts" :key="index" :border-bottom='index==ruituProducts.length?false:true' :title="item.name" :arrow='false' hover-class="none">
						<u-icon slot="icon" size="32" :name="item.icon" custom-prefix="custom-icon" :style="{color:item.color}"></u-icon>
					</u-cell-item>
				</u-cell-group>
			</view>
		</u-card>
		<u-card class="u-card-wrap" title="服务产品" :border="false" :head-border-bottom="false" margin="30rpx 30rpx 0rpx 30rpx" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-cell-group :border="false">
					<u-cell-item v-for="(item,index) in serviceProducts" :key="index" :border-bottom='index==ruituProducts.length?false:true' :title="item.name" :arrow='false' hover-class="none">
						<u-icon slot="icon" size="32" :name="item.icon" custom-prefix="custom-icon" :style="{color:item.color}"></u-icon>
					</u-cell-item>
				</u-cell-group>
			</view>
		</u-card>
		<u-card class="u-card-wrap" title="全球数值" :border="false" :head-border-bottom="false" :body-style="{'padding-top':'0px'}">
			<view class="u-type-primary-bg" slot="body">
				<u-grid :col="2" :border='false' hover-class="none">
					<u-grid-item v-for="(item,index) in globalValue" :key="index">
						<u-icon :name="item.icon"  :color='item.color' custom-prefix="custom-icon" :size="40"></u-icon>
						<view class="grid-text u-margin-top-12 u-font-12">{{item.name}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				highObservation: [
					{
						icon: 'leida',
						color: '#e54d42',
						name: '雷达回波'
					}, {
						icon: 'tankong',
						color: '#f37b1d',
						name: '探空'
					}, {
						icon: 'shandian',
						color: '#ff9900',
						name: '闪电'
					}, {
						icon: 'yuntu',
						color: '#8dc63f',
						name: '云图'
					}
				],
				groundObservation: [
					{
						icon: 'shikuang',
						color: 'red',
						name: '天气实况',
						url:'/pages/groundObservation/weatherSituation/index'
					}, {
						icon: 'turang',
						color: 'orange',
						name: '土壤',
						url:'/pages/groundObservation/weatherSituation/index'
					}, {
						icon: 'daomianzhan',
						color: 'yellow',
						name: '道面站',
						url:'/pages/groundObservation/weatherSituation/index'
					}, {
						icon: 'huanjing',
						color: 'olive',
						name: '环境',
						url:'/pages/groundObservation/weatherSituation/index'
					}
				],
				ruituProducts: [
					{
						icon: 'in',
						color: 'red',
						name: 'RMAPS-IN'
					}, {
						icon: 'in',
						color: 'orange',
						name: 'RMAPS-NOW'
					}, {
						icon: 'in',
						color: 'yellow',
						name: 'RMAPS-ST-3H'
					}
				],
				
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
					}
				],
				
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
					}
				],
				
				globalValue: [
					{
						icon: 'in',
						color: 'red',
						name: 'EC_thin'
					}, {
						icon: 'in',
						color: 'orange',
						name: 'Grapes预报'
					}
				],
			};
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		background-color: #F8F8F8;
	}
	
	.u-card-wrap { 
		// background-color: $u-bg-color;
	}
</style>

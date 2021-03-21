<template>
	<view class="content">
		<u-navbar back-text="返回" title='云雷达' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
		<view class="content-body">
			<view-img :src="imgSrc" :width="'calc(100vw - 40rpx)'" :height="'calc(100vh - 520rpx)'"></view-img>   
			<view class="u-padding-12 popup-tools">
				<type-selection :list='list' @value='listValue' key='list'></type-selection>
				<u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20"/>
				<type-selection :list='type' @value='typeValue' key='type'></type-selection>
				<u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20"/>
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
				imgSrc:'/static/data.png',
				background:{
					backgroundColor: '#a0cfff'
				},
				list: [
					{
						name: '观象台',
					}, 
					{
						name: '海淀',
					}, 
					{
						name: '延庆',
					}, 
					{
						name: '平谷',
					}, 
					{
						name: '怀柔',
					}, 
					{
						name: '上甸子',
					}, 
					{
						name: '霞云岭',
					}
				],
				type: [
					{
						name: '反射率',
					}, 
					{
						name: '速度',
					}, 
					{
						name: '谱宽',
					}, 
					{
						name: '信噪比',
					}, 
					{
						name: '液态水含量',
					}
				],
			};
		},
		methods: {
			listValue(e){
				console.log(e.id+'-'+e.name)
			},
			typeValue(e){
				console.log(e.id+'-'+e.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	background-color: #F8F8F8;
	height: 100vh;
}
.content-body{
	background-color: #ffffff;
	margin: 20rpx;
	border-radius: 20rpx;
	padding: 20rpx 0rpx;
	font-size: 28rpx;
	height: calc(100vh - 120rpx);
}
.popup-tools{
	background-color: #f8f8f8;
	border-radius: 12px;
	margin: 20rpx;
	position:absolute;
	bottom:20rpx;
	width: calc(100% - 80rpx);
}
</style>

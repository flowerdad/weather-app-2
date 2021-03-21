<template>
	<view class="content">
		<u-navbar back-text="返回" title='RMAPS-IN' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
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
						name: '逐小时降水预报',
					}, 
					{
						name: '逐10分钟实况分析（QPE）',
					}
				],
				type: [
					{
						name: '北京',
					}, 
					{
						name: '京津冀',
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

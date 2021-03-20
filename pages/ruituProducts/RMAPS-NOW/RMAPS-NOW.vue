<template>
	<view class="content">
		<u-navbar back-text="返回" title='RMAPS-NOW' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
		<view class="content">
			<view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				 swiperWidth="750" bg-color='#a0cfff' :border-bottom='true' inactive-color='#ffffff' bar-width='60'></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(item,index) in analysisList" :key='index'>
								<u-tag :text="item.label" mode="dark" shape="circleRight" :style="{'background-color': item.color}"/>
								<u-row gutter="40" class="u-margin-top-30" align='top'>
									<u-col span="4" v-for="(children,index) in item.children" :key='index' @click='popup'>
										<view class="u-padding-12 u-border shadow-box">
											<u-image width='100%' height='150rpx' :src="children.img"></u-image>
										</view>
										<view class='u-font-12 u-type-info-dark u-margin-top-12'>{{children.label}}</view>
									</u-col>
								</u-row>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(item,index) in predictionList" :key='index'>
								<u-tag :text="item.label" mode="dark" shape="circleRight" :style="{'background-color': item.color}"/>
								<u-row gutter="40" class="u-margin-top-30" align='top'>
									<u-col span="4" v-for="(children,index) in item.children" :key='index' @change='popup'>
										<view class="u-padding-12 u-border shadow-box">
											<u-image width='100%' height='150rpx' :src="children.img"></u-image>
										</view>
										<view class='u-font-12 u-type-info-dark u-margin-top-12'>{{children.label}}</view>
									</u-col>
								</u-row>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<u-popup v-model="popupShow" mode="center" border-radius="14" width="90%" height="60%" :closeable='true'>
			<p class='u-text-center u-type-info-dark u-padding-top-28'>组合反射率因子和0.15km风场</p>
			<view>
				<view v-if='imageInfo !== ""'>  
				    <view-img v-if='popupShow' :baseInfo="imageInfo"></view-img>  
				</view>  
			</view>
			<view class="popup-tool-time">
				<u-row gutter="12">
					<u-col span="2">
						<view class="u-text-center">
							<u-icon name="play-circle" size='50' color="#c0c4cc"></u-icon>
						</view>
					</u-col>
					<u-col span="10">
						<u-tabs :list="subsectionList" :gutter='20' :show-bar='false' :current="subsectionListCurrent" @change="subsectionListChange"></u-tabs>
					</u-col>
				</u-row>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import viewImg from "../../../components/viewImg/viewImg.vue"; 
	// import uni from "common/js/uni.js"; 
	export default {
		components: {  
		     viewImg  
		},
		data() {
			return {
				imageInfo:'',
				subsectionListCurrent:0,
				subsectionList:[
					{
						name: '20:10'
					}, {
						name: '20:20'
					}, {
						name: '20:30'
					}, {
						name: '20:40'
					}, {
						name: '20:50'
					}, {
						name: '20:20'
					}, {
						name: '20:30'
					}, {
						name: '20:40'
					}, {
						name: '20:50'
					}, {
						name: '20:20'
					}, {
						name: '20:30'
					}, {
						name: '20:40'
					}, {
						name: '20:50'
					}, {
						name: '20:20'
					}, {
						name: '20:30'
					}, {
						name: '20:40'
					}, {
						name: '20:50'
					}
				],
				background:{
					backgroundColor: '#a0cfff'
				},
				list: [
					{
						name: '分析'
					}, {
						name: '预报'
					},
				],
				analysisList:[
					{
						label:'降水场',
						color:'rgb(132,190,254)',
						children:[
							{
								value:0,
								label:'组合反射率因子和0.15km风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'温度场',
						color:'rgb(240,199,81)',
						children:[
							{
								value:0,
								label:'0.15km扰动温度和风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'比湿场',
						color:'rgb(0,223,189)',
						children:[
							{
								value:0,
								label:'0.15km比湿和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km相对湿度和风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'风场',
						color:'rgb(135,225,130)',
						children:[
							{
								value:0,
								label:'0.15km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'1.95km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'4.05km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'1.95km垂直速度和0.15km风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km辐合辐散场和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km对流有效位能和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km对流抑制能量和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0-3.15km垂直切变',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0-6.15km垂直切变',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0-6.15km垂直速度累积和0.15km风场',
								img:'/static/data.png',
							}
						]
					}
				],
				predictionList:[
					{
						label:'降水场',
						color:'rgb(132,190,254)',
						children:[
							{
								value:0,
								label:'组合反射率因子_数值预报和0.15km风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'组合反射率因子_分析外推和0.15km风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'累积降水量和0.15km风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'温度场',
						color:'rgb(240,199,81)',
						children:[
							{
								value:0,
								label:'0.15km扰动温度和风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'比湿场',
						color:'rgb(0,223,189)',
						children:[
							{
								value:0,
								label:'0.15km比湿和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km相对湿度和风场',
								img:'/static/data.png',
							}
						]
					},
					{
						label:'风场',
						color:'rgb(135,225,130)',
						children:[
							{
								value:0,
								label:'0.15km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'1.95km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'4.05km全风速和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'1.95km垂直速度和0.15km风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0.15km辐合辐散场和风场',
								img:'/static/data.png',
							},
							{
								value:0,
								label:'0-6.15km垂直速度累积和0.15km风场',
								img:'/static/data.png'
							}
						]
					}
				],
				current: 0,
				swiperCurrent: 0,
				popupShow:false
			};
		},
		methods: {
			subsectionListChange(index){
				this.subsectionListCurrent=index;
			},
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				current!=0 ? this.mapShow=false : this.mapShow=true;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			popup(){
				uni.getImageInfo({  
					src: '/static/data.png',  
					success: (image)=> {
						this.imageInfo=image
						this.popupShow=true;
					}
				});
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
.page-box{
	width:100%;
}
.order {
	background-color: #ffffff;
	margin: 20rpx;
	border-radius: 20rpx;
	padding: 20rpx 0rpx;
	font-size: 28rpx;
}
.swiper-box {
	flex: 1;
}
.shadow-box{
	box-shadow: 1px 1px 5px #F8F8F8;
}
.popup-tool-time{
	width: 100%;
	position:absolute;
	bottom:0px;
}
</style>

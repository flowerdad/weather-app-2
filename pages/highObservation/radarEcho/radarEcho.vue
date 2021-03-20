<template>
	<view class="content">
		<u-navbar back-text="返回" title='雷达回波' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
		<u-tabs :list="list" :gutter='20' :show-bar='false' :current="listCurrent" @change="listChange"></u-tabs>
		<view class="page-box">
			<u-row gutter="40" align='top'>
				<u-col span="4" class="u-margin-top-20" v-for="(item,index) in products" :key='index' @click='popup(item)'>
					<view class="page-box">
						<view class="u-padding-12 u-border shadow-box" style="background-color: #fff;">
							<u-image :src="item.img" width='100%' height='150rpx'></u-image>
						</view>
						<view class='u-font-12 u-type-info-dark u-margin-top-12 u-text-center'>{{item.name}}</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<u-popup v-model="popupShow" mode="center" border-radius="14" width="90%" height="80%" :closeable='true'>
			<view>
				<view v-if='imageInfo !== ""'>  
				    <view-img v-if="popupShow" :baseInfo="imageInfo"></view-img>  
				</view>  
			</view>
			<view class="u-padding-12 popup-tools">
				<p class='u-text-center u-type-info-dark u-padding-20'>{{popupTitle}}</p>
				<u-line color="#dadada" class="u-margin-top-10 u-margin-bottom-20"/>
				<view class="popup-tool-time">
					<u-row gutter="12">
						<u-col span="2">
							<view class="u-text-center">
								<u-icon name="grid" size='40' color="#c0c4cc"></u-icon>
							</view>
						</u-col>
						<u-col span="10">
							<u-tabs v-if="type.length != 0" :list="type" :gutter='20' :height='60' :show-bar='false' :active-item-style="tabsStyle" bg-color="#f8f8f8" :current="typeCurrent" @change="typeChange"></u-tabs>
							<view v-else class="u-light-color">无选项</view>
						</u-col>
					</u-row>
				</view>
				<u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20"/>
				<view class="popup-tool-time">
					<u-row gutter="12">
						<u-col span="2">
							<view class="u-text-center">
								<u-icon name="checkbox-mark" size='40' color="#c0c4cc"></u-icon>
							</view>
						</u-col>
						<u-col span="10">
							<u-tabs v-if="elevation.length != 0" :list="elevation" :gutter='20' :height='60' :show-bar='false' :active-item-style="tabsStyle" bg-color="#f8f8f8" :current="elevationCurrent" @change="elevationChange"></u-tabs>
							<view v-else class="u-light-color">无选项</view>
						</u-col>
					</u-row>
				</view>
				<u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20"/>
				<view class="popup-tool-time">
					<u-row gutter="12">
						<u-col span="2">
							<view class="u-text-center">
								<u-icon name="map" size='40' color="#c0c4cc"></u-icon>
							</view>
						</u-col>
						<u-col span="10">
							<u-tabs v-if="region.length != 0" :list="region" :gutter='20' :height='60' :show-bar='false' :active-item-style="tabsStyle" bg-color="#f8f8f8" :current="regionCurrent" @change="regionChange"></u-tabs>
							<view v-else class="u-light-color">无选项</view>
						</u-col>
					</u-row>
				</view>
				<u-line color="#dadada" class="u-margin-top-20 u-margin-bottom-20"/>
				<view class="popup-tool-time">
					<u-row gutter="12">
						<u-col span="2">
							<view class="u-text-center">
								<u-icon name="play-circle-fill" size='40' color="#f17675"></u-icon>
							</view>
						</u-col>
						<u-col span="10">
							<u-tabs v-if="timeList.length != 0" :list="timeList" :gutter='20' :height='60' :show-bar='false' :active-item-style="tabsStyle" bg-color="#f8f8f8" :current="timeCurrent" @change="timeChange"></u-tabs>
							<view v-else class="u-light-color">无选项</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import viewImg from "../../../components/viewImg/viewImg.vue"; 
	export default {
		components: {  
		     viewImg  
		},
		data() {
			let region_huabei={id:'',name:'华北'}
			let region_quanguo={id:'',name:'全国'}
			let region_beijing={id:'',name:'北京'}
			let elevation_0_5={id:'',name:'0.5°'}
			let elevation_1_5={id:'',name:'1.5°'}
			let elevation_2_4={id:'',name:'2.4°'}
			let elevation_3_4={id:'',name:'3.4°'}
			let elevation_4_3={id:'',name:'4.3°'}
			let elevation_5_3={id:'',name:'5.3°'}
			let elevation_6_0={id:'',name:'6.0°'}
			let elevation_9_9={id:'',name:'9.9°'}
			let elevation_230KM={id:'',name:'230KM'}
			let elevation_460KM={id:'',name:'460KM'}
			let products_currency=[
				{
					id:'0',
					name:'PPI强度',
					img:'/static/data.png',
					region:[],
					type:[
						{
							id:0,
							name:'反射率',
							elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0]
						},
						{
							id:1,
							name:'速度',
							elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0]
						},
						{
							id:2,
							name:'谱宽',
							elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0]
						},
						{
							id:3,
							name:'差分反射率',
							elevation:[elevation_1_5,elevation_2_4,elevation_3_4]
						},
						{
							id:4,
							name:'相关系数',
							elevation:[elevation_1_5,elevation_2_4,elevation_3_4]
						},
						{
							id:5,
							name:'差分传播相移',
							elevation:[elevation_1_5,elevation_2_4,elevation_3_4]
						},
						{
							id:6,
							name:'比差分传播相移',
							elevation:[elevation_1_5,elevation_2_4,elevation_3_4]
						}
					],
					elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0],
				},
				{
					id:'0',
					name:'CAPPI',
					img:'/static/data.png',
					region:[],
					type:[],
					elevation:[],
				},
				{
					id:'0',
					name:'MAX',
					img:'/static/data.png',
					region:[],
					type:[],
					elevation:[],
				},
				{
					id:'0',
					name:'例子识别',
					img:'/static/data.png',
					region:[],
					type:[],
					elevation:[elevation_1_5,elevation_2_4,elevation_3_4],
				},
				{
					id:'0',
					name:'定量降水',
					img:'/static/data.png',
					region:[],
					type:[],
					elevation:[],
				}
			]
			return {
				imageInfo:'',
				background:{
					backgroundColor: '#a0cfff'
				},
				listCurrent:0,
				list: [
					{
						name: '拼图',
						products:[
							{	
								id:'0',
								name:'组合反射率',
								img:'/static/data.png',
								region:[region_huabei,region_quanguo],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'基本反射率拼图',
								img:'/static/data.png',
								region:[region_huabei,region_quanguo],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'X波段拼图',
								img:'/static/data.png',
								region:[region_beijing],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'一小时累计降水拼图',
								img:'/static/data.png',
								region:[region_huabei,region_quanguo],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'垂直累计液态水量含量',
								img:'/static/data.png',
								region:[region_huabei,region_quanguo],
								type:[],
								elevation:[],
							}
						]
					}, 
					{
						name: '南郊',
						products:[
							{	
								id:'0',
								name:'反射率（半径23KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4],
							},
							{
								id:'0',
								name:'反射率（半径460KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'速度（半径230KM）',
								img:'/static/data.png',
								// region**
								region:[region_beijing],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'速度（半径115KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4],
							},
							{
								id:'0',
								name:'组合反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_230KM,elevation_460KM],
							},
							{
								id:'0',
								name:'谱宽（230KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5],
							},
							{
								id:'0',
								name:'回波顶高',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'VAD风廓线',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'风暴相对径向速度',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'垂直积分液态水含量',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'风暴追踪信息',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'中尺度气旋',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'反射率登高面位置',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'1小时降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'3小时降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'风暴总降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							}
						]
					},
					{
						name: '车道沟',
						products:[
							{
								id:'0',
								name:'反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_5_3],
							},
							{
								id:'0',
								name:'速度',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_5_3],
							},
							{
								id:'0',
								name:'谱宽',
								img:'/static/data.png',
								// region**
								region:[region_beijing],
								type:[],
								elevation:[],
							}
						]
					},
					{
						name: '车道沟RHI',
						products:[
							{
								id:'0',
								name:'强度',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'速度',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'谱宽',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'差分反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'差分传播相移',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'相关系数',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'相态识别',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
						]
					},
					{
						name: '房山',
						products:products_currency
					},
					{
						name: '顺义',
						products:products_currency
					},
					{
						name: '通州',
						products:products_currency
					},
					{
						name: '昌平',
						products:products_currency
					},
					{
						name: '密云',
						products:products_currency
					},
					{
						name: '怀来',
						products:products_currency
					},
					{
						name: '门头沟',
						products:products_currency
					},
					{
						name: '涞源',
						products:products_currency
					},
					{
						name: '海坨山',
						products:[
							{
								id:'0',
								name:'反射率（半径230KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0],
							},
							{
								id:'0',
								name:'反射率（半径460KM）',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4],
							},
							{
								id:'0',
								name:'速度',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4],
							},
							{
								id:'0',
								name:'波度谱宽',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5],
							},
							{
								id:'0',
								name:'混合扫描反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'组合反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_230KM,elevation_460KM],
							},
							{
								id:'0',
								name:'回波顶高',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'VAD风廓线',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'弱回波区',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'垂直累积液态水含量',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'风暴追踪信息',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'冰雹指数',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'中尺度气旋',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'龙卷涡旋特征',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'1小时降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'3小时降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'风暴总降水',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'组合切变',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'反射率等高面位置',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[],
							},
							{
								id:'0',
								name:'差分反射率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0,elevation_9_9],
							},
							{
								id:'0',
								name:'协相关系数',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0,elevation_9_9],
							},
							{
								id:'0',
								name:'差分相移率',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0,elevation_9_9],
							},
							{
								id:'0',
								name:'例子相态分类',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0,elevation_9_9],
							},
							{
								id:'0',
								name:'融化层',
								img:'/static/data.png',
								region:[],
								type:[],
								elevation:[elevation_0_5,elevation_1_5,elevation_2_4,elevation_3_4,elevation_4_3,elevation_6_0,elevation_9_9],
							}
						]
					}
				],
				timeCurrent:0,
				timeList:[
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
				productsCurrent:0,
				products:[],
				typeCurrent:0,
				type:[],
				regionCurrent:0,
				region:[],
				elevationCurrent:0,
				elevation:[],
				popupTitle:'',
				popupShow:false,
				tabsStyle:{
					'color': '#f1f1f1',
					'background-color': '#6fb3ff',
					'border-radius': '5px'
				}
			};
		},
		methods: {
			listChange(index){
				this.listCurrent=index;
				this.products=this.list[index].products
			},
			timeChange(index){
				this.timeCurrent=index;
			},
			typeChange(index){
				this.typeCurrent=index
				this.type.forEach(item=>{
					if(index==item.id){
						this.elevation=item.elevation;
					}
				})
			},
			elevationChange(index){
				this.elevationCurrent=index
			},
			regionChange(index){
				this.regionCurrent=index
			},
			popup(item){
				console.log(item.prototype)
				this.region=item.region;
				this.type=item.type;
				this.elevation=item.elevation;
				uni.getImageInfo({  
					src: '/static/data.png',  
					success: (image)=> {
						this.imageInfo=image
						this.popupShow=true;
					}
				});
			}
		},
		mounted(){
			this.products=this.list[0].products
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
.swiper-box {
	flex: 1;
}
.shadow-box{
	box-shadow: 1px 1px 5px #F8F8F8;
}
.popup-tools{
	background-color: #f8f8f8;
	border-radius: 12px;
	margin: 20rpx;
	position:absolute;
	bottom:0px;
	width: calc(100% - 40rpx);
}

.popup-tool-time{
	
}
</style>

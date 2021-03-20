<template>
	<view class="content">
		<u-navbar back-text="返回" title='实况' :isBack="true" :background="background" title-color="#ffffff" back-icon-color='#ffffff' :back-text-style="{color:'#ffffff'}" :border-bottom='false'></u-navbar>
		<view class="content">
			<view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				 swiperWidth="750" bg-color='#a0cfff' :border-bottom='true' inactive-color='#ffffff' bar-width='60'></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y >
						<map style="width:100%;height: 100vh;" v-if="mapShow"></map>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order">
								<u-tabs class="" :list="itemTab" :is-scroll="false" :current="itemTabCurrent" @change="itemTabChange"></u-tabs>
								<!-- <u-tabs :list="childrenTab" :is-scroll="false" :current="childrenTabCurrent" @change="childrenTabChange"></u-tabs> -->
								<u-row gutter="20" class="u-margin-top-30">
									<u-col span="8">
										<u-input v-model="timeValue" type="select" :border="true" @click="timeShow = true" />
										<u-picker v-model="timeShow" mode="time" :default-time="timeValue" :params="timeParams" @confirm='timeConfirm' @cancel="timeCancel" :minuteInterval="10"></u-picker>
									</u-col>
									<u-col span="2" text-align="center">
										<u-icon name="rewind-left" size='50' color="#c0c4cc" @click='timeSubtract'></u-icon>
									</u-col>
									<u-col span="2" text-align="center">
										<u-icon name="rewind-right" size='50' color="#c0c4cc" @click="timeAdd"></u-icon>
									</u-col>
								</u-row>
								<u-row gutter="20" class="u-margin-top-30">
									<u-col span="12">
										<u-input v-model="regioName" type="select" :border="true" @click="regioShow = true" />
										<u-select v-model="regioShow" :default-value='[0,0]' mode="mutil-column-auto" :list="regionList" @confirm="regioConfirm" ></u-select>
									</u-col>
								</u-row>
							</view>
							<view class="order">
								<u-table>
									<u-tr class="u-tr">
										<u-th class="u-th">区县</u-th>
										<u-th class="u-th" width="200rpx">站名</u-th>
										<u-th class="u-th">温度</u-th>
										<u-th class="u-th">高温</u-th>
										<u-th class="u-th">低温</u-th>
										<u-th class="u-th">单站整点</u-th>
									</u-tr>
									<u-tr class="u-tr" v-for="item in 20" :key='item'>
										<u-td class="u-td">东城</u-td>
										<u-td class="u-td" width="200rpx">天安门天安门</u-td>
										<u-td class="u-td">1.2</u-td>
										<u-td class="u-td">1.2</u-td>
										<u-td class="u-td">1.2</u-td>
										<u-td class="u-td">1.2</u-td>
									</u-tr>
								</u-table>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order">
								<u-tabs class="" :list="itemTab" :is-scroll="false" :current="itemTabCurrent" @change="itemTabChange"></u-tabs>
								<!-- <u-tabs :list="childrenTab" :is-scroll="false" :current="childrenTabCurrent" @change="childrenTabChange"></u-tabs> -->
								<u-row gutter="20" class="u-margin-top-30">
									<u-col span="8">
										<u-input v-model="timeValue" type="select" :border="true" @click="timeShow = true" />
										<u-picker v-model="timeShow" mode="time" :default-time="timeValue" :params="timeParams" @confirm='timeConfirm' @cancel="timeCancel" :minuteInterval="10"></u-picker>
									</u-col>
									<u-col span="2" text-align="center">
										<u-icon name="rewind-left" size='50' color="#c0c4cc" @click='timeSubtract'></u-icon>
									</u-col>
									<u-col span="2" text-align="center">
										<u-icon name="rewind-right" size='50' color="#c0c4cc" @click="timeAdd"></u-icon>
									</u-col>
								</u-row>
								<u-row gutter="20" class="u-margin-top-30">
									<u-col span="12">
										<u-input v-model="regioName" type="select" :border="true" @click="regioShow = true" />
										<u-select v-model="regioShow" :default-value='[0,1]' mode="mutil-column-auto" :list="regionList" @confirm="regioConfirm"></u-select>
									</u-col>
								</u-row>
							</view>
							<view class="order">
								<u-image width="100%" src="/static/data.png" mode="widthFix"></u-image>
								<view class='u-font-12 u-type-info-dark'>
									<p class='u-margin-top-12'>全市共有591个自动站，其中可测气温自动站共有549个。截至目前，18:55数据以及达549站。</p>
									<p class='u-margin-top-12'>2021-3-19 02:35 至 2021-3-19 02:35。</p>
									<p class='u-margin-top-12'>最高温度：17.6℃，站名：【通州】 满庄</p>
									<p class='u-margin-top-12'>最低温度：11.6℃，站名：【大兴】 机场</p>
									<p class='u-margin-top-12'>大于等于35℃的站有：0个</p>
									<p class='u-margin-top-12'>大于等于37℃的站有：0个</p>
									<p class='u-margin-top-12'>大于等于40℃的站有：0个</p>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	
	import uni from "common/js/uni.js"; 
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#a0cfff'
				},
				list: [{
					name: 'GIS'
				}, {
					name: '表格'
				}, {
					name: '图文'
				}],
				itemTab: [{
					name: '降水'
				}, {
					name: '风'
				}, {
					name: '温度'
				}, {
					name: '能见度'
				}],
				childrenTab: [{
					name: '当前'
				}, {
					name: '最高'
				}, {
					name: '最低'
				}],
				regionList: [{
					value: 0,
					label: '北京市',
					children: [	
						{
							value: 0,
							label: '东城区'
						},
						{
							value: 1,
							label: '西城区'
						}
					]
				},{
					value: 1,
					label: '天津市',
					children: [
						{
							value: 0,
							label: '河东区'
						},
						{
							value: 1,
							label: '河西区'
						}
					]
				}],
				current: 0,
				swiperCurrent: 0,
				itemTabCurrent:0,
				childrenTabCurrent:0,
				regioName:'北京市-东城区',
				defaultTime:'',
				timeValue:'',
				timeParams: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false,
					timestamp: true,
				},
				mapShow:true,
				timeShow:false,
				regioShow:false
			};
		},
		methods: {
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
			itemTabChange(index){
				console.log(index)
				this.itemTabCurrent=index;
			},
			childrenTabChange(index){
				this.childrenTabCurrent=index
			},
			timeSubtract(){
				this.timeValue=uni.uni.timeFormat(uni.uni.timeSubtract(this.timeValue, 'minutes', 10), "YYYY-MM-DD HH:mm") 
			},
			timeAdd(){
				this.timeValue=uni.uni.timeFormat(uni.uni.timeAdd(this.timeValue, 'minutes', 10), "YYYY-MM-DD HH:mm") 
			},
			timeConfirm(e){
				this.timeValue=this.$u.timeFormat(e.timestamp, 'yyyy-mm-dd hh:MM')
			},
			timeCancel(e){
				console.log(e)
			},
			regioConfirm(e){
				console.log(e)
				this.regioName=''
				let regioValue=''
				e.map((val, index) => {
					this.regioName += this.regioName == '' ? val.label : '-' + val.label;
					regioValue += regioValue == '' ? val.value : '-' + val.value;
				})
				console.log(regioValue)
			},
		},
		mounted(){
			this.timeValue = uni.uni.timeFormat(uni.uni.getMinuteTime(), "YYYY-MM-DD HH:mm")
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
.map{
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 1
}
.operation{
	position: absolute;
	z-index: 10;
	width: 100%;
}
.page-box{
	width:100%;
}
.order {
	background-color: #ffffff;
	margin: 20rpx;
	border-radius: 20rpx;
	// box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
}
.swiper-box {
	flex: 1;
}
</style>

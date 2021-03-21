<template>  
    <view>
    	<u-row gutter="0">
    		<u-col span="10">
    			<u-tabs v-if="list.length != 0" :list="list" :gutter='20' :height='60' :show-bar='false' :active-item-style="tabsStyle" bg-color="#f8f8f8" :current="current" @change="change"></u-tabs>
    			<view v-else class="u-light-color">无选项</view>
    		</u-col>
			<u-col span="2" @click='popup'>
				<view class="u-text-center" >
					<u-icon :name="icon" size='40' :color="iconColor" v-if='list.length>0'></u-icon>
				</view>
			</u-col>
    	</u-row>
		<u-popup v-model="show" mode="bottom" border-radius="14" height="50%" :closeable='popupMini?false:true'>
			<p class='u-text-center u-type-info-dark u-padding-30'>快速选择</p>
			<view :class="popupMini?'padding-mini':''">
				<u-tag class="u-margin-15" :text="item.name" :mode="current==index?'dark':'plain'" v-for="(item,index) in list" :key='index' @click="tag(index)"/>
			</view>
		</u-popup>
    </view> 
</template>

<script> 
    export default {  
        props: { 
			list:{  
                type: Array,  
                default: (e)=> {
                    return []
                },
            },
			tabsStyle:{
				type: Object,  
				default: (e)=> {
				    return {
					'color': '#f1f1f1',
					'background-color': '#6fb3ff',
					'border-radius': '5px'
					} 
				}  
			},
			icon:{
				type:String,
				default:'grid'
			},
			iconColor:{
				type:String,
				default:'#55aaff'
			},
			popupMini:{
				type:Boolean,
				default:false
			}
        },
        data() {  
            return {  
				current:0,
				show:false
            }  
        },  
		watch:{
			current(){
				this.list[this.current].index=this.current;
				this.$emit('value',this.list[this.current])
			}
		},
        methods: {
			change(index){
				this.current=index;
			},
			popup(){
				if(this.list.length>0){
					this.show=true;
				}
			},
			tag(index){
				this.current=index;
				this.show=false;
			}
        }
    }  
</script>  

<style lang="scss" scoped>
.padding-mini{
	padding:0rpx 50rpx 10vh 50rpx;
}
</style>
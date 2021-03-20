<template>  
    <view class='viewImg'>  
        <!-- :style="{height:screenH+'upx'}" -->  
        <movable-area scale-area>  
            <movable-view :style="{width:baseInfo.width+'upx',height:baseInfo.height+'upx'}" direction="all" @scale="onScale" :out-of-bounds='true'
             @change="onChange" scale :scale-min="minScale" :scale-max="5" :scale-value="scale" >  
                <image :src="baseInfo.path" :style="{width:baseInfo.width+'upx',height:baseInfo.height+'upx'}"></image>  
            </movable-view>  
        </movable-area>  
    </view>  
</template>

<script>  
    export default {  
        props: {  
            baseInfo: {  
                type: Object,  
                default: function(e) {  
                    return {}  
                }  
            }  
        },  
        data() {  
            return {  
                minScale: 0.1,  
                x: 0,  
                y: 0,  
                scale: 1,// 定义缩放倍数  
                old: {  
                    x: 0,  
                    y: 0,  
                    scale: 2  
                },  

            }  
        },  
        methods: {  
			getImgInfo(){
				uni.getImageInfo({
					src: '/static/data.png',  
					success: (image)=> {
						this.imageInfo=image
						this.popupShow=true;
					}
				});
			},
			getElInfo() {
				this.$u.getRect('.viewImg').then(res => {
					console.log(res);
					console.log(this.baseInfo)
				})
			},
            onChange: function(e) {  
				// console.log(e)  
				this.old.x = e.detail.x  
				this.old.y = e.detail.y  
			},  
			onScale: function(e) {  
				// console.log(e)  
				this.old.scale = e.detail.scale;  
				this.x = this.old.x  
				this.y = this.old.y  
				this.$nextTick(function() {  
					this.x = 0  
					this.y = 0  
				})  
			}, 
        },
		mounted(){
			this.$nextTick(()=>{
				this.getElInfo();
			})
		}
    }  
</script>  

<style lang="scss" scoped>  
    movable-view {  
        display: flex;  
        align-items: center;  
        justify-content: center;  
        // top:140upx;  
        // width:100vw;  
        // height:100vh;  
        // background-color: #007AFF;  
        color: #fff;  
    }  

    movable-area {  
        height: 50vh;  
        width: 90vw;  
        background-color: #fff;  
        overflow: hidden;  
    }  
</style>  
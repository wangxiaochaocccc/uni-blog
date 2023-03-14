<template>
	<view class="my-tabs-container">
		<view class="tabs-box">
			<scroll-view class="scroll-view" scroll-x="true"  scroll-with-animation :scroll-left="scrollLeft">
				<view class="tabs-item">
					<block v-for="(item,index) in tabData" :key="item.id">
						<view :id="'_tab_'+index" class="item" @click="handleClickTabs(index)" :class="{activeTab:activeIndex===index }">{{item.label}}</view>
					</block>
				</view>
				<view class="underline" :style="{
              transform: 'translateX(' + slider.left + 'px)',
              width: defaultConfig.underlineDefaultWidth + 'px',
              height: defaultConfig.underlineDefaultHeight + 'px',
              backgroundColor: defaultConfig.underlineDefaultColor
            }"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props: {
			config:{
				type:Object,
				default:()=>{
					return {}
				}
			},
			tabData: {
				type:Array,
				default:()=>{
					return []
				}
			},
			chooseIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				activeIndex:-1, //当前激活项
				slider: {
					left:0
				},
				tabList:[], //本地维护一个tabs数据对象
				defaultConfig: {
					underlineDefaultWidth:24,
					underlineDefaultHeight:2,
					underlineDefaultColor:'#fa942a'
				},
				scrollLeft:0, //scrollview滚动距离
			};
		},
		methods:{
			handleClickTabs(index){
				this.activeIndex = index
				// 滑块距离
				this.tabToActived()
			},
			updateTabsUnderline(){
				const data = this.tabList
				if(!data.length) return
				// 获取dom固定写法
				const query = uni.createSelectorQuery().in(this)
				
				data.forEach((item,index)=>{
					query
					.select('#_tab_'+index)
					.boundingClientRect((res)=>{
						item.slider = {
							left:res.left + (res.width-24)/2
						}
						
						// 立即执行一次
						if(index === data.length-1) {
							this.tabToActived()
						}
					})
					.exec()
					
				})
			},
			tabToActived(){
				const index = this.activeIndex
				this.slider = {
					left:this.tabList[index].slider.left
				}
				// scrollview滚动
				this.scrollLeft = this.activeIndex * this.defaultConfig.underlineDefaultWidth
			}
		},
		watch:{
			chooseIndex:{
				handler(val){
					this.activeIndex = val
				},
				immediate:true
			},
			tabData: {
				handler(val){
					this.tabList = val
					setTimeout(()=>{
						this.updateTabsUnderline()
					},0)
				},
				immediate:true
			}
		}
	}
</script>

<style lang="scss" scoped>
.my-tabs-container {
	height: 45px;
	background-color: #fff;
	.tabs-box {
		width: 100%;
		height: 45px;
		.scroll-view {
			position: relative;
			width: 100%;
			height: 45px;
			white-space: nowrap;
			.tabs-item {
				height: 45px;
				line-height: 45px;
				.item {
					display: inline-block;
					color: #333;
					padding: 0 15px;
					font-size: 14px;
				}
				.activeTab {
					color: #fa942a;
				}
			}
			.underline {
				width: 24px;
				height: 2px;
				background-color: #fa942a;
				border-radius: 3px;
				position: absolute;
				// bottom: 20px;
				top: 43px;
				transition: .5s;
			}
		}
		
	}
}
</style>
<template>
	<view class="my-tabs-container">
		<view class="tabs-box">
			<scroll-view class="scroll-view" scroll-x="true"  scroll-with-animation>
				<view class="tabs-item">
					<block v-for="(item,index) in tabData" :key="item.id">
						<view class="item" @click="handleClickTabs(index)" :class="{activeTab:activeIndex===index }">{{item.label}}</view>
					</block>
				</view>
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
				activeIndex:-1 //当前激活项
			};
		},
		methods:{
			handleClickTabs(index){
				this.activeIndex = index
			}
		},
		watch:{
			chooseIndex:{
				handler(val){
					this.activeIndex = val
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
		}
	}
}
</style>
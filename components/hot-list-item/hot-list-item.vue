<template>
	<view class="item-container">
		<view class="item-box">
			<view class="item-left">
				<image src="@/static/images/ranking-1.png" class="ranking-bg"></image>
				<text class="ranking-text">1</text>
			</view>
			<view class="item-right">
				<view class="item-top">
					<view class="item-title">标题</view>
					<view class="item-desc">简介</view>
				</view>
				<view class="item-bottom">
					<view class="item-mark">我是标签</view>
					<view class="item-hot">
						<image src="@/static/images/hot-icon.png" class="hot-icon"></images>
						<text>47k 热度</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"hot-list-item",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.item-container {
	padding: 8px 10px;
	.item-box {
		display: flex;
		.item-left {
			width: 20px;
			height: 20px;
			position: relative;
			.ranking-bg {
				width: 20px;
				height: 20px;
			}
			.ranking-text {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-55%,-55%);
				font-size: 12px;
				color: #333;
			}
		}
		.item-right {
			width: 100%;
			font-size: 14px;
			.item-title {
				margin-bottom: 5px;
				font-weight: bold;
			}
			.item-desc {
				font-size: 12px;
				color: #333;
			}
			.item-bottom {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				margin-top: 5px;
				.item-hot {
					display: flex;
					align-items: center;
					.hot-icon {
						width: 20px;
						height: 20px;
					}
				}
			}
		}
	}
}
</style>
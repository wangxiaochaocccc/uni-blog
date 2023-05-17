<template>
	<view class="item-container">
		<view class="item-box">
			<view class="item-left">
				<imgage src="@/static/images/ranking-1.png" class="ranking-bg"></imgage>
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

<style>

</style>
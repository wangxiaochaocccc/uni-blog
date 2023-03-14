<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit"></image>
		<view class="search-box">
			<my-search></my-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.hot-container {
	background-color: #fff;
	.logo {
		width: 100%;
		height: 80px;
	}
	.search-box {
		padding: 0 20px;
		margin-bottom: 15px;
	}
}
</style>

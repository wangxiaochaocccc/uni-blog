<template>
	<view class="my-search-container">
		<view class="container">
			<image class="icon" src="@/static/images/search.png" mode=""></image>
			<text class="placeholder">{{placeholderText}}</text>
		</div>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		props: {
			placeholderText: {
				type:String,
				default:'搜索'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my-search-container {
	height: 36px;
	.container {
		height: 36px;
		border: 1px solid #c9c9c9;
		display: flex;
		align-items: center;
		border-radius: 15px;
		padding: 0 10px;
		margin: auto;
		.icon {
			width: 20px;
			height: 20px;
		}
		.placeholder {
			color: #666;
			margin-left: 8px;
		}
	}
}
</style>
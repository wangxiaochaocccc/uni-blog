<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit"></image>
		<view class="search-box">
			<my-search></my-search>
		</view>
	</view>
</template>

<script>
	import {getTabsData} from '@/api/hot.js'
	export default {
		data() {
			return {
				
			};
		},
		created(){
			this.loadTabsData()
		},
		methods:{
			// 获取tabs数据
			async loadTabsData(){
				const res=await getTabsData()
				console.log(res)
			}
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

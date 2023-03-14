import request from '../utils/request.js'

// 热搜文章类型
export const getTabsData =()=>{
	return request({
		url:'/hot/tabs',
		method:'get'
	})
}
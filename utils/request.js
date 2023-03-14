const BASE_URL = 'https://api.imooc-blog.lgdsunday.club/api'

function request({url,data,method}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+url,
			data,
			method,
			header:{
				icode:'EA0877CBED1800D2'
			},
			success({data}) {
				if(data.success){
					resolve(data.data)
				}else {
					uni.showToast({
						title:data.message,
						duration:3000
					})
					reject(data.message)
				}
			},
			fail(error) {
				reject(error)
			}
		})
	})
}

export default request
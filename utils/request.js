const BASE_URL = 'https://api.imooc-blog.lgdsunday.club/api'

function request({url,data,method}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+url,
			data,
			method,
			header:{
				icode:'4B45B228E61749BE'
			},
			success({data}) {
				if(data.success){
					resolve(data)
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
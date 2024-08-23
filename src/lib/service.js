import axios from 'axios'
const getUser = ($userId)=>{
	return new Promise(async(resolve,reject)=>{
		const {data} = await axios('https://jsonplaceholder.typicode.com/users/'+ $userId);
		resolve(data);
	})
}
const getPosts = ($userId)=>{
	return new Promise(async(resolve,reject)=>{
		const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + $userId)
		resolve(data);
	})
}
export async function getData(userId){
	Promise.all([getUser(userId),getPosts(userId)])
	.then(console.log)
	.catch(console.log);
}

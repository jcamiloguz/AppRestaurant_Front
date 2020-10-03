const API=``

const getBuyers=async()=>{
	let response = await fetch(`http://172.19.104.175:9000/buyer`)
	response =await response.json()
	return response.buyers
}
export default {
	getBuyers,
};

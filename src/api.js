const API=`http://172.22.150.192:9000`

const getBuyers=async()=>{
	let response = await fetch(`${API}/buyer`)
	response =await response.json()
	return response.buyers
}
const getDetails=async(id)=>{
	let response = await fetch(`${API}/buyer/${id}`)
	response =await response.json()
	return response
}

const postData=async  (data = {})=> {
  const response = await fetch(`${API}/sync?date=${data}`, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
  });
  console.log( response)
}




export default {
	getBuyers,
	postData,
	getDetails
};

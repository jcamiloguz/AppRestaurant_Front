const API=`http://172.19.104.175:9000`

const getBuyers=async()=>{
	let response = await fetch(`${API}/buyer`)
	response =await response.json()
	return response.buyers
}
const getDetails=async(id)=>{
	let response = await fetch(`${API}/buyer/${id}`)
	response =await response.json()
	return response.buyer
}

const postData=async  ( endpoint,data = {})=> {
  const response = await fetch(`${API}${endpoint}`, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json(); 
}




export default {
	getBuyers,
	postData,
	getDetails
};

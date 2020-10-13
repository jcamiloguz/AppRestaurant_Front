const deleteDuplicate = (array, n)=> {
	if (n===0){
	 return (array = array.filter(
		(item, index, items) =>
			index === items.findIndex((t) => t.id === item.id)
	))}else{
	 return (array = array.filter(
		(item, index, items) =>
			index === items.findIndex((t) => t.product_id === item.product_id)
	))}
}
export default {
	deleteDuplicate
};
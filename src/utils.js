const deleteDuplicate = (array)=> {
	return (array = array.filter(
		(item, index, items) =>
			index === items.findIndex((t) => t.id === item.id)
	))
}
export default {
	deleteDuplicate
};
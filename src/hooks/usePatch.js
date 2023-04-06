import { useState, useEffect } from "react"
import axios from "axios"
function usePatch(params, id) {
	const [data,setData] = useState([])
	useEffect(()=>{
		console.log(params)
		axios.patch(`http://localhost:4000${params}`, {id})
		.then(data=>setData(data.data))
		.catch(e=>console.error(e.message))
	},[])
	return data
}

export default usePatch;
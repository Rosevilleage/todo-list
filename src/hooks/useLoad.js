import { useState, useEffect } from "react"
import axios from "axios"
function useLoad(params) {
	const [data,setData] = useState([])
	useEffect(()=>{
		console.log(params)
		axios.get(`http://localhost:4000${params}`)
		.then(data=>setData(data.data))
		.catch(e=>console.error(e.message))
	},[])
	return data
}

export default useLoad;
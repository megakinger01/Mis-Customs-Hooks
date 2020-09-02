import { useState, useEffect, useRef } from "react"


export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setstate] = useState({ data:null,loading:true, error:null})
    
    useEffect(()=>{
        return()=>{
            isMounted.current=false;
        }
    },[])
    
        useEffect(()=>{
            setstate({data:null,loading:true, error:null})

            fetch(url)
                .then(resp=>resp.json())
                .then(data=>{

                    if(isMounted.current){

                    setstate({
                        data,
                        loading:false,
                        error:null
                    })
                }     
                })
                .catch(()=>{

                    setstate({
                                data:null,
                                loading:false,
                                error:'no se pudo cargar info'
                            })
                    })

        },[url])

        return state


}

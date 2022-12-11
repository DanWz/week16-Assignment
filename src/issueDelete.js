import { useState, useEffect } from "react";



const useDelete = (url) => {
    const method = { 
        method: 'DELETE'
    }
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(ENDPOINT, method, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data from ENDPOINT');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setIsError(null)
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch was ended')
                }else{
                    setIsLoading(false);
                    setIsError(error.message);
                }
            })

            return () => abortCont.abort()
    }, [ENDPOINT]);

    return { data, isLoading, isError }
}

export default useFetch;
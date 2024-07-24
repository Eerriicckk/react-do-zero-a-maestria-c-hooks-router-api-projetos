import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [urlRequest, setUrlRequest] = useState("");

    const httpConfig = (data, method, urlRequest = url) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
        }
        if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            })
        }
        setUrlRequest(urlRequest)
        setMethod(method)
    }

    const makeRequest = async (fetchOptions) => {
        setLoading(true);
        try {
            const res = await fetch(...fetchOptions);
            const data = await res.json();
            setCallFetch(data)
        } catch (error) {
            setError("Houve algum erro ao enviar os dados")
        }
        setMethod({});
        setConfig({}); 
        setLoading(false);
    }

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error)
            setError("Houve algum erro ao receber os dados")
        }
        setLoading(false);
    }

    // 1 - resgatando dados
    useEffect(() => {
        fetchData()
    }, [url, callFetch]);

    useEffect(() => {
        if (method === "POST") {
            let fetchOptions = [urlRequest, config];
            makeRequest(fetchOptions);
        }
        else if (method === "DELETE") {
            let fetchOptions = [urlRequest, config];
            makeRequest(fetchOptions);
        }
    }, [config, method, url]);

    return { data, httpConfig, loading, error }
}

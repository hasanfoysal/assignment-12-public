import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const useServices = (asc) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axiosSecure(`/trending?sort=${asc ? 'asc' : 'desc'}`)
        .then(res => setServices(res.data))
    }, [asc])
    return services;
   
};

export default useServices;
// import { useEffect, useState } from "react";

import {  useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/addProduct')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //     });
    // }, [])
    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['addProduct'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/addProduct')
            return res.data;

        }
    }) 
    return [menu, loading, refetch]
};

export default useMenu;
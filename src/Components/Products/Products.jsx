import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const Products = () => {
    const [search, setSearch] = useState('');
    const [Resis, setResis] = useState([]);
    // useEffect( () =>{
    //     fetch(`http://localhost:5000/tag?&search=${search}`)
    //     .then(res => res.json())
    //     .then(data => setResis(data));

    // },[search])
    useEffect(() =>{
        axiosSecure(`/tag?&search=${search}`)
        .then(res => setResis(res.data))
    },[search])
  
    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText)
        setSearch(searchText)
    }
    return (
        
        <div className=" lg:my-12 my-5 lg:mx-20 mx-5">
           
            <h1 className="text-4xl pt-24  text-center  text-green-600   ml[200px] lg:ml-[400px]   py-1 pr-[140px] lg:pr-[300px] font-semibold"> Products</h1>
            <form onSubmit={handleSearch} className="space-x-2">
                <input className="bg-slate-200  p-1" type="text" name="search" id="" />
                <input type="submit"className="btn rounded-full" value="search"/>
                

            </form>
            <div className="grid lg:grid-cols-3 gap-4  mt-5 ">
                {
                    Resis.map(Resi => <Product key={Resi._id} Resi={Resi}></Product> )
                }
            </div>
           
            

        </div>
    );
};

export default Products;
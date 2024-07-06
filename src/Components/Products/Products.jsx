import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [Resis, setResis] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/tag')
        .then(res => res.json())
        .then(data => setResis(data));

    },[])
    return (
        
        <div className=" lg:my-12 my-5 lg:mx-20 mx-5">
           
            <h1 className="text-4xl pt-24  text-center  text-green-600   ml[200px] lg:ml-[400px]   py-1 pr-[140px] lg:pr-[300px] font-semibold"> Products</h1>
            
            <div className="grid lg:grid-cols-3 gap-4  mt-5 ">
                {
                    Resis.map(Resi => <Product key={Resi._id} Resi={Resi}></Product> )
                }
            </div>
           
            

        </div>
    );
};

export default Products;
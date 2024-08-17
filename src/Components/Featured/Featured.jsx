import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";
import { Helmet } from "react-helmet-async";


const Featured = () => {
    const [Resis, setResis] = useState([]);
    useEffect( () =>{
        fetch('https://final-assignment-server-two.vercel.app/services')
        .then(res => res.json())
        .then(data => setResis(data));

    },[])
    return (
        
        <div className=" lg:my-12 my-5  ">
           <Helmet>
            <title>Products Hunt || Featureds Products</title>
           </Helmet>
            <h1 className="text-4xl text-black ml[200px] lg:ml-[400px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">Featured Products</h1>
            
            
            <div className="grid lg:grid-cols-4 gap-4  mt-5 ">
                {
                    Resis.map(Resi => <Feature key={Resi._id} Resi={Resi}></Feature> )
                }
            </div>
           
            

        </div>
    );
};

export default Featured;
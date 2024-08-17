import { useEffect, useState } from "react";
import Famous from "../Famous/Famous";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const FamousProducts = () => {
    const [asc, setAsc] = useState(false);
    const [Resis, setResis] = useState([]);
    useEffect( () =>{
        // fetch('https://final-assignment-server-two.vercel.app/trending')
        // .then(res => res.json())
        // .then(data => setResis(data));
        axiosSecure(`/trending?sort=${asc ? 'asc' : 'desc'}`)
        .then(res => setResis(res.data))

    },[asc])
    return (
        
        <div className=" lg:my-12 my-5 lg:mx-20 mx-5">
           
            <h1 className="text-4xl text-black  ml[200px] lg:ml-[400px] text-center btn btn-outline border-0 border-b-4 border-green-600 py-1 my-5 font-semibold">Trending Products</h1><br />
            {/* <button className="btn btn-secondary" onClick={() => setAsc(!asc)}> {asc ? 'Vote: High to Low' : 'Vote: Low to High'} </button> */}
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn bg-slate-600 text-white  m-1">Sort</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
  <button className="btn btn-secondary" onClick={() => setAsc(!asc)}> {asc ? 'Vote: High to Low' : 'Vote: Low to High'} </button>
  </ul>
</div>
            <div className="grid lg:grid-cols-3 gap-4  mt-5 ">
                {
                    Resis.map(Resi => <Famous key={Resi._id} Resi={Resi}></Famous> )
                }
            </div>
           
            

        </div>
    );
};

export default FamousProducts;
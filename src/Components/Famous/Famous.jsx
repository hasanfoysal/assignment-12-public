import { Link } from "react-router-dom";


const Famous = ({Resi}) => {
    const {description} = Resi;
    const {image_url} = Resi;
    const {title} = Resi;
    const {category} = Resi;
    const {vote_count} = Resi
    
    return (
       
 
        <div className="card card-compact w-72 md:w-80 lg:w-[500px] mx-auto  bg-base-100 shadow-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" >
          {/* <Helmet>resident</Helmet> */}
       
        <figure><img className=" w-[300px] h-[300px] rounded-xl " src={image_url} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-sky-800" > Title:{title}</h2>
          <h2 className="text-2xl text-green-500">{category}</h2>
          <h1> Description:{description}</h1>
          <h1 className="text-right font-bold text-purple-500">Vote Count: {vote_count}</h1>
          <div className="card-actions justify-center">
         <Link to='/product'><button className="btn bg-sky-400 text-white">View Details</button></Link> 
          </div>
        </div>
        
      </div>
    );
};

export default Famous;
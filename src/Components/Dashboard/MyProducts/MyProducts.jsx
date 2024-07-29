import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyProducts = () => {
    const [menu,] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
            //   
            const res = await axiosSecure.delete(`/addProduct/${item._id}`);
            // console.log(res.data);
            if(res.data.deletedCount > 0){
                // refetch();
                Swal.fire({
                    title: "done!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
            }
          });

    }
    return (
        <div>
            <h1 className="text-4xl mx-auto text-black ml[100px] lg:ml-[200px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">My Products</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
         menu?.map((item, index) => <tr key={item._id}>
            <td>
                {index + 1}
            </td>
             <td>
               <div className="flex items-center gap-3">
                 <div className="avatar">
                   <div className="mask mask-squircle h-12 w-12">
                     <img
                       src={item.ProductImage} />
                   </div>
                 </div>
               </div>
             </td>
             <td>
               {item.ProductName}
              
             </td>
             {item.ProductDescription}
           
             <td>
              <Link to={`/dashboard/updateItem/${item._id}`}> <button  className="btn btn-sm bg-orange-500 ">
                <FaEdit className="text-white"></FaEdit>
                </button></Link>
             </td>
             <td>
             <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
             </td>
           </tr>)
      }
      
  
     
    </tbody>
    {/* foot */}

  </table>
</div>
            </div>

        </div>
    );
};

export default MyProducts;
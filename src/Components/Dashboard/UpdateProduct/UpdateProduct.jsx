import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
  
    const {
      // eslint-disable-next-line no-unused-vars
      ProductName,
      image_url ,
      ProductDescription, _id
      } = useLoaderData();
      console.log(_id)
    const {
        register,
        handleSubmit,
      } = useForm();
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
      const onSubmit = async(data) => {             
        console.log(data);
        // const imageFile = { image: data.image[0] }
        const imageFile = { image: data?.image_url[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
          } 
        });
        if(res.data.success){
          const addItem= {
            ProductName : data.ProductName,
            
            ProductDescription: data.ProductDescription,
           



          }
          const addRes = await axiosSecure.patch(`/addProduct/${_id} `, addItem);
          console.log(addRes.data) 
          if(addRes.data.modifiedCount > 0){
            Swal.fire({
              title: "Updated successful!",
              text: "You clicked the button!",
              icon: "success"
            });
            //show success popup
          }
         

        }
        console.log( 'with image url', res.data)
        
        


      }
    // console.log(item);
    return (
        <div>
            <h1 className="text-4xl mx-auto text-black ml[100px] lg:ml-[200px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">Update Products</h1>
            <div className="lg:ml-36 ml-24 ">
            <form  className="bg-slate-200 p-6 my-5"  onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-xl font-semibold">Product Name</span>
  </div>
  <input type="text" defaultValue={ProductName}  placeholder="Product Name"{...register('title',{required: true})} className="input input-bordered w-full " />
</label>

      <label className="form-control w-full my-3">
        <h1 className="text-xl font-semibold">Product Image</h1>
      <input type="file"placeholder="Product Image"{...register('image_url',{required: true})} defaultValue={image_url} className="file-input file-input-bordered w-full" />

</label>

<label className="form-control w-full my-3">
  <div className="label">
    <span className="label-text text-xl font-semibold">Product Description</span>
  </div>
  <input type="text" defaultValue={ProductDescription} placeholder="Product Description"{...register('description',{required: true})} className="input input-bordered w-full " />
</label>




      <button className="btn bg-green-600 text-white ml-24 lg:ml-36">
        Update Product
      </button>
    </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
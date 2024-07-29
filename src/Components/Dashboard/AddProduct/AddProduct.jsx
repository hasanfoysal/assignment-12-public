/* eslint-disable no-undef */

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2";
const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () =>{

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
            ProductName : data.title,
            ProductImage : res.data.data.image_url,
            ProductDescription: data.description,
           



          }
          const addRes = await axiosSecure.post('/addProduct ', addItem);
          console.log(addRes.data) 
          if(addRes.data.insertedId){
            Swal.fire({
              title: "Added successful!",
              text: "You clicked the button!",
              icon: "success" 
            });
            //show success popup
          }
         

        }
        console.log( 'with image url', res.data)
        
        


      }

    return (
        <div>
            <h1 className="text-4xl mx-auto text-black ml[200px] lg:ml-[200px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">Add Products</h1>
            <div className="lg:ml-36 ml-24 ">
            <form  className="bg-slate-200 p-6 my-5"  onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-xl font-semibold">Product Name</span>
  </div>
  <input type="text" placeholder="Product Name"{...register('title',{required: true})} className="input input-bordered w-full " />
</label>

      <label className="form-control w-full my-3">
        <h1 className="text-xl font-semibold">Product Image</h1>
      <input type="file"{...register('image_url',{required: true})} className="file-input file-input-bordered w-full" />

</label>

<label className="form-control w-full my-3">
  <div className="label">
    <span className="label-text text-xl font-semibold">Product Description</span>
  </div>
  <input type="text" placeholder="Product Description"{...register('description',{required: true})} className="input input-bordered w-full " />
</label>




      <button className="btn bg-green-600 text-white ml-24 lg:ml-36">
        Add Product
      </button>
    </form>
            </div>
        </div>
    );
};

export default AddProduct; 
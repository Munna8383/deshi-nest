import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provides/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {FaEye,FaEyeSlash} from "react-icons/fa";



const image_key = "882b09b883bdb9615d409ad402b4f806"
const api = `https://api.imgbb.com/1/upload?key=${image_key}`


const Register = () => {

    const {createUser,updatePhotoAndName,logout}=useContext(AuthContext)
    const navigate = useNavigate()
     const [showPassword,setShowPassword]=useState(false)

    const handleRegister = async(e) =>{
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value 
        const name = e.target.name.value
        const imageFile = {image:e.target.image.files[0]}


       const res= await axios.post(api,imageFile,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })

     if(res.data.success){

          createUser(email,password)
        .then(()=>{
           updatePhotoAndName(name,res.data.data.display_url)
           .then(()=>{
            logout()
            toast.success("Registered Successfully")
            setTimeout(()=>{

                navigate("/")

            },2000)

           
           })
            
        })

     }else{
        toast.error("Register Unsuccessful")
     }





    }




    return (
        <div>
            <Toaster></Toaster>
           <div  className="mt-10">
           <div className="w-11/12 mx-auto p-5 sm:p-10 sm:w-7/12 sm:mx-auto  shadow-2xl shadow-blue-700">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                </div>

                <form onSubmit={handleRegister}>
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Photo</span>
                            </label>
                            <input type="file" name="image" className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} name="password" placeholder="password" className="input input-bordered" required />
                            
                        <span className="absolute right-12 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            }
                        </span>

                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-info">Register</button>
                        </div>
                    </form>
                    <div className="mt-5 text-center">
                        <p className="font-semibold">Already Have Account? <Link className="text-blue-700" to={"/"}>Login</Link></p>
                    </div>
            </div>
           </div>
            
        </div>
    );
};

export default Register;
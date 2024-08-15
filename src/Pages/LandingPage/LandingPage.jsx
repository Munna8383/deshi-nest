import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { useQuery } from "@tanstack/react-query";

const LandingPage = () => {

    const [search,setSearch]=useState("")

     const [products,setProducts]=useState([])
    const [count,setCount]=useState(40)
    const [currentPage,setCurrentPage]=useState(0)
    const itemPerPage = 9
    const numberOfPage = Math.ceil(count/itemPerPage)

    const pages = [...Array(numberOfPage).keys()]


   console.log(search)




    
 useEffect(()=>{

    axios.get("http://localhost:5000/productCount")
    .then(res=>{
        setCount(res.data.count)
    })

 },[])



    useEffect(()=>{

        axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}&search=${search}`)
        .then(res=>{
            setProducts(res.data)
        })



    },[currentPage,itemPerPage,search])


    const handlePrevious =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleNext=()=>{

        if(currentPage<pages.length-1){
            setCurrentPage(currentPage+1)
        }



    }






    return (
        <div>
            <Navbar></Navbar>

         <div className="mt-10 w-11/12 mx-auto">


            <div className="flex justify-between ">
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                <label className="input input-bordered flex items-center gap-2">
  <input type="text" onChange={(e)=>setSearch(e.target.value)} className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
                </div>
            </div>





            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                {
                    products?.map((item)=><div key={item._id} className="card card-compact bg-base-100  shadow-xl">
                    <figure>
                      <img
                        src={item?.productImage}
                        className="h-80 w-full"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item?.productName}</h2>
                      <h1 className="text-base font-semibold">Category: <span>{item?.category}</span></h1>
                      <h1 className="text-base font-semibold">Price: <span>${item?.price}</span></h1>
                      <h1 className="text-base font-semibold">Brand: <span>{item?.brand}</span></h1>
                      <div className="flex items-center">
                      <h1 className="text-base font-semibold">Rating: </h1>
                      <span><ReactStars value={item?.ratings}/></span>
                      </div>
                     
                    </div>
                  </div>)
                    
                }


            </div>

            <div className="flex justify-center space-x-5 mt-5">
                <button onClick={handlePrevious} className="btn btn-warning">Previous</button>
                {
                    pages.map(page=><button onClick={()=>setCurrentPage(page)} className={currentPage===page?" btn-primary btn":"btn btn-accent"} key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="btn btn-warning">Next</button>
            </div>

         </div>




            <Footer></Footer>
            
        </div>
    );
};

export default LandingPage;
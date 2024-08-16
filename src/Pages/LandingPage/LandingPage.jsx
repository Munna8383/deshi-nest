import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const LandingPage = () => {

    const [search, setSearch] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [range,setRange] = useState("")
    const [priceLimit,setPriceLimit]=useState("")

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const itemPerPage = 9
    const numberOfPage = Math.ceil(count / itemPerPage)

    const pages = [...Array(numberOfPage).keys()]


 





    useEffect(() => {

        axios.get("http://localhost:5000/productCount")
            .then(res => {
                setCount(res.data.count)
            })

    }, [])



    useEffect(() => {

        axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}&search=${search}&brand=${brand}&category=${category}&part=${range}&priceLimit=${priceLimit}`)
            .then(res => {
                setProducts(res.data)
                
            })



    }, [currentPage, itemPerPage, search,brand,category,range,priceLimit])


    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {

        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }



    }


    const handleSort=()=>{

        [...products].sort((a, b) => {
            const [dayA, monthA, yearA] = a.productCreationDate.split('-');
            const [dayB, monthB, yearB] = b.productCreationDate.split('-');
          
            const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
          
            return dateB - dateA; // Sort by descending order (newest first)
          });





    }

   









    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-10 w-11/12 mx-auto">

                <div className="my-5">
                    <h1 className="text-3xl font-bold text-center">Product Management System</h1>
                </div>


                <div className="space-y-5">
                 <div className="flex flex-wrap w-full gap-5 justify-center">
                
                    <div >
                    <select onChange={(e)=>setCategory(e.target.value)}  name="select" className="select select-bordered w-full">
                            <option disabled selected>Sort by the Category</option>
                            <option>Books</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                        </select>
                
                    </div>
                    <div >
                    <select onChange={(e)=>setRange(e.target.value)}  name="select" className="select select-bordered w-full">
                            <option disabled selected>Sort by the Price</option>
                            <option>High-To-Low</option>
                            <option>Low-To-High</option>
                            
                        </select>
                
                    </div>
                    <div >
                    <select onChange={(e)=>setPriceLimit(e.target.value)}  name="select" className="select select-bordered w-full">
                            <option disabled selected>Sort by the Price Range</option>
                            <option>0-100</option>
                            <option>101-200</option>
                            <option>201-2000</option>
                            
                        </select>
                
                    </div>
                    <div>
                    <select onChange={(e)=>setBrand(e.target.value)}  name="select" className="select select-bordered w-full">
                            <option disabled selected>Sort by the Brand</option>
                            <option>Aroong</option>
                            <option>Walton</option>
                        </select>
                
                    </div>
                 </div>

                 <div className="flex justify-center">
                    <button onClick={handleSort} className="btn btn-outline">Sort product to the newest date</button>
                 </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" onChange={(e) => setSearch(e.target.value)} className="grow" placeholder="Search by the Product Name" />
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
                        products?.map((item) => <div key={item._id} className="card card-compact bg-base-100  shadow-xl">
                            <figure>
                                <img
                                    src={item?.productImage}
                                    className="h-72 w-full"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item?.productName}</h2>
                                <h1 className="text-base font-semibold">Category: <span>{item?.category}</span></h1>
                                <h1 className="text-base font-semibold">Price: <span>${item?.price}</span></h1>
                                <h1 className="text-base font-semibold">Brand: <span>{item?.brand}</span></h1>
                                <div className="flex items-center">
                                    <h1 className="text-base font-semibold">Rating: </h1>
                                    <span><ReactStars value={item?.ratings} /></span>
                                </div>

                            </div>
                        </div>)

                    }


                </div>

                <div className="flex justify-center space-x-5 mt-5">
                    <button onClick={handlePrevious} className="btn btn-warning">Previous</button>
                    {
                        pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? " btn-primary btn" : "btn btn-accent"} key={page}>{page}</button>)
                    }
                    <button onClick={handleNext} className="btn btn-warning">Next</button>
                </div>

            </div>




            <Footer></Footer>

        </div>
    );
};

export default LandingPage;
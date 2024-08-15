import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>

            <div className="mt-10">
                <div className="shadow-2xl shadow-blue-700 w-11/12 mx-auto p-5 sm:p-10 sm:w-7/12 sm:mx-auto " >

                    <div className="flex justify-center items-center">
                        <div>
                            <img className="w-16 h-12" src="../../../public/—Pngtree—letter d logo_6928616.png" alt=""  />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold">Deshi Nest</h1>
                        </div>
                    </div>

                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-info">Login</button>
                        </div>
                    </form>

                    <div className="mt-5">
                    <button className="w-full bg-gray-200 py-2 px-1 rounded-xl text-center flex justify-center items-center gap-5">
                        <span className="text-blue-700" ><FaGoogle /></span>
                        <span className="font-bold">Sign In With Google</span>
                    </button>
                    </div>
                    <div className="mt-5 text-center">
                        <p className="font-semibold">Do Not Have Account? <Link className="text-blue-700" to={"/register"}>Register</Link></p>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
           <div  className="mt-10">
           <div className="w-11/12 mx-auto p-5 sm:p-10 sm:w-7/12 sm:mx-auto  shadow-2xl shadow-blue-700">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                </div>

                <form>
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
                            <input type="file" className="file-input file-input-bordered w-full" />
                        </div>
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
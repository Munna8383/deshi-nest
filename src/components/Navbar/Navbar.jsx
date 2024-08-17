import { useContext } from "react";
import { AuthContext } from "../../provides/AuthProvider";

const Navbar = () => {

    const {user,logout}=useContext(AuthContext)


   const handleLogout=()=>{

    logout()

   }

   const handleRefresh=()=>{


    window.location.reload();


   }





    return (
        <div className="navbar bg-base-300 px-5">
  <div className="flex-1">
     <div>
     <div onClick={handleRefresh} className="flex justify-center items-center cursor-pointer">
                        <div>
                            <img className="w-12 h-8" src="https://i.ibb.co/CJdxjLL/Pngtree-letter-d-logo-6928616.png" alt=""  />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold">Deshi<span className="text-blue-700">Nest</span></h1>
                        </div>
                    </div>
     </div>
  </div>
  <div className="flex-none">
    <div className="flex items-center gap-5">
    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
<div>
  <button className="btn btn-info" onClick={handleLogout}>Logout</button>
</div>
    </div>
  </div>
</div>
    );
};

export default Navbar;
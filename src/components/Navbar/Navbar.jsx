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
                            <img className="w-12 h-8" src="../../../public/—Pngtree—letter d logo_6928616.png" alt=""  />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold">Deshi<span className="text-blue-700">Nest</span></h1>
                        </div>
                    </div>
     </div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-14 rounded-full">

            {
                user&&  user&&<img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL} />
            }
            {
                !user&& <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            }
         
        </div>
      </div>
      {
        user&&    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center divide-y-2">
        <li className="py-2">{user?.displayName}</li>
        <li onClick={handleLogout} className="py-2 cursor-pointer">Logout</li>
      </ul>
      }
    </div>
  </div>
</div>
    );
};

export default Navbar;
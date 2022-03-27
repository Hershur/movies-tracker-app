import { Link } from "react-router-dom";
import assets from "../helpers/assets";
import useGetSession from "../hooks/useGetSession";


const Header = ()=> {
    const { handleSessionLogOut } = useGetSession();

    return (
        <div className="bg-[#121829] backdrop-blur-2xl flex justify-center items-center text-white">
            <div className="w-5/6 flex justify-between items-center pt-4 pb-4">
                <div className="logo flex gap-1 items-center text-2xl">
                    <div className="w-10">
                        <img  src={assets.logo} alt="logo" />
                    </div>    
                    <div>
                        ShowFlix
                    </div>
                </div>

                <div className="nav flex gap-6 items-center text-[#A8AEBF] font-extrabold">
                    <div className="cursor-pointer hover:text-white" >
                        <Link to="/" >
                            Home
                        </Link>
                    </div>
                    <div className="cursor-pointer hover:text-white" >
                        <Link to="/favorites" >
                            Favourites
                        </Link>
                    </div>
                    <div className="cursor-pointer hover:text-white" >
                        <Link to="/viewed" >
                            Viewed 
                        </Link>
                    </div>

                    <div onClick={handleSessionLogOut} className="text-[#7B6EF6] cursor-pointer hover:text-white">
                        Logout
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Header;
import assets from "../helpers/assets";

const Header = ()=> {
    return (
        <div className="bg-[#121829] backdrop-blur-2xl flex justify-center items-center text-white">
            <div className="w-5/6 flex justify-between items-center p-3">
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
                        Home
                    </div>
                    <div className="cursor-pointer hover:text-white" >
                        Favourites
                    </div>
                    <div className="cursor-pointer hover:text-white" >
                        Viewed 
                    </div>

                    <div className="cursor-pointer hover:text-white">
                        Logout
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Header;
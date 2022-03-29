import { useRef } from "react"
import { Link } from "react-router-dom";
import useMarkViewedTVShows from "../hooks/useMarkViewedTVShows";
import Loader from "./Loader";

const TVShowsBox = ({ tvShows, notFoundText, showCtxtMenu })=> {
    const menuCtxtBox = useRef([]);
    const { handleMarkViewedTVShows } = useMarkViewedTVShows();

    return (
        <>
            <div className="mt-10 mb-5">
                {tvShows?.length} Items
            </div>

            <div className="grid grid-cols-[24%_24%_24%_24%] justify-center items-center gap-4 flex-wrap">
                {
                    !tvShows ?

                    <Loader /> :

                    tvShows?.length < 1 ?

                    <div className="flex justify-center items-center m-8">{notFoundText}</div> :

                    tvShows?.map((x, i) => (
                        <Link key={x.id} to={`/details/tv/${x.id}`}>
                            <div  className="bg-[#20283E] h-[35em] rounded-lg p-4 flex[1_1_21%] box-border">
                                <div className="h-5/6 rounded-lg">
                                    <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={x.name}  />
                                </div>

                                <div className="p-2 relative flex flex-col justify-center">
                                    <span>{x.name}</span>
                                    <div className="flex justify-between items-end mb-5">
                                        <div className="font-extrabold text-[#7B6EF6]">{x.vote_average}</div>
                                        {
                                            showCtxtMenu &&
                                            <div 
                                                onClick={()=> {
                                                    if(menuCtxtBox.current[i].style.display === 'none'){
                                                        menuCtxtBox.current[i].style.display = 'flex'
                                                    } else {
                                                        menuCtxtBox.current[i].style.display = 'none';
                                                    }
                                                }}
                                                className="font-extrabold text-4xl cursor-pointer"
                                            >
                                                ...
                                            </div>
                                        }
                                    </div>

                                    {
                                        
                                        <div 
                                            ref={el => { menuCtxtBox.current[i] = el; menuCtxtBox.current[i] ? menuCtxtBox.current[i].style.display = "none" : menuCtxtBox.current[i] = null }}
                                            className="absolute right-0 bottom-12 bg-white text-black p-4 flex flex-col font-extrabold rounded-lg gap-y-4 w-[10em] text-sm"
                                        >
                                            <div 
                                                onClick={()=> { handleMarkViewedTVShows(x.id); menuCtxtBox.current[i].style.display = 'none'}}
                                                className="cursor-pointer hover:text-[#7B6EF6]"
                                            >
                                                Mark Viewed
                                            </div>
                                            <div className="cursor-pointer hover:text-[#7B6EF6]">Add Notes</div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default TVShowsBox;
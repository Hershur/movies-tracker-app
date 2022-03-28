import { useRef } from "react"
import useMarkViewedTVShows from "../hooks/useMarkViewedTVShows";
import Loader from "./Loader";



const TVShowsSeasonsBox = ({ tvShowsSeasons, notFoundText, showCtxtMenu })=> {
    const menuCtxtBoxSeasons = useRef([]);
    const { handleMarkViewedTVShowsSeasons } = useMarkViewedTVShows();

    return (
        <>
            <div className="mt-10 mb-5">
                {tvShowsSeasons?.length} Items
            </div>

            {
                !tvShowsSeasons ?

                <div className="grid grid-cols-[24%_24%_24%_24%] justify-center items-center gap-4 flex-wrap">
                    <Loader /> 
                </div> :

                tvShowsSeasons?.length < 1 ?

                <div className="flex justify-center items-center m-8">{notFoundText}</div> :

                tvShowsSeasons?.map((show, j)=> (
                    <div key={show?.tvShow}>
                        <div className="font-bold text-2xl gap-8 cursor-pointer mt-10 mb-3">{show?.tvShow} - {show?.seasons.length} seasons</div>

                        <div className="grid grid-cols-[24%_24%_24%_24%] justify-center items-center gap-4 flex-wrap">
                        
                            {
                                show?.seasons.map((x, i)=> (
                                    <div key={x.id} className="bg-[#20283E] h-[35em] rounded-lg p-4 flex[1_1_21%] box-border">
                                        <div className="h-5/6 rounded-lg">
                                            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={x.name}  />
                                        </div>

                                        <div className="p-2 relative flex flex-col justify-center">
                                            <span>{x.name}</span>
                                            <div className="flex justify-between items-end mb-5">
                                                <div className="font-extrabold text-[#7B6EF6]">{x.episode_count} Episodes</div>
                                                {
                                                    showCtxtMenu &&
                                                    <div 
                                                        onClick={()=> {
                                                            if(menuCtxtBoxSeasons.current[`${i}${j}`].style.display === 'none'){
                                                                menuCtxtBoxSeasons.current[`${i}${j}`].style.display = 'flex'
                                                            } else {
                                                                menuCtxtBoxSeasons.current[`${i}${j}`].style.display = 'none';
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
                                                    ref={el => { menuCtxtBoxSeasons.current[`${i}${j}`] = el; menuCtxtBoxSeasons.current[`${i}${j}`] ? menuCtxtBoxSeasons.current[`${i}${j}`].style.display = "none" : menuCtxtBoxSeasons.current[`${i}${j}`] = null }}
                                                    className="absolute right-0 bottom-12 bg-white text-black p-4 flex flex-col font-extrabold rounded-lg gap-y-4 w-[10em] text-sm"
                                                >
                                                    <div 
                                                        onClick={()=> { handleMarkViewedTVShowsSeasons(show.tvShowId, x.id); menuCtxtBoxSeasons.current[`${i}${j}`].style.display = 'none'}}
                                                        className="cursor-pointer hover:text-[#7B6EF6]"
                                                    >
                                                        Mark Viewed
                                                    </div>
                                                    <div className="cursor-pointer hover:text-[#7B6EF6]">Add Notes</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
           
        </>
    );
}

export default TVShowsSeasonsBox;
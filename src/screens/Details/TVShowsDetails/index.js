import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import useGetTVShowDetails from "../../../hooks/useGetTVShowDetails";

const TVShowsDetails = ()=> {
    const { tvShowId } = useParams();
    // eslint-disable-next-line no-unused-vars
    const result = useGetTVShowDetails(tvShowId);

    const details = useSelector((state) => state.movies.tvShowDetails);
    
    console.log(details);
    return (
        <div className="bg-[#121829]  text-white">
            <Header />

            <div className="flex items-center justify-center">
                <div className="w-5/6 flex flex-col items-center">
                    <div className="bg-[#323F56] flex items-center font-bold text-3xl m-6 rounded-2xl p-8">
                       {details?.name}
                    </div>

                    <div className="grid grid-cols-[0.8fr_1fr] justify-center gap-4">
                        <div className=" rounded-lg">
                            <img className="h-3/4 rounded-lg" src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`} alt={details?.name}  />
                        </div>

                        <div>
                            <div className="text-[#8E95A9] text-xl my-8 mx-4">
                                {details?.overview}
                            </div>

                            <div className="mt-6">
                                <div className="text-[#8E95A9] text-lg m-4">Type</div>
                                <div className="m-4">{details?.type}</div> 
                            </div>

                            <div className="mt-6">
                                <div className="text-[#8E95A9] text-lg m-4">Release Date</div>
                                <div className="m-4">{details?.first_air_date}</div> 
                            </div>
                            <div className="mt-6">
                                <div className="text-[#8E95A9] text-lg m-4">Runtime</div>
                                <div  className="m-4">{details?.episode_run_time[0]}</div> 
                            </div>
                            <div className="mt-6">
                                <div className="text-[#8E95A9] text-lg m-4">Genres</div>
                                <div  className="m-4">
                                    {
                                        details?.genres.map((x, i, arr) => `${x?.name} ${i !== arr.length - 1 ? ',' : ''} `)
                                    }    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TVShowsDetails;
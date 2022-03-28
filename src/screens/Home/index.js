import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import TVShowsBox from "../../components/TVShowsBox";
import TVShowsSeasonsBox from "../../components/TVShowsSeasonsBox";
import useGetPopularTVShows from "../../hooks/useGetPopularTVShows";
import useSearchTVShows from "../../hooks/useSearchTVShows";


const Home = ()=> {
    // eslint-disable-next-line no-unused-vars
    const tvShows = useGetPopularTVShows();
    const { handleSearchTVShows } = useSearchTVShows();
    const popularTVShows = useSelector((state) => state.movies.popularTVShows);
    const popularTVShowsSeasons = useSelector((state) => state.movies.popularTVShowsSeasons);

    const [tabView, setTabView] = useState('tvShows');

    const handleTabSwitch = (tabName) => {
        setTabView(tabName);
    }

    return (
        <>
            <div className="bg-[#121829] w-full h-[100vh] overflow-auto text-white">
                <Header />

                <div className="w-5/6 m-auto pb-8">
                    <h1 className="text-4xl mt-5 mb-5 font-bold">Movies</h1>

                    <div className="flex gap-10">
                        <div>
                            <input 
                                onKeyDown={handleSearchTVShows}
                                placeholder="Search TV Shows"
                                type="text" 
                                className="p-2 text-[#3A4259] rounded-lg border-2 bg-[#121829] border-[#11263D] w-80" 
                            />
                        </div>

                        <div className="flex font-bold text-2xl gap-8 cursor-pointer">
                            <div onClick={()=> handleTabSwitch('tvShows')} className={`${tabView === 'tvShows' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>TV Shows</div>
                            <div onClick={()=> handleTabSwitch('seasons')} className={`${tabView === 'seasons' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>Seasons</div>
                            <div onClick={()=> handleTabSwitch('episodes')} className={`${tabView === 'episodes' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>Episodes</div>
                        </div>
                    </div>

                    {
                        tabView === 'tvShows' ?

                        <TVShowsBox 
                            tvShows={popularTVShows}
                            notFoundText="No tv show found"
                            showCtxtMenu
                        /> :

                        tabView === 'seasons' ? 

                        <TVShowsSeasonsBox 
                            tvShowsSeasons={popularTVShowsSeasons}
                            notFoundText="No tv show seasons found"
                            showCtxtMenu
                        /> :

                        tabView === 'episodes' ?

                        <div>Episodes</div> :

                        null
                    }
                </div>

            </div>
        </>
    );
};

export default Home;
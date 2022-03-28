import { useState } from "react";
import Header from "../../components/Header";
import TVShowsBox from "../../components/TVShowsBox";
import TVShowsSeasonsBox from "../../components/TVShowsSeasonsBox";


const Viewed = ()=> {
    const [tabView, setTabView] = useState('tvShows');

    const viewedTVShows = JSON.parse(window.localStorage.getItem('viewedTVShows')) || []; 
    const viewedTVShowsSeasons = JSON.parse(window.localStorage.getItem('viewedTVShowsSeasons')) || []; 

    const handleTabSwitch = (tabName) => {
        setTabView(tabName);
    }

    return (
        <>
            <div className="bg-[#121829] w-full h-[100vh] overflow-auto text-white">
                <Header />

                <div className="w-5/6 m-auto pb-8">
                    <h1 className="text-4xl mt-5 mb-5 font-extrabold">Viewed</h1>

                    <div className="flex font-bold text-2xl gap-8 cursor-pointer">
                        <div onClick={()=> handleTabSwitch('tvShows')} className={`${tabView === 'tvShows' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>TV Shows</div>
                        <div onClick={()=> handleTabSwitch('seasons')} className={`${tabView === 'seasons' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>Seasons</div>
                        <div onClick={()=> handleTabSwitch('episodes')} className={`${tabView === 'episodes' ? 'border-b-4 border-b-[#7B6EF6]' : ''} `}>Episodes</div>
                    </div>

                    

                    {
                        tabView === 'tvShows' ?

                        <TVShowsBox 
                            tvShows={viewedTVShows}
                            notFoundText="No viewed tv shows"
                        /> :

                        tabView === 'seasons' ? 

                        <TVShowsSeasonsBox 
                            tvShowsSeasons={viewedTVShowsSeasons}
                            notFoundText="No viewed tv show seasons found"

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

export default Viewed;
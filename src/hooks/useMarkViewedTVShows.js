import { useSelector } from "react-redux";

const useMarkViewedTVShows = ()=> {
    const popularTVShows = useSelector((state) => state.movies.popularTVShows);
    const popularTVShowsSeasons = useSelector((state) => state.movies.popularTVShowsSeasons);

    const handleMarkViewedTVShows = async (tvShowId)=> {
        const viewedTVShows = JSON.parse(window.localStorage.getItem('viewedTVShows')) || []; 
        const checkTVShowById = viewedTVShows.find(x => x.id === tvShowId);

        if(!checkTVShowById) {
            const findTVShowById = popularTVShows.find(x => x.id === tvShowId);
            const addViewedTVShows = [...viewedTVShows, findTVShowById];
    
            window.localStorage.setItem('viewedTVShows', JSON.stringify(addViewedTVShows));
        }

    };

    const handleMarkViewedTVShowsSeasons = async (tvShowId, seasonId)=> {
        const viewedTVShowsSeasons = JSON.parse(window.localStorage.getItem('viewedTVShowsSeasons')) || []; 
        const checkTVShowById = viewedTVShowsSeasons.find(x => x.tvShowId === tvShowId);
        const checkSeasonById = checkTVShowById ? checkTVShowById["seasons"].find(x => x.id === seasonId) : null;
        let newAddViewedTVShowsSeasons;

        
        if(!checkSeasonById) {
            const findTVShowById = popularTVShowsSeasons.find(x => x.tvShowId === tvShowId);
            const findSeasonById = findTVShowById["seasons"].find(x => x.id === seasonId)

            if(!checkTVShowById){
                newAddViewedTVShowsSeasons =  {tvShow: findTVShowById.tvShow, tvShowId: findTVShowById.tvShowId, seasons: []};
            } else {
                newAddViewedTVShowsSeasons = viewedTVShowsSeasons.find(x => x.tvShowId === tvShowId);
            }


            newAddViewedTVShowsSeasons["seasons"] = [...newAddViewedTVShowsSeasons["seasons"], findSeasonById];


            let appendToTVSHowViewedSeason;

            if(!checkTVShowById){
                appendToTVSHowViewedSeason = [...viewedTVShowsSeasons, newAddViewedTVShowsSeasons];
            } else {
                appendToTVSHowViewedSeason = viewedTVShowsSeasons.map(x => x.tvShowId === tvShowId ? newAddViewedTVShowsSeasons : x)
            }

    
            window.localStorage.setItem('viewedTVShowsSeasons', JSON.stringify(appendToTVSHowViewedSeason));
        }

    };

    return {
        handleMarkViewedTVShows,
        handleMarkViewedTVShowsSeasons
    }

};

export default useMarkViewedTVShows;
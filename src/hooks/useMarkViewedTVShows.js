import { useSelector } from "react-redux";

const useMarkViewedTVShows = ()=> {
    const popularTVShowsToday = useSelector((state) => state.movies.popularTVShowsToday);
    const viewedTVShows = window.localStorage.getItem('viewedTVShows') || []; 

    const handleMarkViewedTVShows = async (tvShowId)=> {
        const checkTVShowById = JSON.parse(viewedTVShows).find(x => x.id === tvShowId);

        if(!checkTVShowById) {
            const findTVShowById = popularTVShowsToday.find(x => x.id === tvShowId);
            const addViewedTVShows = [...JSON.parse(viewedTVShows), findTVShowById];
    
            window.localStorage.setItem('viewedTVShows', JSON.stringify(addViewedTVShows));
        }

    };

    return {
        handleMarkViewedTVShows
    }

};

export default useMarkViewedTVShows;
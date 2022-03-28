import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchTVShows } from "../api";
import { setPopularTVShows } from "../redux/slices/moviesSlice";

const useSearchTVShows = ()=> {
    const dispatch = useDispatch();
    const popularTVShowsToday = useSelector((state) => state.movies.popularTVShowsToday);


    const handleSearchTVShows = debounce(async (e)=> {
        const tvShowName = e.target.value;

        if(tvShowName.trim().length === 0){
            dispatch(setPopularTVShows(popularTVShowsToday)); 
            return;
        }

        const { status, data } = await searchTVShows(tvShowName);

        if(status){
            dispatch(setPopularTVShows(data?.results)); 
        }

    }, 1500);

    return {
        handleSearchTVShows
    }

};

export default useSearchTVShows;
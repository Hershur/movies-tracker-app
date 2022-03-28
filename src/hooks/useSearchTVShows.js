import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchTVShows } from "../api";
import { setPopularTVShows } from "../redux/slices/moviesSlice";

const useSearchTVShows = ()=> {
    const dispatch = useDispatch();
    const popularTVShowsToday = useSelector((state) => state.movies.popularTVShowsToday);


    const handleSearchTVShows = debounce(async (e)=> {
        const tvShowName = e.target.value;
        const { status, data } = await searchTVShows(tvShowName);
        console.log(data)
        if(tvShowName.trim().length < 2){
            dispatch(setPopularTVShows(popularTVShowsToday)); 
        } else if(status){
            dispatch(setPopularTVShows(data?.results)); 
        }

    }, 1500);

    return {
        handleSearchTVShows
    }

};

export default useSearchTVShows;
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { searchTVShows, getPopularTVShowsSeasons } from "../api";
import { setPopularTVShows, setPopularTVShowsSeasons } from "../redux/slices/moviesSlice";
import useGetPopularTVShows from "./useGetPopularTVShows";

const useSearchTVShows = ()=> {
    const dispatch = useDispatch();
    const { fetchPopularTVShows } = useGetPopularTVShows();

    const handleSearchTVShows = debounce(async (e)=> {
        const tvShowName = e.target.value;

        if(tvShowName.trim().length === 0){
            fetchPopularTVShows(); 
            return;
        }

        const { status, data } = await searchTVShows(tvShowName);

        if(status){
            dispatch(setPopularTVShows(data?.results)); 
        }

        const response = await getPopularTVShowsSeasons(data?.results);

        if(response){
            dispatch(setPopularTVShowsSeasons(response)); 
        }


    }, 1500);

    return {
        handleSearchTVShows
    }

};

export default useSearchTVShows;
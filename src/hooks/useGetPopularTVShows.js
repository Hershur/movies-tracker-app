import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
    getPopularTVShows, 
    getPopularTVShowsSeasons 
} from "../api";
import { 
    setPopularTVShows, 
    setPopularTVShowsSeasons 
} from "../redux/slices/moviesSlice";

const useGetPopularTVShows = ()=> {
    const dispatch = useDispatch();


    const fetchPopularTVShows = useCallback(async ()=> {
        const { status, data } = await getPopularTVShows();
        
        if(status){
            dispatch(setPopularTVShows(data?.results)); 
        }

        const response = await getPopularTVShowsSeasons(data?.results);

        if(response){
            dispatch(setPopularTVShowsSeasons(response)); 
        }


    }, [dispatch]);

    


    useEffect(()=> {
        fetchPopularTVShows();

    }, [fetchPopularTVShows]);

    return {
        fetchPopularTVShows
    }
};

export default useGetPopularTVShows;
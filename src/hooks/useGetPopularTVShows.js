import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularTVShows } from "../api";
import { setPopularTVShows, setPopularTVShowsToday } from "../redux/slices/moviesSlice";

const useGetPopularTVShows = ()=> {
    const dispatch = useDispatch();


    const fetchPopularTVShows = useCallback(async ()=> {
        const { status, data } = await getPopularTVShows();
        
        if(status){
            dispatch(setPopularTVShows(data?.results)); 
            dispatch(setPopularTVShowsToday(data?.results)); 
        }

    }, [dispatch]);

    useEffect(()=> {
        fetchPopularTVShows();
    }, [fetchPopularTVShows]);


};

export default useGetPopularTVShows;
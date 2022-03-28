import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavoriteTVShows, getAccountId } from "../api";
import { setFavoriteTVShows } from "../redux/slices/moviesSlice";
import Cookies from "js-cookie";

const useGetFavoriteTVShows = ()=> {
    const dispatch = useDispatch();


    const fetchFavoriteTVShows = useCallback(async ()=> {
        const getSession = Cookies.get('sessionId') || null; 

        const response = await getAccountId(getSession);
        const { status, data } = await getFavoriteTVShows(response.data?.id, getSession);
        
        if(status){
            dispatch(setFavoriteTVShows(data?.results)); 
        }


    }, [dispatch]);

    useEffect(()=> {
        fetchFavoriteTVShows();
    }, [fetchFavoriteTVShows]);


};

export default useGetFavoriteTVShows;
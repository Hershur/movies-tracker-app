import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTVShowsDetails } from "../api";
import { setTVShowDetails } from "../redux/slices/moviesSlice";



const useGetTVShowDetails = (tv_id)=> {
    const dispatch = useDispatch();

    const fetchTVShowDetails = useCallback(async ()=> {
        const { status, data } = await getTVShowsDetails(tv_id);

        if(status){
            dispatch(setTVShowDetails(data)); 
        }


    }, [dispatch, tv_id]);

    useEffect(()=> {
        fetchTVShowDetails();
    }, [fetchTVShowDetails]);

};

export default useGetTVShowDetails;
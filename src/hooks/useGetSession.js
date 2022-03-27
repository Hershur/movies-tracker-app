import { useDispatch } from "react-redux";
import { getSessionId, getRequestToken, deleteSession } from "../api";
import { resetState, setSessionId } from '../redux/slices/moviesSlice';
import Cookies from 'js-cookie';
import { REACT_APP_BASE_URL } from '../config';
import { useNavigate } from "react-router-dom";



const useGetSession = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchSessionId = async (request_token)=> {
        const { status, data } = await getSessionId(request_token);
        
        if(status){
            // 30/(60*24) ==> 30mminutes ===> 0.0208333
            Cookies.set('sessionId', `${data.session_id}`, { secure: true, sameSite: 'strict'});
            console.log("Setting cookie", request_token)
            dispatch(setSessionId(data)); 

            return data;
        }

        return {};

    };

    const handleSessionRequest = async (values)=> {
        const { status, data } = await getRequestToken();

        if(status){
    
            return window.location = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${REACT_APP_BASE_URL}login`;
        }

    }

    const handleSessionLogOut = async ()=> {
        const getSession = Cookies.get('sessionId') || null; 

        const { status } = await deleteSession(getSession);

        if(status){
            Object.keys(Cookies.get()).forEach(function(cookieName) {
                var neededAttributes = {
                  // Here you pass the same attributes that were used when the cookie was created
                  // and are required when removing the cookie
                };
                Cookies.remove(cookieName, neededAttributes);
            });

            dispatch(resetState());
        }

        navigate("/login", { replace: true });
    }


    return {
        handleSessionRequest,
        fetchSessionId,
        handleSessionLogOut
    }

}

export default useGetSession;
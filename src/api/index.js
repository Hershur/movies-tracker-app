import { DEFAULT_LANGUAGE, TV_SHOWS_PER_PAGE } from "../helpers/constants";
import httpService from "../helpers/httpService"

export const getRequestToken = ()=> {
    const url = 'https://api.themoviedb.org/3/authentication/token/new';
    const response = httpService.get(url);
    
    return response;
}

export const getSessionId = (request_token)=> {
    const url = 'https://api.themoviedb.org/3/authentication/session/new';
    const payload = {
        request_token
    }
    const response = httpService.post(url, payload);

    return response;
}


export const deleteSession = (session_id)=> {
    const url = 'https://api.themoviedb.org/3/authentication/session';
    const payload = {
        session_id
    }
    const response = httpService.remove(url, payload);

    return response;
}

export const getPopularTVShows = ()=> {
    const url = `https://api.themoviedb.org/3/tv/popular?language=${DEFAULT_LANGUAGE}&page=${TV_SHOWS_PER_PAGE}`;
    const response = httpService.get(url);

    return response;
}
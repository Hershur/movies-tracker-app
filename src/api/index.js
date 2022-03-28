import { DEFAULT_LANGUAGE } from "../helpers/constants";
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
    const url = `https://api.themoviedb.org/3/tv/popular?language=${DEFAULT_LANGUAGE}`;
    const response = httpService.get(url);

    return response;
}

export const getAccountId = (session_id)=> {
    const url = `https://api.themoviedb.org/3/account?session_id=${session_id}`;
    const response = httpService.get(url);

    return response;
}

export const getFavoriteTVShows = (account_id, session_id)=> {
    const url = `https://api.themoviedb.org/3/account/${account_id}/favorite/tv?language=${DEFAULT_LANGUAGE}&session_id=${session_id}&sort_by=created_at.asc`;
    const response = httpService.get(url);

    return response;
}

export const searchTVShows = (tvShowName) => {
    const url = `https://api.themoviedb.org/3/search/tv?query=${tvShowName}&language=${DEFAULT_LANGUAGE}`;
    const response = httpService.get(url);

    return response;
}
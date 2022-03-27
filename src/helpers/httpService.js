import { API_READ_ACCESS_TOKEN } from "../config";

const get = async(url)=> {
    try {
        const reqObj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`
            },
        };

        const response = await fetch(url, reqObj);
        const result = await response.json();
    
        if(response.status === 200){
            return {
                status: response.status,
                message: 'Request Successful',
                data: result
            }
        }
        
    } catch (error) {
        return {
            error: 'failed',
            message: 'Request Failed',
            data: {}
        }
    }

};


const post = async (url, payload)=> {
    try {
        const reqObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`,
            },
            body: JSON.stringify(payload)
        };
    
        const response = await fetch(url, reqObj);
        const result = await response.json();

        if(response.status === 200 || response.status === 200){
            return {
                status: response.status,
                message: 'Request Successful',
                data: result
            }
        }
        
    } catch (error) {
        return {
            error: 'failed',
            message: 'Request Failed',
            data: {}
        }
    }

    
};


const remove = async (url, payload)=> {
    try {
        const reqObj = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`,
            },
            body: JSON.stringify(payload)
        };
    
        const response = await fetch(url, reqObj);
        const result = await response.json();

        if(response.status === 200 || response.status === 200){
            return {
                status: response.status,
                message: 'Request Successful',
                data: result
            }
        }
        
    } catch (error) {
        return {
            error: 'failed',
            message: 'Request Failed',
            data: {}
        }
    }

    
};

const httpService = {
    get,
    post,
    remove
}

export default httpService;
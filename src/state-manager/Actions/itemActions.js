import { HttpClient } from '../../api/http-service';
import axios from 'axios';

export const GET_ITEM = 'GET_ITEM'
export const CREATE_ITEM = 'CREATE_ITEM'

export function getHeaders() {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
};

export const GetItem = () => dispatch => {
    console.log("fetching...")
        axios.get('http://localhost:4000/api/getlist', getHeaders())
        .then(response => { console.log("fetched"); dispatch({
            type: GET_ITEM,
            payload: response.data
        })})
        .catch(error => { console.log(error) });
}

export function GetItemsSuccess(results) {
    return {
        type: GET_ITEM,
        payload: results
    }
}


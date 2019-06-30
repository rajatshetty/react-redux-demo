import axios from 'axios';
import handleError from './handleError';

function getHeaders() {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
};

const get = function get(path) {
    return new Promise((resolve, reject) => {
        console.log(process.env.REACT_APP_API_URL + path);
    axios.get(process.env.REACT_APP_API_URL+path, getHeaders())
        .then(response => { resolve(response) })
        .catch(error => { reject(handleError(error)) });
    });
};

const post = function post(path, data) {
    return new Promise((resolve, reject) => {
        axios.post(process.env.REACT_APP_API_URL + '/' + path, data)
    .then(response => {resolve(response)})
    .catch(error => { reject(handleError(error)) });
    });
};

const del = function deletedata(path) {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_API_URL+'/'+path, getHeaders())
        .then(response => {resolve(response)})
        .catch(error => { reject(handleError(error)) });
    });
};

const HttpClient = {
    get,
    post,
    delete: del
}

export {HttpClient}
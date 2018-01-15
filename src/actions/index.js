import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const USER_REGISTRATION = 'USER_REGISTRATION';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export function userLogin(username, password) {
    var apiBaseUrl = "http://localhost:8000/api/auth/user-login/";
    var payload = {
        "username": username,
        "password": password
    }
    const request = axios.post(apiBaseUrl, payload);
    return {
        type: USER_LOGIN,
        payload: request
    };
}

export function fetchEmployees(token) {
    var authToken = 'Token ' + localStorage.getItem('token');
    console.log("Auth Token...: ", authToken);
    var apiBaseUrl = "http://localhost:8000/api/auth/employee/";
    var payload = {headers: {Authorization: authToken,}};
    const request = axios.get(apiBaseUrl, payload);
    return {
        type: FETCH_EMPLOYEES,
        payload: request
    };
}

export function userRegistration(username, email, password) {
    var apiBaseUrl = "http://localhost:8000/api/auth/user-registration/";
    console.log("values", username, email, password);
    var payload = {
        "username": username,
        "email": email,
        "password": password
    }
    const request = axios.post(apiBaseUrl, payload);
    return {
        type: USER_REGISTRATION,
        payload: request
    };

}

export function removeEmployee(employee_id) {
    var authToken = 'Token ' + localStorage.getItem('token');
    var apiBaseUrl = "http://localhost:8000/api/auth/employee/";
    var payload = {
        headers: {Authorization: authToken,},
        data: {employee_id: employee_id}
    }
    const request = axios.delete(apiBaseUrl, payload);
    return {
        type: REMOVE_EMPLOYEE,
        payload: request,
        employee_id: employee_id
    };
}

export function addEmployee(data) {
    var authToken = 'Token ' + localStorage.getItem('token');
    var apiBaseUrl = "http://localhost:8000/api/auth/employee/";
    var payload = {headers: {Authorization: authToken,}};
    const request = axios.post(apiBaseUrl, data, payload);
    return {
        type: ADD_EMPLOYEE,
        payload: request
    };
}

export function updateEmployee(data) {
    var authToken = 'Token ' + localStorage.getItem('token');
    var apiBaseUrl = "http://localhost:8000/api/auth/employee/";
    var payload = {headers: {Authorization: authToken,}};
    const request = axios.put(apiBaseUrl, data, payload);
    return {
        type: UPDATE_EMPLOYEE,
        payload: request
    }
}
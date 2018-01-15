import {ADD_EMPLOYEE, FETCH_EMPLOYEES, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE} from "../actions/index";

const initialState = [];
export default function (state = initialState, action) {
    console.log("Action Value is:", action);
    switch (action.type) {
        case FETCH_EMPLOYEES:
            if (action.payload.status == 200) {
                return action.payload.data;
            }
            break;
        case REMOVE_EMPLOYEE:
            if (action.payload.status == 204) {
                console.log("Employee Removed successfully  ", action.employee_id);
                console.log(state);
                return state.filter(({employee_id}) => employee_id !== action.employee_id);
            }
            break;
        case ADD_EMPLOYEE:
            if (action.payload.status == 201) {
                console.log("Employee added successfully");
                return [action.payload.data, ...state];
            }
            break;
        case UPDATE_EMPLOYEE:
            if (action.payload.status == 200) {
                const updatedItems = state.map(item => {
                    if (item.employee_id === action.payload.data.employee_id) {
                        return {...item, ...action.payload.data};
                    }
                    return item;
                })
                return updatedItems;
            }
    }
    return state;
}
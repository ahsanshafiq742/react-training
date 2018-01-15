import {USER_LOGIN} from "../actions/index";

const initialState = {"status": false, "message": "initial state"};
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            if (action.payload.status == 200) {
                console.log("Login successfull");
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('username', action.payload.data.username);
                localStorage.setItem('token', action.payload.data.Token);
                return {"status": true, "token": action.payload.data.Token};
            }
            else if (action.payload.status == 204) {
                return {"status": false, "message": "Username password do not match"};
            }
            else {
                return {"status": false, "message": "Username does not exists"};
            }
    }
    return state;
}


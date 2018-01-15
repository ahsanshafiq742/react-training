import {USER_REGISTRATION} from "../actions/index";

const initialState = {"status": false, "message": "initial state"};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_REGISTRATION:
            if (action.payload.status == 201) {
                console.log("registration successfull");

                return {"status": true, "message": "registration successfull"};
            }
            else {
                return {"status": false, "message": "user registration failed."};
            }
        break;

        default:
            return state;
    }
    return state;
}

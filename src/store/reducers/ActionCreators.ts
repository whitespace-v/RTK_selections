import {AppDispatch} from "../store";
import {userSlice} from "../../models/UserSlice";
import {IUser} from "../../models/IUser";
import axios from "axios";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const selectUser = (user: IUser) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.userSelect(user))
}

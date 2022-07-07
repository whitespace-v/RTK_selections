import {IUser} from "./IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    selected: IUser[];
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    selected: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state){
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser[]>){
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
        userSelect(state, action: PayloadAction<IUser>) {
            const foundIdx = state.selected.findIndex(selected => selected.id === action.payload.id)
            if (foundIdx >= 0) {
                state.selected.splice(foundIdx, 1)
            } else {
                state.selected.push(action.payload)
            }
        }
    }
})

export default userSlice.reducer;
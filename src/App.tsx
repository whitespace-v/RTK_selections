import React, {useEffect} from 'react';
import {useAppDispatcher, useAppSelector} from "./hooks/redux";
import {fetchUsers, selectUser} from "./store/reducers/ActionCreators";

const App = () => {
    const dispatch = useAppDispatcher()
    const {users, isLoading, error, selected} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) {
        return <h1>loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="App">
            <div>
                <p>users:</p>
                {users.map(user => (
                    <p
                        onClick={() => dispatch(selectUser(user))}
                        key={user.id}
                    >
                        {user.id}. {user.email}
                    </p>
                ))}
            </div>
            {selected.length > 0 ?
                <div>
                    <p>selected:</p>
                    {selected.map(item => (
                        <p key={item.id}>{item.id}. {item.email}</p>
                    ))}
                </div>
                :
                <span>empty</span>}

        </div>
    );
}

export default App;

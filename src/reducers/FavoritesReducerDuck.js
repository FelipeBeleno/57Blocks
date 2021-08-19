
const types = {
    new: '[Favorites] Add Favorites',
    remove: '[Favorites] Remove Favorites',
    consult: '[Favorites] Consult Favorites'
};

// reducer

export const FavoritesReducer = (state = [], action) => {
    switch (action.type) {
        case types.new:

            state.push(action.payload);
            return state;
        case types.remove:

            let newState = state.filter(d => {

                return d.id !== action.payload.id
            })

            state = newState;

            return state;

        case types.consult:

            return state;

        default:
            return state;
    }
}

export const addFavorites = (obj) => {
    return (dispatch) => {
        dispatch({
            type: types.new,
            payload: obj
        });



    };

}


export const consultFavorites = () => {

    return (dispatch) => {

        dispatch({
            type: types.consult
        })
    }

}

export const removeFavorites = (obj) => {
    return (dispatch) => {

        dispatch({
            type: types.remove,
            payload: obj
        });



    };

}


import redux from "redux";
const createStore = redux.createStore;

//action
const BUY_CAKE = "BUY_CAKE";

// action creator
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
};

const initialState = {
    numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        default:
            return state;
    }
};

// Create store, pass in reducer
// which controls how state transition happens
const store = createStore(reducer);
// setup listener, anytime state updates, we log it to the console
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
// unsubscribe to any changes in the store
unsubscribe();

const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
//action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
};

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: "First redux action",
    };
};

const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        default:
            return state;
    }
};

// Create store, pass in reducer
// which controls how state transition happens
// Combine two reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
// setup listener, anytime state updates, we log it to the console
const unsubscribe = store.subscribe(() => {});
// dispatch action creators to the store
// when we dispatch the action, both reducers get that
// one ignores it and other does the work
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// unsubscribe to any changes in the store
unsubscribe();

/*
 *const initialState = {
 *numOfCakes: 10,
 *numOfIceCreams: 20,
 *};
 */

/*
 *const reducer = (state = initialState, action) => {
 *    switch (action.type) {
 *        case BUY_CAKE:
 *            return {
 *                ...state,
 *                numOfCakes: state.numOfCakes - 1,
 *            };
 *        case BUY_ICECREAM:
 *            return {
 *                ...state,
 *                numOfIceCreams: state.numOfIceCreams - 1,
 *            };
 *        default:
 *            return state;
 *    }
 *};
 */

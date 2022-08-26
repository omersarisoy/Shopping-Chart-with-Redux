import { data } from "../data";

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TO_CHART":
            let index = state.cart.findIndex(b => b.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].count += 1; 
            } else {
                const datas = action.payload;
                datas.count = 1;
                state.cart.push(datas);
            }
          return {...state, cart: [...state.cart]}
        case "REMOVE_ITEM":
            let index2 = state.cart.findIndex(b => b.id === action.payload.id);
            if (index2 !== -1 && state.cart[index2].count > 0) {
                state.cart[index2].count -= 1; 
            }
          return {...state, cart: [...state.cart]}
        case "REMOVE_FROM_CHART":
            let index3 = state.cart.findIndex(i => i.id === action.payload.id);
            state.cart.splice(index3,1)
            return {...state, cart: [...state.cart]}
        default:
          return state;
    }
}
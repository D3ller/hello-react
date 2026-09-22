import { useReducer, useState } from "react";

type CardAction =
    { name: "add_article" }
    | { name: "remove_article" }
    | { name: "apply_coupon", coupon: string | null }
    | { name: "lock_cart" }
    | { name: "reset" };

type CardState = { quantity: number, promo: null | string, locked: boolean; error?: string }

const reducer = (state: CardState, action: CardAction): CardState => {
    if(state.locked && (action.name === "add_article" || action.name === "remove_article")) return state;

    state.error = undefined;

    if (action.name === "add_article") {
        clearError(state)
        return {...state, quantity: state.quantity + 1}
    } else if (action.name === "remove_article") {
        if (state.quantity === 0) return {...state, error: "you can't have less than 1 article"};
        clearError(state)
        return {...state, quantity: state.quantity - 1}
    } else if (action.name === "lock_cart") {
        return {...state, locked: !state.locked}
    } else if (action.name === "apply_coupon") {
        return {...state, promo: action.coupon}
    } else {
        clearError(state)
        return {
            quantity: 0,
            promo: null,
            locked: false
        }
    }
}

const clearError = (state: Object) => {
    if('error' in state) {
        state.error = undefined;
    }
}

const Cart = () => {

    const initialState: CardState = {
        quantity: 0,
        promo: null,
        locked: false
    }

    const [coupon, setCoupon] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {state.quantity}
            <button onClick={() => dispatch({name: "add_article"})}>Add article</button>
            <button onClick={() => dispatch({name: "remove_article"})}>Remove article</button>
            <button disabled={!coupon} onClick={() => dispatch({name: "apply_coupon", coupon: coupon})}>Add coupon</button>
            <input className={"border"} placeholder={"coupon"} onChange={(event) => setCoupon(event.target.value)}/>
            {state.promo ? <p>Coupon {state.promo}</p> : ''}
        </>
    )

}

export default Cart;
import { createContext, type ReactNode, useContext, useState } from "react";

export const CountContext = createContext(0);

const Count = (props: {children: ReactNode}) => {
    const [count, setCounter] = useState(0);

    const updateCounter = (number: number): void => {
        setCounter((prevState) => prevState + number)
    }

    return (
        <CountContext.Provider value={count}>
            {props.children}
            <div>{count}</div>
            <button onClick={() => updateCounter(1)}>Increment</button>
            <button onClick={() => updateCounter(-1)}>Desincrement</button>
        </CountContext.Provider>
    );
}

export const useCountContext = () => useContext(CountContext)

export default Count;
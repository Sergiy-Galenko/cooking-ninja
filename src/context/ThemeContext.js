import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload };
        default:
            return state;
    }
};

export function ThemeProvider({ children }) {
    const [state, dispath] = useReducer(ThemeReducer, {
        color: "blue",
    });

    const changeColor = (color) => {
        dispath({ type: "CHANGE_COLOR", payload: color });
    };

    return (
        <ThemeContext.Provider value={{ ...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    );
}

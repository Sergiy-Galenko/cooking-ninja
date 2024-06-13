import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload };
        case "CHANGE_MODE":
            return { ...state, mode: };
        default:
            return state;
    }
};

export function ThemeProvider({ children }) {
    const [state, dispath] = useReducer(ThemeReducer, {
        color: "#58249c",
        mode: "dark",
    });

    const changeColor = (color) => {
        dispath({ type: "CHANGE_COLOR", payload: color });
    };

    const changeMode = (mode) => {
        dispath({ type: "CHANGE_MODE", payload: mode });
    };

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

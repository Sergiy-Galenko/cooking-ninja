import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/brightness_6_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import "./ThemeSelector.css";

const themeColors = ["#58249c", "#249c6d", "#b70233"];
export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === "dark" ? "ligh" : "dark");
    };

    return (
        <div className="theme-selector">
            <div className="mode-taggle">
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    alt="dark/lingt toggle icon"
                    style={{
                        filter:
                            mode === "dark" ? "invert(100%)" : "intert(20%)",
                    }}
                />
            </div>
            <div className="theme-button">
                {themeColors.map((color) => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    );
}

import { PowerButton } from "@components/PowerButton/PowerButton";

import { useThemeContext } from "@context/ThemeContext/ThemeContext";
import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Login } from "@pages/Login/Login";
import { MainScreen } from "@pages/MainScreen/MainScreen";

function App() {
  const { darkMode } = useThemeContext();
  const { isAuthenticated } = useAuthContext();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="w-full flex bg-gradient-to-b h-screen from-primary dark:from-[#2b373d]  to-secondary dark:to-[#2b373d]">
        {!isAuthenticated ? <Login /> : <MainScreen />}

        <PowerButton />
      </div>
    </div>
  );
}

export default App;

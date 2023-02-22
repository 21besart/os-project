import { useThemeContext } from "@context/ThemeContext/ThemeContext";
import { Switch } from "@headlessui/react";

export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  //fixed right-0 top-7
  return (
    <div className="flex mt-4 mr-4 text-left cursor-pointer">
      <Switch.Group>
        <Switch.Label className="mr-4">
          <p className="text-base dark:text-white">Dark Mode</p>
        </Switch.Label>

        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={`${
            darkMode ? "bg-blue-700" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </Switch.Group>
    </div>
  );
};

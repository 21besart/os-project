import { useWindowContext } from "@context/WindowContext/WindowContext";

import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { BatteryLife } from "@components/BatteryLife/BatteryLife";
import { Icon } from "@components/shared/Icon/Icon";

export const MenuBar = () => {
  const { openWindow } = useWindowContext();

  return (
    <div className="flex justify-between items-center px-2 w-full h-[25px] bg-grey dark:bg-gray-600 text-black dark:text-white">
      <span
        onClick={() => openWindow("preference")}
        className="flex items-center gap-2 text-xs font-bold cursor-pointer"
      >
        <Icon icon="settings" />
        Preferences
      </span>
      <div className="flex items-center">
        <BatteryLife />
        <CurrentTime />
      </div>
    </div>
  );
};

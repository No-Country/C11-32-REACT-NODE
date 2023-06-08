import { createContext, useContext, useState } from "react";

type SideBarMode = "PARTICIPANTS" | "CHAT" | null;

interface Props {
  sideBarMode: SideBarMode;
  changeSideBarMode: (value: SideBarMode) => void;
}

const MeetingAppContext = createContext<Props | null>(null);
export const useMeetingAppContext = () => useContext(MeetingAppContext);

const MeetingAppProvider = ({ children }) => {
  const [sideBarMode, setSideBarMode] = useState<SideBarMode>(null);

  const changeSideBarMode = (mode: SideBarMode) => {
    if (mode === null || sideBarMode === mode) {
      setSideBarMode(null);
    } else {
      setSideBarMode(mode);
    }
  };

  const contextValue: Props = {
    sideBarMode,
    changeSideBarMode,
  };

  return (
    <MeetingAppContext.Provider value={contextValue}>
      {children}
    </MeetingAppContext.Provider>
  );
};

export default MeetingAppProvider;

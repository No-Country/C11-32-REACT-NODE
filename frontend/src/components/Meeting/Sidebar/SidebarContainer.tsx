import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantPanel from "./ParticipantPanel";
import ChatPanel from "./ChatPanel";
import { Close } from "@/assets";
import { useMeetingAppContext } from "@/context/MeetingAppProvider";
import { CSSTransition } from "react-transition-group";
import "../../../pages/Meeting/Meeting.css";

const SideBarContainer = () => {
  const { sideBarMode, changeSideBarMode } = useMeetingAppContext()!;
  const { participants } = useMeeting();

  return (
    <CSSTransition
      in={sideBarMode}
      timeout={300}
      classNames="sideBar"
      unmountOnExit
    >
      <div
        className={`fixed inset-0 h-full p-4 lg:static lg:w-[360px] xl:w-[400px]`}
        style={{ zIndex: 5000, maxHeight: "calc(100vh - 124px)" }}
      >
        <div className=" flex h-full flex-col rounded-lg">
          <div
            className="mb-2 flex w-full items-center justify-between rounded-lg p-4 shadow-lg"
            style={{
              backgroundColor: "#4484CE",
            }}
          >
            <p className="text-base font-bold text-white">
              {sideBarMode === "PARTICIPANTS"
                ? `Participants (${new Map(participants)?.size})`
                : "Chat"}
            </p>
            <button onClick={() => changeSideBarMode(null)}>
              <Close fillColor="#fff" />
            </button>
          </div>
          <div
            className="flex-1 overflow-hidden rounded-lg shadow-lg"
            style={{
              backgroundColor: "#4484CE",
            }}
          >
            {sideBarMode === "PARTICIPANTS" ? (
              <ParticipantPanel />
            ) : sideBarMode === "CHAT" ? (
              <ChatPanel />
            ) : null}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SideBarContainer;

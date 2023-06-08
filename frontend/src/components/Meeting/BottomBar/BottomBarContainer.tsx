import { useMeeting } from "@videosdk.live/react-sdk";
import { useEffect, useRef, useState } from "react";
// import { useMeetingAppContext } from "@/Context/MeetingAppContext";

import {
  Arrow,
  Chat,
  Check,
  Clipboard,
  Close,
  Dots,
  End,
  Info,
  MicOffBar,
  MicOnBar,
  Participatns,
  ScreenShare,
  WebCamOffBar,
  WebCamOnBar,
} from "@/assets";
import BarButton from "./BarButton";
import MobileBarButton from "./MobileBarButton";
import { CSSTransition } from "react-transition-group";
import "../../../pages/Meeting/Meeting.css";
import { useMeetingAppContext } from "@/context/MeetingAppProvider";

interface WebCam {
  deviceId: string;
  label: string;
  facingMode: "environment" | "front";
}

interface Mic {
  deviceId: string;
  label: string;
}

const MicBtn = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  const [mics, setMics] = useState<Mic[]>([]);
  const [selectedMic, setSelectedMic] = useState<string>("");
  const { toggleMic, getMics, changeMic, localMicOn } = useMeeting();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGetMics = async () => {
    const mics = await getMics();
    mics?.length && setMics(mics);
  };

  const handleChangeMic = (deviceId: string) => {
    changeMic(deviceId);
  };

  const handleTooltip = async () => {
    if (!tooltipShow) {
      await handleGetMics();
    }
    setTooltipShow(!tooltipShow);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setTooltipShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <BarButton
        fillColor={localMicOn ? "#4484CE" : "#fff"}
        icon={localMicOn ? MicOnBar : MicOffBar}
        bgColor={localMicOn ? "#fff" : "#4484CE"}
        tooltip="Toogle Mic"
        onClick={toggleMic}
        borderColor=""
        renderRightComponent={() => {
          return (
            <div ref={containerRef}>
              <div
                onMouseEnter={() => {
                  setMouseOver(true);
                }}
                onMouseLeave={() => {
                  setMouseOver(false);
                }}
                className="h-full"
              >
                <button
                  className="flex h-full items-center justify-center"
                  onClick={() => {
                    handleTooltip();
                  }}
                >
                  <Arrow fillColor={localMicOn ? "#4484CE" : "#fff"} />
                </button>
                <div
                  style={{ zIndex: "6000" }}
                  className={`${
                    mouseOver ? "" : "hidden"
                  } absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 transform flex-col items-center justify-center whitespace-nowrap rounded-md bg-black p-1.5 `}
                >
                  <p className="text-sm text-white ">Change Microphone</p>
                </div>
              </div>
              {tooltipShow && (
                <div
                  className="absolute bottom-full left-1/2  mb-1 flex w-72 -translate-x-1/2 transform flex-col rounded-lg  p-3 shadow-lg"
                  style={{ backgroundColor: "#4484CE" }}
                >
                  <p className="ml-3 text-white">{"MICROPHONE"}</p>
                  <div className="flex flex-col">
                    {mics.map(({ deviceId, label }, index) => (
                      <div
                        key={deviceId}
                        className="my-1 p-1"
                        style={{
                          backgroundColor: `${
                            selectedMic === deviceId && "#6192ca"
                          }`,
                        }}
                      >
                        <button
                          className="flex w-full flex-1 text-white"
                          onClick={() => {
                            setSelectedMic(deviceId);
                            setTooltipShow(false);
                            handleChangeMic(deviceId);
                          }}
                        >
                          {label || `Mic ${index + 1}`}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

const WebCamBtn = () => {
  const { localWebcamOn, toggleWebcam, getWebcams, changeWebcam } =
    useMeeting();
  const [webcams, setWebcams] = useState<WebCam[]>([]);
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [selectedWebcam, setSelectedWebcam] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGetWebcams = async () => {
    const webcams = await getWebcams();
    webcams?.length && setWebcams(webcams);
  };

  const handleChangeWebCam = (deviceId: string) => {
    changeWebcam(deviceId);
  };

  const handleTooltip = async () => {
    if (!tooltipShow) {
      await handleGetWebcams();
    }
    setTooltipShow(!tooltipShow);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setTooltipShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <BarButton
        fillColor={localWebcamOn ? "#4484CE" : "#fff"}
        icon={localWebcamOn ? WebCamOnBar : WebCamOffBar}
        bgColor={localWebcamOn ? "#fff" : "#4484CE"}
        tooltip="Toogle Webcam"
        onClick={toggleWebcam}
        renderRightComponent={() => {
          return (
            <div ref={containerRef}>
              <div
                onMouseEnter={() => {
                  setMouseOver(true);
                }}
                onMouseLeave={() => {
                  setMouseOver(false);
                }}
                className="h-full"
              >
                <button
                  className="flex h-full items-center justify-center"
                  onClick={() => handleTooltip()}
                >
                  <Arrow fillColor={localWebcamOn ? "#4484CE" : "#fff"} />
                </button>
                <div
                  style={{ zIndex: "6000" }}
                  className={`${
                    mouseOver ? "" : "hidden"
                  } absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 transform flex-col items-center justify-center whitespace-nowrap rounded-md bg-black p-1.5`}
                >
                  <p className="text-sm text-white ">Change webCam</p>
                </div>
              </div>
              {tooltipShow && (
                <div
                  className="absolute bottom-full left-1/2 mb-2 flex w-72 -translate-x-1/2 transform flex-col rounded-lg p-3 shadow-lg"
                  style={{ backgroundColor: "#4484CE" }}
                >
                  <p className="ml-3 text-white">{"WEBCAM"}</p>
                  <div className="flex flex-col">
                    {webcams.map(({ deviceId, label }, index) => (
                      <div
                        key={deviceId}
                        className="my-1 p-1"
                        style={{
                          backgroundColor: `${
                            selectedWebcam === deviceId && "#6192ca"
                          }`,
                        }}
                      >
                        <button
                          className="flex w-full flex-1 text-white"
                          onClick={() => {
                            setSelectedWebcam(deviceId);
                            setTooltipShow(false);
                            handleChangeWebCam(deviceId);
                          }}
                        >
                          {label || `Mic ${index + 1}`}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

const ParticipantsBtn = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { changeSideBarMode, sideBarMode } = useMeetingAppContext()!;

  return (
    <>
      {isMobile ? (
        <MobileBarButton
          fillColor="#fff"
          icon={Participatns}
          onClick={() => changeSideBarMode("PARTICIPANTS")}
          tooltip="View Participants"
        />
      ) : (
        <BarButton
          fillColor={sideBarMode === "PARTICIPANTS" ? "#fff" : "#4484CE"}
          icon={Participatns}
          bgColor={sideBarMode === "PARTICIPANTS" ? "#4484CE" : "#fff"}
          onClick={() => changeSideBarMode("PARTICIPANTS")}
          tooltip="View Participants"
        />
      )}
    </>
  );
};

const MeetingCopyBtn = () => {
  const { meetingId } = useMeeting();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTooltip = () => {
    setTooltipShow(!tooltipShow);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setTooltipShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <BarButton
          icon={Info}
          fillColor={tooltipShow ? "#fff" : "#4484CE"}
          bgColor={tooltipShow ? "#4484CE" : "#fff"}
          onClick={() => handleTooltip()}
          tooltip="Invite more"
          renderRightComponent={() => {
            return (
              <>
                {tooltipShow && (
                  <div
                    className="right-0-0 absolute -left-11 bottom-full mb-2 flex w-72 flex-col rounded-lg bg-white p-4 shadow-lg"
                    ref={containerRef}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium">Invite other</p>
                      <button onClick={() => handleTooltip()}>
                        <Close fillColor="#000000" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center rounded-sm bg-gray-300 p-2">
                      <p className="flex-1 cursor-pointer overflow-x-hidden overflow-ellipsis whitespace-nowrap text-base text-black">
                        https://c11-32-react-node.vercel.app/rooms/{meetingId}
                      </p>
                      <button
                        className="ml-2"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://c11-32-react-node.vercel.app/rooms/${meetingId}`
                          );
                          setIsCopied(true);
                          setTimeout(() => {
                            setIsCopied(false);
                          }, 3000);
                        }}
                      >
                        {isCopied ? <Check /> : <Clipboard />}
                      </button>
                    </div>
                    <p className="mt-3 text-left text-base">
                      Share this meeting link with others you want in the
                      meeting.
                    </p>
                  </div>
                )}
              </>
            );
          }}
        />
      </div>
    </>
  );
};

const ChatBtn = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { changeSideBarMode, sideBarMode } = useMeetingAppContext()!;

  return (
    <>
      {isMobile ? (
        <MobileBarButton
          fillColor="#fff"
          icon={Chat}
          onClick={() => {
            changeSideBarMode("CHAT");
          }}
          tooltip="View Chat"
        />
      ) : (
        <BarButton
          icon={Chat}
          onClick={() => changeSideBarMode("CHAT")}
          tooltip="View Chat"
          fillColor={sideBarMode === "CHAT" ? "#fff" : "#4484CE"}
          bgColor={sideBarMode === "CHAT" ? "#4484CE" : "#fff"}
        />
      )}
    </>
  );
};

const LeaveBtn = () => {
  const { leave } = useMeeting();
  return (
    <BarButton
      borderColor="transparent"
      icon={End}
      bgColor="#FF4C00"
      onClick={() => {
        leave();
      }}
      tooltip="Leave Meeting"
      fillColor="#fff"
    />
  );
};

const ScreenShareBtn = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { toggleScreenShare, presenterId } = useMeeting();
  const isPresenting = presenterId;

  return (
    <>
      {isMobile ? (
        <MobileBarButton
          fillColor="#fff"
          icon={ScreenShare}
          onClick={() => toggleScreenShare()}
          tooltip="Present Screen"
        />
      ) : (
        <BarButton
          fillColor={isPresenting ? "#fff" : "#4484CE"}
          bgColor={isPresenting ? "#4484CE" : "#fff"}
          icon={ScreenShare}
          onClick={() => {
            toggleScreenShare();
          }}
          tooltip="Present Screen"
        />
      )}
    </>
  );
};

const MobileBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <BarButton
        fillColor={isOpen ? "#fff" : "#4484CE"}
        bgColor={isOpen ? "#4484CE" : "#fff"}
        icon={Dots}
        onClick={() => {
          handleOpen();
        }}
        tooltip="More options"
      />

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="bottomBar"
        unmountOnExit
      >
        <div
          ref={containerRef}
          className="mobile-btn-container fixed bottom-0 left-0 right-0  grid grid-cols-3 px-4 py-6"
          style={{ backgroundColor: "#4484CE", zIndex: "8000" }}
        >
          <ChatBtn isMobile={true} />
          <ParticipantsBtn isMobile={true} />
          <ScreenShareBtn isMobile={true} />
        </div>
      </CSSTransition>
    </div>
  );
};

const BottomBarContainer = () => {
  return (
    <>
      <div
        className="flex items-center justify-center px-2 py-2 md:hidden lg:px-4 xl:px-8"
        style={{ height: "60px" }}
      >
        <div className="flex gap-2">
          <MeetingCopyBtn />
          <MicBtn />
          <LeaveBtn />
          <WebCamBtn />
          <MobileBtn />
        </div>
      </div>

      <div
        className="hidden w-full px-2 py-2 md:flex lg:px-4"
        style={{ height: "60px" }}
      >
        <div className="flex items-center justify-center gap-2">
          <MeetingCopyBtn />
          <ScreenShareBtn />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <MicBtn />
          <WebCamBtn />
          <LeaveBtn />
        </div>
        <div className="flex items-center justify-center gap-2">
          <ChatBtn />
          <ParticipantsBtn />
        </div>
      </div>
    </>
  );
};

export default BottomBarContainer;

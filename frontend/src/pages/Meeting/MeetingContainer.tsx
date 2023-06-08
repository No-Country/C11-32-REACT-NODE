import logo from "../../assets/logonuevo.png";
import {
  BottomBarContainer,
  MemorizedParticipantView,
  PresenterView,
  SidebarContainer,
} from "@/components";
import { useMeeting } from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";

interface Props {
  micEnabled: boolean;
  webcamEnabled: boolean;
  selectedMic: string;
  selectedWebcam: string;
  setIsMeetingLeft: (value: boolean) => void;
  onMeetingLeave: () => void;
}

const MeetingContainer = ({
  micEnabled,
  selectedMic,
  selectedWebcam,
  webcamEnabled,
  onMeetingLeave,
}: Props) => {
  useEffect(() => {
    //JOIN API
  }, []);

  const isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;

  const onMeetingJoined = () => {
    const { changeWebcam, changeMic } = mMeetingRef.current;
    if (selectedMic && micEnabled) {
      changeMic(selectedMic);
    }
    if (webcamEnabled && selectedWebcam) {
      changeWebcam(selectedWebcam);
    }
  };

  const onMeetingLeft = () => {
    //LEAVE API
    onMeetingLeave();
  };

  const mMeetingRef = useRef<any>();

  const mMeeting = useMeeting({
    onMeetingLeft,
    onMeetingJoined,
  });

  const isPresenting = mMeeting.presenterId ? true : false;

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  return (
    <div className="fixed inset-0 bg-white" style={{ zIndex: 9999 }}>
      <div className="flex h-full flex-col">
        <div className="bg h-16 pl-4 pt-2">
          <img src={logo} alt="logo" className="max-h-full object-contain" />
        </div>
        <div className="flex flex-1 flex-row ">
          <div className="flex flex-1">
            {isPresenting ? <PresenterView /> : null}
            {isPresenting && isMobile ? null : (
              <MemorizedParticipantView isPresenting={isPresenting} />
            )}
          </div>
          <SidebarContainer />
        </div>
        <BottomBarContainer />
      </div>
    </div>
  );
};

export default MeetingContainer;

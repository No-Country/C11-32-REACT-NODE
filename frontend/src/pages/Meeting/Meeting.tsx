import { MeetingProvider } from "@videosdk.live/react-sdk";
import { useState } from "react";
import { authToken } from "./API";
import MeetingContainer from "./MeetingContainer";
import MeetingDetailScreen from "./MeetingDetailScreen";
import LeaveScreen from "./LeaveScreen";
import { MeetingAppProvider } from "@/context";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/hooks";

const Meeting = () => {
  const { auth } = useAuth() ?? {};
  const { meetingId } = useParams();
  const [startMeeting, setStartMeeting] = useState<boolean>(false);
  const [webcamOn, setWebcamOn] = useState<boolean>(false);
  const [micOn, setMicOn] = useState<boolean>(false);
  const [selectedMic, setSelectedMic] = useState<string>("");
  const [selectedWebcam, setSelectedWebcam] = useState<string>("");
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);

  if (!meetingId) {
    toast.error("id is required to join the call");
    return null;
  }

  return (
    <div>
      {startMeeting ? (
        <MeetingAppProvider>
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: micOn,
              webcamEnabled: webcamOn,
              name: auth?.first_name ?? "Test Name",
            }}
            token={authToken}
            reinitialiseMeetingOnConfigChange={true}
            joinWithoutUserInteraction={true}
          >
            <MeetingContainer
              onMeetingLeave={() => {
                setWebcamOn(false);
                setMicOn(false);
                setStartMeeting(false);
                setIsMeetingLeft(true);
              }}
              participantData={{ meet_id: meetingId, user_id: auth?.id ?? "" }}
              setIsMeetingLeft={setIsMeetingLeft}
              micEnabled={micOn}
              webcamEnabled={webcamOn}
              selectedMic={selectedMic}
              selectedWebcam={selectedWebcam}
            />
          </MeetingProvider>
        </MeetingAppProvider>
      ) : isMeetingLeft ? (
        <LeaveScreen />
      ) : (
        <MeetingDetailScreen
          webcamEnabled={webcamOn}
          setWebcamOn={setWebcamOn}
          micEnabled={micOn}
          setMicOn={setMicOn}
          selectedMic={selectedMic}
          selectedWebcam={selectedWebcam}
          setStartMeeting={setStartMeeting}
          setSelectedMic={setSelectedMic}
          setSelectedWebcam={setSelectedWebcam}
          meetId={meetingId}
        />
      )}
    </div>
  );
};

export default Meeting;

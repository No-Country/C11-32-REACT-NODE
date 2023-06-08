import { MicOff, MicOn, VideoCamOff, VideoCamOn } from "@/assets";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { trimName } from "../../../utils/helpers";

const ParticipantListItem = ({ participantId }: { participantId: string }) => {
  const { micOn, webcamOn, displayName, isLocal } =
    useParticipant(participantId);

  return (
    <div
      className="relative mt-2 flex items-center justify-center rounded-lg p-2 text-white shadow-lg"
      style={{ backgroundColor: "#6192ca" }}
    >
      <div
        style={{
          color: "#212032",
        }}
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded bg-slate-300 text-lg"
      >
        {displayName?.charAt(0).toUpperCase()}
      </div>
      <div className="ml-2 mr-1 flex flex-1">
        <p className="overflow-hidden overflow-ellipsis whitespace-pre-wrap text-base">
          {isLocal ? "You" : trimName(displayName, 15)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 pr-2">
        <div>
          {micOn ? <MicOn fillColor="#fff" /> : <MicOff fillColor="#fff" />}
        </div>
        <div>
          {webcamOn ? (
            <VideoCamOn fillColor="#fff" />
          ) : (
            <VideoCamOff fillColor="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

const ParticipantPanel = () => {
  const { participants } = useMeeting();

  return (
    <div className="flex h-full flex-col overflow-auto">
      <div className="h-full p-4">
        {[...participants.keys()].map((participantId) => (
          <ParticipantListItem
            participantId={participantId}
            key={participantId}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticipantPanel;

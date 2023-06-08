import { MicOff, MicOn } from "@/assets";
import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "../../../pages/Meeting/Meeting.css";

const ParticipantView = ({ participantId }: { participantId: string }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const micRef = useRef<HTMLAudioElement | null>(null);

  const {
    displayName,
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isLocal,
    isActiveSpeaker,
  } = useParticipant(participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  const isPresenting = false;

  const trimName = (name: string, tructedLength: number): string => {
    if (name?.length > tructedLength) {
      return `${name.substring(0, tructedLength)}...`;
    } else {
      return name;
    }
  };

  return (
    <div
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      className={`video-cover relative h-full w-full overflow-hidden rounded-lg bg-gray-700 shadow-lg`}
    >
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn ? (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-800 2xl:h-[92px] 2xl:w-[92px]`}
          >
            <p className="text-2xl text-white">
              {String(displayName).charAt(0).toUpperCase()}
            </p>
          </div>
        </div>
      )}
      <div
        className="absolute bottom-2 left-2 flex items-center justify-center rounded-md p-2"
        style={{
          backgroundColor: "#00000066",
          transition: "all 200ms",
          transitionTimingFunction: "linear",
          transform: `scale(${mouseOver ? 1 : 0})`,
        }}
      >
        {!micOn && !isPresenting ? (
          <MicOff fillColor="#fff" />
        ) : micOn && isActiveSpeaker ? (
          <MicOn fillColor="#fff" />
        ) : null}
        <p className="ml-0.5 text-sm text-white">
          {isPresenting
            ? isLocal
              ? `You are presenting`
              : `${trimName(displayName, 15)} is presenting`
            : isLocal
            ? "You"
            : `${trimName(displayName, 26)}`}
        </p>
      </div>
    </div>
  );
};

export default ParticipantView;

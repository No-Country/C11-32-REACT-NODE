import { MicOff, MicOn, ScreenShare } from "@/assets";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

const PresenterView = () => {
  const { presenterId, toggleScreenShare } = useMeeting();

  const {
    micOn,
    isLocal,
    screenShareStream,
    screenShareAudioStream,
    screenShareOn,
    displayName,
  } = useParticipant(presenterId!);

  const mediaStream = useMemo(() => {
    if (screenShareOn && screenShareStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (
      !isLocal &&
      audioPlayer.current &&
      screenShareOn &&
      screenShareAudioStream
    ) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareAudioStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {
        if (
          err.message ===
          "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
        ) {
          console.error("audio" + err.message);
        }
      });
    } else {
      if (audioPlayer.current) {
        audioPlayer.current.srcObject = null;
      }
    }
  }, [screenShareAudioStream, screenShareOn, isLocal]);

  return (
    <div
      className={` relative m-4 w-full overflow-hidden rounded-lg bg-gray-700 shadow-lg`}
      style={{ maxHeight: "calc(100vh - 124px)" }}
    >
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
      <div className={"video-contain absolute h-full w-full"}>
        <ReactPlayer
          playsinline
          playIcon={<></>}
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={mediaStream}
          height={"100%"}
          width={"100%"}
          style={{
            filter: isLocal ? "blur(1rem)" : undefined,
          }}
          onError={(err) => {
            console.log(err, "presenter video error");
          }}
        />
        <div
          className="absolute bottom-2 left-2 flex items-center justify-center rounded-md bg-gray-800 p-2"
          style={{
            transition: "all 200ms",
            transitionTimingFunction: "linear",
          }}
        >
          {!micOn ? <MicOff fillColor="#fff" /> : <MicOn fillColor="#fff" />}
          <p className="text-sm text-white">
            {isLocal ? `You are presenting` : `${displayName} is presenting`}
          </p>
        </div>
        {isLocal && (
          <>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-2xl bg-gray-700 p-10">
              <div className="mt-4">
                <p className="text-xl font-semibold text-white">
                  You are presenting to everyone
                </p>
              </div>
              <div className="mt-8">
                <button
                  className="flex gap-2 rounded px-4 py-2 text-center text-sm font-medium text-white"
                  style={{ backgroundColor: "#FF4C00" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleScreenShare();
                  }}
                >
                  <span className="hidden md:static">
                    <ScreenShare fillColor="#fff" />
                  </span>
                  STOP PRESENTING
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PresenterView;

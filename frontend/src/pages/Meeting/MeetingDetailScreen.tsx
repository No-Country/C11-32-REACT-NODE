import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  MicOff,
  MicOn,
  VideoCamOff,
  VideoCamOn,
  logoNuevo,
} from "@/assets";
import { SettingBox } from "@/components";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks";
import { dataVideoCall } from "@/models";
import { joinRoom } from "@/services";

interface Device {
  deviceId: string;
  label: string;
}

interface Props {
  micEnabled: boolean;
  webcamEnabled: boolean;
  setSelectedMic: (deviceId: string) => void;
  setSelectedWebcam: (deviceId: string) => void;
  setMicOn: (micOn: boolean) => void;
  selectedMic: string;
  selectedWebcam: string;
  setWebcamOn: (webcamOn: boolean) => void;
  setStartMeeting: (startMeeting: boolean) => void;
  meetId: string;
}

const MeetingDetailScreen = ({
  micEnabled,
  webcamEnabled,
  setSelectedMic,
  setSelectedWebcam,
  setMicOn,
  selectedMic,
  selectedWebcam,
  meetId,
  setWebcamOn,
  setStartMeeting,
}: Props) => {
  const [mics, setMics] = useState<Device[]>([]);
  const [webcams, setWebcams] = useState<Device[]>([]);
  const [settingDialogueOpen, setSettingDialogueOpen] =
    useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { auth } = useAuth() ?? {};

  const { mutate } = useMutation({
    mutationFn: (data: dataVideoCall) => joinRoom(data, auth?.token),
  });

  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const micList: Device[] = devices.filter(
          (device) => device.kind === "audioinput"
        );
        const webcamList: Device[] = devices.filter(
          (device) => device.kind === "videoinput"
        );

        setMics(micList);
        setWebcams(webcamList);

        if (micList.length > 0) {
          setSelectedMic(micList[0].deviceId);
        }

        if (webcamList.length > 0) {
          setSelectedWebcam(webcamList[0].deviceId);
        }
      } catch (err) {
        toast.error("Failed to get media devices:");
      }
    };

    getMediaDevices();
  }, []);

  useEffect(() => {
    const handleCameraStream = async () => {
      try {
        if (videoRef.current) {
          if (webcamEnabled && selectedWebcam) {
            const constraints: MediaStreamConstraints = {
              video: { deviceId: selectedWebcam },
            };
            if (!streamRef.current) {
              const stream = await navigator.mediaDevices.getUserMedia(
                constraints
              );
              streamRef.current = stream;
            }
            videoRef.current.srcObject = streamRef.current;
          } else {
            videoRef.current.srcObject = null;
            if (streamRef.current) {
              streamRef.current.getTracks().forEach((track) => {
                track.stop();
              });
              streamRef.current = null;
            }
          }
        }
      } catch (error) {
        toast.error("Failed to access camera:");
      }
    };

    handleCameraStream();
  }, [webcamEnabled, selectedWebcam]);

  useEffect(() => {
    const handleChangeMicrophone = async () => {
      try {
        if (micEnabled && selectedMic && streamRef.current) {
          const audioTrack = streamRef.current.getAudioTracks()[0];
          const constraints: MediaStreamConstraints = {
            audio: { deviceId: { exact: selectedMic } },
          };

          const newStream = await navigator.mediaDevices.getUserMedia(
            constraints
          );
          const newAudioTrack = newStream.getAudioTracks()[0];
          streamRef.current.removeTrack(audioTrack);
          streamRef.current.addTrack(newAudioTrack);
        }
      } catch (error) {
        toast.error("Failed to change audio input device:");
      }
    };

    handleChangeMicrophone();
  }, [micEnabled, selectedMic]);

  const toggleMic = () => {
    if (micEnabled) {
      if (streamRef.current) {
        streamRef.current.getAudioTracks().forEach((track) => {
          track.stop();
        });
        streamRef.current = null;
      }
      setMicOn(false);
    } else {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          streamRef.current = stream;
          setMicOn(true);
        })
        .catch((error) => {
          toast.error("Failed to access microphone:");
          console.error("Failed to access microphone:", error);
        });
    }
  };

  const toggleWebcam = () => {
    if (webcamEnabled) {
      if (streamRef.current) {
        streamRef.current.getVideoTracks().forEach((track) => {
          track.stop();
        });
        streamRef.current = null;
      }
      setWebcamOn(false);
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream;
          setWebcamOn(true);
        })
        .catch(() => {
          toast.error("Failed to access camera:");
        });
    }
  };

  const changeMic = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMic(event.target.value);
  };

  const changeWebcam = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWebcam(event.target.value);
  };

  const openSettingDialogue = () => {
    setSettingDialogueOpen(true);
  };

  const closeSettingDialogue = () => {
    setSettingDialogueOpen(false);
  };

  const handleJoinCall = () => {
    if (!auth) return;
    setStartMeeting(true);
    mutate({ meet_id: meetId, user_id: auth?.id });
  };

  return (
    <div className="fixed inset-0 bg-white" style={{ zIndex: 9999 }}>
      <div className="flex h-full flex-col">
        <div className="h-20 px-4 pt-2 sm:px-6 lg:px-8">
          <img
            src={logoNuevo}
            alt="logo"
            className="max-h-full object-contain"
          />
        </div>
        <div className="m-1 flex flex-1 items-center justify-center md:m-[72px]">
          <div className="grid w-full grid-cols-12 ">
            <div className="col-span-12 md:col-span-7 2xl:col-span-6">
              <div className="flex flex-col p-1.5 sm:p-4 lg:p-6">
                <div className="relative" style={{ height: "45vh" }}>
                  <video
                    ref={videoRef}
                    autoPlay={true}
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                    style={{ backgroundColor: "rgb(28, 28, 28)" }}
                  />
                  {!webcamEnabled && (
                    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                      <p className="text-xl text-white xl:text-lg 2xl:text-xl">
                        This camera is off
                      </p>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-4 xl:bottom-6">
                    <button
                      onClick={toggleMic}
                      className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg ${
                        micEnabled ? "bg-white" : "bg-red-600"
                      }`}
                    >
                      {micEnabled ? (
                        <MicOn fillColor={"#000000"} />
                      ) : (
                        <MicOff fillColor={"#fff"} />
                      )}
                    </button>
                    <button
                      className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg ${
                        webcamEnabled ? "bg-white " : "bg-red-600"
                      }`}
                      onClick={toggleWebcam}
                    >
                      {webcamEnabled ? (
                        <VideoCamOn fillColor={"#000000"} />
                      ) : (
                        <VideoCamOff fillColor={"#fff"} />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  onClick={openSettingDialogue}
                  className="mt-4 flex gap-2 self-center rounded bg-gray-700 px-4 py-1 text-white shadow-lg"
                  style={{
                    backgroundColor: "#4484CE",
                  }}
                >
                  <CheckCircle />
                  <span>Check your audio and video</span>
                </button>
              </div>
            </div>
            <div className="col-span-12 flex h-full items-center justify-center md:col-span-5 2xl:col-span-6">
              <div className="flex w-full flex-col p-1.5 sm:p-4 lg:p-12">
                <button
                  className="button-meeting w-full rounded-lg px-4  py-3 "
                  onClick={handleJoinCall}
                  disabled={!auth}
                >
                  Join a metting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {settingDialogueOpen && (
        <SettingBox
          handleClose={closeSettingDialogue}
          webcams={webcams}
          mics={mics}
          changeWebcam={changeWebcam}
          changeMic={changeMic}
          selectedMic={selectedMic}
          selectedWebcam={selectedWebcam}
        />
      )}
    </div>
  );
};

export default MeetingDetailScreen;

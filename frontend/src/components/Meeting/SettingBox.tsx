import { Close } from "@/assets";
import { useState } from "react";

interface Device {
  deviceId: string;
  label: string;
}

interface Props {
  handleClose: () => void;
  webcams: Device[];
  mics: Device[];
  changeWebcam: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeMic: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedMic: string;
  selectedWebcam: string;
}

const SettingDialogueBox = ({
  handleClose,
  mics,
  webcams,
  selectedMic,
  selectedWebcam,
  changeWebcam,
  changeMic,
}: Props) => {
  const [setting, setSetting] = useState<string>("Audio");

  const handleSetting = (setting: string) => {
    setSetting(setting);
  };

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50 ">
      <div
        className="relative m-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow"
        style={{ height: "50vh" }}
      >
        <button className="absolute right-2 top-2" onClick={handleClose}>
          <Close fillColor="#000000" />
        </button>
        <h5 className="mb-4 text-center text-lg font-semibold">Settings</h5>
        <div className="mb-4 flex justify-center gap-1 text-center">
          {["Audio", "Video"].map((option) => (
            <button
              key={option}
              style={{
                backgroundColor: `${
                  option === setting ? "#4484CE" : "#B0C8E7"
                }`,
              }}
              className="mb-2  rounded-lg px-4 py-2 font-bold text-white"
              onClick={() => handleSetting(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {setting === "Audio" ? (
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              <p className="mb-3 text-left font-semibold">Microphones</p>
              <select
                value={selectedMic}
                onChange={changeMic}
                className="option-hover w-full rounded border border-gray-300 p-2 focus:border-gray-800 focus:outline-none focus:ring-gray-800"
              >
                {mics.map((mic) => (
                  <option
                    key={mic.deviceId}
                    value={mic.deviceId}
                    style={{
                      backgroundColor: "#FFF",
                    }}
                  >
                    {mic.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              <p className="mb-3 text-left font-semibold">Camera</p>
              <select
                value={selectedWebcam}
                onChange={changeWebcam}
                className="w-full rounded border border-gray-300 p-2 focus:border-gray-800 focus:outline-none focus:ring-gray-800"
              >
                {webcams.map((webcam) => (
                  <option key={webcam.deviceId} value={webcam.deviceId}>
                    {webcam.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingDialogueBox;

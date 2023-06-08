import { logoNuevo } from "@/assets";
import { ROUTES } from "@/routes";
import { useNavigate } from "react-router-dom";

const LeaveScreen = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate(ROUTES.rooms.default, { replace: true });
  };
  return (
    <div
      className="fixed inset-0 flex-1 flex-col items-center justify-center bg-white "
      style={{ zIndex: 9999 }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mb-12 h-20">
          <img
            src={logoNuevo}
            alt="logo"
            className="max-h-full object-contain"
          />
        </div>
        <h1 className="text-2xl text-black ">You left the meeting!</h1>
        <div className="mt-8">
          <button
            className="`w-full button-meeting rounded-lg px-6  py-3 "
            onClick={handleReturnHome}
          >
            Return to main screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveScreen;

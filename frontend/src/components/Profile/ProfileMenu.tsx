import { MENU_PROFILE } from "@/constants";
import Avvvatars from "avvvatars-react";
import { FC, useState } from "react";
import { ProfileItem } from ".";

interface ProfileMenuProps {
  name: string;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ name }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="group inline-flex items-center gap-2 rounded-md border px-4 py-2 text-base hover:text-gray-900"
        aria-expanded="false"
      >
        <Avvvatars value={name} />
        <span>{name}</span>
        <svg
          className={`ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 ${
            open ? "rotate-180  duration-300" : "duration-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="z-full absolute left-1/2 mt-2 w-56  max-w-md -translate-x-1/2 transform ">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            {MENU_PROFILE.map(({ title: name, Icon, path }) => (
              <ProfileItem title={name} Icon={Icon} path={path} key={name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

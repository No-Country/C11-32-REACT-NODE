import { MenuProfile } from "@/constants";
import { FC } from "react";
import { Link } from "react-router-dom";

const ProfileItem: FC<MenuProfile> = ({ Icon, title: name, path }) => {
  return (
    <div className="relative border border-black/5 bg-white/50 px-8 py-5 backdrop-blur-sm">
      <Link
        className="py1 -m-3 flex items-start gap-4 rounded-lg p-2"
        to={path}
      >
        <Icon />
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default ProfileItem;

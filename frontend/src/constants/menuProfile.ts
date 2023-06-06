import { ExitIc, UserIc } from "@/assets";
import { ROUTES } from "@/routes";
import { ElementType } from "react";
export interface MenuProfile {
  title: string;
  Icon: ElementType;
  path: string;
}

export const MENU_PROFILE: MenuProfile[] = [
  { title: "profile", Icon: UserIc, path: ROUTES.auth.profile },
  { title: "sign out", Icon: ExitIc, path: ROUTES.auth.logout },
];

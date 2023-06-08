import { MENU_PROFILE } from "@/constants";
import { Auth } from "@/context/AuthProvider";

interface NavItemsToLogin {
  auth: Auth | null | undefined;
  navItems: NavItem[];
}

export interface NavItem {
  path: string;
  title: string;
}

const navItemsToExclude = ["Login", "Register"];

export const filterNavItemsToLogin = ({ auth, navItems }: NavItemsToLogin) => {
  if (!auth) return navItems;

  return navItems.filter(({ title }) => !navItemsToExclude.includes(title));
};

export const mergeProfileWithNavItems = ({
  auth,
  navItems,
}: NavItemsToLogin) => {
  if (!auth) return navItems;
  const profileMenu = MENU_PROFILE.map(({ title, path }) => ({ title, path }));

  return [...navItems, ...profileMenu];
};

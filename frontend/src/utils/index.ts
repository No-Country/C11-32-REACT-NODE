import { Auth } from "@/context/AuthProvider";

interface FilterNavItemsToLogin {
  auth: Auth | null | undefined;
  navItems: NavItem[];
}

export interface NavItem {
  path: string;
  title: string;
}

const navItemsToExclude = ["Login", "Register"];

export const filterNavItemsToLogin = ({
  auth,
  navItems,
}: FilterNavItemsToLogin) => {
  if (!auth) return navItems;

  return navItems.filter(({ title }) => !navItemsToExclude.includes(title));
};

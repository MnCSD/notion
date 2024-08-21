import HomeIcon from "@/components/home-icon";
import Inbox from "@/components/inbox";
import SearchIcon from "@/components/search-icon";
import SettingsIcon from "@/components/settings";
import Sparkles from "@/components/sparkles";
import { Search } from "lucide-react";

export const LINKS = [
  {
    label: "Search",
    type: "popup",
    icon: SearchIcon,
  },
  {
    label: "Notion AI",
    type: "link",
    icon: Sparkles,
    href: "/chat",
  },
  {
    label: "Home",
    type: "link",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Inbox",
    type: "link",
    icon: Inbox,
    href: "/inbox",
  },
  {
    label: "Settings & members",
    type: "popup",
    icon: SettingsIcon,
  },
];

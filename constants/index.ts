import Calendar from "@/components/calendar";
import Geometry from "@/components/geometry";
import Help from "@/components/help";
import HomeIcon from "@/components/home-icon";
import Inbox from "@/components/inbox";
import SearchIcon from "@/components/search-icon";
import SettingsIcon from "@/components/settings";
import Sparkles from "@/components/sparkles";
import Trash from "@/components/trash";
import { Boxes, CalendarIcon, HelpCircle, Search, Trash2 } from "lucide-react";

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

export const secondaryLinks = [
  {
    label: "Calendar",
    href: "popup",
    icon: Calendar,
  },
  {
    label: "Templates",
    type: "link",
    href: "/gallery",
    icon: Geometry,
  },
  {
    label: "Trash",
    type: "popup",
    icon: Trash,
  },
  {
    label: "Help & Support",
    type: "popup",
    icon: Help,
  },
];

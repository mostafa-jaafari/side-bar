// sidebarData.ts
import {
  Home,
  Settings,
  Database,
  Target,
  Users,
  Star,
  HelpCircle,
  Shield,
  Lock,
  Calendar,
  FileText,
  BarChart,
  type LucideIcon,
} from "lucide-react";

type SidebarItem = {
  label: string;
  icon: LucideIcon;
  path: string;
  children?: SidebarItem[];
  section?: "main" | "teams" | "reports" | "metrics";
  locked?: boolean;
};

export const MainHome_Links: SidebarItem[] = [
  {
    label: "Home",
    icon: Home,
    path: "/",
    section: "main",
  },
  {
    label: "Settings",
    icon: Settings,
    section: "main",
    path: "/",
    children: [
      { 
        label: "Data source",
        icon: Database,
        path: "/settings/data-source" 
    },
      { 
        label: "Targets",
        icon: Target,
        path: "/settings/targets" 
    },
      { 
        label: "Members",
        icon: Users,
        path: "/settings/members" 
    },
      { 
        label: "Upgrade",
        icon: Star,
        path: "/settings/upgrade" 
    },
    ],
  },
  {
    label: "Help center",
    icon: HelpCircle,
    path: "/help",
    section: "main",
  },
];

export const Teams_Links: SidebarItem[] = [
    {
        label: "All teams",
        icon: Users,
        path: "/teams",
        section: "teams",
    },
    {
        label: "Finance",
        icon: Shield,
        path: "/teams/finance",
        section: "teams",
        locked: true,
    },
    {
        label: "Product",
        icon: Shield,
        path: "/teams/product",
        section: "teams",
        locked: true,
    },
];
export const Reports_Links: SidebarItem[] = [
    {
        label: "All reports",
        icon: Calendar,
        path: "/reports",
        section: "reports",
    },
    {
        label: "My reports",
        icon: FileText,
        path: "/reports/my",
        section: "reports",
    },
];
export const Metrics: SidebarItem[] = [
    {
        label: "Metrics catalog",
        icon: BarChart,
        path: "/metrics",
        section: "metrics",
  },
];
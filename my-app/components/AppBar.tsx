"use client";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  BriefcaseBusinessIcon,
  GithubIcon,
  HomeIcon,
  ApertureIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
  RocketIcon,
  SquareUserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface DockItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const dockItems = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="text-white"/>,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: <BriefcaseBusinessIcon className="text-white"/>,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <RocketIcon className="text-white"/>,
  },
  {
    name: "Art",
    href: "/art",
    icon: <ApertureIcon className="text-white"/>
  },
  {
    name: "Chat",
    href: "/chat",
    icon: <MessageCircleIcon className="text-white"/>,
  },
  {
    name: "Github",
    href: "https://github.com/Chai-B",
    icon: <GithubIcon className="text-white"/>,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/chaitanyabansal1650/",
    icon: <LinkedinIcon className="text-white"/>,
  },
  {
    name: "Resume",
    href: "https://github.com/Chai-B/Chai-B/blob/main/resume.pdf",
    icon: <SquareUserRound className="text-white"/>,
  },
  {
    name: "Email",
    href: "mailto:bansalchaitanya1234@gmail.com",
    icon: <MailIcon className="text-white"/>,
  },
];

export function HomeDock() {
  const pathname = usePathname();
  if (pathname === "/chat") return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[101] -translate-x-1/2 md:bottom-10 md:w-auto">
      <Dock
        magnification={60}
        distance={140}
        className="scale-90 border-black/20 bg-neutral-900 md:scale-100"
      >
        {dockItems.map((item: DockItem) => (
          <DockIcon
            key={item.name}
            href={item.href}
            tooltip={item.name}
            className="cursor-pointer"
          >
            {item.icon}
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
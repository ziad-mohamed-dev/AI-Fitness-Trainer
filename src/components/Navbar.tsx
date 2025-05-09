"use client";

import {
  DumbbellIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useSidebar } from "./ui/sidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const pathName = usePathname();

  const navLinks = [
    { href: "/", title: "Home", icon: <HomeIcon size={16} /> },
    {
      href: "/generate-program",
      title: "Generate",
      icon: <DumbbellIcon size={16} />,
    },
    { href: "/profile", title: "Profile", icon: <UserIcon size={16} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 border-b border-border py-3 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2">
          <MenuIcon
            onClick={toggleSidebar}
            className="md:hidden cursor-pointer"
          />
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-1 rounded">
              <ZapIcon className="text-primary w-4 h-4" />
            </div>
            <span className="sm:text-xl font-bold font-sans">
              fitness <span className="text-primary">trainer</span>.ai
            </span>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-5 text-sm">
          {/* Signed in ui */}
          <SignedIn>
            {navLinks.map(({ href, icon, title }) => (
              <Link
                href={href}
                className={`hidden md:flex items-center gap-1.5 ${(pathName.includes(href) && href !== "/") || pathName === href ? "bg-primary/10 border" : "hover:text-primary"} transition-colors px-2 py-1 rounded-lg`}
                key={href}
              >
                {icon}
                <span>{title}</span>
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 hidden md:block"
            >
              <Link href="/generate-program" className="border">
                Get Started
              </Link>
            </Button>
            <UserButton />
          </SignedIn>
          {/* Signed out ui */}
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                Sign In
              </Button>
            </SignInButton>
            <div className="hidden sm:block">
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

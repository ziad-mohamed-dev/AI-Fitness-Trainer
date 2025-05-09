import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto py-6 px-8 flex flex-wrap gap-8 justify-center md:justify-between items-center">
        {/* LOGO & RIGHTS */}
        <div className="space-y-1">
          <Link href="/" className="flex items-center gap-2 mx-auto w-fit">
            <div className="bg-primary/10 p-1 rounded">
              <ZapIcon className="text-primary w-4 h-4" />
            </div>
            <span className="sm:text-xl font-bold font-sans">
              fitness <span className="text-primary">trainer</span>.ai
            </span>
          </Link>
          <div className="text-muted-foreground text-xs">
            @ {new Date().getFullYear()} fittnes trainer .ai - all rights
            reserved
          </div>
        </div>
        {/* LINKS LIST */}
        <div className="grid grid-cols-3 gap-x-4 justify-items-center gap-y-2 text-muted-foreground">
          <p>About</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Help</p>
        </div>
        {/* SYSTEM OPERATIONAL */}
        <div className="border flex gap-2 items-center p-2 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> System
          Operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;

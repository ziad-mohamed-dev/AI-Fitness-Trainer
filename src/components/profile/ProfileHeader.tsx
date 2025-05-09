import Image from "next/image";
import CornerElements from "./CornerElements";
import { UserResource } from "@clerk/types";

interface ProfileHeaderProps {
  user: UserResource | null | undefined;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="relative p-6 border backdrop-blur-sm">
      <CornerElements />
      <div className="flex gap-5 sm:gap-10 flex-col items-center sm:flex-row flex-wrap justify-center">
        {/* USER IMAGE */}
        <div className="w-24 h-24 relative rounded-lg overflow-hidden">
          {user ? (
            <>
              <Image
                fill
                src={user.imageUrl}
                alt="user image"
                sizes="96px"
                priority
              />
              <span className="block absolute bottom-1 right-1 bg-green-500 size-3 rounded-full"></span>
            </>
          ) : (
            <div className="h-full animate-pulse bg-gray-600"></div>
          )}
        </div>
        {/* USER INFO */}
        <div className="flex-grow-1 place-self-stretch space-y-2">
          {/* USER NAME */}
          {user ? (
            <div className="flex flex-wrap justify-between gap-2">
              <h1 className="capitalize text-lg sm:text-2xl font-semibold line-clamp-1">
                {user.fullName}
              </h1>
              <div className="border px-2 py-1 rounded-lg flex items-center gap-2">
                <span className="bg-primary size-2 block rounded-full"></span>
                <span className="font-mono text-primary text-xs">
                  USER ACTIVE
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-between gap-2">
              <h1 className="h-6.5 w-32 bg-gray-600 animate-pulse rounded-md"></h1>
              <div className="bg-gray-600 animate-pulse rounded-lg w-20 h-6.5"></div>
            </div>
          )}
          {/* SEPARATOR */}
          <div className="h-px bg-border"></div>
          {/* EMAIL */}
          {user ? (
            <p className="text-muted-foreground mx-auto w-fit sm:mx-0">
              {user.emailAddresses[0].emailAddress}
            </p>
          ) : (
            <p className="bg-gray-600 animate-pulse h-4.5 w-48 mx-auto sm:mx-0 rounded"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

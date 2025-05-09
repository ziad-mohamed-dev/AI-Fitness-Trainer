import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  AppleIcon,
  ChevronRightIcon,
  Clock4Icon,
  Dumbbell,
  ShieldIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { USER_PROGRAMS } from "@/constants";
import Link from "next/link";

const ProgramGallery = () => {
  return (
    <div className="border rounded-lg">
      {/* HEADER */}
      <h2 className="flex justify-between p-3 bg-primary-foreground border-b">
        <span className="text-primary flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
          Program Gallery
        </span>
        <span className="text-muted-foreground">Feature Plans</span>
      </h2>
      {/* CONTENT */}
      <div className="p-4 bg-card/90 space-y-5 text-center">
        <h1 className="text-4xl font-bold">
          AI-Generated <span className="text-primary">Programs</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Explore personalized fitness plans that our AI assistant has created
          for other users
        </p>
        {/* STATS */}
        <div className="flex gap-3 sm:gap-10 py-6 text-mono items-center mx-auto w-fit">
          <div className="flex flex-col">
            <div className="text-primary text-2xl">500+</div>
            <div className="text-xs tracking-wide">ACTIVE USERS</div>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="flex flex-col">
            <div className="text-primary text-2xl">3min</div>
            <div className="text-xs tracking-wide">GENERATION</div>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="flex flex-col">
            <div className="text-primary text-2xl">100%</div>
            <div className="text-xs tracking-wide">PERSONALIZED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
      {USER_PROGRAMS.map((program) => (
        <Card key={program.id}>
          <CardHeader className="flex justify-between items-center py-3 border-b-1 bg-primary-foreground">
            <CardTitle>USER.{program.id}</CardTitle>
            <CardDescription>{program.fitness_level}</CardDescription>
          </CardHeader>
          <CardContent className="py-6 space-y-4">
            {/* USER DETAILS */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <Image
                  src={program.profilePic}
                  width={52}
                  height={52}
                  className="rounded-full"
                  alt="user"
                  sizes="52px"
                />
                <div>
                  <p className="text-lg">
                    {program.first_name}
                    <span className="text-primary">.exe</span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <UsersIcon className="inline-block" /> {program.age}y .{" "}
                    {program.workout_days}
                    d/week
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="bg-primary/10 text-primary flex items-center gap-1 py-1 px-2 border rounded-md">
                  <SparklesIcon className="size-4" />
                  {program.fitness_goal}
                </div>
                <div className="text-muted-foreground flex items-center gap-1">
                  <Clock4Icon className="size-4" />
                  v3.5
                </div>
              </div>
            </div>
            {/* USER'S PROGRAM */}
            <div className="space-y-4">
              <div className="flex gap-2 items-start">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Dumbbell className="text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="line-clamp-1">{program.workout_plan.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {program.equipment_access}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <AppleIcon className="text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="line-clamp-1">{program.diet_plan.title}</p>
                  <p className="text-sm text-muted-foreground">
                    System optimized nutrition
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <ShieldIcon className="text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="line-clamp-1">AI Safety Protocols</p>
                  <p className="text-sm text-muted-foreground">
                    Protection systems enabled
                  </p>
                </div>
              </div>
            </div>
            {/* SPERATOR */}
            <div className="h-px bg-gradient-to-b from-transparent via-border rounded-full to-transparent text-primary"></div>
            {/* PROGRAM DESCRIPTION */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              <ChevronRightIcon className="text-primary inline-block size-4 -ml-1" />
              {program.workout_plan.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const UsersProgramSection = () => {
  return (
    <section className="container mx-auto sm:p-10 xl:p-24 space-y-16">
      <ProgramGallery />
      <ProgramCards />
      <div className="flex flex-col items-center gap-2">
        <Button asChild>
          <Link href="/generate-program">
            Generate Your Program <SparklesIcon className="size-3.5" />
          </Link>
        </Button>
        <p className="text-muted-foreground">
          Join 500+ users with AI-customized fitness programs
        </p>
      </div>
    </section>
  );
};

export default UsersProgramSection;

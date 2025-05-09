import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const NoFitnessPlan = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-mono text-center">
        <span className="text-primary">No</span> fitness plans yet
      </h1>
      <p className="text-muted-foreground text-center">
        Start by creating a personalized fitness and diet plan tailored to your
        specific goals and needs
      </p>
      <Button asChild size="lg" className="text-lg px-8 py-6 text-primary-foreground font-medium">
        <Link href="/generate-program">
          Create Your First Plan <ArrowRightIcon className="size-5" />
        </Link>
      </Button>
    </div>
  );
};

export default NoFitnessPlan;

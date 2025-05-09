import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CornerElements from "./CornerElements";
import { Plan } from "@/types/plan";
import { AppleIcon, DumbbellIcon } from "lucide-react";
import WorkoutTap from "./WorkoutTap";
import DietTap from "./DietTap";

const PlanDetails = ({ currentPlan }: { currentPlan: Plan }) => {
  return (
    <div className="border relative p-6 backdrop-blur-sm">
      <CornerElements />
      {/* PLAN TITLE */}
      <div className="flex items-center gap-2 font-semibold mb-4">
        <span className="block size-2.5 bg-primary rounded-full"></span>PLAN:
        <span className="text-primary capitalize">{currentPlan.name}</span>
      </div>
      <Tabs defaultValue="workout">
        <TabsList className="w-full bg-transparent border mb-4">
          <TabsTrigger
            value="workout"
            className="data-[state=active]:bg-primary/20 data-[state-active]:text-primary transition"
          >
            <DumbbellIcon />
            Workout Plan
          </TabsTrigger>
          <TabsTrigger
            value="diet"
            className="data-[state=active]:bg-primary/20 data-[state-active]:text-primary transition"
          >
            <AppleIcon />
            Diet Plan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="workout">
          <WorkoutTap workoutPlan={currentPlan.workoutPlan} />
        </TabsContent>
        <TabsContent value="diet">
          <DietTap dietPlan={currentPlan.dietPlan} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlanDetails;

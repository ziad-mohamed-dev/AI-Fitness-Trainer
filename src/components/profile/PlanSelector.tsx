import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import CornerElements from "./CornerElements";
import { Plan } from "@/types/plan";

interface PlanSelectorProps {
  allPlans: Plan[];
  selectedPlan: Plan;
  setSelectedPlan: Dispatch<SetStateAction<Plan | undefined>>;
}

const PlanSelector = ({
  allPlans,
  selectedPlan,
  setSelectedPlan,
}: PlanSelectorProps) => {
  return (
    <div className="border relative p-6 backdrop-blur-sm">
      <CornerElements />
      {/* PLANS SELECTOR HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">
          <span className="text-primary">Your</span> Fitness Plans
        </h2>
        <span className="text-muted-foreground text-xs font-mono">
          TOTAL: {allPlans.length}
        </span>
      </div>
      {/* PLANS BUTTON */}
      <div className="flex flex-wrap gap-3">
        {allPlans.map((plan) => (
          <Button
            key={plan._id}
            onClick={() => setSelectedPlan(plan)}
            className={`border rounded font-mono tracking-tight text-xs ${selectedPlan._id === plan._id ? "bg-primary/20 hover:bg-primary/20 text-primary border-primary" : "bg-transparent border-border text-foreground hover:bg-primary/10"}`}
          >
            {plan.name}
            {plan.isActive && (
              <span className="bg-green-500/30 px-1 rounded text-green-500">
                ACTIVE
              </span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlanSelector;

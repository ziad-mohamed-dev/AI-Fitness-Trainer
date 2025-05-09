"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PlanDetails from "@/components/profile/PlanDetails";
import PlanSelector from "@/components/profile/PlanSelector";
import ShowPlansSkeleton from "@/components/profile/ShowPlansSkeleton";
import NoFitnessPlan from "@/components/profile/NoFitnessPlan";
import { Plan } from "@/types/plan";

const ProfilePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const { user } = useUser();
  const userId = user?.id;
  const allPlans = useQuery(
    api.plans.getUserPlans,
    userId ? { userId } : "skip"
  );

  // SET ACTIVE PLAN AS DEFUALT
  useEffect(() => {
    if (!selectedPlan && allPlans) {
      setSelectedPlan(allPlans.find((plan) => plan.isActive));
    }
  }, [selectedPlan, allPlans]);

  return (
    <div className="container mx-auto space-y-12">
      <ProfileHeader user={user} />
      {allPlans ? (
        allPlans.length > 0 && selectedPlan ? (
          <>
            <PlanSelector
              allPlans={allPlans}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
            <PlanDetails currentPlan={selectedPlan} />
          </>
        ) : (
          <NoFitnessPlan />
        )
      ) : (
        <ShowPlansSkeleton />
      )}
    </div>
  );
};

export default ProfilePage;

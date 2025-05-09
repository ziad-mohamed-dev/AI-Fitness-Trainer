import { DietPlan } from "@/types/plan";

interface DietTapProps {
  dietPlan: DietPlan;
}

const DietTap = ({ dietPlan }: DietTapProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">DAILY CALORIE TARGET</p>
        <p className="text-primary font-mono">{dietPlan.dailyCalories} KCAL</p>
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-primary to-transparent"></div>
      {dietPlan.meals.map(({ name, foods }, i) => (
        <div key={i} className="border rounded-lg p-2">
          <div className="flex items-center gap-2">
            <span className="block size-2 bg-primary rounded-full"></span>
            <h2 className="font-mono">{name}</h2>
          </div>
          <ul className="space-y-2">
            {foods.map((food, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="text-primary font-mono">
                  {`${i + 1}`.padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{food}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DietTap;

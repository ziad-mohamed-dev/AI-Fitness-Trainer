export interface WorkoutPlan {
  schedule: string[];
  exercises: {
    day: string;
    routines: {
      name: string;
      sets: number;
      reps: number;
    }[];
  }[];
}

export interface DietPlan {
  dailyCalories: number;
  meals: { name: string; foods: string[] }[];
}

export interface Plan {
  _id: string;
  userId: string;
  name: string;
  workoutPlan: WorkoutPlan;
  dietPlan: DietPlan;
  isActive: boolean;
  _creationTime: number;
}

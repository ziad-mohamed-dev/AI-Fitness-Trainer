import { WorkoutPlan } from "@/types/plan";
import { CalendarIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface WorkoutTapProps {
  workoutPlan: WorkoutPlan;
}

const WorkoutTap = ({ workoutPlan }: WorkoutTapProps) => {
  return (
    <div className="space-y-4">
      {/* SCHEDULE */}
      <div className="flex gap-2 items-center">
        <CalendarIcon className="size-4 hidden sm:block text-primary" />
        <span className="text-muted-foreground text-sm font-mono">
          SCHEDULE:{" "}
          <span className="capitalize">{workoutPlan.schedule.join(", ")}</span>
        </span>
      </div>
      {/*  EXERCISES */}
      <Accordion type="single" collapsible className="space-y-4">
        {workoutPlan.exercises.map((exercise, i) => (
          <AccordionItem
            value={exercise.day}
            key={i}
            className="border rounded-lg"
          >
            <AccordionTrigger className="font-mono hover:no-underline hover:bg-primary/10 p-3 rounded-none rounded-tl-lg rounded-tr-lg">
              <div className="flex-grow-1 justify-between flex items-center">
                <span className="text-primary">{exercise.day}</span>
                <span className="text-muted-foreground text-xs">
                  {exercise.routines.length} EXERCISES
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-2 space-y-3">
              {exercise.routines.map(({ name, sets, reps }, i) => (
                <div key={i} className="border rounded-lg p-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2>{name}</h2>
                    <div className="flex items-center gap-2 font-mono text-xs text-nowrap">
                      <span className="bg-primary/20 px-2 py-1 rounded-lg">
                        {sets} SETS
                      </span>
                      <span className="bg-secondary/20 px-2 py-1 rounded-lg">
                        {reps} REPS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WorkoutTap;

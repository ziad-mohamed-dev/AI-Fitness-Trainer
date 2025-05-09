import CornerElements from "./CornerElements";

const ShowPlansSkeleton = () => {
  return (
    <>
      {/* PLANS SELECTOR SKELETON */}
      <div className="border relative backdrop-blur-sm p-6 flex justify-center items-center">
        <CornerElements />
        <div className="size-8 border border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
      {/* PLANS DETAILS SKELETON */}
      <div className="border relative p-6 backdrop-blur-sm flex justify-center items-center">
        <CornerElements />
        <div className="size-8 border border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
    </>
  );
};

export default ShowPlansSkeleton;

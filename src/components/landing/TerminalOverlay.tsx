const TerminalOverlay = () => {
  return (
    <div className="absolute inset-x-4 bottom-8 border-2 p-2 font-mono tracking-tight rounded-lg text-xs">
      {/* LABLE */}
      <div className="flex justify-between items-center border-b-2 pb-1">
        <div className="text-primary flex items-center gap-2">
          <span className="w-2 h-2 bg-primary block rounded-full"></span>SYSTEM
          ACTIVE
        </div>
        <div className="text-muted-foreground">ID: 78412.93</div>
      </div>
      {/* WORKOUT LIST */}
      <div>
        <p className="my-2">
          <span className="text-primary">/</span> WORKOUT ANALYSIS COMPLETE
        </p>
        <div className="space-y-2">
          <p>
            <span className="text-primary">01</span> 30 min strength training
            (upper body)
          </p>
          <p>
            <span className="text-primary">02</span> 20 min cardio (moderate
            intensity)
          </p>
          <p>
            <span className="text-primary">03</span> 10 min flexibility
            (recovery)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;

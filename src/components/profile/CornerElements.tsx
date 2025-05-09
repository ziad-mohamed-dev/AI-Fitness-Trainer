const CornerElements = () => {
  return (
    <>
      <div className="absolute w-4 h-4 top-0 left-0 border-t border-l border-primary/40"></div>
      <div className="absolute w-4 h-4 bottom-0 left-0 border-b border-l border-primary/40"></div>
      <div className="absolute w-4 h-4 bottom-0 right-0 border-b border-r border-primary/40"></div>
      <div className="absolute w-4 h-4 top-0 right-0 border-t border-r border-primary/40"></div>
    </>
  );
};

export default CornerElements;

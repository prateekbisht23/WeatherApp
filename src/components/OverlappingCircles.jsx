const Circle = ({ left }) => {
  return (
    <div
      className="absolute w-24 h-24 bg-blue-500 rounded-full"
      style={{ left: `${left}px`, top: '50px' }} // Position the circles
    ></div>
  );
};

const OverlappingCircles = () => {
  const circleDiameter = 70; // 24 tailwind units (24 * 4 = 96px)
  const overlap = circleDiameter * 0.1; // 10% overlap

  const circles = [];
  for (let i = 0; i < 4; i++) {
    circles.push(
      <Circle key={i} left={i * (circleDiameter - overlap)} />
    );
  }

  return (
    <div className="relative h-56"> {/* Container to hold the circles */}
      {circles}
    </div>
  );
};

export default OverlappingCircles;

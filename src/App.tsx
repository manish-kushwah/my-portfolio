import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";
import "./App.css";

function App() {
  const pink = (saturation: number) => `hsl(327, ${saturation}%, 50%)`;
  const x = useMotionValue(0);

  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });

  /**
   * Create a motion value from the smoothed output of x
   */
  const xVelocity = useVelocity(xSmooth);

  /**
   * Transform the velocity of x into a scale motion value
   */
  const scale = useTransform(xVelocity, [-3000, 0, 3000], [2, 1, 2], {
    clamp: false,
  });

  /**
   * Transform the velocity of x into a range of background color intensities
   */
  const backgroundColor = useTransform(
    xVelocity,
    [-2000, 0, 2000],
    [pink(100), pink(0), pink(100)],
  );

  return (
    <>
      <motion.div
        className="h-20 w-20 rounded-[30px] bg-[#ff008c]"
        drag="x"
        dragElastic={1}
        dragConstraints={{ left: -200, right: 200 }}
        style={{ x, scale, backgroundColor }}
      />
    </>
  );
}

export default App;

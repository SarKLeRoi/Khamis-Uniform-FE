import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatCounter({ target, label, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(interval);
      }, stepTime);
    }
  }, [inView, hasStarted, target, duration]);

  return (
    <div className="stat-box" ref={ref} aria-label={label + ": " + count + "+"}>
      <div role="status" aria-live="polite">
        {count}+
      </div>
      <p>{label}</p>
    </div>
  );
}

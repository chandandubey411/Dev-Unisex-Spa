import { useScrollProgress } from '../../hooks/useAnimations';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-gradient-to-r from-gold-500 via-gold-400 to-nude-400 transition-none"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;

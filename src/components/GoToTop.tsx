import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const GoToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14"
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center">

        {/* Progress Ring */}
        <svg
          className="absolute w-12 h-12 -rotate-90"
          viewBox="0 0 60 60"
        >
          <circle
            cx="30"
            cy="30"
            r={radius}
            className="stroke-border"
            strokeWidth="4"
            fill="transparent"
          />

          <circle
            cx="30"
            cy="30"
            r={radius}
            className="stroke-primary"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>

        {/* Button */}
        <div
          className="
          bg-card
          border
          border-border
          shadow-md
          rounded-full
          w-10
          h-10
          flex
          items-center
          justify-center
          transition-all
          hover:bg-primary
          hover:text-primary-foreground
        "
        >
          <ArrowUp size={20} />
        </div>

      </div>
    </motion.button>
  );
};

export default GoToTop;
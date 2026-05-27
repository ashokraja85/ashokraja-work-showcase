import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type MouseEnterContextValue = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

const MouseEnterContext = createContext<MouseEnterContextValue | undefined>(
  undefined
);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
};

type CardContainerProps = {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
};

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn("relative w-full", className)}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
};

type CardBodyProps = {
  children?: ReactNode;
  className?: string;
};

export const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div
      className={cn(
        "h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

type CardItemProps = {
  children?: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  React.useEffect(() => {
    if (!ref.current) return;

    const translate = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`;
    const rotate = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    ref.current.style.transform = `${translate} ${rotate}`;
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <div
      ref={ref}
      className={cn("w-full transition duration-200 ease-linear", className)}
    >
      {children}
    </div>
  );
};

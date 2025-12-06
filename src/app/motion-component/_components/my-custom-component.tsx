import { HTMLMotionProps, motion } from "motion/react";

type Props = {
  children: React.ReactNode;
} & HTMLMotionProps<"button">; // div, span, p, h1, etc...

export const MyCustomComponent = ({ children, ...props }: Props) => {
  return (
    <motion.button // or div, span, p, h1, etc... (e.g., motion.div)
      initial={{ opacity: 0, scale: 0.5, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
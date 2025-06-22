export const framerSidebarBackground = (open: boolean) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: open ? 1 : 0 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };
};

export const framerSidebarPanel = (open: boolean) => {
  return {
    initial: { x: "-100%" },
    animate: { x: open ? 0 : "-100%" },
    exit: { x: "-100%" },
    transition: { duration: open ? 0.1 : 0.3 },
  };
};

export const framerText = (delay: number, open: boolean) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: open ? 1 : 0, x: open ? 0 : -50 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

export const framerNavItems = (delay: number, open: boolean) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: open ? 1 : 0, y: open ? 0 : 20 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

export const framerIcon = (open: boolean) => {
  return {
    initial: { scale: 0 },
    animate: { scale: open ? 1 : 0 },
  };
};

export const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const getDirectionVariant = (direction: string) => {
  const directions = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: -30 },
    down: { x: 0, y: 30 },
  };
  return directions[direction as keyof typeof directions] || { x: 0, y: 20 };
};

export const cardVariants = {
  hidden: (direction: string) => ({
    opacity: 0,
    scale: 0.8,
    ...getDirectionVariant(direction),
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  hover: {
    scale: 1.05,
    y: -2,
  },
  tap: {
    scale: 0.98,
  },
};

export const gridVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

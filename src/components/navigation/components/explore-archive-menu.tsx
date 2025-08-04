import { classNames } from "@/utils";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariants, gridVariant, menuVariants, titleVariants } from "@/utils/framer";

type ExploreArchiveMenuComponentProps = {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  onClose?: () => void;
};

export const ExploreArchiveMenuComponent = ({
  buttonRef,
  onClose,
}: ExploreArchiveMenuComponentProps) => {
  const [menuPosition, setMenuPosition] = React.useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (buttonRef && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: buttonRect.top,
        left: buttonRect.right + 10,
      });
    }
  }, [buttonRef]);

  const links = [
    {
      title: "proverbs",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "/explore-archive/proverbs",
      direction: "left",
    },
    {
      title: "parables & wise sayings",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "/explore-archive/parables-and-wise-sayings",
      direction: "up",
    },
    {
      title: "indigenous plants & vegetables",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "/explore-archive/plants-and-vegetables",
      direction: "right",
    },
    {
      title: "heroes & legends",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "/explore-archive/heroes-and-legends",
      direction: "right",
    },
    {
      title: "historical moments & events",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "/explore-archive/historical-moments",
      direction: "down",
    },
    {
      title: "oral traditions",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "/explore-archive/oral-traditions",
      direction: "left",
    },
    {
      title: "visual archive",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "/explore-archive/visual-archive",
      direction: "left",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={{
          ...menuVariants,
          visible: {
            ...menuVariants.visible,
            transition: {
              duration: 0.2,
              ease: "easeOut",
              staggerChildren: 0.1,
            },
          },
          exit: {
            ...menuVariants.exit,
            transition: {
              duration: 0.15,
              ease: "easeIn",
            },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white p-6 fixed !z-20 rounded-xl border-lightgoldcolorfive border-2 max-w-lg w-full"
        style={{
          top: `${menuPosition.top}px`,
          left: `${menuPosition.left}px`,
        }}
      >
        <motion.h1
          variants={{
            ...titleVariants,
            visible: {
              ...titleVariants.visible,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="text-lg capitalize font-medium font-inter"
        >
          explore archive
        </motion.h1>
        <motion.div
          variants={gridVariant}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-3 mt-3 gap-4"
        >
          {React.Children.toArray(
            links.map(({ href, ...rest }, index) => {
              return (
                <MenuCardComponent
                  key={`${href}-${index}`}
                  href={href}
                  {...rest}
                  onClose={onClose}
                />
              );
            })
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

type MenuCardComponentProps = {
  backgroundClass: string;
  title: string;
  href: string;
  index?: number;
  direction: string;
  onClose?: () => void;
};

const MenuCardComponent = ({
  href,
  backgroundClass,
  direction,
  title,
  index = 0,
  onClose,
}: MenuCardComponentProps) => {
  return (
    <motion.div
      onClick={onClose}
      key={`${title}-${index}`}
      variants={{
        ...cardVariants,
        visible: {
          ...cardVariants.visible,
          transition: {
            duration: 0.4,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
        hover: {
          ...cardVariants.hover,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        },
        tap: {
          ...cardVariants.tap,
          transition: {
            duration: 0.1,
          },
        },
      }}
      custom={direction}
      className="min-h-20"
    >
      <Link to={href} className="h-full w-full">
        <motion.div
          whileHover={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          className={classNames(
            backgroundClass,
            "p-4 h-full flex items-center shrink-0 w-full justify-center rounded-lg"
          )}
        >
          <motion.p
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
            className="text-base font-medium capitalize font-satoshi text-gray-800"
          >
            {title}
          </motion.p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

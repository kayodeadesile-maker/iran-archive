import { classNames } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariants, gridVariant, menuVariants, titleVariants } from "@/utils/framer";

export const ContributionMenuComponent = () => {
  const links = [
    {
      title: "submit archive",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "",
      direction: "left",
    },
    {
      title: "become volunteer",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
      direction: "up",
    },
    {
      title: "field agents",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "",
      direction: "right",
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
        exit="hidden"
        className="bg-white p-6 fixed left-[21rem] !z-20 rounded-xl border-lightgoldcolorfive border-[1.5px] max-w-lg w-full"
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
          className="text-lg capitalize font-medium font-avenirMT"
        >
          contribute
        </motion.h1>
        <motion.div
          variants={gridVariant}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-3 mt-3 gap-4"
        >
          {React.Children.toArray(
            links.map(({ href, backgroundClass, title, direction }, index) => {
              return (
                <MenuCardComponent
                  href={href}
                  index={index}
                  direction={direction}
                  backgroundClass={backgroundClass}
                  title={title}
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
  direction: string;
  index?: number;
};

const MenuCardComponent = ({
  href,
  backgroundClass,
  title,
  direction,
  index,
}: MenuCardComponentProps) => {
  return (
    <motion.div
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
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="min-h-8"
    >
      <Link to={href} className="min-h-8">
        <motion.div
          whileHover={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          className={classNames(
            backgroundClass,
            "p-4 h-full flex items-center justify-center rounded-lg"
          )}
        >
          <motion.p
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
            className="text-base font-medium capitalize font-avenirMT text-gray-800"
          >
            {title}
          </motion.p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

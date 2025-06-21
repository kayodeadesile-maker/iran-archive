import { classNames } from "@/utils";
import { DisclosurePanel } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { navigateRoutesOne, navigateRoutesTwo, type RouteProps } from "./routes";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import LogoImage from "@/assets/Iran-logo.png";
import {
  framerIcon,
  framerNavItems,
  framerSidebarBackground,
  framerSidebarPanel,
  framerText,
} from "@/utils/framer";

type AppNavigationPropsType = {
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
  open: boolean;
};

export const AppNavigation = ({ open, close }: AppNavigationPropsType) => {
  const menuRefs = useRef<HTMLDivElement[]>([]);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (openMenuIndex !== null) {
        const clickedElement = event.target as Node;
        const menuRef = menuRefs.current[openMenuIndex];
        if (menuRef && !menuRef.contains(clickedElement)) {
          setOpenMenuIndex(null);
        }
      }
    },
    [openMenuIndex]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && openMenuIndex !== null) {
        setOpenMenuIndex(null);
      }
    },
    [openMenuIndex]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMenuToggle = useCallback(
    (index: number, route: RouteProps[0]) => {
      if (route.menuComponent && openMenuIndex !== index) {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
      }

      if (route.openMenu) {
        route.openMenu();
      }
    },
    [openMenuIndex]
  );

  return (
    <Fragment>
      <nav className="hidden lg:block fixed left-0 w-80 bg-lightgoldcolorsix h-[calc(100vh-5rem)] top-20 border-r border-gray-300">
        <div>
          <div className="flex flex-col items-center w-full">
            {navigateRoutesOne.map((route, index) => {
              const { label, Icon, current } = route;
              // const openMenu = navigateRoutesOne.find((route) => route.label === label)?.openMenu;
              const isMenuOpen = openMenuIndex! === index;

              return (
                <div
                  ref={(el) => {
                    if (el) {
                      menuRefs.current[index] = el;
                    }
                  }}
                  key={label}
                  className="relative w-full"
                >
                  <button
                    onClick={() => handleMenuToggle(index, route)}
                    className={classNames(
                      "flex items-center space-x-4 relative w-full py-4 px-7",
                      current ? "hover:bg-gray-50 " : ""
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    <>
                      <span
                        className={classNames(
                          isMenuOpen ? "stroke-[#5932EA] dark:stroke-white" : "stroke-[#7B7B7B]",
                          "h-6"
                        )}
                      >
                        {Icon}
                      </span>
                      <span
                        className={classNames(
                          "text-base sm:text-lg font-avenirMT font-medium capitalize",
                          isMenuOpen ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                        )}
                      >
                        {label}
                      </span>
                    </>
                  </button>
                </div>
              );
            })}
          </div>

          <hr className="w-full border-[#956D30] my-6" />

          <div className="mb-1 flex flex-col items-center w-full">
            {navigateRoutesTwo.map(({ label, Icon, current }) => (
              <button
                className={classNames(
                  "flex items-center space-x-4 relative w-full py-4 px-7",
                  current ? "hover:bg-gray-50 " : ""
                )}
                aria-current={current ? "page" : undefined}
              >
                <>
                  <span
                    className={classNames(
                      // isActive ? "stroke-[#5932EA] dark:stroke-white" : "stroke-[#7B7B7B]",
                      "h-6"
                    )}
                  >
                    {Icon}
                  </span>
                  <span
                    className={classNames(
                      "text-base sm:text-lg font-medium font-avenirMT capitalize"
                      // isActive ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                    )}
                  >
                    {label}
                  </span>
                </>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile navigation starts */}
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <DisclosurePanel
            static
            className={classNames("fixed lg:hidden left-0 top-0 z-20 h-full w-full")}
          >
            <motion.div
              {...framerSidebarBackground(open)}
              className="absolute inset-0 bg-black bg-opacity-50 -z-10"
              onClick={() => close()}
            />

            <motion.div
              {...framerSidebarPanel}
              className={classNames(
                "relative h-full w-full sm:max-w-sm bg-lightgoldcolorsix overflow-y-scroll"
              )}
            >
              <button className="absolute right-4 top-6 lg:hidden z-30" onClick={() => close()}>
                <span className="sr-only">Close Side menu</span>
                <XMarkIcon className="h-8 w-8 text-goldcolor" />
              </button>

              <div className="flex flex-col w-full">
                <div className="flex items-center my-4 ml-5">
                  <div className="flex-1 lg:flex-none h-16 lg:justify-start flex justiffy-center items-center">
                    <img src={LogoImage} alt="app logo" className="h-full" />
                  </div>
                </div>

                <motion.div className="space-y-2">
                  {navigateRoutesOne.map(({ label, Icon, current }, idx) => (
                    <motion.button
                      key={`${label}-${idx}`}
                      {...framerNavItems(idx, open)}
                      className={classNames(
                        "flex items-center space-x-4 relative w-full py-4 px-7",
                        current ? "hover:bg-gray-50 " : ""
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      <>
                        <motion.div
                          {...framerIcon(open)}
                          className={classNames(
                            // isActive ? "stroke-[#5932EA] dark:stroke-white" : "stroke-[#7B7B7B]",
                            "h-6"
                          )}
                        >
                          {Icon}
                        </motion.div>

                        <motion.div
                          {...framerText(idx, open)}
                          className={classNames(
                            "text-base sm:text-lg font-avenirMT font-medium capitalize"
                            // isActive ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                          )}
                        >
                          {label}
                        </motion.div>
                      </>
                    </motion.button>
                  ))}
                </motion.div>

                <motion.hr
                  initial={{
                    // x: 0,
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    delay: 0.5 + navigateRoutesOne.length / 10,
                  }}
                  className="w-full border-[#956D30] my-6 border-[1.5px]"
                />

                <motion.div className="space-y-2">
                  {navigateRoutesTwo.map(({ label, Icon, current }, idx) => (
                    <motion.button
                      key={`${label}-${idx}`}
                      {...framerNavItems(idx + navigateRoutesOne.length, open)}
                      className={classNames(
                        "flex items-center space-x-4 relative w-full py-4 px-7",
                        current ? "hover:bg-gray-50 " : ""
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      <>
                        <motion.div
                          {...framerIcon(open)}
                          className={classNames(
                            // isActive ? "stroke-[#5932EA] dark:stroke-white" : "stroke-[#7B7B7B]",
                            "h-6"
                          )}
                        >
                          {Icon}
                        </motion.div>

                        <motion.div
                          {...framerText(idx + navigateRoutesOne.length, open)}
                          className={classNames(
                            "text-base sm:text-lg font-avenirMT font-medium capitalize"
                            // isActive ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                          )}
                        >
                          {label}
                        </motion.div>
                      </>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

import { classNames } from "@/utils";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Fragment } from "react";
import { navigateRoutesOne, navigateRoutesTwo } from "./routes";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import LogoImage from "@/assets/iran-logo.png";
import { framerIcon, framerNavItems, framerText } from "@/utils/framer";

type AppNavigationPropsType = {
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
  open: boolean;
};

export const AppNavigation = ({ open }: AppNavigationPropsType) => {
  console.log(open);

  return (
    <Fragment>
      <nav className="hidden lg:block fixed left-0 w-80 bg-lightgoldcolorsix h-[calc(100vh-5rem)] top-20 border-r border-gray-300">
        <div>
          <div className="flex flex-col items-center w-full">
            {navigateRoutesOne.map(({ label, Icon, current }) => (
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
                      "text-base sm:text-lg font-nunito font-medium capitalize"
                      // isActive ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                    )}
                  >
                    {label}
                  </span>
                </>
              </button>
            ))}
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
                      "text-base sm:text-lg font-medium font-nunito capitalize"
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
      <DisclosurePanel className={classNames("fixed lg:hidden left-0 top-0 z-20 h-full w-full")}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className={classNames("transition-all h-full w-full sm:min-w-40 bg-lightgoldcolorsix")}
          >
            <DisclosureButton className="absolute right-4 top-6 lg:hidden">
              <span className="sr-only">Close Side menu</span>
              <XMarkIcon className="h-10 w-10 text-goldcolor" />
            </DisclosureButton>

            <div className="flex flex-col w-full">
              <div className="flex items-center my-10 ml-5">
                <div className="flex-1 lg:flex-none h-16 lg:justify-start flex justiffy-center items-center">
                  <img src={LogoImage} alt="app logo" className="h-full" />
                </div>
              </div>

              <motion.ul className="space-y-7">
                {navigateRoutesOne.map(({ label, Icon, current }, idx) => (
                  <motion.li key={label} {...framerNavItems(idx, open)}>
                    <button
                      className={classNames(
                        "flex items-center space-x-4 relative w-full py-4 px-7",
                        current ? "hover:bg-gray-50 " : ""
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      <>
                        <motion.div {...framerIcon(open)}>
                          <span
                            className={classNames(
                              // isActive ? "stroke-[#5932EA] dark:stroke-white" : "stroke-[#7B7B7B]",
                              "h-6"
                            )}
                          >
                            {Icon}
                          </span>
                        </motion.div>

                        <motion.div {...framerText(idx, open)}>
                          <span
                            className={classNames(
                              "text-base sm:text-lg font-nunito font-medium capitalize"
                              // isActive ? "text-[#5932EA] font-medium" : "text-[#0C0C0D] font-normal"
                            )}
                          >
                            {label}
                          </span>
                        </motion.div>
                      </>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </DisclosurePanel>
    </Fragment>
  );
};

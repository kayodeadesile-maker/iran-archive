import { classNames } from "@/utils";
import { DisclosurePanel } from "@headlessui/react";
import { Fragment } from "react";
import { navigateRoutesOne, navigateRoutesTwo } from "./routes";

export const AppNavigation = () => {
  return (
    <Fragment>
      <nav className="hidden lg:block fixed left-0 w-80 bg-backgroundcolor h-[calc(100vh-5rem)] top-20 border-r border-gray-300 ">
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
                      "text-base sm:text-lg font-medium capitalize"
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
                      "text-base sm:text-lg font-medium capitalize"
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

      <DisclosurePanel className="fixed z-10 transition-all lg:hidden left-0 right-0 w-full bg-backgroundcolor top-20">
        <div className="">
          <div className="flex flex-col items-center w-full"></div>
        </div>
      </DisclosurePanel>
    </Fragment>
  );
};

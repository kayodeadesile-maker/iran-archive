import { DisclosurePanel } from "@headlessui/react";
import { Fragment } from "react";

export const AppNavigation = () => {
  return (
    <Fragment>
      <nav className="hidden lg:block fixed left-0 w-80 bg-backgroundcolor h-[calc(100vh-5rem)] top-20 border-r border-gray-300 ">
        <div className="flex flex-col items-center w-full"></div>
      </nav>

      <DisclosurePanel className="fixed z-10 transition-all lg:hidden left-0 right-0 w-full bg-backgroundcolor top-20">
        <div className="">
          <div className="flex flex-col items-center w-full"></div>
        </div>
      </DisclosurePanel>
    </Fragment>
  );
};

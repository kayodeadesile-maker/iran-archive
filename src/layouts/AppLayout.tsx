import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Fragment } from "react";
import { AppNavigation } from "@/components/navigation/navigation";
import { Outlet } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const AppLayout = () => {
  return (
    <Disclosure as="div" className="flex flex-col h-screen">
      {({ open, close }) => {
        return (
          <Fragment>
            <header className="fixed h-20 inset-x-0 top-0 right-0 bg-navigationbackground border-b border-gray-300 z-20">
              <nav className="h-full px-4 relative flex items-center justify-between">
                <DisclosureButton className="absolute right-4 top-6 lg:hidden">
                  <span className="sr-only">Close Side menu</span>
                  {open ? (
                    <XMarkIcon className="h-8 w-8 text-gray-800 dark:text-white" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 text-gray-800 dark:text-white" />
                  )}
                </DisclosureButton>
              </nav>
            </header>
            <div className="flex items-stretch justify-between flex-shrink-0">
              <AppNavigation />
              <main className="absolute left-0 lg:left-80 w-full lg:w-[calc(100%-20rem)] pt-20 min-h-screen  overflow-auto">
                <div className="px-4 min-h-screen">
                  <Outlet context={{ close }} />
                </div>
              </main>
            </div>
          </Fragment>
        );
      }}
    </Disclosure>
  );
};

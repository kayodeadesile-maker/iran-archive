import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Fragment } from "react";
import { AppNavigation } from "@/components/navigation/navigation";
import { Outlet } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Footer } from "@/components/footer/footer";
import { useTranslation } from "@/hooks/context/useTranslation";
import { TranslationControlComponent } from "@/components/translation/translation-control";

export const AppLayout = () => {
  const { isTranslating, isYorubaMode, setIsYorubaMode, setTranslationMethod, translationMethod } =
    useTranslation();

  return (
    <Disclosure as="div" className="flex flex-col h-screen">
      {({ open, close }) => {
        return (
          <Fragment>
            <TranslationControlComponent
              handleSetTranslationMethod={setTranslationMethod}
              isTranslating={isTranslating}
              isYorubaMode={isYorubaMode}
              translationMethod={translationMethod}
              handleSetYorubaMode={setIsYorubaMode}
            />
            <header className="fixed h-20 inset-x-0 top-0 right-0 bg-navigationbackground border-b border-gray-300 z-20">
              <nav className="h-full px-4 relative flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-1 lg:flex-none h-16 lg:justify-start flex justiffy-center items-center">
                    <img src="/iran-logo.png" alt="app logo" className="h-full" />
                  </div>
                </div>

                <div className="sm:flex items-center gap-3 !mr-10 lg:!mr-0 hidden">
                  <button className="px-6 py-1.5 rounded-lg bg-white text-sm md:text-base font-medium text-textblack outline-0 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 border-0 transition-all">
                    Log in
                  </button>
                  <button className="px-6 py-1.5 rounded-lg bg-accentblue text-sm md:text-base font-medium text-white outline-0 focus:ring-2 focus:ring-accentblue focus:ring-offset-2 border-0 transition-all hover:bg-accentblue/80">
                    Sign up
                  </button>
                  <button></button>
                </div>

                <DisclosureButton className="absolute right-4 top-6 lg:hidden">
                  <span className="sr-only">Close Side menu</span>
                  {open ? (
                    <XMarkIcon className="h-8 w-8 text-goldcolor" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 text-goldcolor" />
                  )}
                </DisclosureButton>
              </nav>
            </header>
            <div className="flex items-stretch justify-between flex-shrink-0">
              <AppNavigation close={close} open={open} />
              <main className="absolute left-0 lg:left-80 w-full lg:w-[calc(100%-20rem)] pt-20 min-h-screen overflow-auto">
                <Outlet context={{ close, open }} />
                <Footer />
              </main>
            </div>
          </Fragment>
        );
      }}
    </Disclosure>
  );
};

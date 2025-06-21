import { classNames } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

export const LearnYorubaMenuComponent = () => {
  const links = [
    {
      title: "yoruba alphabets",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "",
    },
    {
      title: "yoruba phrases",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
    {
      title: "naming traditions",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "",
    },
    {
      title: "grammer & structure",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "",
    },
    {
      title: "audio pronunciation",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "",
    },
    {
      title: "yoruba games",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
    {
      title: "language & dialects",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
  ];

  return (
    <div className="bg-white p-6 fixed left-[21rem] !z-20 rounded-xl border-lightgoldcolorfive border-[1.5px] max-w-lg w-full">
      <h1 className="text-lg capitalize font-medium font-avenirMT">learn yoruba</h1>
      <div className="grid grid-cols-3 mt-3 gap-4">
        {React.Children.toArray(
          links.map(({ href, backgroundClass, title }) => {
            return (
              <MenuCardComponent href={href} backgroundClass={backgroundClass} title={title} />
            );
          })
        )}
      </div>
    </div>
  );
};

type MenuCardComponentProps = { backgroundClass: string; title: string; href: string };

const MenuCardComponent = ({ href, backgroundClass, title }: MenuCardComponentProps) => {
  return (
    <Link to={href} className="min-h-8">
      <div
        className={classNames(
          backgroundClass,
          "p-4 h-full flex items-center justify-center rounded-lg"
        )}
      >
        <p className="text-base font-medium capitalize font-avenirMT text-gray-800">{title}</p>
      </div>
    </Link>
  );
};

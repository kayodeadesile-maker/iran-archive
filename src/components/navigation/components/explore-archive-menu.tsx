import { classNames } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

export const ExploreArchiveMenuComponent = () => {
  const links = [
    {
      title: "proverbs",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "",
    },
    {
      title: "parables & wise sayings",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
    {
      title: "indigenous plants & vegetables",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "",
    },
    {
      title: "heroes & legends",
      backgroundClass: "!bg-darkbrowncolorsix",
      href: "",
    },
    {
      title: "historical moments & events",
      backgroundClass: "!bg-lightgoldcolorfive",
      href: "",
    },
    {
      title: "oral traditions",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
    {
      title: "visual archive",
      backgroundClass: "!bg-lightbluecolorfive",
      href: "",
    },
  ];

  return (
    <div className="bg-white p-6 fixed left-[21rem] !z-20 rounded-xl border-lightgoldcolorfive border-[1.5px] max-w-lg w-full">
      <h1 className="text-lg capitalize font-medium font-avenirMT">explore archive</h1>
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
        className={classNames(backgroundClass, "p-4 h-full flex items-center justify-center rounded-lg")}
      >
        <p className="text-base font-medium capitalize font-avenirMT text-gray-800">{title}</p>
      </div>
    </Link>
  );
};

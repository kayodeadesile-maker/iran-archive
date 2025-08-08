import { Link } from "react-router-dom";
import IllustrationImage from "@/assets/illustration.svg";

export const DonationComponent = () => {
  return (
    <section id="donation" className="mt-16">
      <div className="bg-darkbluecolortwo rounded-2xl p-6">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center sm:justify-between max-w-5xl mx-auto">
          <div>
            <h2 className="font-inter text-xl lg:text-3xl 2xl:text-4xl font-bold text-white no-translate">
              Donate to preserve <span className="no-translate">Yoruba</span> heritage
            </h2>
            <div className="max-w-[29rem] my-3.5">
              <p className="text-lg font-normal font-satoshi text-white no-translate">
                Your donation helps preserve the rich heritage of the Yoruba culture. Every
                contribution moves us closer to building a lasting archive for generations to come.
              </p>
            </div>
            <Link to="" className="inline-block">
              <div className="inline-flex items-center bg-accentblue px-8 py-2.5 space-x-4 rounded-lg">
                <span className="text-white text-base capitalize font-satoshi font-normal no-translate">
                  donate
                </span>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.11075 18.5245L9.61382 10.0214L1.11075 1.51831"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="w-60">
            <img src={IllustrationImage} alt="illustration" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

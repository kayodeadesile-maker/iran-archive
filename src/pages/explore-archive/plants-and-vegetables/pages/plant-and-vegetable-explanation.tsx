import { UsageComponent } from "@/components/common/usage/Usage";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function PlantAndVegetableExplanation() {
  const navigate = useNavigate();

  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          title="back"
          type="button"
          className="flex items-center gap-3 hover:underline active:underline text-base font-medium mb-4 dark:text-white cursor-pointer"
          onClick={() => navigate("/explore-archive/plants-and-vegetables")}
        >
          <ArrowLeftIcon className="size-4 shrink-0" />
          Back
        </button>

        {/* Plant and Vegetable Carousel start */}
        <PlantAndVegetableCarousel />
        {/* Plant and Vegetable Carousel end */}

        {/* Plant and Vegetable Details start */}
        <article className="">
          <h1 className="font-satoshi font-semibold italic text-2xl mb-2">Name</h1>
          <div className="border-t border-gray-400 py-2">
            <h2 className="font-satoshi font-medium text-2xl mb-1.5">
              Èwúro (Vernonia amygdalina)
            </h2>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg mb-1.5">Description:</h3>
              <div className="max-w-3xl">
                <p className="font-satoshi text-lg text-shadecolorfour font-normal ">
                  Èwúrọ̀ is a leafy green plant known for its distinct bitter taste. It is widely
                  consumed across Yoruba communities and holds both culinary and medicinal
                  significance. Its bitterness is often reduced through washing or boiling before
                  cooking.
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Scientific Name & Classification</h3>
              <div className="pl-8">
                <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                  <li>Scientific name: Vernonia amygdalina</li>
                  <li>Family: Asteraceae Plant</li>
                  <li>Type: Shrub Growth</li>
                  <li>Pattern: Perennial, woody stems, grows up to 2–5 meters.</li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Culinary Use</h3>
              <div className="">
                <h3 className="text-lg text-shadecolorfour font-satoshi font-normal ">
                  Èwúrọ̀ is widely used in Yoruba cuisine:
                </h3>
                <div className="pl-8">
                  <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                    <li>Cooked in rich soups like Ègúsí Ewúrọ̀ and Ọbẹ̀ Ewúrọ̀.</li>
                    <li>Often paired with pounded yam, amala, or fufu.</li>
                    <li>
                      The bitterness is managed by squeezing and rinsing the leaves before cooking.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Medicinal Use</h3>
              <div className="">
                <h3 className="text-lg text-shadecolorfour font-satoshi font-normal ">
                  Traditional healers and elders use Èwúrọ̀ for:
                </h3>
                <div className="pl-8">
                  <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                    <li>Malaria treatment: Bitter leaf water is taken as a natural remedy.</li>
                    <li>
                      Stomach issues: It helps cleanse the digestive system and relieve
                      constipation.
                    </li>
                    <li>Blood sugar control: Widely believed to help manage diabetes.</li>
                    <li>Liver and kidney detox: Used in herbal detox mixtures.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* Plant and Vegetable Details end */}

        {/* Usage start */}
        <UsageComponent />
        {/* Usage end */}
      </div>
    </section>
  );
}

const PlantAndVegetableCarousel = () => {
  return <div className=""></div>;
};

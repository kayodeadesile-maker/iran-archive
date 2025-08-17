import { motion } from "framer-motion";
import CoverImage from "@/assets/learn-yoruba/learn-cover-image.png";
import { Link } from "react-router-dom";
import LearnYorubaImage from "@/assets/learn-yoruba/learn-yoruba-image.png";
import AlphabetImage from "@/assets/learn-yoruba/alphabets-image.png";

const alphabets = [
  { label: "a", value: "a", usage: "Aja" },
  { label: "b", value: "b", usage: "Bata" },
  { label: "d", value: "d", usage: "Doje" },
  { label: "ẹ", value: "ẹ", usage: "Eja" }, // Yoruba-specific letter
  { label: "e", value: "e", usage: "Eye" },
  { label: "f", value: "f", usage: "Fila" },
  { label: "g", value: "g", usage: "Gangan" },
  { label: "gb", value: "gb", usage: "Gbaguda" }, // Yoruba digraph
  { label: "h", value: "h", usage: "Haran" },
  { label: "i", value: "i", usage: "Igi" },
  { label: "j", value: "j", usage: "jagunjagun" },
  { label: "k", value: "k", usage: "Kiniun" },
  { label: "l", value: "l", usage: "Labalaba" },
  { label: "m", value: "m", usage: "Monamona" },
  { label: "n", value: "n", usage: "Naira" },
  { label: "o", value: "o", usage: "Odo" },
  { label: "ọ", value: "ọ", usage: "Owo" }, // Yoruba-specific letter
  { label: "p", value: "p", usage: "Pepeye" },
  { label: "r", value: "r", usage: "Rakunmi" },
  { label: "s", value: "s", usage: "Salubata" },
  { label: "ṣ", value: "ṣ", usage: "Sekere" }, // Yoruba-specific letter
  { label: "t", value: "t", usage: "Tata" },
  { label: "u", value: "u", usage: "Ule" },
  { label: "w", value: "w", usage: "Wura" },
  { label: "y", value: "y", usage: "Yanrin" },
];

export default function YorubaAlphabtes() {
  const imageVariants = {
    initial: {
      scale: 1.2,
    },
    animate: {
      scale: 1,
    },
  };

  const titleVariants = {
    initial: {
      y: 30,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{
            intitial: {},
            animate: {
              transition: {
                staggerChildren: 0.5,
                duration: 0.8,
                delayChildren: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          animate="animate"
          initial="initial"
          className="relative rounded-3xl overflow-hidden before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/20 before:z-10 before:to-black/50"
        >
          <motion.img
            variants={{
              ...imageVariants,
              animate: {
                ...imageVariants.animate,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25,
                },
              },
            }}
            src={CoverImage}
            alt="Parables cover image"
            title="Parables cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <motion.div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 md:p-6">
            <motion.h1
              variants={{
                ...titleVariants,
                animate: {
                  ...titleVariants.animate,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.4,
                  },
                },
              }}
              className="text-xl sm:text-4xl lg:text-5xl font-irishGrover font-normal text-white mb-1 auto-translate"
            >
              Ko bi a ti ka A-B-D
            </motion.h1>
            <motion.p
              variants={{
                ...titleVariants,
                animate: {
                  ...titleVariants.animate,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2,
                  },
                },
              }}
              className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl"
            >
              Learn how to read A-B-D
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Yoruba Aplhabets start */}
        <AlphabetsLayout />
        {/* Yoruba Aplhabets end */}

        <div className="w-full mt-20">
          <div className="h-full grid gap-8 grid-cols-1 xl:grid-cols-2 bg-lightgoldcolorfour px-6 xl:px-8 2xl:px-10 py-10 rounded-2xl">
            <div className="space-y-10 xl:place-self-center">
              <h2 className="text-4xl sm:text-5xl font-inter font-semibold">Learn Yoruba</h2>
              <div>
                <p className="text-lg sm:text-xl font-satoshi font-normal">
                  Yorùbá is one of the major languages spoken in West Africa, particularly in
                  Nigeria, Benin, Togo, and among diaspora communities in the Americas and the UK.
                  It is not just a means of...
                </p>
              </div>

              <Link
                to=""
                className="inline-flex items-center rounded-lg text-white font-satoshi font-medium px-6 py-2.5 text-lg bg-accentbluecolor space-x-3 hover:bg-accentbluecolor/70 focus:ring-2 focus:ring-offset-1 transition-colors focus:ring-accentbluecolor"
              >
                <span>Learn Now</span>
                <svg
                  width="17"
                  height="8"
                  viewBox="0 0 17 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.245 2.67481L13.6663 0.198109C13.6044 0.138739 13.5307 0.0916152 13.4495 0.0594569C13.3683 0.0272987 13.2812 0.0107422 13.1933 0.0107422C13.1053 0.0107422 13.0182 0.0272987 12.937 0.0594569C12.8558 0.0916152 12.7821 0.138739 12.7202 0.198109C12.5961 0.316789 12.5264 0.477332 12.5264 0.644675C12.5264 0.812017 12.5961 0.97256 12.7202 1.09124L15.0922 3.36524H1.50616C1.32944 3.36524 1.15996 3.43198 1.035 3.55077C0.910044 3.66956 0.839844 3.83067 0.839844 3.99867C0.839844 4.16666 0.910044 4.32778 1.035 4.44657C1.15996 4.56536 1.32944 4.6321 1.50616 4.6321H15.1322L12.7202 6.91877C12.6577 6.97765 12.6082 7.04771 12.5743 7.1249C12.5405 7.20209 12.5231 7.28488 12.5231 7.3685C12.5231 7.45212 12.5405 7.53491 12.5743 7.6121C12.6082 7.68929 12.6577 7.75935 12.7202 7.81823C12.7821 7.8776 12.8558 7.92473 12.937 7.95688C13.0182 7.98904 13.1053 8.0056 13.1933 8.0056C13.2812 8.0056 13.3683 7.98904 13.4495 7.95688C13.5307 7.92473 13.6044 7.8776 13.6663 7.81823L16.245 5.36054C16.6193 5.00423 16.8296 4.52125 16.8296 4.01767C16.8296 3.5141 16.6193 3.03111 16.245 2.67481Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>

            {/* Updated Image Gallery Section */}
            <div className="relative min-h-[300px] md:min-h-[500px] xl:min-h-[400px] flex items-start ">
              {/* Main image container */}
              <div className="relative w-full h-full">
                {/* Primary large image */}
                <div className="">
                  <img
                    src={LearnYorubaImage}
                    alt="learn image one"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AlphabetsLayout = () => {
  return (
    <div className="mt-10">
      <h2 className="no-translate font-satoshi sm:text-lg font-semibold">Yoruba Alphabets</h2>

      <div className="grid grid-cols-2 gap-x-3 gap-y-8 mt-5 sm:grid-cols-4 xl:grid-cols-6">
        {alphabets.map((alphabet, index) => {
          return <AlphabetCard key={`${alphabet.label}-${index}`} {...alphabet} />;
        })}
      </div>
    </div>
  );
};

interface AlphabetCardProps {
  label: string;
  value: string;
  usage: string;
}

const AlphabetCard = (props: AlphabetCardProps) => {
  const { label, usage } = props;
  return (
    <button type="button" className="cursor-pointer relative">
      <div className="absolute h-[9.5rem] rounded-3xl -z-10 bg-gradient-to-b from-[#006EFF]/50 to-black block w-full inset-x-0 top-1/2 -translate-y-1/2 " />
      <div className="space-y-4 p-2 rounded-3xl relative bg-accentbluecolor-dark2 overflow-hidden">
        <img
          src={AlphabetImage}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative w-14 h-16 rounded-2xl flex items-center justify-center bg-black">
          <h3 className="text-3xl font-inter font-medium uppercase text-white">{label}</h3>

          <div className="size-9 rounded-xl flex items-center justify-center bg-white absolute -bottom-1 -right-6 p-3">
            <p className="text-xl font-inter font-medium text-black inline">{label}</p>
          </div>
        </div>
        <div className="relative flex items-center justify-between">
          <p className="text-lg font-satoshi font-bold text-white">{usage}</p>
          <span
            role="button"
            className="cursor-pointer flex items-center justify-center size-10 rounded-lg bg-black/50"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72405 3.11238C1.45937 3.11238 1.20553 3.21753 1.01837 3.40468C0.831217 3.59184 0.726074 3.84568 0.726074 4.11035L0.726074 8.10224C0.726074 8.36692 0.831217 8.62076 1.01837 8.80791C1.20553 8.99507 1.45937 9.10021 1.72405 9.10021H3.12121L6.7139 12.0826V0.126953L3.12121 3.11238H1.72405Z"
                fill="white"
              />
              <path
                d="M10.7053 6.10626C10.7045 5.4448 10.4414 4.81067 9.97372 4.34295C9.506 3.87523 8.87186 3.61212 8.21041 3.61133H7.71143V4.6093H8.21041C8.60743 4.6093 8.98819 4.76701 9.26892 5.04775C9.54965 5.32848 9.70737 5.70924 9.70737 6.10626C9.70737 6.50327 9.54965 6.88403 9.26892 7.16476C8.98819 7.4455 8.60743 7.60321 8.21041 7.60321H7.71143V8.60118H8.21041C8.87186 8.60039 9.506 8.33728 9.97372 7.86956C10.4414 7.40184 10.7045 6.76771 10.7053 6.10626Z"
                fill="white"
              />
              <path
                d="M8.21041 1.61523H7.71143V2.61321H8.21041C9.13679 2.61321 10.0252 2.98121 10.6803 3.63625C11.3353 4.2913 11.7033 5.17973 11.7033 6.1061C11.7033 7.03248 11.3353 7.92091 10.6803 8.57596C10.0252 9.231 9.13679 9.599 8.21041 9.599H7.71143V10.597H8.21041C9.40146 10.597 10.5437 10.1238 11.3859 9.28163C12.2281 8.43943 12.7013 7.29716 12.7013 6.1061C12.7013 4.91505 12.2281 3.77278 11.3859 2.93058C10.5437 2.08838 9.40146 1.61523 8.21041 1.61523Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
};

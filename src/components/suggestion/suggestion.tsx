import { Link } from "react-router-dom";

interface SuggestionComponentProps {
  title: string;
  suggestionTitle: string;
  meaning?: string;
  imageSrc: string;
  // socialLinks?: {}[];
}

export const SuggestionComponent: React.FC<SuggestionComponentProps> = ({
  title,
  suggestionTitle,
  meaning,
  imageSrc,
}: SuggestionComponentProps) => {
  return (
    <div className="mt-10 lg:mt-12 max-w-3xl mx-auto">
      <h2 className="text-center text-xl sm:text-2xl font-inter font-semibold">{title}</h2>
      <div className="relative rounded-3xl overflow-hidden before:absolute before:inset-0  before:bg-black/50 before:content-[''] before:z-10 mt-3">
        <img
          src={imageSrc}
          className="w-full h-full inset-0 object-cover object-top absolute"
          alt="random cover image"
          title="random cover image"
        />

        <div className="relative min-h-[200px] lg:min-h-[280px] z-10 flex flex-col justify-center itemsc-center p-6">
          <div className="text-center space-y-3">
            <h3 className="font-satoshi font-semibold text-xl sm:text-2xl text-white">
              {suggestionTitle}
            </h3>
            <p className="text-lg font-satoshi font-normal text-white">{meaning}</p>
          </div>

          <hr className="border-white border-[1.5px] my-7 block w-full max-w-xl mx-auto" />

          <div className="inline-flex items-center gap-3 justify-center">
            <p className="font-satoshi font-medium text-lg text-white">Share on:</p>
            <div className="flex items-center gap-4">
              <Link to="">
                <span className="flex items-center justify-center h-8 w-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-full h-full"
                  >
                    <path
                      d="M24 12.0729C24 18.0983 19.606 23.0935 13.87 24V15.5862H16.659L17.19 12.1051H13.87V9.84649C13.87 8.89373 14.334 7.96613 15.82 7.96613H17.329V5.00222C17.329 5.00222 15.959 4.7668 14.65 4.7668C11.916 4.7668 10.13 6.43387 10.13 9.4511V12.1041H7.091V15.5852H10.13V23.999C4.395 23.0915 0 18.0973 0 12.0729C0 5.40566 5.373 0 12 0C18.627 0 24 5.40465 24 12.0729Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
              <Link to="">
                <span className="flex items-center justify-center h-8 w-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-full h-full"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM15.063 19.232L11.193 14.177L6.771 19.232H4.313L10.046 12.678L4 4.768H9.062L12.556 9.389L16.599 4.768H19.054L13.693 10.894L20 19.231L15.063 19.232Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
              <button type="button" className="cursor-pointer">
                <span className="flex items-center justify-center h-8 w-8 bg-white rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5858 9.66655C12.1138 9.66694 11.649 9.78229 11.2315 10.0027C10.8139 10.223 10.4562 10.5418 10.1892 10.9315L6.12576 9.09471C6.41437 8.39701 6.41549 7.61334 6.12888 6.91482L10.1867 5.06867C10.5824 5.64161 11.1702 6.05359 11.8433 6.22988C12.5165 6.40618 13.2304 6.3351 13.8557 6.02955C14.481 5.72401 14.9762 5.20422 15.2514 4.56448C15.5267 3.92475 15.5638 3.20743 15.356 2.54266C15.1482 1.87788 14.7093 1.30967 14.1189 0.941104C13.5285 0.572535 12.8257 0.428016 12.1379 0.533763C11.4502 0.63951 10.8231 0.988517 10.3704 1.51748C9.9177 2.04644 9.66936 2.72032 9.67044 3.41688C9.67309 3.58174 9.68979 3.74608 9.72038 3.9081L5.40658 5.8705C4.99227 5.48191 4.4736 5.22293 3.91428 5.12539C3.35496 5.02785 2.77937 5.09599 2.2582 5.32144C1.73704 5.54689 1.29301 5.91983 0.980661 6.39445C0.668314 6.86907 0.501254 7.42468 0.500007 7.99304C0.49876 8.5614 0.663378 9.11775 0.973639 9.59374C1.2839 10.0697 1.72629 10.4446 2.24646 10.6724C2.76663 10.9001 3.34192 10.9708 3.90166 10.8757C4.4614 10.7806 4.98121 10.5239 5.39722 10.1372L9.72226 12.0921C9.69221 12.2539 9.67572 12.418 9.67294 12.5827C9.67281 13.1596 9.8436 13.7236 10.1637 14.2033C10.4838 14.6831 10.9388 15.057 11.4712 15.2779C12.0036 15.4987 12.5895 15.5565 13.1547 15.444C13.7199 15.3315 14.2391 15.0537 14.6466 14.6457C15.0541 14.2378 15.3316 13.718 15.444 13.1521C15.5564 12.5863 15.4987 11.9998 15.2781 11.4668C15.0575 10.9338 14.684 10.4783 14.2048 10.1578C13.7255 9.8374 13.1621 9.66643 12.5858 9.66655ZM12.5858 1.75009C12.9152 1.74997 13.2371 1.84762 13.511 2.03069C13.7849 2.21376 13.9984 2.47404 14.1245 2.77859C14.2506 3.08315 14.2837 3.4183 14.2195 3.74167C14.1553 4.06504 13.9968 4.36209 13.764 4.59525C13.5312 4.82842 13.2345 4.98723 12.9115 5.05159C12.5885 5.11596 12.2537 5.08299 11.9495 4.95685C11.6452 4.83071 11.3851 4.61708 11.2021 4.34296C11.0192 4.06885 10.9215 3.74656 10.9215 3.41688C10.9218 2.97503 11.0973 2.55136 11.4093 2.23887C11.7213 1.92637 12.1445 1.75059 12.5858 1.75009ZM3.4301 9.66655C3.10078 9.66668 2.77881 9.56902 2.50493 9.38595C2.23104 9.20288 2.01754 8.9426 1.89143 8.63805C1.76532 8.33349 1.73226 7.99834 1.79643 7.67497C1.8606 7.35161 2.01913 7.05455 2.25195 6.82139C2.48477 6.58822 2.78144 6.42941 3.10443 6.36505C3.42742 6.30068 3.76222 6.33366 4.06649 6.45979C4.37076 6.58593 4.63083 6.79957 4.8138 7.07368C4.99678 7.3478 5.09444 7.67008 5.09444 7.99976C5.09395 8.44156 4.91846 8.86514 4.60646 9.17759C4.29446 9.49005 3.87142 9.66589 3.4301 9.66655ZM12.5858 14.2494C12.2565 14.2494 11.9346 14.1517 11.6608 13.9685C11.387 13.7854 11.1736 13.5251 11.0476 13.2205C10.9216 12.9159 10.8886 12.5808 10.9529 12.2575C11.0171 11.9342 11.1757 11.6372 11.4085 11.4041C11.6414 11.1709 11.9381 11.0122 12.261 10.9479C12.584 10.8836 12.9188 10.9166 13.223 11.0427C13.5272 11.1689 13.7873 11.3825 13.9702 11.6566C14.1532 11.9307 14.2508 12.253 14.2508 12.5827C14.2505 13.0246 14.075 13.4484 13.7628 13.7609C13.4506 14.0734 13.0273 14.2491 12.5858 14.2494Z"
                      fill="#0A0B0E"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

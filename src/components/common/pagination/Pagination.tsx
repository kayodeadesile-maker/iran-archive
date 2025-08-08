import { classNames } from "@/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
  setPage: (page: number) => void;
  prev: () => void;
  next: () => void;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  totalItems: number;
};

export const PaginationComponent = ({
  totalPages,
  setPage,
  page,
  next,
  prev,
  hasNextPage,
  totalItems,
}: PaginationProps) => {
  console.log(totalItems);

  return (
    <div className="flex flex-col sm:flex-row gap-y-5 items-center sm:justify-between mt-4">
      <div className="flex items-center justify-between max-w-sm w-full mx-auto gap-3">
        <button
          className={classNames(
            "flex items-center text-xs gap-2 font-medium font-satoshi bg-black disabled:bg-black/20 px-3 py-2.5 rounded-[5px] cursor-pointer disabled:cursor-not-allowed",
            page !== 1 ? "text-white" : "text-gray-600"
          )}
          title="previous transaction"
          onClick={prev}
          disabled={page === 1}
        >
          <ArrowLeftIcon
            className={classNames(page !== 1 ? "text-white" : "text-gray-600", "h-4")}
          />
          Previous Page
        </button>

        <button
          className={classNames(
            "flex items-center text-xs gap-2 bg-black disabled:bg-black/20 font-medium font-satoshi px-3 py-2.5 rounded-[5px] cursor-pointer disabled:cursor-not-allowed",
            hasNextPage ? "text-white" : "text-gray-600"
          )}
          title="previous transaction"
          onClick={next}
          disabled={!hasNextPage}
        >
          Next Page
          <ArrowRightIcon
            className={classNames(hasNextPage ? "text-white" : "text-gray-600", "h-4")}
          />
        </button>
      </div>

      <div className="flex text-gray-600 dark:text-white items-center gap-3">
        <span className="font-satoshi font-medium text-sm">Page</span>
        <fieldset>
          <label htmlFor="page" className="sr-only">
            page number
          </label>
          <input
            type="text"
            id="page"
            name="page"
            className="px-2 rounded-sm text-sm font-satoshi font-normal py-1.5 w-0 !min-w-10 text-center bg-gray-50 dark:bg-white/5 dark:border-white/10 dark:text-white border outline-none focus:ring-1 focus:ring-gray-500"
            value={page}
            onChange={(event) => {
              setPage(+event.target.value);
            }}
          />
        </fieldset>
        <span>of {totalPages}</span>
      </div>
    </div>
  );
};

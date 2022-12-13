import React from "react";
import { useMemo } from "react";
import clsx from "clsx";
const DOTS = "...";

function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

function Item({ page, type, active, disabled, rounded, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        "flex h-9 w-9 items-center justify-center text-sm",
        "focus:outline-none focus:ring-0",
        "focus-visible:border-none focus-visible:ring-2 focus-visible:ring-sky-300", //for keyboard navigation
        {
          "px-3": type === "number",
          "cursor-not-allowed opacity-50": disabled,
          "border border-gray-300 ": !active,
          "active:border-none active:ring-2 active:ring-sky-300":
            !active && !disabled,
          "border-none bg-sky-500 text-white": active,
        },
        {
          "rounded-none": rounded === "none",
          "rounded": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-xl": rounded === "xl",
          "rounded-full": rounded === "full",
        },
      )}
    >
      {page}
    </button>
  );
}

function ElipsisIcon({ disabled }) {
  return (
    <div
      className={clsx("flex h-9  w-5 items-center justify-center", {
        "opacity-50": disabled,
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function DoubleChevronLeft() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function DoubleChevronRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  onChange,
}) {
  const _total = Math.max(Math.trunc(total), 0);

  const setPage = (pageNumber) => {
    if (pageNumber <= 0) {
      onChange(1);
    } else if (pageNumber > _total) {
      onChange(_total);
    } else {
      onChange(pageNumber);
    }
  };

  const next = () => onChange(page + 1);
  const previous = () => onChange(page - 1);
  const first = () => onChange(1);
  const last = () => onChange(_total);

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= _total) {
      return range(1, _total);
    }

    const leftSiblingIndex = Math.max(page - siblings, boundaries);
    const rightSiblingIndex = Math.min(page + siblings, _total - boundaries);

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [
        ...range(1, leftItemCount),
        DOTS,
        ...range(_total - (boundaries - 1), _total),
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [
        ...range(1, boundaries),
        DOTS,
        ...range(_total - rightItemCount, _total),
      ];
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(_total - boundaries + 1, _total),
    ];
  }, [_total, siblings, page, boundaries]);

  return {
    range: paginationRange,
    active: page,
    setPage,
    next,
    previous,
    first,
    last,
  };
}

const Pagination = React.forwardRef(function Button(
  {
    siblings = 1,
    boundaries = 1,
    size = "md",
    rounded = "none",
    withEdges = false,
    withControls = true,
    page = 1,
    onChange,
    total,
    disabled,
  },
  ref,
) {
  const { range, setPage, next, previous, active, first, last } = usePagination(
    {
      page,
      siblings,
      total,
      onChange,
      boundaries,
    },
  );

  if (total <= 0) {
    return null;
  }

  return (
    <div className="flex space-x-2.5" ref={ref}>
      {withEdges && (
        <Item
          rounded={rounded}
          page={<DoubleChevronLeft></DoubleChevronLeft>}
          onClick={first}
          disabled={active === 1 || disabled}
        />
      )}

      {withControls && (
        <Item
          rounded={rounded}
          page={<ChevronLeft></ChevronLeft>}
          onClick={previous}
          disabled={active === 1 || disabled}
        />
      )}

      {range.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <ElipsisIcon key={index} disabled={disabled}></ElipsisIcon>;
        }
        return (
          <Item
            key={index}
            rounded={rounded}
            type="number"
            active={pageNumber === active}
            tabIndex={0}
            page={pageNumber}
            disabled={disabled}
            onClick={() => setPage(pageNumber)}
          />
        );
      })}

      {withControls && (
        <Item
          rounded={rounded}
          page={<ChevronRight></ChevronRight>}
          onClick={next}
          disabled={active === total || disabled}
        />
      )}

      {withEdges && (
        <Item
          rounded={rounded}
          page={<DoubleChevronRight></DoubleChevronRight>}
          onClick={last}
          disabled={active === total || disabled}
        />
      )}
    </div>
  );
});

export default Pagination;

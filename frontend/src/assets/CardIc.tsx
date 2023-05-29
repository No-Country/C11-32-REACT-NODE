const CardIc = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      className="h-5 w-5 dark:text-gray-100 lg:h-6 lg:w-6 "
    >
      <rect
        width="416"
        height="320"
        x="48"
        y="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="56"
        ry="56"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="60"
        d="M48 192h416M128 300h48v20h-48z"
      />
    </svg>
  );
};

export default CardIc;

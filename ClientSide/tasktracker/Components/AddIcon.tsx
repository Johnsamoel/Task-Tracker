const AddIcon = (props:{ClickFn: any}) => {
  return (
    <div className="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer hover:rotate-12"
    onClick={props.ClickFn}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-yellow-300 text-xl font-bold"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default AddIcon;

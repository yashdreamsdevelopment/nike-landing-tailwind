const Button = ({ label, iconURL, alt, className }) => {
  const altClassName = alt ? "border-black bg-transparent text-black" : "";
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg border leading-none bg-coral-red rounded-full text-white border-coral-red ${altClassName} ${className} `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          className="border ml-2 rounded-full w-5 h-5"
          alt="icon"
        />
      )}
    </button>
  );
};

export default Button;

const Button = ({ title, type }) => {
  const otherStyles = 'w-full h-[50px]  flex justify-center items-center  font-syne rounded-3xl space-x-2 text-white';
  return (
    <button
      className={
        (type === "inverted")
          ? `bg-transparent border-2 border-brand ${otherStyles}`
          : `bg-brand  ${otherStyles}` 
      }
    >
      <p>{title}</p>
    </button>
  );
};
export default Button;
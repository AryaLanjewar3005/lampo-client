const ImageFrame = ({ image, width, height }) => {

  return (
    <div
      className={`relative rounded-t-[50px] rounded-b[80px] w-[${width}] h-[${height}] `}
    >
      <img
        src={image}
        alt=""
        className="absolute w-full h-full object-cover rounded-t-[500px] rounded-b-[80px]"
      />
    </div>
  );
};
export default ImageFrame;

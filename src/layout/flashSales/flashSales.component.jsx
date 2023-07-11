import Button from "../../components/button/button.component";


const FlashSales = () => {
  return (
    <div className="my-[60px] flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between ">
      {/* Right side and top side */}
      <div className="flex flex-col space-y-4 min-w-[200px] max-w-md">
        <h1 className="text-white font-syne text-5xl tracking-wide leading-snug ">
          See more of our flash sales
        </h1>
        <p className="text-secondary">
          Get a variety of special products and the best prices that we present
          just for you, you can only find then in our shop!
        </p>
        <div className="w-1/2">
            <Button title={'Shop Now'} type={''}/>
        </div>
        
      </div>
      {/* showcase lamps */}
      <div className="flex space-y-10 sm:space-y-0 flex-col sm:flex-row sm:space-x-3 items-center">
      <div className=" relative w-[200px] h-[340px] rounded-t-[500px] rounded-b-[80px] ">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
        </div>
        {/* <ImageFrame
          image={
            "https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          }
          width={"200px"}
          height={"300px"}
        /> */}
        <div className=" relative w-[200px] h-[340px] rounded-t-[500px] rounded-b-[80px] ">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        
        {/* <ImageFrame
          image={
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          width={"200px"}
          height={"300px"}
        /> */}
        <div className=" hidden xl:block relative w-[200px] h-[340px] rounded-t-[500px] rounded-b-[80px] hover:h-[280px] duration-200">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1600084893232-102e2e5d68fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        {/* <ImageFrame
          image={
            "https://images.unsplash.com/photo-1600084893232-102e2e5d68fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          width={"200px"}
          height={"300px"}
        /> */}
      </div>
    </div>
  );
};

export default FlashSales;

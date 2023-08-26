const Contact = () => {
  return (
    <section className="self-stretch flex flex-col py-[50px] px-0 box-border items-center justify-start w-full top-[0] text-center text-21xl text-primary-800 font-heading-heading-1 lg:flex-1">
      <div className="self-stretch flex flex-col items-center justify-start max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Contact me
          </h1>
          <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
              <input
                className="font-roboto text-base bg-[transparent] self-stretch flex flex-col py-4 px-3 items-center justify-start border-[1px] border-solid border-gray md:flex-col md:gap-[10px] md:items-start md:justify-center"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="font-roboto text-base bg-[transparent] self-stretch rounded box-border h-[150px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Comments or questions"
                required
              />
              <button className="cursor-pointer [border:none] p-0 bg-primary-500 rounded w-[222px] h-[46px] flex flex-col items-center justify-center">
                <div className="relative text-base font-roboto text-white text-center inline-block w-[203.12px]">
                  Submit
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

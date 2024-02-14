// import React from 'react'

const About = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex ">
        <div className="w-[50%] flex flex-col">
          <div className="border-b-[0.5px] border-[#7A7A7A] px-[5rem] py-[2rem]">
            <h2 className="text-[3rem] font-[600]">ABOUT US</h2>
            <p className="font-[500]">
              Plains and Valleys Realty is a new residential and commercial real
              estate brokerage firm specialized in sales, rentals and devlopment
              of residential and commercial structures. The company is located
              in Ilorin, Kwara State, Nigeria. Plains and Valleys is managed by
              goal oriented young individuals who see the future in real estate
              and are ready to pull all the weight required to get real estate
              in Kwara State to its best place.
            </p>
          </div>
          <div className="px-[5rem] py-[2rem]">
            <h2 className="text-[3rem] font-[600]">OUR MISSION</h2>
            <p className="font-[500]">
              Plains and Valleys Realty is focused on maintaining genuine
              relationships with its clients and understanding the environment
              to provide effective services. We value teamwork, commitment and
              integrity as a path to building long lasting relationships with
              our clients and effectiveness in our work. Our vision is to be a
              trusted brand and partner with reputable companies to provide the
              best housing solutions and services to our clients.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[100%] bg-[url('./Images/about.png')] bg-[no-repeat] bg-[center] bg-[cover]">
          <div className="w-[100%] h-[100%] flex justify-center items-center bg-black bg-opacity-[0.5] z-[-1]">
            <table className="w-[28rem] h-[75%] text-center border-[#E3A335] text-[#E3A335] border-collapse border text-[1.25rem] font-[600]">
              <tbody>
                <tr>
                  <td
                    colSpan={2}
                    className="border border-[#E3A335] py-[0.5rem] px-[4rem]"
                  >
                    Our teams success is determined by our ability to being
                    PART.
                  </td>
                </tr>
                <tr>
                  <td className="p-[2rem] border border-[#E3A335]">
                    <img
                      src="./Images/heart.svg"
                      alt="heart"
                      className="h-[2rem] w-[2rem] mx-auto"
                    />
                    <span>Passionate</span>
                  </td>
                  <td className="p-[2rem] border border-[#E3A335]">
                    <img
                      src="./Images/medal.svg"
                      alt="medal"
                      className="h-[2rem] w-[2rem] mx-auto"
                    />
                    <span>Achieve</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-[2rem] border border-[#E3A335]">
                    <img
                      src="./Images/home.svg"
                      alt="home"
                      className="h-[2rem] w-[2rem] mx-auto"
                    />
                    <span>Realistic</span>
                  </td>
                  <td className="p-[2rem] border border-[#E3A335]">
                    <img
                      src="./Images/calendar.svg"
                      alt="calendar"
                      className="h-[2rem] w-[2rem] mx-auto"
                    />
                    <span>Time Effective</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <img src={"../Images/about.png"} alt="" className="h-[100%]" /> */}
        </div>
      </div>
    </>
  );
};

export default About;

import React, { useState, useEffect } from "react";
// import Map from "../../assets/img/map.png";
import Phone from "../../assets/svg/phone.svg";
import Email from "../../assets/svg/email.svg";
import Helpdesk from "../../assets/svg/helpdesk.svg";
import axios from "axios";
import { BASE_URL } from "../../constents";
import Swal from "sweetalert2";

const GetinTouch = ({ language }) => {
  const [GetinTouchData, setGetinTouchData] = useState();
  const [GITEngDesc, setGITEngDesc] = useState();
  const [GITEngPhone, setGITEngPhone] = useState();
  const [GITEngEmail, setGITEngEmail] = useState();
  const [GITEngHelpDEsk, setGITEngHelpDEsk] = useState();

  const [GITArDesc, setGITArDesc] = useState();
  const [GITArPhone, setGITArPhone] = useState();
  const [GITArEmail, setGITArEmail] = useState();
  const [GITArHelpDEsk, setGITArHelpDEsk] = useState();

  const [GetinTouch, setGetinTouch] = useState({
    getname: "",
    getphone: "",
    getemail: "",
    getsms: "",
  });

  const HandleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGetinTouch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/contact-forms/`, {
        data: {
          contact_name: GetinTouch.getname,
          contact_phone: GetinTouch.getphone,
          contact_email: GetinTouch.getemail,
          message: GetinTouch.getsms,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: "Your message submitted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/get-in-touches`)
      .then((res) => {
        setGetinTouchData(res?.data?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  useEffect(() => {
    if(GetinTouchData) {
      setGITEngDesc(GetinTouchData[0]?.attributes?.description_text_english)
      setGITEngPhone(GetinTouchData[0]?.attributes?.phone_num)
      setGITEngEmail(GetinTouchData[0]?.attributes?.email_address)
      setGITEngHelpDEsk(GetinTouchData[0]?.attributes?.helpdesk)

      setGITArDesc(GetinTouchData[0]?.attributes?.description_text_arabic)
      setGITArPhone(GetinTouchData[0]?.attributes?.phone_num)
      setGITArEmail(GetinTouchData[0]?.attributes?.email_address)
      setGITArHelpDEsk(GetinTouchData[0]?.attributes?.helpdesk)
    } 
  }, [GetinTouchData]);

  return (
    <>
      <div className="halaContainer">
        {language === "english" ? (
          <div className="flex items-center justify-between flex-col md:flex-row gap-16 pt-[60px] pb-0 md:pb-[60px]">
            <div className="get-in-touch-wrap w-full md:w-1/2">
              <h2 className="montserrat text-[28px] md:text-[46px] font-semibold">
                Get in <span>touch</span>
              </h2>
              <p className="montserrat text-[14px] leading-[24px] font-normal">
                {GITEngDesc ? (
                  GITEngDesc
                ) : (
                  <>
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                    Eu leo molestie vel.
                  </>
                )}
              </p>
              <form
                className="flex flex-col gap-6 py-6"
                onSubmit={HandleSubmit}
              >
                <input
                  className="appearance-none bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="text"
                  value={GetinTouch.getname}
                  placeholder="Contact Name"
                  name="getname"
                  onChange={HandleInputs}
                />
                <input
                  className="appearance-none bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="tel"
                  placeholder="Contact Phone"
                  name="getphone"
                  value={GetinTouch.getphone}
                  onChange={HandleInputs}
                />
                <input
                  className="appearance-none bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="email"
                  placeholder="Email"
                  name="getemail"
                  value={GetinTouch.getemail}
                  onChange={HandleInputs}
                />
                <input
                  className="appearance-none bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="text"
                  placeholder="Let’s talk about your idea"
                  name="getsms"
                  value={GetinTouch.getsms}
                  onChange={HandleInputs}
                />
                <button
                  className="git-btn mt-4 flex-shrink-0 rounded-lg text-[14px] uppercase text-white font-bold py-2 px-2 rounded focus:outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Phone} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="montserrat text-[13px] leading-[20px] font-semibold text-black">
                      Phone
                    </h5>
                    <a
                      href="tel:+ 218 91 562 3535"
                      className="montserrat text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                    >
                      {GITEngPhone ? (
                        GITEngPhone
                      ) : (
                        <> + 218 91 565 3535 </>
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Email} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="montserrat text-[13px] leading-[20px] font-semibold text-black">
                      E-MAIL
                    </h5>
                    <a
                      href="mailto:info@halaair.aero"
                      className="montserrat text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                    >
                      {GITEngEmail ? (
                        GITEngEmail
                      ) : (
                        <> info@halaair.aero </>
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Helpdesk} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="montserrat text-[13px] leading-[20px] font-semibold text-black">
                      HELPDESK
                    </h5>
                    <a
                      href="https://helpdesk.com"
                      className="montserrat text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                    >
                      {GITEngHelpDEsk ? (
                        GITEngHelpDEsk
                      ) : (
                        <> https://helpdesk.com </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[350px] md:h-[511px] w-full md:w-1/2">
              {/* <img src={Map} alt="map" className="w-full h-full" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107218.36146469873!2d13.040679651336726!3d32.88299433729187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892c4c11c43d9%3A0x8d99d8947b5cec86!2sTripoli%2C%20Libya!5e0!3m2!1sen!2s!4v1704907366055!5m2!1sen!2s"
                width="100%"
                height="100%"
                title="MapIframe"
                style={{ border: 0 }}
                // allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between flex-col md:flex-row-reverse gap-16 pt-[60px] pb-0 md:pb-[60px]">
            <div
              className="get-in-touch-wrap w-full md:w-1/2 "
              style={{ direction: "rtl" }}
            >
              <h2 className="text-[24px] md:text-[32px] font-semibold font-arabic">
                <span>يلمس</span> أدخل
              </h2>
              <p className="text-[16px] leading-[24px] font-normal font-arabic mt-5">
                {GITArDesc ? GITArDesc : ''}
              </p>
              <form
                className="flex flex-col gap-6 py-6"
                onSubmit={HandleSubmit}
                style={{ direction: "rtl" }}
              >
                <input
                  className="appearance-none font-arabic bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="text"
                  value={GetinTouch.getname}
                  placeholder="اسم جهة الاتصال"
                  name="getname"
                  onChange={HandleInputs}
                />
                <input
                  className="appearance-none font-arabic bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="tel"
                  placeholder="هاتف الاتصال"
                  name="getphone"
                  value={GetinTouch.getphone}
                  onChange={HandleInputs}
                  style={{ direction: "rtl" }}
                />
                <input
                  className="appearance-none font-arabic bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="email"
                  placeholder="بريد إلكتروني"
                  name="getemail"
                  value={GetinTouch.getemail}
                  onChange={HandleInputs}
                />
                <input
                  className="appearance-none font-arabic bg-transparent border-b border-[#737B7D] w-full placeholder:text-[#8E8E8E] text-dark-700 mr-3 py-2 px-2 leading-normal focus:outline-none"
                  type="text"
                  placeholder="دعونا نتحدث عن فكرتك"
                  name="getsms"
                  value={GetinTouch.getsms}
                  onChange={HandleInputs}
                />
                <button
                  className="git-btn font-arabic mt-4 flex-shrink-0 rounded-lg text-[18px] uppercase text-white font-bold py-2 px-2 rounded focus:outline-none"
                  type="submit"
                >
                  يُقدِّم
                </button>
              </form>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Phone} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className=" font-arabic text-[13px] leading-[20px] font-semibold text-black">
                      هاتف
                    </h5>
                    <a
                      href="tel:+ 218 91 562 3535"
                      className=" font-arabic text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                      style={{
                        direction: "ltr",
                        textAlign: "right",
                      }}
                    >
                      {GITArPhone ? (
                        GITArPhone
                      ) : (
                        <> + 218 91 565 3535 </>
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Email} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-arabic text-[13px] leading-[20px] font-semibold text-black">
                      بريد إلكتروني
                    </h5>
                    <a
                      href="mailto:info@halaair.aero"
                      className="font-arabic text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                    >
                      {GITArEmail ? (
                        GITArEmail
                      ) : (
                        <> info@halaair.aero </>
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[28px]">
                    <img src={Helpdesk} alt="icon" className="h-full w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-arabic text-[13px] leading-[20px] font-semibold text-black">
                      مكتب المساعدة
                    </h5>
                    <a
                      href="https://helpdesk.com"
                      className="font-arabic text-[13px] leading-[20px] font-normal text-[#DD5471] text-ellipsis overflow-hidden"
                    >
                      {GITArHelpDEsk ? (
                        GITArHelpDEsk
                      ) : (
                        <> https://helpdesk.com </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[350px] md:h-[511px] w-full md:w-1/2">
              {/* <img src={Map} alt="map" className="w-full h-full" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107218.36146469873!2d13.040679651336726!3d32.88299433729187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892c4c11c43d9%3A0x8d99d8947b5cec86!2sTripoli%2C%20Libya!5e0!3m2!1sen!2s!4v1704907366055!5m2!1sen!2s"
                width="100%"
                height="100%"
                title="MapIframe"
                style={{ border: 0 }}
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetinTouch;

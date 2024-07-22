import React, { useState, useEffect } from "react";
import { Select } from "antd";
import "../HeroSection.css";
import fromwhere1 from "../../../assets/svg/fromwhere.svg";
import whereto from "../../../assets/svg/whereto.svg";
import divider from "../../../assets/svg/divider.svg";
import {
  MailOutlined,
  MessageOutlined,
  UserAddOutlined,
  GoldOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../../constents";


const CargoABanner = ({ language }) => {
  const [cargo, setCargo] = useState({
    cargo_name: "",
    cargo_email: "",
    cargo_sms: "",
  });

  const [fromwhereArabic, setFromWhereArabic] = useState("");
  const [towhereArabic, setTowhereArabic] = useState("");
  const [FromArabicOption, setFromArabicOption] = useState("");
  const [ToArabicOption, setToArabicOption] = useState("");

  const [kgs, setKgs] = useState(0);
  const [KgOptions, setKgOptions] = useState(false);
  const [bannerHeading, setBannerHeading] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/from-where-arabics`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map((item) => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value,
          };
        });

        setFromArabicOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    axios
      .get(`${BASE_URL}/where-to-arabics`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map((item) => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value,
          };
        });

        setToArabicOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    axios
      .get(`${BASE_URL}/banner-heading-cargos`)
      .then((res) => {
        const heading = res.data.data[0].attributes.banner_heading_cargo_ar;
        setBannerHeading(heading);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handlefromWhere = (value) => {
    setFromWhereArabic(value);
  };
  const handletoWhere = (value) => {
    setTowhereArabic(value);
  };

  const HandleKGOptions = () => {
    setKgOptions(!KgOptions);
  };

  const handleDecrement = () => {
    setKgOptions(true);
    setKgs(kgs - 1 >= 0 ? kgs - 1 : 0);
  };

  const handleIncrement = () => {
    setKgOptions(true);
    setKgs((pre) => pre + 1);
  };

  const HandleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCargo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const CalKG = `${kgs} Kg`;

    if (fromwhereArabic && towhereArabic && kgs) {
      axios
        .post(`${BASE_URL}/cargos/`, {
          data: {
            Name: cargo.cargo_name,
            Email: cargo.cargo_email,
            Message: cargo.cargo_sms,
            From_where: fromwhereArabic,
            Where_to: towhereArabic,
            Kg: CalKG,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              text: "Your message submitted successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
            setCargo({
              cargo_name: "",
              cargo_email: "",
              cargo_sms: "",
            });
            setFromWhereArabic("");
            setTowhereArabic("");
            setKgs(0);
          }
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <>
      <div className="halaContainer">
        <div className="commercialCard">
          <h2 className="text-[42px] animate_arabic">{bannerHeading}</h2>
        </div>
        <form className="card-form-main" onSubmit={HandleSubmit} dir="rtl">
          <div className="cargo-form">
            <div className="formCard-cargo">
              <div className="select-wrapper">
                <UserAddOutlined className="arabic-icon text-[18px] text-[#796859]" />
                <input
                  type="text"
                  placeholder="اسم"
                  className="input-cargo-arabic pr-[45px] font-arabic"
                  name="cargo_name"
                  value={cargo.cargo_name}
                  onChange={HandleInputs}
                  required
                />
              </div>
              <img src={divider} alt="missing" className="divider" />
              <div className="select-wrapper">
                <MailOutlined className="arabic-icon text-[18px] text-[#796859] pl-1" />
                <input
                  type="email"
                  placeholder="بريد إلكتروني"
                  className="input-cargo-arabic pr-[45px] font-arabic"
                  name="cargo_email"
                  value={cargo.cargo_email}
                  onChange={HandleInputs}
                  required
                />
              </div>

              <img src={divider} alt="missing" className="divider" />

              <div className="select-wrapper">
                <MessageOutlined className="arabic-icon text-[18px] text-[#796859] pl-1" />
                <input
                  type="text"
                  placeholder="رسالة"
                  className="input-cargo-arabic pr-[45px] font-arabic"
                  name="cargo_sms"
                  value={cargo.cargo_sms}
                  onChange={HandleInputs}
                  required
                />
              </div>
            </div>
            <div className="border-cargo"></div>
            <div className="formCard-cargo">
              <div className="select-wrapper">
                <img src={fromwhere1} alt="missing" className="arabic-icon" />
                <Select
                  defaultValue={fromwhereArabic ? fromwhereArabic : "من اين؟"}
                  className="dropdownhala dropdownhalaArabic"
                  style={{ fontFamily: "font-arabic" }}
                  onChange={handlefromWhere}
                  options={[
                    {
                      label: "من اين؟",
                      value: null,
                      disabled: true,
                    },
                    ...FromArabicOption,
                  ]}
                />
              </div>
              <img src={divider} alt="missing" className="divider" />
              <div className="select-wrapper">
                <img src={whereto} alt="missing" className="arabic-icon" />
                <Select
                  defaultValue={towhereArabic ? towhereArabic : "إلى أين؟"}
                  onChange={handletoWhere}
                  style={{ fontFamily: "font-arabic" }}
                  className="dropdownhala dropdownhalaArabic"
                  options={[
                    {
                      label: "إلى أين؟",
                      value: null,
                      disabled: true,
                    },
                    ...ToArabicOption,
                  ]}
                />
              </div>

              <img src={divider} alt="missing" className="divider" />

              <div className="select-wrapper dropdownDatePicker h-[42px] md:h-full">
                <GoldOutlined className="arabic-icon text-[18px] text-[#796859] pl-1" />
                <div
                  className="w-[220px] pr-[45px] pl-12 cursor-pointer relative text-[18px] text-[#877f57]"
                  onClick={HandleKGOptions}
                >
                  {kgs === 0 ? "" : kgs} كلغ
                </div>
                {KgOptions && (
                  <>
                    <div className="flex flex-col gap-3 bg-white shadow-lg absolute left-[12px] py-3 px-4 top-[32px] rounded-lg">
                      <div className="flex justify-between items-center gap-2">
                        <label className="w-[80px]">كلغ </label>
                        <div className="w-[80px] flex justify-between items-center">
                          <span
                            className="cursor-pointer"
                            onClick={() => handleDecrement("kg")}
                          >
                            <MinusCircleOutlined />
                          </span>
                          <span> {kgs} </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => handleIncrement("kg")}
                          >
                            <PlusCircleOutlined />
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="fromcard-btnArabic">
            <button type="submit"> يرسل </button>
          </div>
        </form>
       
      </div>

    </>
  );
};

export default CargoABanner;

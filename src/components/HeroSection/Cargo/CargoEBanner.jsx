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
  PlusCircleOutlined
} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2"; 
import { BASE_URL } from "../../../constents";



const CargoEBanner = ({language}) => {
  const [cargo, setCargo] = useState({
    cargo_name: "",
    cargo_email: "",
    cargo_sms: ""
  })
  const [fromwhere, setFromWhere] = useState("");
  const [towhere, setToWhere] = useState("");
  const [FromOption, setFromOption] = useState("");
  const [ToEngOption, setToEngOption] = useState("");
  const [bannerHeading,setBannerHeading] =useState();
  const [kgs, setKgs] = useState(0);
  const [KgOptions, setKgOptions] = useState(false);


  useEffect(() => {
    axios.get(`${BASE_URL}/from-where-options`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map(item => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value
          };
        });
  
        setFromOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });
 
    axios.get(`${BASE_URL}/where-to-englishes`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map(item => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value
          };
        });
  
        setToEngOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });

      axios
      .get(`${BASE_URL}/banner-heading-cargos`)
      .then((res) => {
        const heading = res.data.data[0].attributes.banner_heading_cargo_en
        setBannerHeading(heading);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);


  const handlefromWhere = (value) => {
    setFromWhere(value);
  };
  const handletoWhere = (value) => {
    setToWhere(value);
  };

  const HandleKGOptions = () => {
    setKgOptions(!KgOptions);
  }

  const handleDecrement = () => {
    setKgOptions(true)
    setKgs(kgs - 1 >= 0 ? kgs - 1 : 0);
  };

  const handleIncrement = () => {
    setKgOptions(true)
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

  if(fromwhere && towhere && kgs){
  
    axios
      .post(`${BASE_URL}/cargos/`, {
        data: {
          Name: cargo.cargo_name,
          Email: cargo.cargo_email,
          Message: cargo.cargo_sms,
          From_where: fromwhere,
          Where_to: towhere,
          Kg: CalKG
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
            cargo_sms: ""
          });
          setFromWhere("");
          setToWhere("");
          setKgs(0)
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
    }
  };

  return (
    <div className="halaContainer">
      <div className="commercialCard">
      <h2 className='text-[72px] animate_english'> 
          {bannerHeading}
        </h2>
      </div>
        <form className="card-form-main" onSubmit={HandleSubmit}>
          <div className="cargo-form">
            <div className="formCard-cargo">
              <div className="select-wrapper">
                <UserAddOutlined className="icon text-[18px] text-[#796859]" />
                <input
                  type="text"
                  placeholder="Name"
                  className="input-cargo"
                  name="cargo_name"
                  value={cargo.cargo_name}
                  onChange={HandleInputs}
                  required
                />
              </div>
              <img src={divider} alt="missing" className="divider" />
              <div className="select-wrapper">
                <MailOutlined className="icon text-[18px] text-[#796859] pl-1" />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-cargo"
                  name="cargo_email"
                  value={cargo.cargo_email}
                  onChange={HandleInputs}
                  required
                />
              </div>

              <img src={divider} alt="missing" className="divider" />

              <div className="select-wrapper">
                <MessageOutlined className="icon text-[18px] text-[#796859] pl-1" />
                <input
                  type="text"
                  placeholder="Message"
                  className="input-cargo"
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
                <img src={fromwhere1} alt="missing" className="icon" />
                <Select
                  defaultValue={fromwhere ? fromwhere : "From where?"}
                  className="dropdownhala"
                  onChange={handlefromWhere}
                  options={[
                    {
                      label: "From Where",
                      value: null,
                      disabled: true,
                    },
                    ...FromOption
                  ]}
                />
              </div>
              <img src={divider} alt="missing" className="divider" />
              <div className="select-wrapper">
                <img src={whereto} alt="missing" className="icon" />
                <Select
                  defaultValue={towhere ? towhere : "Where to?"}
                  onChange={handletoWhere}
                  className="dropdownhala"
                  options={[
                    {
                      label: "Where To",
                      value: null,
                      disabled: true,
                    },
                    ...ToEngOption
                  ]}
                />
              </div>

              <img src={divider} alt="missing" className="divider" />

              <div className="select-wrapper dropdownDatePicker h-[42px] md:h-full">
                <GoldOutlined className="icon text-[18px] text-[#796859] pl-1" />
                <div className="w-[220px] pl-10 md:pl-12 cursor-pointer relative text-[14px] text-[#877f57]" onClick={HandleKGOptions} >
                  {kgs === 0 ? "" : kgs} KG 
                </div>
                {
                  KgOptions &&
                  <>
                  <div className="flex flex-col gap-3 bg-white shadow-lg absolute left-[12px] py-3 px-4 top-[32px] rounded-lg">
                    <div className="flex justify-between items-center gap-2">
                      <label className="w-[80px]">KG: </label>
                      <div className="w-[80px] flex justify-between items-center"> 
                        <span className="cursor-pointer" onClick={() => handleDecrement('kg')}><MinusCircleOutlined /></span>
                        <span> {kgs} </span>
                        <span className="cursor-pointer" onClick={() => handleIncrement('kg')}><PlusCircleOutlined /> </span>
                      </div>
                    </div>
                  </div>
                  </>
                }
              </div>
            </div>
          </div>
          <div className="fromcard-btn">
            <button type="submit">Send</button>
          </div>
        </form>
    </div>
  );
};

export default CargoEBanner;

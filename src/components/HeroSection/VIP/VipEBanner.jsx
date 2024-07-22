import React, { useState, useEffect } from "react";
import { Select } from "antd";
import "../HeroSection.css";
import fromwhere1 from "../../../assets/svg/fromwhere.svg";
import whereto from "../../../assets/svg/whereto.svg";
import adulticon from "../../../assets/svg/adult.svg";
import divider from "../../../assets/svg/divider.svg";
import {
  MailOutlined,
  MessageOutlined,
  UserAddOutlined,
  MinusCircleOutlined, 
  PlusCircleOutlined
} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2"; 
import { BASE_URL } from "../../../constents";
// import ServicesCargo from "../Cargo/ServicesCargo";


const VipEBanner = ({language}) => {
  const [vip, setVip] = useState({
    vip_name: "",
    vip_email: "",
    vip_sms: ""
  })
  
  const [fromwhere, setFromWhere] = useState("");
  const [towhere, setToWhere] = useState("");
  const [FromOption, setFromOption] = useState("");
  const [ToEngOption, setToEngOption] = useState("");

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [passengers, setPassengers] = useState();
  const [AdultOptions, setAdultOptions] = useState(false);
  const [bannerHeading ,setBannerHeading] = useState();
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
      .get(`${BASE_URL}/banner-heading-vips`)
      .then((res) => {
        const heading = res.data.data[0].attributes.banner_heading_vip_en
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

  const HandleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVip((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const HandleAdultOptions = () => {
    setAdultOptions(!AdultOptions);
  }

  const handleDecrement = (counterType) => {
    setAdultOptions(true)
    switch (counterType) {
      case 'adults':
        setAdults(adults - 1 >= 0 ? adults - 1 : 0);
        break;
      case 'children':
        setChildren(children - 1 >= 0 ? children - 1 : 0);
        break;
      case 'infants':
        setInfants(infants - 1 >= 0 ? infants - 1 : 0);
        break;
      default:
        break;
    }
  };

  const handleIncrement = (counterType) => {
    setAdultOptions(true)
    switch (counterType) {
      case 'adults':
        setAdults(adults + 1);
        break;
      case 'children':
        setChildren(children + 1);
        break;
      case 'infants':
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setPassengers(adults+children+infants)
  }, [adults, children, infants])



  const HandleSubmit = (e) => {
    e.preventDefault();
    const AllPass = `${passengers} Passengers`;

    if(passengers && fromwhere && towhere)
    axios
      .post(`${BASE_URL}/vips/`, {
        data: {
          Name: vip.vip_name,
          Email: vip.vip_email,
          Message: vip.vip_sms,
          From_where: fromwhere,
          Where_to: towhere,
          Passengers: AllPass
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: "Your message submitted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          setVip({
            vip_name: "",
            vip_email: "",
            vip_sms: ""
          });
          setFromWhere("");
          setToWhere("");
          setAdults(0);
          setChildren(0);
          setInfants(0);
          setPassengers(0);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
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
                name="vip_name"
                value={vip.vip_name}
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
                name="vip_email"
                value={vip.vip_email}
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
                name="vip_sms"
                value={vip.vip_sms}
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
            <img src={adulticon} alt="missing" className="icon" />
            {/* <GoldOutlined className="icon text-[18px] text-[#796859] pl-1" /> */}
          <div className="w-[220px] pl-10 md:pl-12 cursor-pointer relative text-[14px] text-[#877f57]" onClick={HandleAdultOptions} >
              {passengers === 0 ? "" : passengers} Passegers 
            </div>
            {
              AdultOptions &&
              <>
              <div className="flex flex-col gap-3 bg-white shadow-lg absolute left-[12px] py-3 px-4 top-[32px] rounded-lg">
                <div className="flex justify-between items-center gap-2">
                  <label className="w-[80px]">Adults: </label>
                  <div className="w-[80px] flex justify-between items-center"> 
                    <span className="cursor-pointer" onClick={() => handleDecrement('adults')}><MinusCircleOutlined /></span>
                    <span> {adults} </span>
                    <span className="cursor-pointer" onClick={() => handleIncrement('adults')}><PlusCircleOutlined /> </span>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <label className="w-[80px]">Children: </label>
                  <div className="w-[80px] flex justify-between items-center"> 
                    <span className="cursor-pointer" onClick={() => handleDecrement('children')}><MinusCircleOutlined /></span>
                    <span> {children} </span>
                    <span className="cursor-pointer" onClick={() => handleIncrement('children')}><PlusCircleOutlined /> </span>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <label className="w-[80px]">Infants: </label>
                  <div className="w-[80px] flex justify-between items-center"> 
                    <span className="cursor-pointer" onClick={() => handleDecrement('infants')}><MinusCircleOutlined /></span>
                    <span> {infants} </span>
                    <span className="cursor-pointer" onClick={() => handleIncrement('infants')}><PlusCircleOutlined /> </span>
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

export default VipEBanner;



         
import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Popover } from "antd";
import "../HeroSection.css";
// import MyCalendar from "../MyCalendar/MyCalendar";
import fromwhere1 from "../../../assets/svg/fromwhere.svg";
import whereto from "../../../assets/svg/whereto.svg";
import adulticon from "../../../assets/svg/adult.svg";
import divider from "../../../assets/svg/divider.svg";
import calendaricon from "../../../assets/svg/calendaricon.svg";
import { DatePicker } from "antd";
import axios from "axios";
import { BASE_URL } from "../../../constents";
import Swal from "sweetalert2";
import moment from "moment";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";


const { RangePicker } = DatePicker;

const ComEBanner = ({ language }) => {
  const [fromwhere, setFromWhere] = useState("From Where?");
  const [towhere, setToWhere] = useState("Where to?");
  const [FromOption, setFromOption] = useState("");
  const [ToEngOption, setToEngOption] = useState("");
  // const [adult, setAdult] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("oneway");
  const [isRoundTripOpen, setIsRoundTripOpen] = useState(true);
  const [isOneWayOpen, setIsOneWayOpen] = useState(true);
  // const [tourdates, setTourDates] = useState();
  const [depart, setDepart] = useState();
  const [arrive, setArrive] = useState();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [passengers, setPassengers] = useState();
  const [AdultOptions, setAdultOptions] = useState(false);
  const [bannerHeading, setBannerHeading] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/from-where-options`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map((item) => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value,
          };
        });

        setFromOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    axios
      .get(`${BASE_URL}/where-to-englishes`)
      .then((res) => {
        const transformedArray = res?.data?.data?.map((item) => {
          return {
            option: item?.attributes?.label,
            value: item?.attributes?.value,
          };
        });

        setToEngOption(transformedArray);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    axios
      .get(`${BASE_URL}/banner-heading-heroes`)
      .then((res) => {
        const heading = res.data.data[0].attributes.banner_heading_hero_en
        setBannerHeading(heading);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const onRoundTripChange = (dates, dateStrings) => {
    setDepart(dateStrings[0]);
    setArrive(dateStrings[1]);
  };

  const onOneWayChange = (date, dateString) => {
    setDepart(dateString);
  };
  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
    setDepart();
    setArrive();
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const handlefromWhere = (value) => {
    setFromWhere(value);
  };
  const handletoWhere = (value) => {
    setToWhere(value);
  };
  // const handleadult = (value) => {
  //   setAdult(value);
  // };
  const sendDateToApi = () => {
    handleOpenChange();
    const date =
      selectedTab === "oneway"
        ? { depart: depart }
        : { depart: depart, arrive: arrive };
    console.log(date);
  };

  const disabledDate = (current) => {
    const currentDate = moment();
    return current && current.isBefore(currentDate, "day");
  };

  const popoverContent = (
    <>
      <div className="text-[#000]">
        <div className="flex gap-5 items-center flex-col md:flex-row justify-between">
          <div className="clander-modal flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              id="Round trip"
              name="Round trip"
              value="Round trip"
              checked={selectedTab === "Round trip"}
              onChange={handleTabChange}
            />
            <label htmlFor="Round trip" className="cursor-pointer">
              Round trip
            </label>
          </div>
          <div className="clander-modal flex gap-2 items-center cursor-pointer">
            <input
              type="radio"
              id="oneway"
              name="oneway"
              value="oneway"
              checked={selectedTab === "oneway"}
              onChange={handleTabChange}
            />
            <label htmlFor="oneway" className="cursor-pointer">
              One Way
            </label>
          </div>
          {selectedTab === "Round trip" && (
            <div
              style={{
                display: selectedTab === "Round trip" ? "block" : "none",
              }}
            >
              {/* Content for Tab 1 */}
              <div>
                <RangePicker
                  placeholder={["Depart", "Arrive"]}
                  onChange={onRoundTripChange}
                  open={isRoundTripOpen}
                  onOpenChange={(open) => setIsRoundTripOpen(open)}
                  id="roundTrip"
                  placement="bottomLeft"
                  disabledDate={disabledDate}
                />
              </div>
            </div>
          )}

          {selectedTab === "oneway" && (
            <div
              style={{ display: selectedTab === "oneway" ? "block" : "none" }}
            >
              {/* Content for Tab 2 */}
              <div>
                <DatePicker
                  placeholder="Depart"
                  onChange={onOneWayChange}
                  open={isOneWayOpen}
                  onOpenChange={(open) => setIsOneWayOpen(open)}
                  id="oneWay"
                  placement="bottomLeft"
                  disabledDate={disabledDate}
                  // disabled={DisableDate}
                />
              </div>
            </div>
          )}
          <button
            onClick={sendDateToApi}
            className="searchbtn	"
            style={{ borderRadius: "6px" }}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );

  const HandleAdultOptions = () => {
    setAdultOptions(!AdultOptions);
  };

  const handleDecrement = (counterType) => {
    setAdultOptions(true);
    switch (counterType) {
      case "adults":
        setAdults(adults - 1 >= 0 ? adults - 1 : 0);
        break;
      case "children":
        setChildren(children - 1 >= 0 ? children - 1 : 0);
        break;
      case "infants":
        setInfants(infants - 1 >= 0 ? infants - 1 : 0);
        break;
      default:
        break;
    }
  };

  const handleIncrement = (counterType) => {
    setAdultOptions(true);
    switch (counterType) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      case "infants":
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setPassengers(adults + children + infants);
  }, [adults, children, infants]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const AllPass = `${passengers} Passengers`;
    if (fromwhere && towhere && depart && passengers) {
      axios
        .post(`${BASE_URL}/commercials/`, {
          data: {
            From_where: fromwhere,
            Where_to: towhere,
            Departure: depart,
            Arrival: arrive,
            Passengers: AllPass,
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
          setFromWhere("");
          setToWhere("");
          setDepart("");
          setArrive("");
          setAdults(0);
          setChildren(0);
          setInfants(0);
          setPassengers("");
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <>
      <div className="commercialCard">
        <h2 className="text-[72px] animate_english">{bannerHeading}</h2>
      </div>
        <form className="formCard" onSubmit={HandleSubmit}>
            <div className="select-wrapper">
            <img src={fromwhere1} alt="missing" className="icon" />
            <Select
                defaultValue={language === "english" ? fromwhere : "From Where?"}
                className="dropdownhala"
                onChange={handlefromWhere}
                options={[
                {
                    label: "From Where",
                    value: null,
                    disabled: true,
                },
                ...FromOption,
                ]}
            />
            </div>
            <img src={divider} alt="missing" className="divider" />
            <div className="select-wrapper">
            <img src={whereto} alt="missing" className="icon" />
            <Select
                defaultValue={language === "english" ? towhere : "Where To?"}
                onChange={handletoWhere}
                className="dropdownhala"
                options={[
                {
                    label: "Where To",
                    value: null,
                    disabled: true,
                },
                ...ToEngOption,
                ]}
            />
            </div>
            <img src={divider} alt="missing" className="divider" />

            <Popover
            content={popoverContent}
            open={open}
            trigger="click"
            onOpenChange={handleOpenChange}
            placement="bottom"
            >
            <div
                type="primary"
                className="dropdownDatePicker cursor-pointer flex items-center text-[14px] text-[#877f57]"
            >
                <div className="iconcalendar">
                <img
                    src={calendaricon}
                    alt="missing"
                    className="pl-0 md:pl-2"
                />
                </div>
                <span className="ml-2 md:ml-1">
                {selectedTab === "oneway"
                    ? depart
                    ? depart
                    : "Depart"
                    : `${depart ? depart : "Depart"} - ${
                        arrive ? arrive : "Arrive"
                    }`}
                </span>
            </div>
            </Popover>

            <img src={divider} alt="missing" className="divider" />

            <div className="select-wrapper dropdownDatePicker h-[42px] md:h-full">
            <img src={adulticon} alt="missing" className="icon" />

            <div
                className="w-[220px] pl-10 md:pl-12 cursor-pointer relative text-[14px] text-[#877f57]"
                onClick={HandleAdultOptions}
            >
                {passengers === 0 ? "" : passengers} Passegers
            </div>
            {AdultOptions && (
                <>
                <div className="flex flex-col gap-3 bg-white shadow-lg absolute left-[12px] py-3 px-4 top-[32px] rounded-lg">
                    <div className="flex justify-between items-center gap-2">
                    <label className="w-[80px]">Adults: </label>
                    <div className="w-[80px] flex justify-between items-center">
                        <span
                        className="cursor-pointer"
                        onClick={() => handleDecrement("adults")}
                        >
                        <MinusCircleOutlined />
                        </span>
                        <span> {adults} </span>
                        <span
                        className="cursor-pointer"
                        onClick={() => handleIncrement("adults")}
                        >
                        <PlusCircleOutlined />{" "}
                        </span>
                    </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                    <label className="w-[80px]">Children: </label>
                    <div className="w-[80px] flex justify-between items-center">
                        <span
                        className="cursor-pointer"
                        onClick={() => handleDecrement("children")}
                        >
                        <MinusCircleOutlined />
                        </span>
                        <span> {children} </span>
                        <span
                        className="cursor-pointer"
                        onClick={() => handleIncrement("children")}
                        >
                        <PlusCircleOutlined />{" "}
                        </span>
                    </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                    <label className="w-[80px]">Infants: </label>
                    <div className="w-[80px] flex justify-between items-center">
                        <span
                        className="cursor-pointer"
                        onClick={() => handleDecrement("infants")}
                        >
                        <MinusCircleOutlined />
                        </span>
                        <span> {infants} </span>
                        <span
                        className="cursor-pointer"
                        onClick={() => handleIncrement("infants")}
                        >
                        <PlusCircleOutlined />{" "}
                        </span>
                    </div>
                    </div>
                </div>
                </>
            )}
            </div>
            <button type="submit" className="searchbtn">
            Send
            </button>
        </form>
    </>
  );
};

export default ComEBanner;

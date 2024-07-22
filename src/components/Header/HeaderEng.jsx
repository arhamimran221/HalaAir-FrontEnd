import React from 'react';
import flylogo from "../../assets/svg/logo.svg";
import { useNavigate } from 'react-router-dom';
import "./Header.css";

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, } = Layout;

const HeaderEng = ({ setLanguage }) => {
  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }
  const handleMenuClick = ({ key }) => {
    if (key === '/') { 
      // console.log("eng");
      setLanguage('arabic');
    } else if (key) {
      navigate(key);
    }
  };
  const EnglishNavi = [
    getItem('Home', '/home'),
    getItem('About', '/about-hala-air'),
    getItem('Corporate', '/corporate'),
    getItem('Plan for travel', 'planfortravel', [
      getItem('Baggage Calculator', '/bCalculator'),
      getItem('Check-in Information', '/check-in-information'),
    ]),
    getItem('Destination', '/destination'),
    getItem('Cargo', '/cargo'),
    getItem('FAQs', '/faqs'),
    getItem('العربية', '/'),
  ];
  
  const navigate = useNavigate();
  

  return (
    <Layout>
      <Header
        className='w-[95%] flex items-center justify-between bg-white header-eng font-[Tajawal]'
      >
        <div className="demo-logo" >
          <Link to='/home'>
            <img src={flylogo} alt='logo' />
          </Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={EnglishNavi}
          onClick={handleMenuClick}
          style={{
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
export default HeaderEng;
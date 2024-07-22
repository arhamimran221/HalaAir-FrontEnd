import React from 'react';
import flylogo from "../../assets/svg/logo.svg";
import { useNavigate } from 'react-router-dom';
import "./Header.css";

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, } = Layout;


const HeaderArbi = ({ setLanguage }) => {
  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }
  
  const ArbiNavi = [
    getItem('English', '/'),
    getItem(' أسئلة شائعة', '/faqs'),
    getItem(' الشحن', '/cargo'),
    getItem(' الوجهات', '/destination'),
    getItem('خطط السفر', 'planfortravel', [
        getItem('حاسبة الأمتعة', '/bCalculator'),
        getItem('معلومات تسجيل الوصول', '/check-in-information'),
      ]),
    getItem('الشركة', '/corporate'),
    getItem('عن', '/about-hala-air'),
    getItem('الرئيسية', '/home'), 
  ];
  
  const navigate = useNavigate();
  

  const handleMenuClick = ({ key }) => {
    if (key === '/') { 
      // console.log("eng");
      setLanguage('english');
    } else if (key) {
      navigate(key);
    }
  };
  return (
    <Layout>
      <Header
        className='lg:ml-[154px] sm:ml-[0px] flex flex-row-reverse items-center justify-between bg-white header-arbi '
      >
        <div className="demo-logo" >
          <Link to='/home'>
            <img src={flylogo} alt='logo' />
          </Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={ArbiNavi}
          onClick={handleMenuClick}
          style={{
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
export default HeaderArbi;
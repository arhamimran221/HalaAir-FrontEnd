import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{
          components: {
            Select: {
              optionActiveBg:"#F59223",
              optionSelectedColor:"#fff",
              optionSelectedBg:"#F59223",
              optionActiveText:"#fff",
            },
            DatePicker:{
              activeBorderColor:"#F59223",
              cellRangeBorderColor:"#F59223",
              hoverBorderColor:"F59223",
              style: {
                fontFamily: "'Nunito Sans', sans-serif",
              }
            },
          },
        }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);


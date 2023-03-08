import React from "react";
import { useState } from "react";
import "../styles/block.css";
import Icon from "@mdi/react";
import { mdiWeatherSunny } from "@mdi/js";
import { mdiWeatherCloudy } from "@mdi/js";
import { mdiWeatherSnowy } from "@mdi/js";
import { mdiWeatherRainy } from "@mdi/js";
import { Modal } from "@mui/material";
const Block = function (props) {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  function closeModal() {
      setModal(false)
    
  }
  return (
    <div className="block-wrapper" >
      <div className={`weatherblock ${props.weather.toLowerCase()}`} onClick={openModal}>
        <p className="time">{props.time} </p>
        <p className="weatherinfo">{props.weather} </p>
        <div>
          {props.weather === "Clear" ? (
            <Icon path={mdiWeatherSunny} size={1} />
          ) : props.weather === "Clouds" ? (
            <Icon path={mdiWeatherCloudy} size={1} />
          ) : props.weather === "Snow" ? (
            <Icon path={mdiWeatherSnowy} size={1} />
          ) : props.weather === "Rain" ? (
            <Icon path={mdiWeatherRainy} size={1} />
          ) : null}
        </div>
        <p className="weatherinfo">{props.weatherdesc}</p>
        {props.temperature > -0.5 && props.temperature < 0 ? (
          <p className="temperature">
            {Math.abs(props.temperature).toFixed(0)}℃
          </p>
        ) : (
          <p className="temperature">{props.temperature.toFixed(0)}℃</p>
        )}
      </div>
      {
        <Modal open={modal} onClose={closeModal}>
          <div className={`modal-container ${props.weather.toLowerCase()}`}>
            <div className="main-info">
              <p className="time">{props.time} </p>
              <p className="weather-info">
                {props.weather}, {props.weatherdesc}{" "}
              </p>
              <div>
                {props.weather === "Clear" ? (
                  <Icon path={mdiWeatherSunny} size={1} />
                ) : props.weather === "Clouds" ? (
                  <Icon path={mdiWeatherCloudy} size={1} />
                ) : props.weather === "Snow" ? (
                  <Icon path={mdiWeatherSnowy} size={1} />
                ) : props.weather === "Rain" ? (
                  <Icon path={mdiWeatherRainy} size={1} />
                ) : null}
              </div>
              <p className="temperature">
                Temperature: {props.temperature}℃, feels like{" "}
                {props.tempfeels_like}℃{" "}
              </p>
            </div>
            <div className="detailed-wrapper">
              <div className="detailed-info">
                <p>Pressure: {props.pressure}</p>
                <p>Humidity: {props.humidity}</p>
              </div>
              <div className="detailed-wind">
                <p>Wind speed: {props.wind_speed}</p>
                <p>Wind gust: {props.wind_gust}</p>
              </div>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
};
export default Block;

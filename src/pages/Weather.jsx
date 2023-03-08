import React, { useEffect, useState } from "react";
import axios from "axios";
import Block from "../components/Block";
import Icon from "@mdi/react";
import "../styles/weather.css"
import Pagination from "../components/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { TextField, Button } from "@mui/material";
import { mdiMagnify } from "@mdi/js";

function Weather() {
  let city = localStorage.getItem("city");

  const [value, setValue] = useState(city || "Kyiv");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [split, setSplit] = useState(0);

  const [fetchWeather, isLoading, error] = useFetching(async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&cnt=40&appid=a9be263066308193e2963b50dd2671f3`
    );
    setLocation(response.data.city);
    setData(response.data.list);
    setSplit(0);
    localStorage.setItem("city", `${value}`);
  });

  useEffect(() => {
    fetchWeather();
  }, []);
  function fetchOnEnter(e) {
    if (e.key === "Enter") {
      fetchWeather();
    }
  }


  return (
    <div>
      <div className="content-wrapper">
        <div className="search-wrapper">
          <TextField
            sx={{ width: '60%' }}
            size="small"
            id="filled-search"
            type="text"
            placeholder="Search..."
            value={value}
            onKeyUp={fetchOnEnter}
            onChange={(event) => setValue(event.target.value)}
          />
          <Button
            variant="contained"
            sx={{ padding: 1}}
            className="searchbtn"
            onClick={fetchWeather}
          >
            <Icon path={mdiMagnify} size={1} />
          </Button>{" "}
        </div>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Loader />
          </div>
        ) : null}
        {!error && !isLoading && (
          <h1 className="location">
            {location.name} {location.country}{" "}
          </h1>
        )}
        {error && !isLoading ? (
          <h1 style={{ textAlign: "center" }}>Ошибка ${error}</h1>
        ) : isLoading === false ? (
          <div className="content-block">
            {data.slice(split, split + 8).map((item) => (
              <Block
                key={item.dt}
                temperature={item.main.temp}
                tempfeels_like={item.main.feels_like}
                humidity={item.main.humidity}
                pressure={item.main.pressure}
                wind_speed={item.wind.speed}
                wind_gust={item.wind.gust}
                weather={item.weather[0].main}
                weatherdesc={item.weather[0].description}
                time={item.dt_txt}
              />
            ))}
          </div>
        ) : null}

        {data.length > 0 && !error && !isLoading ? (
          <Pagination setSplit={setSplit} split={split} />
        ) : null}
      </div>
    </div>
  );
}

export default Weather;

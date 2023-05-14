import { useEffect, useState } from "react";
import LoadingOverlay from 'react-loading-overlay-ts';

const TodayWether = ({ data }) => {
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [speed, setSpeed] = useState("");
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (data && data.main) {
      setTemp(data.main.temp);
      setMax(data.main.temp_max);
      setMin(data.main.temp_min);
      setFeelsLike(data.main.feels_like);
      setHumidity(data.main.humidity);
    }
    setLoading(false);
  }, [data]);

  useEffect(() => {
    setLoading(true);
    if (data && data.weather) {
      setDesc(data.weather[0].description);
      setIcon(data.weather[0].icon);
    }
    setLoading(false);
  }, [data]);

  useEffect(() => {
    setLoading(true);
    if (data && data.wind) {
      setSpeed(data.wind.speed);
    }
    setLoading(false);
  }, [data]);

  return (
    <LoadingOverlay active={loading} spinner text='Loading weather data...'>
      <div className="today-box">
        <div className="today-box-left">
          <h1> {temp && ` ${temp}°`}</h1>
          <p>{desc}</p>
          {data && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="Weather Icon"
            />
          )}
        </div>

        <div className="today-box-right">
          <p>{feelsLike && `feels like: ${feelsLike}°`}</p>
          <p>{min && `min-temp: ${min}°`}</p>
          <p>{max && `max-temp: ${max}°`}</p>

          <p>{speed && `wind: ${speed} km/h`}</p>
          <p>{humidity && `humidity: ${humidity} %`}</p>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default TodayWether;

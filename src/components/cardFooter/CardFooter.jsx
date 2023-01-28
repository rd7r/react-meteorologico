import './CardFooter.css'
export const CardFooter = ({humidity, windspeed, feelsLike}) => {
  return (
    <footer>
      <div>
        <span> {humidity}% </span>
        <strong> Humidity </strong>
      </div>
      <div>
        <span> {windspeed} km/h </span>
        <strong> Windspeed </strong>
      </div>
      <div>
        <span> {feelsLike}° </span>
        <strong> FeelsLike </strong>
      </div>
    </footer>
  );
};

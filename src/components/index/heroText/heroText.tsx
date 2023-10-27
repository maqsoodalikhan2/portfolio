import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeroText = () => {
  return (
    <div className="heroTextWrapper">
      <p>Hey, I'm</p>
      <h1>Maqsood Ali Khan</h1>
      <h2>A Full-Stack Web Developer.</h2>
      <a href="#second">
        <svg viewBox="0 0 49 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.14233 4.31759L1.14235 4.31757L3.68576 1.77416C4.54075 0.919161 5.92644 0.917521 6.78344 1.7705L24.1471 19.0528L24.4998 19.4039L24.8526 19.0528L42.2161 1.77049C43.0731 0.917521 44.4588 0.919161 45.3138 1.77416L47.8572 4.31757C48.7137 5.17404 48.7137 6.56255 47.8573 7.41888L47.8572 7.4189L26.0506 29.2258C26.0506 29.2258 26.0506 29.2258 26.0506 29.2258C25.1941 30.0821 23.8056 30.0821 22.9491 29.2258C22.9491 29.2258 22.9491 29.2258 22.9491 29.2258L1.14235 7.4189C0.285875 6.56243 0.285902 5.17392 1.14233 4.31759Z"
            stroke="white"
          />
          <path
            d="M5.41401 1.04102L5 11L16.7884 12L17 23L24.4999 19.1629"
            stroke="white"
            strokeWidth="0.25"
          />
          <path
            d="M43.3929 1.04102L44 11L32.0185 12.5V23L24.307 19.1629"
            stroke="white"
            strokeWidth="0.25"
          />
        </svg>
      </a>
    </div>
  );
};

export default HeroText;

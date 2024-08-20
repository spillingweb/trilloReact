import styles from "./HotelOverview.module.scss";
import InlineBtn from "./UI/InlineBtn";
import Hotel1 from "../assets/img/hotel-1.jpg";
import Hotel2 from "../assets/img/hotel-2.jpg";
import Hotel3 from "../assets/img/hotel-3.jpg";
import { FaStar, FaLocationDot } from "react-icons/fa6";

const HotelOverview: React.FC = () => {
  return (
    <>
      <div className={styles.gallery}>
        <figure>
          <img src={Hotel1} alt="Hotel photo by night" />
        </figure>
        <figure>
          <img src={Hotel2} alt="Hotel photo pool day" />
        </figure>
        <figure>
          <img src={Hotel3} alt="Hotel photo view of coast" />
        </figure>
      </div>

      <div className={styles.overview}>
        <h1>Hotel Las Palmas</h1>
        <div className={styles.stars}>
          <FaStar fill="var(--color-primary)" size="1.65rem" />
          <FaStar fill="var(--color-primary)" size="1.65rem" />
          <FaStar fill="var(--color-primary)" size="1.65rem" />
          <FaStar fill="var(--color-primary)" size="1.65rem" />
          <FaStar fill="var(--color-primary)" size="1.65rem" />
        </div>

        <div className={styles.location}>
          <FaLocationDot fill="var(--color-primary)" size="1.65rem" />
          <InlineBtn href="https://maps.app.goo.gl/XK3tMbKX2YMgVf8ZA">Albufeira, Portugal</InlineBtn>
        </div>
        <div className={styles.rating}>
          <span className={styles.ratingScore}>8.6</span>
          <span className={styles.ratingCount}>429 votes</span>
        </div>
      </div>
    </>
  );
};

export default HotelOverview;

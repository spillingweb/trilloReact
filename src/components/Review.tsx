import styles from "./Review.module.scss";
import { FaQuoteLeft } from "react-icons/fa6";

const Review: React.FC<{
  text: string;
  image: string;
  name: string;
  date: string;
  rating: number;
}> = ({ text, image, name, date, rating }) => {
  return (
    <figure className={styles.review}>
      <FaQuoteLeft
        size={'7rem'}
        fillOpacity={"0.07"}
        style={{
          "position": "absolute",
          "top": "-3rem",
          "left": "-2rem"
        }}
      />
      <blockquote className={styles.text}>{text}</blockquote>
      <figcaption className={styles.user}>
        <img src={image} alt={`User ${name}`} />
        <div className={styles.userBox}>
          <p className={styles.userName}>{name}</p>
          <p className={styles.userDate}>{date}</p>
        </div>
        <div className={styles.rating}>{rating}</div>
      </figcaption>
    </figure>
  );
};

export default Review;

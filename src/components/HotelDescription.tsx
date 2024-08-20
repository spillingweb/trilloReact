import CardContainer from "./UI/CardContainer";
import styles from "./HotelDescription.module.scss";
import ListElement from "./UI/ListElement";
import Friend1 from "../assets/img/user-3.jpg";
import Friend2 from "../assets/img/user-4.jpg";
import Friend3 from "../assets/img/user-5.jpg";
import Friend4 from "../assets/img/user-6.jpg";

const DUMMY_FEATURES = [
  "Close to the beach",
  "Breakfast included",
  "Free airport shuttle",
  "Free wifi in all rooms",
  "Air conditioning and heating",
  "Pets allowed",
  "We speak all languages",
  "Perfect for families",
];

const HotelDescription: React.FC = () => {
  return (
    <div className={styles.description}>
      <CardContainer>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className={styles.paragraph}>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className={styles.list}>
          {DUMMY_FEATURES.map((item) => (
            <ListElement key={item} text={item} />
          ))}
        </ul>
        <div className={styles.recommendations}>
          <p className={styles.recommendCount}>
            Lucy and 3 other friends recommend this hotel
          </p>
          <div className={styles.recommendFriends}>
            <img
              src={Friend1}
              alt="Friend 1"
              className={styles.recommendPhoto}
            />
            <img
              src={Friend2}
              alt="Friend 2"
              className={styles.recommendPhoto}
            />
            <img
              src={Friend3}
              alt="Friend 3"
              className={styles.recommendPhoto}
            />
            <img
              src={Friend4}
              alt="Friend 4"
              className={styles.recommendPhoto}
            />
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default HotelDescription;

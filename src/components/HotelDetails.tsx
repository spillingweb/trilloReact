import styles from "./HotelDetails.module.scss";
import HotelDescription from "./HotelDescription";
import UserReviews from "./UserReviews";

const HotelDetails: React.FC = () => {
  return (
    <div className={styles.details}>
      <HotelDescription />
      <UserReviews />
    </div>
  );
};

export default HotelDetails;

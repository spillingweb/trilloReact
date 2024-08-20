import HotelOverview from "./HotelOverview";
import HotelDetails from "./HotelDetails";
import styles from "./HotelView.module.scss";

const HotelView: React.FC = () => {
  return (
    <main className={styles.hotelView}>
      <HotelOverview />
      <HotelDetails />
      <div className={styles.cta}>
        <h2>Good news! We have 4 free rooms for your selected dates!</h2>
        <button>
          <span className={styles.visible}>Book now</span>
          <span className={styles.invisible}>Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default HotelView;

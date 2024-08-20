import styles from "./Header.module.scss";
import Logo from "../assets/img/logo.png";
import UserPhoto from "../assets/img/user.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Trillo Logo" className={styles.logo} />

      <form action="#" className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Hotels"
        />
        <button className={styles.searchButton}>
          <FaMagnifyingGlass size="1.5rem" color="#777" />
        </button>
      </form>

      <nav className={styles.userNav}>
        <div className={styles.iconBox}>
          <FaBookmark size="2.25rem" color="#777" />
          <span className={styles.notification}>7</span>
        </div>
        <div className={styles.iconBox}>
          <FaComments size="2.25rem" color="#777" />
          <span className={styles.notification}>13</span>
        </div>
        <div className={styles.user}>
          <img src={UserPhoto} alt="User photo" className={styles.userPhoto} />
          <span className={styles.userName}>Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

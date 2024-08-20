import { useState } from "react";
import styles from "./NavBar.module.scss";
import NavElement from "./NavElement";
import { FaHouse, FaPlaneDeparture, FaKey, FaRegMap } from "react-icons/fa6";

const DUMMY_LINKS = [
  {
    text: "hotel",
    icon: <FaHouse />,
  },
  {
    text: "flight",
    icon: <FaPlaneDeparture />,
  },
  {
    text: "car rental",
    icon: <FaKey />,
  },
  {
    text: "tours",
    icon: <FaRegMap />,
  },
];

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("hotel");

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.nav}>
        {DUMMY_LINKS.map((item) => (
          <NavElement
            key={item.text}
            text={item.text}
            icon={item.icon}
            isActive={item.text === activeLink}
            onClick={() => setActiveLink(item.text)}
          />
        ))}
      </ul>

      <div className={styles.legal}>&copy; 2024 by SpillingWeb</div>
    </nav>
  );
};

export default NavBar;

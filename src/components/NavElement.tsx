import { ReactNode } from "react";
import styles from "./NavElement.module.scss";

type NavElType = {
  text: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: (text: string) => void;
};

const NavElement: React.FC<NavElType> = ({ text, icon, isActive, onClick }) => {
  const activeClass = isActive ? styles.activeLink : "";

  return (
    <li className={`${styles.navItem} ${activeClass}`}>
      <a href="#" onClick={() => onClick(text)} className={styles.navLink}>
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
};

export default NavElement;

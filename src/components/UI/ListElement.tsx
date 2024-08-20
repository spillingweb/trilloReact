import { FaChevronRight } from "react-icons/fa6";
import styles from './ListElement.module.scss';

const ListElement: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className={styles.listItem}>
      <FaChevronRight size="1rem" fill="var(--color-primary)" />
      {text}
    </li>
  );
};

export default ListElement;

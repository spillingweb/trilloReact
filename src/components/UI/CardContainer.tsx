import { PropsWithChildren } from "react";
import styles from "./CardContainer.module.scss";

const CardContainer = (props: PropsWithChildren<{review?: boolean}>) => {
  const reviewStyle = props.review ? styles.review : '';

  return <div className={`${styles.container} ${reviewStyle}`}>{props.children}</div>;
};

export default CardContainer;
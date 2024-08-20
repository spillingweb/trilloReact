import styles from "./InlineBtn.module.scss";
import { PropsWithChildren } from "react";

type BtnProps = {
  href?: string;
};

const InlineBtn = (props: PropsWithChildren<BtnProps>) => {
  
  function handleBtnClick() {
    if (props.href) {
      window.open(props.href, "_blank");
    }
  }

  return (
    <button
      className={styles.inlineBtn}
      onClick={handleBtnClick}
    >
      {props.children}
    </button>
  );
};

export default InlineBtn;

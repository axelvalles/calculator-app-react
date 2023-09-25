import { useEffect, useMemo, useState } from "react";
import styles from "./calculator-switch.module.css";

const CalculatorSwitch = () => {
  const [state, setState] = useState<1 | 2 | 3>(1);

  const sliderClass = useMemo(() => {
    switch (state) {
      case 1:
        return "";
      case 2:
        return styles.slider___mid;
      case 3:
        return styles.slider___end;
    }
  }, [state]);

  const handleState = () => {
    switch (state) {
      case 1:
        setState(2);
        break;
      case 2:
        setState(3);
        break;
      case 3:
        setState(1);
        break;
    }
  };

  useEffect(() => {
    switch (state) {
      case 1:
        document.body.dataset.theme = "default";
        break;
      case 2:
        document.body.dataset.theme = "light";
        break;
      case 3:
        document.body.dataset.theme = "dark";
        break;
    }
  }, [state]);
  return (
    <div className={styles.switch__wrapper}>
      <h2 className={styles.switch__title}>THEME</h2>
      <div>
        <div className={styles.switch__labels}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button onClick={() => handleState()} className={styles.switch}>
          <span className={`${styles.slider} ${sliderClass}`}></span>
        </button>
      </div>
    </div>
  );
};

export default CalculatorSwitch;

import React from "react";
import styles from "./style";

const App: React.FC = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={``}></div>
    </div>
  </div>
);

export default App;

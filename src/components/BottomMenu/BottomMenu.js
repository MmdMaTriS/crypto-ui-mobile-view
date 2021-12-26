import styles from "./BottomMenu.module.scss";
import UserIcon from "../../styles/icons/User.png";
import WalletIcon from "../../styles/icons/Wallet_fill.png";
import TradeIcon from "../../styles/icons/Chart.png";
import HomeIcon from "../../styles/icons/home.png";
import ChangeIcon from "../../styles/icons/Vertical_switch.png";
import { Link } from "react-router-dom";

export default function BottomMenu() {
  return (
    <div className={styles.BottomMenu}>
      <div className={styles.menu_item}>
        <div className={styles.item_icon}>
          <img src={UserIcon} alt="User" width="30" height="30" />
        </div>
        <div className={styles.item_title}>پروفایل</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.item_icon}>
          <img src={WalletIcon} alt="wallet" width="30" height="30" />
        </div>
        <div className={styles.item_title}>کیف پول</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.item_icon}>
          <img src={ChangeIcon} alt="Change" width="30" height="30" />
        </div>
        <div className={styles.item_title_change}>تبدیل</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.item_icon}>
          <img src={TradeIcon} alt="trade" width="30" height="30" />
        </div>
        <div className={styles.item_title}>خرید و فروش</div>
      </div>
      <Link to="/">
        <div className={styles.menu_item}>
          <div className={styles.item_icon}>
            <img src={HomeIcon} alt="home" width="30" height="30" />
          </div>
          <div className={styles.item_title}>خانه</div>
        </div>
      </Link>
    </div>
  );
}

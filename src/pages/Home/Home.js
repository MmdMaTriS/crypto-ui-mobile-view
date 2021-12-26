import styles from "./Home.module.scss";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
//Swiper
//Banner
import Banner1 from "./banners/banner1.jpeg";
import Banner2 from "./banners/banner2.jpeg";
import Banner3 from "./banners/banner3.jpeg";
//Banner
//Icons
import BTC from "../../styles/icons/bitcoin.png";
import ETH from "../../styles/icons/Ethereum.png";
import Logo from "../../styles/icons/logo.png";
import WalletIcon from "../../styles/icons/Wallet_fill.png";
import NoteFillIcon from "../../styles/icons/note_fill.png";
import RegroupIcon from "../../styles/icons/Regroup.png";
import PhoneIcon from "../../styles/icons/Vector189.png";
import AskIcon from "../../styles/icons/Subtract-1.png";
import TicketIcon from "../../styles/icons/Subtract.png";
import SettingIcon from "../../styles/icons/Setting_fill.png";
import TradingIcon from "../../styles/icons/trending_up.png";
import { Link } from "react-router-dom";
//Icons

SwiperCore.use([Pagination, Autoplay]);
export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.app_logo}>
        <img src={Logo} alt="ArzFi" width="100px" height="80px" />
      </div>
      <div className={styles.top_menu}>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon}>
            <img src={WalletIcon} alt="wallet" width="30px" height="30px" />
          </div>
          <div className={styles.item_title}>کیف پول</div>
        </div>
        <div className={styles.top_menu_item}>
          <div
            className={styles.item_icon}
            style={{ paddingLeft: "11px", paddingTop: "10px" }}
          >
            <img src={NoteFillIcon} alt="Note" width="30px" height="30px" />
          </div>
          <div className={styles.item_title}>راهنما</div>
        </div>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon}>
            <img src={PhoneIcon} alt="Support" width="30px" height="30px" />
          </div>
          <div className={styles.item_title}>پشتیبانی</div>
        </div>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon}>
            <img src={RegroupIcon} alt="Regroup" width="30px" height="30px" />
          </div>
          <div className={styles.item_title}>تبدیل</div>
        </div>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon}>
            <img src={AskIcon} alt="Ask" width="30px" height="30px" />
          </div>
          <div className={styles.item_title}>سوالات متداول</div>
        </div>
        <Link to="/tickets">
          <div className={styles.top_menu_item}>
            <div className={styles.item_icon}>
              <img src={TicketIcon} alt="Ticket" width="30px" height="25px" />
            </div>
            <div className={styles.item_title}>تیکت</div>
          </div>
        </Link>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon} style={{ paddingTop: "0" }}>
            <img src={SettingIcon} alt="Setting" width="35px" height="35px" />
          </div>
          <div className={styles.item_title}>تنطیمات</div>
        </div>
        <div className={styles.top_menu_item}>
          <div className={styles.item_icon} style={{ paddingTop: "0" }}>
            <img src={TradingIcon} alt="Trade" width="35px" height="35px" />
          </div>
          <div className={styles.item_title}>قیمت لحظه ای</div>
        </div>
      </div>
      <div className={styles.home_swiper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.banner_place}>
              <img src={Banner1} alt="banner1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_place}>
              <img src={Banner2} alt="banner2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_place}>
              <img src={Banner3} alt="banner3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.coin_filters}>
        <div className={styles.coin_filter}>پرسودها</div>
        <div className={styles.coin_filter}>پرضررها</div>
        <div className={styles.coin_filter}>رمزارزهای برتر</div>
      </div>
      <div className={styles.coins_header_table}>
        <div className={styles.coin_header_table}>تغییر در ۲۴ ساعت</div>
        <div className={styles.coin_header_table}>قیمت(دلاری)</div>
        <div className={styles.coin_header_table}>رمزارز</div>
      </div>
      <hr style={{ width: "87%", marginTop: "-3px" }} />
      <div className={styles.coins_info_table}>
        <div className={styles.coin_info_table}>
          <div className={styles.coin_change_percent}>
            <div
              className={`${styles.coin_percent_show} ${styles.coin_percent_show_positive}`}
            >
              +0.46%
            </div>
          </div>
          <div className={styles.coin_price}>
            <div>$48939.90</div>
          </div>
          <div className={styles.coin_pic}>
            <img src={BTC} alt="BTC" width={30} height={30} />
          </div>
        </div>
        <div className={styles.coin_info_table}>
          <div className={styles.coin_change_percent}>
            <div
              className={`${styles.coin_percent_show} ${styles.coin_percent_show_negative}`}
            >
              -0.26%
            </div>
          </div>
          <div className={styles.coin_price}>
            <div>$4039.0</div>
          </div>
          <div className={styles.coin_pic}>
            <img src={ETH} alt="ETH" width={30} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
}

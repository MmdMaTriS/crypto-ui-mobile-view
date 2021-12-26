import styles from "./Tickets.module.scss";
//Icons
import Comment_Img1 from "../../../styles/icons/comment_duotone-1.png";
import Comment_Img2 from "../../../styles/icons/comment_duotone.png";
import { Link } from "react-router-dom";
//Icons

export default function Tickets() {
  return (
    <section className={styles.container}>
      <div className={styles.title_tickets_section}>پشتیبانی</div>
      <div className={styles.noMessage_section}>
        <div className={styles.noMessage_img}>
          <div className={styles.noMessage_img1}>
            <img src={Comment_Img1} alt="no_message" />
          </div>
          <div className={styles.noMessage_img2}>
            <img src={Comment_Img2} alt="no_message" />
          </div>
        </div>
        <div className={styles.noMessage_title}>شما هیج پیامی ندارید</div>
      </div>
      <div className={styles.place_button}>
        <Link to="/record-ticket">
          <button className={styles.recordTicket_button}>ثبت تیکت</button>
        </Link>
      </div>
    </section>
  );
}

import { useState } from "react";
import styles from "./RecordTicket.module.scss";
import AttachIcon from "../../../styles/icons/attach-file.png";
export default function RecordTicket() {
  const [showTicketOptions, setShowTicketOptions] = useState(false);
  const [ticketSubject, setTickeSubject] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketFile, setTicketFile] = useState([]);

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (!ticketTitle || !ticketSubject || !ticketDescription) {
      alert("Info must be complete");
      return;
    }
    alert(`Your Ticket ${ticketTitle} has been reported`);
    setTicketFile("");
    setTicketTitle("");
    setTickeSubject("");
    setTicketDescription("");
  };
  return (
    <>
      <div
        className={`${styles.choice_container} ${
          showTicketOptions ? styles.choice_container_active : ""
        }`}
        onClick={() => setShowTicketOptions(false)}
      ></div>
      <div
        className={`${styles.choice_ticket_title} ${
          showTicketOptions ? styles.choice_ticket_title_active : ""
        }`}
      >
        <div className={styles.choice_row1}>
          <div
            className={styles.choice_item1}
            onClick={() => setTickeSubject("1") & setShowTicketOptions(false)}
          >
            <div className={styles.icon_ticket_place}></div>
            <div className={styles.title_ticket_place}>سفارش گذاری</div>
          </div>
          <div
            className={styles.choice_item1}
            onClick={() => setTickeSubject("2") & setShowTicketOptions(false)}
          >
            <div className={styles.icon_ticket_place}></div>
            <div className={styles.title_ticket_place}>تراکنش</div>
          </div>
          <div
            className={styles.choice_item1}
            onClick={() => setTickeSubject("3") & setShowTicketOptions(false)}
          >
            <div className={styles.icon_ticket_place}></div>
            <div className={styles.title_ticket_place}>احراز هویت</div>
          </div>
        </div>
        <div className={styles.choice_row2}>
          <div
            className={styles.choice_item2}
            onClick={() => setTickeSubject("5") & setShowTicketOptions(false)}
          >
            <div className={styles.icon_ticket_place}></div>
            <div className={styles.title_ticket_place}>سایر</div>
          </div>
          <div
            className={styles.choice_item2}
            onClick={() => setTickeSubject("4") & setShowTicketOptions(false)}
          >
            <div className={styles.icon_ticket_place}></div>
            <div className={styles.title_ticket_place}>انتقادات</div>
          </div>
        </div>
      </div>
      {/*CONTAINER*/}
      <section className={styles.container}>
        <div className={styles.record_title}>ثبت تیکت</div>
        <div className={styles.record_ticket_form}>
          <form
            className={styles.ticket_form}
            onSubmit={(e) => handleSubmitInfo(e)}
          >
            <select
              onClick={() => setShowTicketOptions(!showTicketOptions)}
              value={ticketSubject}
            >
              <option value="" style={{ display: "none" }}>
                موضوع تیکت را انتخاب کنید
              </option>
              <option value="1" style={{ display: "none" }}>
                سفارش گذاری
              </option>
              <option value="2" style={{ display: "none" }}>
                تراکنش
              </option>
              <option value="3" style={{ display: "none" }}>
                احراز هویت
              </option>
              <option value="4" style={{ display: "none" }}>
                انتقاد و پیشنهاد
              </option>
              <option value="5" style={{ display: "none" }}>
                سایر
              </option>
            </select>
            <input
              type="text"
              placeholder="عنوان تیکت"
              className={styles.ticket_title_input}
              value={ticketTitle}
              onChange={(e) => setTicketTitle(e.target.value)}
            />
            <textarea
              value={ticketDescription}
              name=""
              placeholder="متن تیکت"
              onChange={(e) => setTicketDescription(e.target.value)}
            ></textarea>
            <label htmlFor="attach_file">
              <div className={styles.send_file}>
                <img src={AttachIcon} alt="send" width={30} height={30} />
                {ticketFile.name ? (
                  <span
                    className={styles.attached_file_name}
                    style={{ color: "green" }}
                  >
                    {ticketFile.name}
                  </span>
                ) : (
                  <span> تصویر مورد نظر را ضمیمه کنید</span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="attach_file"
              style={{ display: "none" }}
              onChange={(e) => setTicketFile(e.target.files[0])}
            />
            <button type="submit">ارسال تیکت</button>
          </form>
        </div>
      </section>
    </>
  );
}

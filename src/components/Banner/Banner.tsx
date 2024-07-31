import Image from "next/image";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__img}>
        <Image src="/img/anime_title1.jpg" fill={true} alt="anime title" />
      </div>
      <div className="banner__container">
        <div className={styles.banner__content}>
          <div className={styles.banner__text_container}>
            <div className={styles.banner__text_title}>Honkai Impact</div>
            <div className={styles.banner__text_description}>Нет описания</div>
          </div>
          <button className={styles.banner__btn}>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

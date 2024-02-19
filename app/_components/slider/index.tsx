import Image from "next/image";
import styles from "./styles.module.scss";

const images = ["/slides/img1.jpg", "/slides/img2.png", "/slides/img3.jpg"];

const Slider = () => {
  return (
    <section className={styles.container}>
      <div className={styles.slideshow}>
        <Image
          height={1080}
          width={1920}
          className={styles.slides}
          src={images[0]}
          alt="slides"
        />
        <button className={styles.previous}>←</button>
        <button className={styles.next}>→</button>
      </div>
    </section>
  );
};

export default Slider;

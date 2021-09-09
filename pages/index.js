import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import foodSamplePhoto from "../public/images/food-momo.jpg";
import drinkSamplePhoto from "../public/images/drink-violet-dreams-redbg.jpg";

export default function Home() {
  return (
    <>
      <section className={styles.heroImageContainer}>
        <section className={styles.heroImageLeft}>
          <div className={styles.img}>
            <Image
              alt="ExpectAsian Food"
              src={foodSamplePhoto}
              width={4000}
              height={4000}
            />
          </div>
          <h2>
            <Link href="/menu">
              <a>Eat</a>
            </Link>
          </h2>
        </section>
        <section className={styles.heroImageRight}>
          <div className={styles.img}>
            <Image
              alt="ExpectAsian Drink"
              src={drinkSamplePhoto}
              // width={4000}
              // height={4000}
            />
          </div>
          <h2>
            <Link href="/menu">
              <a>Drink</a>
            </Link>
          </h2>
        </section>
      </section>
    </>
  );
}

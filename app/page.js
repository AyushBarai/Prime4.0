import { Hero } from "@/components/Hero";
import { Intelops } from "@/components/Intelops";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.contents}>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-8xl/none">
            Digitize The World
          </h1>
          <p className="justify-center text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We help businesses transform through technology. Through our Digital
            It Solutions.
          </p>
          <div className={styles.buttons}>
            <button>Contact Us</button>
          </div>
        </div>
        <video
          src={require("../public/bgvideo.mp4")}
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </main>

      <Hero />
    </div>
  );
}

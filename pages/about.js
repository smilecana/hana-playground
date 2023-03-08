import * as React from "react";
import styles from "../styles/about.module.css";
import { Image, ImageFit } from "@fluentui/react/lib/Image";

const imageProps = {
  imageFit: ImageFit.contain,
  width: "100%",
  styles: () => ({
    root: {
      opacity: "0.5",
      float: "right",
    },
  }),
};

const About = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.grid_1}>
        <h1>Hi, there</h1>
        <br />
        <h1>
          I'm <span className={styles.design}>Hana</span>,
        </h1>
        <br />
        <h1>full-stack developer.</h1>
      </div>
      <div className={styles.grid_2}>
        <p>
          <span>
            I am passionate about using technology to solve real-world problems,
            and I enjoy planning services that help people achieve their goals
            while also reading books and watching dramas that challenge my
            perspectives and broaden my horizons.
          </span>
          <br />
        </p>
        <div className={styles.skill}>
          <h1>I'm familiar with:</h1>
          <ul className={styles.frontend}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Angular</li>
            <li>jQuery</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
          <ul className={styles.backend}>
            <li>Node.Js(Express.js/Next.js)</li>
            <li>Java</li>
            <li>php</li>
          </ul>
          <ul className={styles.etc}>
            <li>Database</li>
            <li>Content management system</li>
          </ul>
        </div>
        <Image {...imageProps} src={"/images/profile_.png"} />
      </div>
      <div className={styles.grid_3}></div>
    </div>
  );
};

export default About;

import * as React from "react";
import styles from "./Component.module.css";
import { Image, ImageFit } from "@fluentui/react/lib/Image";

const imageProps = {
  imageFit: ImageFit.contain,
  styles: () => ({}),
};

export const RightNav = () => {
  return (
    <div className={styles.right_wrap}>
      <div className={styles.word_list}>
        <div className={styles.gird_1}>
          <Image
            {...imageProps}
            src="/images/right_bg.png" // Route of the image file
          />
        </div>
        <div className={styles.gird_2}>
          <p>
            As a tech enthusiast and environmentalist, I believe that we have
            the power to use technology to promote sustainability and protect
            our planet for future generations, while also ensuring that everyone
            is able to live with dignity and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

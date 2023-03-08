import * as React from "react";
import Link from "next/link";
import {
  DocumentCard,
  DocumentCardImage,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { ImageFit } from "@fluentui/react/lib/Image";
import styles from "./Component.module.css";

const Card = (props) => {
  return (
    <Link
      className={styles.link}
      href={{
        pathname: `/portfolio/${props.data.id}`,
        query: {},
      }}
    >
      <DocumentCard
        aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
        className={styles.card}
      >
        <DocumentCardImage
          height={150}
          imageFit={ImageFit.cover}
          imageSrc={props.data.cover}
        />
        <DocumentCardTitle
          className={styles.title}
          title={props.data.id}
          showAsSecondaryTitle
        />
        <DocumentCardTitle
          className={styles.subtitle}
          title={props.data.date}
          showAsSecondaryTitle
        />
      </DocumentCard>
    </Link>
  );
};

export default Card;

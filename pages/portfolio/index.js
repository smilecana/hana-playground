import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import Card from "../../components/card";
import Layout from "../../components/layout";
import styles from "./Portfolio.module.css";

export default function Portfolio({ allPostsData }) {
  return (
    <Layout>
      <div className={styles.page_title}>
        <h1>PORTFOLIO</h1>
      </div>
      <div className={styles.lists}>
        {allPostsData.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "./Portfolio.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const imgList = {
  margin: "1rem 0",
  display: "inline-grid",
  " strong": {
    marginBottom: "1rem",
  },
};
const strong = {
  marginBottom: "0.5rem",
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.page_title}>
        <h1>{postData.title}</h1>
      </div>
      <div className={styles.post}>
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => {
              if (props.alt.includes("Sub")) {
                return <img {...props} style={{ width: "100%" }} />;
              } else {
                return (
                  <img
                    {...props}
                    style={{ width: "100%", display: "block", margin: "auto" }}
                  />
                );
              }
            },
            hr: ({ node, ...props }) => (
              <hr
                {...props}
                style={{
                  border: "1px solid #f744ca3b",
                  marginTop: "1rem",
                }}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                {...props}
                style={{
                  marginTop: "1rem",
                }}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                style={{
                  listStyle: "none",
                }}
              />
            ),
            li: ({ node, ...props }) => <li {...props} style={imgList} />,
            strong: ({ node, ...props }) => (
              <strong {...props} style={strong} />
            ),
          }}
          escapeHtml={false}
          rehypePlugins={[rehypeRaw]}
        >
          {postData.contentHtml}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

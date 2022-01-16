import { useState } from "react";
import textstyle from "/styles/new_post.module.css";
import styles from "/styles/schools.module.css";
import Head from 'next/head'
import uvicStyles from '/styles/uvic.module.css'

export default function Home({ allPostsData }) {
  const [question, setQuestion] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const submitQuestion = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/dbforum/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: question,
          author: author,
          content: content,
          comments: ["test comment 1", "test comment 2"],
          school: "uvic"
        }),
      });
    } catch (err) {
      console.log("bruh");
    }
    window.location.href = "/";
  };

  return (
    <div className="container">
      <Head>
      <title>DB Forum | New Post</title>
      </Head>
      <div>
        <h1 className={styles.title}>Share your thoughts!</h1>

        <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
          <div className="px-100 py-60">
            <form className="flex flex-col" onSubmit={submitQuestion}>
              <label htmlFor="question" className={textstyle.textarea}>
                Title
              </label>
              <textarea
                rows="5"
                cols="200"
                className="mb-4 border-b-2"
                id="question"
                name="question"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <label htmlFor="question" className={textstyle.textarea}>
                Your Name
              </label>
              <textarea
                rows="5"
                cols="200"
                className="mb-4 border-b-2"
                id="question"
                name="question"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <label htmlFor="question" className={textstyle.textarea}>
                Description (Optional)
              </label>
              <textarea
                rows="5"
                cols="200"
                className="mb-4 border-b-2"
                id="question"
                name="question"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <br></br>
              <a href="/" className={uvicStyles.btn}>
              Submit
              </a>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 0vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

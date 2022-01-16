import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react";
import styles from '/styles/schools.module.css'

const submitQuestion = async (event) => {
  event.preventDefault()

    const res = await fetch('/api/ask', {
      body: JSON.stringify({
        question: event.target.question.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
};

export default function Home({ allPostsData }) {
  const [question, setQuestion] = useState("");

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
          author: "eric liu",
          content: "this is a post to test the api",
          comments: ["test comment 1", "test comment 2"],
        }),
      });
    } catch (err) {
      console.log("bruh");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>DB Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">University of Victoria</h1>

        <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
          <div className="px-6 py-4">
            <form className="flex flex-col" onSubmit={submitQuestion}>
              <label htmlFor="question" className="mb-2 italic">
                Question:{" "}
              </label>
              <input
                className="mb-4 border-b-2"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/ker1200/nwHacks-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{" "}
          <img
            src="/drift_bapo.png"
            alt="Drift Bapo"
            className="logo"
            style={{ width: "200px", height: "200px" }}
          />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
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

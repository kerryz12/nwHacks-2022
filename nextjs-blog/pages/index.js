import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>DB Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to DB Forum!
        </h1>

        <p className="description">
            Need an answer? Ask! {"\n"}
            Click on your school to continue. 
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>UBC &rarr;</h3>
            <div className="ubc">
              <img src="ubc.png" style={{ width: "300px", height: "300px"}} />
            </div>
          </a>

          <a href="https://nextjs.org/docs" className="card">
            <h3>KPU &rarr;</h3>
            <div className="kpu">
              <img src="kpu.png" style={{ width: "300px", height: "300px"}} />
            </div>
          </a>

          <a href="/posts/testpost" className="card">
            <h3>SFU &rarr;</h3>
            <div className="sfu">
              <img src="sfu.png" style={{ width: "300px", height: "300px"}} />
            </div>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>UVic &rarr;</h3>
            <div className="uvic">
              <img src="uvic.png" style={{ width: "300px", height: "300px"}} />
            </div>
          </a>

        </div>
      </main>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <a
          href="https://github.com/ker1200/nwHacks-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <img src="/drift_bapo.png" alt="Drift Bapo" className="logo" style={{ width: "200px", height: "200px"}} />
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
  )
}

const handleSubmit = () => {
  // ... get data form
  // ... submit to API or something
}


<div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
<div className="px-6 py-4">
  <div className="mb-2 text-xl font-bold">Ask a question!</div>
  <form className="flex flex-col" onSubmit="{submitQuestion}">
    <input
      className="mb-4 border-b-2"
      id="question"
      name="question"
      type="text"
      autocomplete="question"
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
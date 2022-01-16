import Link from 'next/link'
import Layout from '../../components/layout'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Header() {
    return (
      <div>
        {/* <Navbar /> */}
        <Layout>



        <h1>University of British Columbia</h1>

        <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Ask a question!</div>
            <form className="flex flex-col" onSubmit="{submitContact}">
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
        </Layout>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Footer />
      </div>
      
    )
  }
import Link from 'next/link'

export default function UBC() {
    return (
      <>
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

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    )
  }
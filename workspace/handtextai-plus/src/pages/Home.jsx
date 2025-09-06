import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="">
      <section className="rounded-2xl bg-white p-8 shadow-soft">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Transform typed text into realistic handwriting
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Generate beautiful, handwritten-style text and overlay it on notebook pages.
          Export your creations as images or PDFs in seconds.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/generator"
            className="rounded-md bg-brand px-5 py-2.5 text-white shadow hover:bg-brand-dark"
          >
            Try Handwriting Generator
          </Link>
          <Link
            to="/notebook"
            className="rounded-md border border-brand px-5 py-2.5 text-brand hover:bg-blue-50"
          >
            Open Notebook
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold">Handwriting Fonts</h2>
          <p className="text-gray-600">
            Choose from multiple realistic handwriting fonts including
            <span className="font-caveat"> Caveat</span>,
            <span className="font-patrick"> Patrick Hand</span>, and
            <span className="font-homemade"> Homemade Apple</span>.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold">Export Easily</h2>
          <p className="text-gray-600">
            Download your work as a high-quality image or PDF with one click.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home


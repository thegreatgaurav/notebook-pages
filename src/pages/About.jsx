function About() {
  return (
    <div className="prose max-w-none prose-headings:font-semibold prose-p:leading-7">
      <h1 className="mb-4 text-3xl">About HandTextAI Plus</h1>
      <p>
        HandTextAI Plus helps you transform typed text into realistic handwriting. Choose from
        multiple handwriting fonts, preview your text, and export as an image or PDF. The Notebook
        view lets you write on lined or branded pages for a natural look.
      </p>

      <h2 className="mt-8 text-2xl">FAQ</h2>
      <div className="mt-4 grid gap-4">
        <div className="rounded-lg border bg-white p-4">
          <h3 className="text-lg font-semibold">Which fonts are included?</h3>
          <p className="text-gray-700">
            Caveat, Patrick Hand, and Homemade Apple are included for authentic handwriting styles.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h3 className="text-lg font-semibold">How do I export my work?</h3>
          <p className="text-gray-700">Use the buttons to download as a PNG image or a PDF.</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h3 className="text-lg font-semibold">Does this store my data?</h3>
          <p className="text-gray-700">No. Everything runs locally in your browser.</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h3 className="text-lg font-semibold">Is there a backend?</h3>
          <p className="text-gray-700">Not for now. This is a client-side app built with React.</p>
        </div>
      </div>
    </div>
  )
}

export default About


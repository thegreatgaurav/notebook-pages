import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Log to console as requested
    // eslint-disable-next-line no-console
    console.log({ name, email, message })
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft">
      <h1 className="mb-4 text-2xl font-semibold">Contact</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="h-40 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="rounded-md bg-brand px-5 py-2.5 text-white hover:bg-brand-dark">
            Send
          </button>
          {submitted && (
            <span className="ml-3 text-sm text-green-600">Thanks! We logged your message to the console.</span>
          )}
        </div>
      </form>
    </div>
  )
}

export default Contact


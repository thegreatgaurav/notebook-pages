import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const BACKGROUNDS = [
  { key: 'notebook', label: 'Plain Lines', src: '/pages/notebook-page.png' },
  { key: 'sandip', label: 'Sandip University', src: '/pages/sandip-page.png' },
]

function Notebook() {
  const [backgroundKey, setBackgroundKey] = useState('notebook')
  const [text, setText] = useState('Write your text here...')
  const [fontClass, setFontClass] = useState('font-patrick')
  const [fontSize, setFontSize] = useState(24)
  const [lineHeight, setLineHeight] = useState(1.6)
  const captureRef = useRef(null)

  const background = BACKGROUNDS.find((b) => b.key === backgroundKey) ?? BACKGROUNDS[0]

  async function handleDownloadImage() {
    if (!captureRef.current) return
    const canvas = await html2canvas(captureRef.current, { backgroundColor: null, scale: 2 })
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'notebook.png'
    link.click()
  }

  async function handleDownloadPdf() {
    if (!captureRef.current) return
    const canvas = await html2canvas(captureRef.current, { backgroundColor: '#ffffff', scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height)
    const width = canvas.width * ratio
    const height = canvas.height * ratio
    const x = (pageWidth - width) / 2
    const y = 20
    pdf.addImage(imgData, 'PNG', x, y, width, height)
    pdf.save('notebook.pdf')
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold">Notebook Options</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Background</label>
            <select
              value={backgroundKey}
              onChange={(e) => setBackgroundKey(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {BACKGROUNDS.map((b) => (
                <option key={b.key} value={b.key}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Font</label>
            <select
              value={fontClass}
              onChange={(e) => setFontClass(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="font-caveat">Caveat</option>
              <option value="font-patrick">Patrick Hand</option>
              <option value="font-homemade">Homemade Apple</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Font Size</label>
            <input
              type="number"
              min={14}
              max={64}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Line Height</label>
            <input
              type="number"
              step="0.1"
              min={1}
              max={2}
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">Your Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-56 w-full resize-y rounded-md border border-gray-300 bg-white/70 p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={handleDownloadImage} className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark">
            Download as Image
          </button>
          <button onClick={handleDownloadPdf} className="rounded-md border border-brand px-4 py-2 text-brand hover:bg-blue-50">
            Download as PDF
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold">Preview</h2>
        <div
          ref={captureRef}
          className="relative mx-auto w-full max-w-[700px] overflow-hidden rounded-md border border-gray-200 bg-white"
          style={{ aspectRatio: '1/1.414' }}
        >
          <img src={background.src} alt="Notebook background" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`absolute inset-0 h-full w-full resize-none bg-transparent p-8 text-gray-800 focus:outline-none ${fontClass}`}
            style={{ fontSize: `${fontSize}px`, lineHeight }}
          />
        </div>
        <p className="mt-3 text-sm text-gray-500">Tip: You can type directly in the preview.</p>
      </div>
    </div>
  )
}

export default Notebook


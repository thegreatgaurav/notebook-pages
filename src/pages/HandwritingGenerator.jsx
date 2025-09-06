import { useMemo, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const FONT_OPTIONS = [
  { label: 'Caveat', className: 'font-caveat' },
  { label: 'Patrick Hand', className: 'font-patrick' },
  { label: 'Homemade Apple', className: 'font-homemade' },
]

function HandwritingGenerator() {
  const [text, setText] = useState('Hello from HandTextAI Plus!')
  const [selectedFont, setSelectedFont] = useState(FONT_OPTIONS[0].className)
  const [fontSize, setFontSize] = useState(36)
  const [lineHeight, setLineHeight] = useState(1.5)
  const previewRef = useRef(null)

  const fontLabel = useMemo(() => {
    return FONT_OPTIONS.find((f) => f.className === selectedFont)?.label ?? 'Caveat'
  }, [selectedFont])

  async function handleDownloadImage() {
    if (!previewRef.current) return
    const canvas = await html2canvas(previewRef.current, { backgroundColor: null })
    const dataUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = 'handwriting.png'
    link.click()
  }

  async function handleDownloadPdf() {
    if (!previewRef.current) return
    const canvas = await html2canvas(previewRef.current, { backgroundColor: '#ffffff', scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height)
    const width = canvas.width * ratio
    const height = canvas.height * ratio
    const x = (pageWidth - width) / 2
    const y = 40
    pdf.addImage(imgData, 'PNG', x, y, width, height)
    pdf.save('handwriting.pdf')
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold">Enter Text</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          className="h-56 w-full resize-y rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Font</label>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {FONT_OPTIONS.map((opt) => (
                <option key={opt.className} value={opt.className}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Font Size</label>
            <input
              type="number"
              min={14}
              max={96}
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
          ref={previewRef}
          className={`min-h-64 whitespace-pre-wrap rounded-md border border-dashed border-gray-300 p-6 ${selectedFont}`}
          style={{ fontSize: `${fontSize}px`, lineHeight }}
        >
          {text || 'Start typing to see the preview...'}
        </div>
        <p className="mt-3 text-sm text-gray-500">Font: {fontLabel}</p>
      </div>
    </div>
  )
}

export default HandwritingGenerator


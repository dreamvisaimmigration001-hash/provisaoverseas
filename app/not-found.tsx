import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl font-heading font-bold text-primary mb-4">404 - Not Found</h2>
      <p className="text-text-muted mb-8">Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-deep transition-colors">
        Return Home
      </Link>
    </div>
  )
}

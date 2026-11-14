import Link from 'next/link';
import '@/app/globals.css';

export default function RootNotFound() {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-center px-4 py-16 font-sans">
        <span className="text-xs font-bold tracking-widest uppercase text-red-600 bg-red-100/70 px-3 py-1 rounded-full border border-red-200">
          404 - Sayfa Bulunamadı
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-neutral-900 tracking-tight sm:text-4xl">
          Aradığınız Sayfaya Ulaşılamadı
        </h1>
        <p className="mt-3 text-sm text-neutral-600 max-w-md">
          İstediğiniz sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-6">
          <Link
            href="/tr"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
          >
            Ana Sayfaya Git
          </Link>
        </div>
      </body>
    </html>
  );
}

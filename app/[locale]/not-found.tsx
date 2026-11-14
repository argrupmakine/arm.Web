import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <span className="text-xs font-bold tracking-widest uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
        404
      </span>
      <h1 className="mt-4 text-3xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl">
        Sayfa Bulunamadı
      </h1>
      <p className="mt-4 text-base text-neutral-600 max-w-md">
        Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

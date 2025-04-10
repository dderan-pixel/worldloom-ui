import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">ÖğrenciGPT</h1>
      <p className="text-lg text-gray-700 mb-6">
        Yapay zekâlı öğrenci danışmanın. Ödev, tercih, dilekçe... halledelim.
      </p>
      <Link href="/chat">
        <a className="bg-emerald-600 text-white px-6 py-3 rounded-md shadow hover:bg-emerald-700 transition">
          Hemen Başla
        </a>
      </Link>
    </div>
  );
}

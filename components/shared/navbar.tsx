import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          Roblox Trade Hub
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-200">
            계산기
          </Link>
          <Link href="/blog" className="hover:text-blue-200">
            가이드
          </Link>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">AI Career Platform</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
            Overview
          </Link>
          <Link href="/dashboard/profile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
            Student Profile
          </Link>
          <Link href="/dashboard/career-matches" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
            Career Matches
          </Link>
          <Link href="/dashboard/roadmap" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
            Learning Roadmap
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              ST
            </div>
            <div>
              <p className="text-sm font-medium">Student User</p>
              <p className="text-xs text-gray-500">Computer Science</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar for mobile */}
        <header className="bg-white border-b border-gray-200 p-4 md:hidden flex justify-between items-center">
          <h1 className="text-lg font-bold text-blue-600">AI Career Platform</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}


import React from 'react';

/**
 * App Component
 * A minimalist interface designed to fulfill the user's request: 
 * A single button in the center of the screen with a specific title.
 */
const App: React.FC = () => {
  // Replace the placeholder below with the specific link if one was provided in the prompt.
  // Since the prompt mentioned "this link" without a literal URL, I'm using a placeholder 
  // that the user can easily swap, or assuming they want a standard external link behavior.
  const targetUrl = "https://www.google.com/search?q=tourist+guide"; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">دليلك السياحي</h1>
        <p className="text-slate-600">اكتشف العالم بضغطة زر</p>
      </header>
      
      <main className="flex items-center justify-center">
        <a 
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-6 font-bold text-white transition-all duration-300 bg-indigo-600 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-xl hover:shadow-indigo-200"
        >
          <span className="text-2xl">افتح الدليل السياحي</span>
          
          {/* Decorative effect */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
        </a>
      </main>

      <footer className="fixed bottom-8 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} دليلك السياحي
      </footer>
    </div>
  );
};

export default App;

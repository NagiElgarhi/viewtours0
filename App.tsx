
import React from 'react';

/**
 * App Component
 * واجهة بسيطة جداً تحتوي على زر واحد فقط برابط خارجي.
 * تم تحديث الألوان لتكون مزيجاً من البرتقالي والأخضر الغامق.
 */
const App: React.FC = () => {
  const targetUrl = "https://www.google.com/search?q=tourist+guide"; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-50 to-orange-100">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">دليلك السياحي</h1>
        <p className="text-orange-800 opacity-80">اكتشف وجهتك التالية</p>
      </header>
      
      <main className="flex items-center justify-center">
        <a 
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white transition-all duration-300 bg-orange-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/20 hover:bg-orange-700 active:scale-95 shadow-2xl hover:shadow-orange-300/50 border-b-4 border-orange-800"
        >
          <span className="text-2xl">دليلك السياحي</span>
          
          {/* تأثير تفاعلي عند تمرير الفأرة */}
          <div className="absolute inset-0 w-full h-full rounded-xl bg-emerald-900 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
        </a>
      </main>

      <footer className="fixed bottom-8 text-emerald-900/60 text-sm font-medium">
        &copy; {new Date().getFullYear()} دليلك السياحي
      </footer>
    </div>
  );
};

export default App;

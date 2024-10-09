import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-500">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

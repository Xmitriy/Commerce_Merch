import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-6 mt-12 text-center text-sm text-gray-700 dark:text-gray-300" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Namun. Бүх эрх хуулиар хамгаалагдсан.</p>
        <p className="mt-2">Энэ вэбсайтыг Namun баг бүтээв. Холбоо барих: info@namun.mn</p>
      </div>
    </footer>
  );
};

export default Footer;

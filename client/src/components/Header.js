import React from "react";

const Header = () => {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
      <a className="lg:hidden" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span className="sr-only">홈</span>
      </a>
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold">수행평가 안내</h1>
      </div>
      <div>
        <button className="bg-gray/40 text-gray/40 px-4 py-2 rounded">로그인</button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
      <a class="lg:hidden" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span class="sr-only">홈</span>
      </a>
      <div class="w-full flex-1">
        <h1 class="text-lg font-semibold">수행평가 안내</h1>
      </div>
    </header>
  );
};

export default Header;

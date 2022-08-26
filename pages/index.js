/* eslint-disable @next/next/no-html-link-for-pages */
// import Button from '../components/button';
export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center">
             
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/docs/installation"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com"
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                      >
                        Components
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <label className="sr-only" id="headlessui-listbox-label-8">
                    Theme
                  </label>
                  <button
                    type="button"
                    id="headlessui-listbox-button-9"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="headlessui-listbox-label-8 headlessui-listbox-button-9"
                  >
                    <span className="dark:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          className="stroke-slate-400 dark:stroke-slate-500"
                        ></path>
                        <path
                          d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                          className="stroke-slate-400 dark:stroke-slate-500"
                        ></path>
                      </svg>
                    </span>
                    <span className="hidden dark:inline">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                          className="fill-transparent"
                        ></path>
                        <path
                          d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                          className="fill-slate-400 dark:fill-slate-500"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                          className="fill-slate-400 dark:fill-slate-500"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Tailwind CSS on GitHub</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
              <div className="ml-2 -my-1 lg:hidden">
                <button
                  type="button"
                  className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Navigation</span>
                  <svg width="24" height="24" fill="none" aria-hidden="true">
                    <path
                      d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Navigation</span>
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
              <li className="flex items-center">
                Getting Started
                <svg
                  width="3"
                  height="6"
                  aria-hidden="true"
                  className="mx-3 overflow-visible text-slate-400"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>
              <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                Installation: Tailwind CLI
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* asaslaslslaslsal */}
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
            <nav id="nav" className="lg:text-sm lg:leading-6 relative">
              <div className="sticky top-0 -ml-0.5 pointer-events-none">
                <div className="h-10 bg-white dark:bg-slate-900"></div>
                <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
                  <button
                    type="button"
                    className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      aria-hidden="true"
                      className="mr-3 flex-none"
                    >
                      <path
                        d="m19 19-3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle
                        cx="11"
                        cy="11"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle>
                    </svg>
                    Quick search...
                    <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                      Ctrl K
                    </span>
                  </button>
                </div>
                <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
              </div>
              <ul>
                <li>
                  <a
                    href="/docs/installation"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                          className="fill-sky-200 group-hover:fill-sky-500 dark:fill-slate-400 dark:group-hover:fill-sky-300"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                          className="fill-sky-400 group-hover:fill-sky-500 dark:fill-slate-600 dark:group-hover:fill-sky-200"
                        ></path>
                      </svg>
                    </div>
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/components"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                          className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                        ></path>
                        <path
                          d="m6 9 6 3v7l-6-3V9Z"
                          className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                        ></path>
                        <path
                          d="m18 9-6 3v7l6-3V9Z"
                          className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                        ></path>
                      </svg>
                    </div>
                    Components
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/templates"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z"
                          fill="#E879F9"
                          className="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-slate-400"
                        ></path>
                        <path
                          d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z"
                          fill="#F0ABFC"
                          className="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-slate-500"
                        ></path>
                      </svg>
                    </div>
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/tailwindlabs"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                          className="fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-slate-600"
                        ></path>
                        <path
                          d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z"
                          className="fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-slate-400"
                        ></path>
                      </svg>
                    </div>
                    Screencasts
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.tailwindcss.com"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z"
                          className="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-slate-600"
                        ></path>
                        <path
                          d="M10.25 9.75 7.75 12l2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-blue-50 dark:stroke-slate-400 dark:group-hover:stroke-white dark:stroke-slate-400"
                        ></path>
                        <path
                          d="m13.75 9.75 2.5 2.25-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-blue-200 dark:group-hover:stroke-white dark:stroke-slate-400"
                        ></path>
                      </svg>
                    </div>
                    Playground
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-purple-400 dark:highlight-white/10">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                          className="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-purple-300 dark:group-hover:fill-purple-300"
                        ></path>
                        <path
                          d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                          className="fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-white dark:group-hover:fill-white"
                        ></path>
                        <path
                          d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                          className="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-purple-300 dark:group-hover:fill-purple-300"
                        ></path>
                      </svg>
                    </div>
                    <span className="dark:text-purple-400">Resources</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss/discussions"
                    className="group flex items-center lg:text-sm lg:leading-6 mb-8 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-violet-200 dark:group-hover:bg-violet-500 dark:bg-slate-800 dark:highlight-white/5">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
                          className="fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-slate-600"
                        ></path>
                        <circle
                          cx="12"
                          cy="11"
                          r="1"
                          className="fill-white dark:group-hover:fill-white dark:fill-slate-400"
                        ></circle>
                        <circle
                          cx="9"
                          cy="11"
                          r="1"
                          className="fill-violet-200 dark:group-hover:fill-white dark:fill-slate-400"
                        ></circle>
                        <circle
                          cx="15"
                          cy="11"
                          r="1"
                          className="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"
                        ></circle>
                      </svg>
                    </div>
                    Community
                  </a>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Getting Started
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/installation"
                      >
                        Installation
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/editor-setup"
                      >
                        Editor Setup
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/using-with-preprocessors"
                      >
                        Using with Preprocessors
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/optimizing-for-production"
                      >
                        Optimizing for Production
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/browser-support"
                      >
                        Browser Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/upgrade-guide"
                      >
                        Upgrade Guide
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Core Concepts
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/utility-first"
                      >
                        Utility-First Fundamentals
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/hover-focus-and-other-states"
                      >
                        Hover, Focus, and Other States
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/responsive-design"
                      >
                        Responsive Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/dark-mode"
                      >
                        Dark Mode
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/reusing-styles"
                      >
                        Reusing Styles
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/adding-custom-styles"
                      >
                        Adding Custom Styles
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/functions-and-directives"
                      >
                        Functions &amp; Directives
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Customization
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/configuration"
                      >
                        Configuration
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/content-configuration"
                      >
                        Content
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/theme"
                      >
                        Theme
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/screens"
                      >
                        Screens
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/customizing-colors"
                      >
                        Colors
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/customizing-spacing"
                      >
                        Spacing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/plugins"
                      >
                        Plugins
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/presets"
                      >
                        Presets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Base Styles
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/preflight"
                      >
                        Preflight
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Layout
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/aspect-ratio"
                      >
                        Aspect Ratio
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/container"
                      >
                        Container
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/columns"
                      >
                        Columns
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/break-after"
                      >
                        Break After
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/break-before"
                      >
                        Break Before
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/break-inside"
                      >
                        Break Inside
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/box-decoration-break"
                      >
                        Box Decoration Break
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/box-sizing"
                      >
                        Box Sizing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/display"
                      >
                        Display
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/float"
                      >
                        Floats
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/clear"
                      >
                        Clear
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/isolation"
                      >
                        Isolation
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/object-fit"
                      >
                        Object Fit
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/object-position"
                      >
                        Object Position
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/overflow"
                      >
                        Overflow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/overscroll-behavior"
                      >
                        Overscroll Behavior
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/position"
                      >
                        Position
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/top-right-bottom-left"
                      >
                        Top / Right / Bottom / Left
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/visibility"
                      >
                        Visibility
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/z-index"
                      >
                        Z-Index
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Flexbox &amp; Grid
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex-basis"
                      >
                        Flex Basis
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex-direction"
                      >
                        Flex Direction
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex-wrap"
                      >
                        Flex Wrap
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex"
                      >
                        Flex
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex-grow"
                      >
                        Flex Grow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/flex-shrink"
                      >
                        Flex Shrink
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/order"
                      >
                        Order
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-template-columns"
                      >
                        Grid Template Columns
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-column"
                      >
                        Grid Column Start / End
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-template-rows"
                      >
                        Grid Template Rows
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-row"
                      >
                        Grid Row Start / End
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-auto-flow"
                      >
                        Grid Auto Flow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-auto-columns"
                      >
                        Grid Auto Columns
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grid-auto-rows"
                      >
                        Grid Auto Rows
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/gap"
                      >
                        Gap
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/justify-content"
                      >
                        Justify Content
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/justify-items"
                      >
                        Justify Items
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/justify-self"
                      >
                        Justify Self
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/align-content"
                      >
                        Align Content
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/align-items"
                      >
                        Align Items
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/align-self"
                      >
                        Align Self
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/place-content"
                      >
                        Place Content
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/place-items"
                      >
                        Place Items
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/place-self"
                      >
                        Place Self
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Spacing
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/padding"
                      >
                        Padding
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/margin"
                      >
                        Margin
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/space"
                      >
                        Space Between
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Sizing
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/width"
                      >
                        Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/min-width"
                      >
                        Min-Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/max-width"
                      >
                        Max-Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/height"
                      >
                        Height
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/min-height"
                      >
                        Min-Height
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/max-height"
                      >
                        Max-Height
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Typography
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-family"
                      >
                        Font Family
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-size"
                      >
                        Font Size
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-smoothing"
                      >
                        Font Smoothing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-style"
                      >
                        Font Style
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-weight"
                      >
                        Font Weight
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/font-variant-numeric"
                      >
                        Font Variant Numeric
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/letter-spacing"
                      >
                        Letter Spacing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/line-height"
                      >
                        Line Height
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/list-style-type"
                      >
                        List Style Type
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/list-style-position"
                      >
                        List Style Position
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-align"
                      >
                        Text Align
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-color"
                      >
                        Text Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-decoration"
                      >
                        Text Decoration
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-decoration-color"
                      >
                        Text Decoration Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-decoration-style"
                      >
                        Text Decoration Style
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-decoration-thickness"
                      >
                        Text Decoration Thickness
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-underline-offset"
                      >
                        Text Underline Offset
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-transform"
                      >
                        Text Transform
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-overflow"
                      >
                        Text Overflow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/text-indent"
                      >
                        Text Indent
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/vertical-align"
                      >
                        Vertical Align
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/whitespace"
                      >
                        Whitespace
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/word-break"
                      >
                        Word Break
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/content"
                      >
                        Content
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Backgrounds
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-attachment"
                      >
                        Background Attachment
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-clip"
                      >
                        Background Clip
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-color"
                      >
                        Background Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-origin"
                      >
                        Background Origin
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-position"
                      >
                        Background Position
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-repeat"
                      >
                        Background Repeat
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-size"
                      >
                        Background Size
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-image"
                      >
                        Background Image
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/gradient-color-stops"
                      >
                        Gradient Color Stops
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Borders
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-radius"
                      >
                        Border Radius
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-width"
                      >
                        Border Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-color"
                      >
                        Border Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-style"
                      >
                        Border Style
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/divide-width"
                      >
                        Divide Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/divide-color"
                      >
                        Divide Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/divide-style"
                      >
                        Divide Style
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/outline-width"
                      >
                        Outline Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/outline-color"
                      >
                        Outline Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/outline-style"
                      >
                        Outline Style
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/outline-offset"
                      >
                        Outline Offset
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/ring-width"
                      >
                        Ring Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/ring-color"
                      >
                        Ring Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/ring-offset-width"
                      >
                        Ring Offset Width
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/ring-offset-color"
                      >
                        Ring Offset Color
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Effects
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/box-shadow"
                      >
                        Box Shadow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/box-shadow-color"
                      >
                        Box Shadow Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/opacity"
                      >
                        Opacity
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/mix-blend-mode"
                      >
                        Mix Blend Mode
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/background-blend-mode"
                      >
                        Background Blend Mode
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Filters
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/blur"
                      >
                        Blur
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/brightness"
                      >
                        Brightness
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/contrast"
                      >
                        Contrast
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/drop-shadow"
                      >
                        Drop Shadow
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/grayscale"
                      >
                        Grayscale
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/hue-rotate"
                      >
                        Hue Rotate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/invert"
                      >
                        Invert
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/saturate"
                      >
                        Saturate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/sepia"
                      >
                        Sepia
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-blur"
                      >
                        Backdrop Blur
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-brightness"
                      >
                        Backdrop Brightness
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-contrast"
                      >
                        Backdrop Contrast
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-grayscale"
                      >
                        Backdrop Grayscale
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-hue-rotate"
                      >
                        Backdrop Hue Rotate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-invert"
                      >
                        Backdrop Invert
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-opacity"
                      >
                        Backdrop Opacity
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-saturate"
                      >
                        Backdrop Saturate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/backdrop-sepia"
                      >
                        Backdrop Sepia
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Tables
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-collapse"
                      >
                        Border Collapse
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/border-spacing"
                      >
                        Border Spacing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/table-layout"
                      >
                        Table Layout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Transitions &amp; Animation
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/transition-property"
                      >
                        Transition Property
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/transition-duration"
                      >
                        Transition Duration
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/transition-timing-function"
                      >
                        Transition Timing Function
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/transition-delay"
                      >
                        Transition Delay
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/animation"
                      >
                        Animation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Transforms
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scale"
                      >
                        Scale
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/rotate"
                      >
                        Rotate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/translate"
                      >
                        Translate
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/skew"
                      >
                        Skew
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/transform-origin"
                      >
                        Transform Origin
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Interactivity
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/accent-color"
                      >
                        Accent Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/appearance"
                      >
                        Appearance
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/cursor"
                      >
                        Cursor
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/caret-color"
                      >
                        Caret Color
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/pointer-events"
                      >
                        Pointer Events
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/resize"
                      >
                        Resize
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-behavior"
                      >
                        Scroll Behavior
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-margin"
                      >
                        Scroll Margin
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-padding"
                      >
                        Scroll Padding
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-snap-align"
                      >
                        Scroll Snap Align
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-snap-stop"
                      >
                        Scroll Snap Stop
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/scroll-snap-type"
                      >
                        Scroll Snap Type
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/touch-action"
                      >
                        Touch Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/user-select"
                      >
                        User Select
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/will-change"
                      >
                        Will Change
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    SVG
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/fill"
                      >
                        Fill
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/stroke"
                      >
                        Stroke
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/stroke-width"
                      >
                        Stroke Width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Accessibility
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/screen-readers"
                      >
                        Screen Readers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    Official Plugins
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="/docs/typography-plugin"
                      >
                        Typography
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="https://github.com/tailwindlabs/tailwindcss-forms"
                      >
                        Forms
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio"
                      >
                        Aspect Ratio
                      </a>
                    </li>
                    <li>
                      <a
                        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                        href="https://github.com/tailwindlabs/tailwindcss-line-clamp"
                      >
                        Line Clamp
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none"></main>
            <footer className="text-sm leading-6 mt-16">
              <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
                <div className="mb-6 sm:mb-0 sm:flex">
                  <p>Copyright © 2022 Tailwind Labs Inc.</p>
                  <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
                    <a
                      className="hover:text-slate-900 dark:hover:text-slate-400"
                      href="/brand"
                    >
                      Trademark Policy
                    </a>
                  </p>
                </div>
                <div className="flex space-x-10 text-slate-400 dark:text-slate-500">
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="hover:text-slate-500 dark:hover:text-slate-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg width="25" height="24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/discord"
                    className="hover:text-slate-500 dark:hover:text-slate-400"
                  >
                    <span className="sr-only">Discord</span>
                    <svg width="23" height="24" fill="currentColor">
                      <path d="M9.555 9.23c-.74 0-1.324.624-1.324 1.385S8.827 12 9.555 12c.739 0 1.323-.624 1.323-1.385.013-.761-.584-1.385-1.323-1.385Zm4.737 0c-.74 0-1.324.624-1.324 1.385S13.564 12 14.292 12c.74 0 1.324-.624 1.324-1.385s-.584-1.385-1.324-1.385Z"></path>
                      <path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

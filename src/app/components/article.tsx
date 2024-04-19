const Article = (props: any) => {
  return (
    <>
      <a
        href={props.href}
        target="_blank"
        className="group flex-grow basis-[200] w-full md:w-80  hover:transition hover:duration-200 hover:scale-100 ease-in"
      >
        <article className="flex flex-wrap h-full w-full rounded-md hover:drop-shadow-[0_7px_7px_rgba(94,129,172,0.25)] dark:hover:drop-shadow-[0_7px_7px_rgba(136,192,208,0.25)] drop-shadow px-6 md:px-12 py-6 dark:bg-gray-600 bg-slate-300 justify-start items-start gap-3">
          <header className="w-full flex flex-col  items-center gap-2.5">
            <h4 className="flex justify-between italic w-full font-semibold justify-self-start dark:text-[#D8DEE9] text-slate-500 text-lg md:text-xl">
              {props.title}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                  className="w-5 h-5 hidden group-hover:block group-hover:animate-appearance-in group-hover:duration-200"
                >
                  <path
                    fill="currentColor"
                    d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-30a84 84 0 0 0-81.36 63a12 12 0 1 1-23.24-6A107.94 107.94 0 0 1 165 92h30l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01ZM192 204H44V88a12 12 0 0 0-24 0v120a20 20 0 0 0 20 20h152a12 12 0 0 0 0-24Z"
                  />
                </svg>
              </span>
            </h4>

            {props.header}
          </header>
          <p className="w-full h-fit text-slate-600 dark:text-zinc-200 text-xs md:text-base font-normal text-pretty">
            {props.description}
          </p>
          <footer className="w-full text-xs md:text-base justify-start items-start gap-3.5 inline-flex">
            {props.footer}
          </footer>
        </article>
      </a>
    </>
  );
};
export default Article;

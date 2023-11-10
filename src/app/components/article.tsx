const Article = (props: any) => {
  return (
    <>
      <a href={props.href} target="_blank" className="flex-grow basis-[200]">
        <article className="flex flex-wrap h-40 w-80 md:w-96 rounded-md shadow px-6 md:px-12 py-6 dark:bg-gray-600 bg-slate-200 justify-start items-start gap-3">
          <header className="w-full justify-start items-center gap-2.5">
            <h4 className="font-semibold dark:text-slate-400 text-slate-500 text-lg md:text-xl">
              {props.title}
            </h4>
            {props.header}
          </header>
          <p className="w-full h-fit text-slate-600 dark:text-zinc-200 text-xs md:text-base font-normal truncate">
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

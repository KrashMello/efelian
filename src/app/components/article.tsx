const Article = (props: any) => {
  return (
    <>
      <a href={props.href} target="_blank" className="flex-grow basis-[200]">
        <article className="flex flex-wrap h-40 w-80 md:w-96 rounded-md shadow px-12 py-6 bg-zinc-600 justify-start items-start gap-3">
          <header className="w-full justify-start items-center gap-2.5">
            <h4 className="font-semibold text-[#81A1C1] text-xl">
              {props.title}
            </h4>
            {props.header}
          </header>
          <p className="w-full h-fit text-slate-200 text-base font-normal truncate">
            {props.description}
          </p>
          <footer className="w-full justify-start items-start gap-3.5 inline-flex">
            {props.footer}
          </footer>
        </article>
      </a>
    </>
  );
};
export default Article;

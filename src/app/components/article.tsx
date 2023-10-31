const Article = (props: any) => {
  return (
    <>
      <a href={props.href} target="_blank" className="flex-grow basis-[200]">
        <article className="flex flex-col h-fit rounded-md shadow px-12 py-6 bg-slate-200 justify-start items-start gap-3">
          <header className="self-stretch justify-start items-center gap-2.5">
            <h4 className="font-semibold text-slate-500 text-xl">{props.title}</h4>
            {props.header}
          </header>
          <p className="self-stretch h-fit text-slate-600 text-base font-normal">
            {props.description}
          </p>
          <footer className="self-stretch flex-col justify-start items-start gap-3.5 inline-flex">
            {props.footer}
          </footer>
        </article>
      </a>
    </>
  )
};
export default Article;

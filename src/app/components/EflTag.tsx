const EflTag = (props: any) => {
  return (
    <>
      <div className="w-fit h-4 px-1.5 py-0.5 bg-orange-400 rounded-md justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xs font-normal">
          {props.title}
        </div>
      </div>
    </>
  )
}
export default EflTag;

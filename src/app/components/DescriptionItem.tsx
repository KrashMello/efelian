import { ReactElement } from "react";

const DescriptionItem = (props: {
  title: ReactElement;
  description: ReactElement;
}) => {
  return (
    <div className="w-full md:w-[40%]">
      <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
        {props.title}
      </dt>
      <dd className="py-3 pl-12">{props.description}</dd>
    </div>
  );
};
export default DescriptionItem;

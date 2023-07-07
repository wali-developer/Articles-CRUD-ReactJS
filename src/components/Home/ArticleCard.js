import { Card } from "flowbite-react";
import { memo } from "react";

const ArticleCard = ({ data, callback, favorite }) => {
  return (
    <Card imgAlt={data?.title} imgSrc={data?.image_url}>
      <h5 className="text-lg font-semibold tracking-tight text-gray-900">
        {data?.title}
      </h5>
      <p className="text-sm tracking-tight text-gray-900">{data?.summary}</p>
      <div className="flex flex-wrap gap-y-5 items-center justify-between">
        <span className="text-base font-bold text-gray-900 ">
          {data?.news_site}
        </span>
        <button
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          onClick={() => callback(data)}
        >
          {!favorite ? "Add to Favourite" : "Remove from Favorites"}
        </button>
      </div>
    </Card>
  );
};

export default memo(ArticleCard);

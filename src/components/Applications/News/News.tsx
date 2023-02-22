import { useQuery } from "react-query";

import { getNews } from "@api/news/news.client";

import { NewsItem } from "./NewsItem/NewsItem";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

export const News = () => {
  const { isLoading, isError, data } = useQuery("news", getNews);

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left">News</h1>
      <div className="flex flex-col flex-1 pb-8 mt-6 gap-y-3">
        <HandleRequestState state={isLoading} placeholder={<p>Loading...</p>}>
          <HandleRequestState
            state={isError}
            placeholder={<p>News couldn't be loaded, please try again!</p>}
          >
            {data?.map(news => (
              <NewsItem key={`${news.id}`} {...news} />
            ))}
          </HandleRequestState>
        </HandleRequestState>
      </div>
    </div>
  );
};

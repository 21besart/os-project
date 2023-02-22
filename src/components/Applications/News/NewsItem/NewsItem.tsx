import { News } from "@api/news/news";

export const NewsItem = ({ name, email, body }: News) => {
  return (
    <div className="flex flex-col items-start w-full p-4 border-2 rounded-lg shadow-md">
      <h4 className="text-xl font-bold">{name}</h4>
      <span>{email}</span>
      <p className="mt-4 text-base">{body}</p>
    </div>
  );
};

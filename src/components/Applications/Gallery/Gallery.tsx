import { useQuery } from "react-query";

import { getGallery } from "@api/gallery/gallery.client";

import { GalleryItem } from "./GalleryItem/GalleryItem";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

export const Gallery = () => {
  const { isLoading, isError, data } = useQuery("gallery", getGallery);

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left">Gallery</h1>
      <div className="grid flex-1 grid-cols-2 gap-3 pb-8 mt-6 md:grid-cols-4">
        <HandleRequestState state={isLoading} placeholder={<p>Loading...</p>}>
          <HandleRequestState
            state={isError}
            placeholder={<p>Gallery couldn't be loaded, please try again!</p>}
          >
            {data?.map(news => (
              <GalleryItem key={`${news.id}`} {...news} />
            ))}
          </HandleRequestState>
        </HandleRequestState>
      </div>
    </div>
  );
};

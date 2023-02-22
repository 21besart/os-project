import { Gallery } from "@api/gallery/gallery";

export const GalleryItem = ({ thumbnailUrl, title }: Gallery) => {
  return (
    <div className="flex flex-col items-center w-full p-4 border-2 rounded-lg shadow-md">
      <img src={thumbnailUrl} />
      <p className="mt-4 text-base text-left">{title}</p>
    </div>
  );
};

import { galleryItems } from "@/lib/constants/locations/gallery";
import TabbedComponent from "../../common/TabbedComponent";
import GalleryGrid from "./GalleryGrid";

const GallerySection = () => {
  const tabs = [
    {
      id: "photos",
      label: "Photos",
      content: <GalleryGrid items={galleryItems} />,
    },
    {
      id: "videos",
      label: "Videos",
      content: (
        <div className="text-center text-gray-500 text-3xl font-bold min-h-[300px]">
          Videos coming soon!!!
        </div>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 lg:px-24 lg:py-16 bg-oghosa-green/5">
      <TabbedComponent tabs={tabs} />
    </section>
  );
};

export default GallerySection;

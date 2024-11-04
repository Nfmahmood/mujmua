import Collage from "../_components/Collage";
import Pagination from "../_components/Pagination";
import { getImages } from "../_lib/data-service";

export const metadata = {
  title: "Explore",
};

export default async function Page() {
  const images = await getImages();
  const { picture, title, description } = images;
  console.log(images);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-yellow-500 font-medium text-center py-10">
        Discover the Best of Majuma
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Collage images={images} />
      </div>
    </div>
  );
}

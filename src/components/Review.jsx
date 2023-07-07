import { reviewProducts } from "@/utils/reviewProduct";
import Image from "next/image";

const Review = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold ml-4 mb-4">Review your purchase</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 border-t-2 border-orange-300 border-dashed mt-4">
      {
        reviewProducts.map((product, index) => (
          <div key={index} className="mt-6 grid-cols-1 md:flex md:justify-center items-center gap-2 border border-[#818181] rounded-3xl p-2">
            <Image src={product.imageSrc} width={385} height={749} alt="Product"/>
            <div className="flex flex-col gap-2 w-[306px] h-[278px]">
              <h4 className="text-2xl font-bold mb-2">{product.title}</h4>
              <p>{product.description}</p>
              <h6 className="font-bold mb-2">{product.price}</h6>
              <Image src={product.ratingSrc} width={306} height={32} alt="Rating"/>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Review;
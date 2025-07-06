import HeroBanner from "@/components/modules/home/BannerSection";
import Category from "@/components/modules/home/Category";
import { getAllCategories } from "@/services/shop";

const home = async () => {
  const { data } = await getAllCategories();
  console.log(data);
  return (
    <div>
      <HeroBanner />
      <Category cate={data} />
    </div>
  );
};

export default home;

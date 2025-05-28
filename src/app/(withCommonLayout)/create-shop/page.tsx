import Create from "@/components/modules/shop/Create";

const CreateShop = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Register Your Shop
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our platform and start reaching more customers today
          </p>
        </div>
        <Create />
      </div>
    </div>
  );
};

export default CreateShop;

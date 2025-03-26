import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/authService";

const page = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <Button variant="default"> dddd</Button>
    </div>
  );
};

export default page;

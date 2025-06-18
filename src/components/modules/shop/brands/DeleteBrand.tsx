import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { deleteBrand } from "@/services/shop/brand";
import { toast } from "sonner";

type DeleteType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  cateGory: null | string;
};
export default function DeleteBrandModal({
  open,
  setOpen,
  cateGory,
}: DeleteType) {
  const handleSubmit = async () => {
    const res = await deleteBrand(cateGory);
    if (res.success) {
      toast.success(res.message);
      setOpen(!open);
    } else {
      toast.error(res?.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-red-600 font-bold">Delete</DialogTitle>
            <DialogDescription>Are you sure?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

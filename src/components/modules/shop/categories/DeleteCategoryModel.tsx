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

import { deleteCategory } from "@/services/shop";
import { ICategory } from "@/types/category";
type DeleteType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  cateGory: null | ICategory;
};
export default function DeleteModal({ open, setOpen, cateGory }: DeleteType) {
  const handleSubmit = async () => {
    console.log("id");
    const res = await deleteCategory(cateGory?._id);
    console.log(res);
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

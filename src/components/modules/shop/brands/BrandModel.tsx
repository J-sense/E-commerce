/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBrands } from "@/services/shop/brand";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function BrandModel() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", imageFiles[0] as File);
      const res = await createBrands(formData);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      return Error(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Brand</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-full ">
              <FormLabel className="text-gray-700 block mb-2">
                Shop Logo
              </FormLabel>
              {imagePreview.length > 0 ? (
                <ImagePreviewer
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  imagePreview={imagePreview}
                />
              ) : (
                <NMImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload logo"
                  className="border-2 border-dashed border-gray-300 rounded-lg p-3 hover:border-primary transition-colors w-full"
                />
              )}
              <p className="text-xs text-gray-500 my-4">
                Recommended size: 300x300px, Max file size: 5MB
              </p>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <Input {...field} value={field.value || ""} />
              )}
            />
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">
                {isSubmitting ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategories } from "@/services/shop";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function CategoryModel() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const formData = new FormData();
    formData.append("data", data);
    formData.append("icon", imageFiles[0] as File);
    const res = await createCategories(formData);
    console.log(res);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Category</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>
            Enter category information and submit.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Category Name */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Enter category"
                      className="pl-3 h-11 border-gray-300 rounded-lg"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Flex Layout for Description and Image */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Description */}
              <div className="w-full md:w-1/2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter category description"
                          className="h-28 border-gray-300 rounded-lg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Image Uploader */}
              <div className="w-full md:w-1/2">
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
                <p className="text-xs text-gray-500 mt-1">
                  Recommended size: 300x300px, Max file size: 5MB
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

"use client";
import NMImageUpload from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm({
    defaultValues: {
      shopName: "ABC Store",
      ownerName: "John Doe",
      contactNumber: "0123456789",
      address: "123 Main St",
      website: "https://example.com",
      establishedYear: "2020",
      taxId: "123456789",
      facebook: "https://facebook.com/abcstore",
      instagram: "https://instagram.com/abcstore",
      twitter: "https://twitter.com/abcstore",
    },
  });

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <Form {...form}>
        <div className="flex flex-wrap gap-6 my-4">
          <FormField
            control={form.control}
            name="shopName"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Shop Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-wrap gap-6 my-4">
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-wrap gap-6 my-4">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="establishedYear"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Established Year</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-wrap gap-6 my-4">
          <FormField
            control={form.control}
            name="taxId"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Tax Identifier Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-wrap gap-6 my-4">
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[300px]">
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {imagePreview.length > 0 ? (
            <ImagePreviewer
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              imagePreview={imagePreview}
            />
          ) : (
            <NMImageUpload
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="upload logo"
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default Create;

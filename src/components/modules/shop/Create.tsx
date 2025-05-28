/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Create = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const serviceOffer = data.servicesOffered.split(",").trim();
    console.log(serviceOffer);
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Create New Shop
          </CardTitle>
          <p className="text-sm text-gray-500">
            Fill in the details below to register your shop
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-8">
                {/* Shop Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="shopName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Shop Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Enter shop name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessLicenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          License Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Enter owner's name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Phone number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Contact</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Shop address"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Business Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Website</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="https://example.com"
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
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Established Year
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Year founded"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Tax and Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="taxIdentificationNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Tax ID</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Tax identification number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socialMediaLinks.facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Facebook
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Facebook profile URL"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="socialMediaLinks.instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Instagram
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Instagram profile URL"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socialMediaLinks.twitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Twitter</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50"
                            placeholder="Twitter profile URL"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Services and Logo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                  <FormField
                    name="servicesOffered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Services Offered
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            value={field.value || ""}
                            className="focus-visible:ring-2 focus-visible:ring-primary/50 min-h-[180px]"
                            placeholder="Describe the services your shop provides"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <FormLabel className="text-gray-700 block">
                      Shop Logo
                    </FormLabel>
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
                        label="Upload logo"
                        className="border-2 border-dashed border-gray-300 rounded-lg p-2 hover:border-primary transition-colors"
                      />
                    )}
                    <p className="text-xs text-gray-500">
                      Recommended size: 300x300px, Max file size: 5MB
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-6">
                  <Button
                    type="submit"
                    className="px-8 py-4 text-base bg-primary hover:bg-primary/90"
                  >
                    Create Shop
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Create;

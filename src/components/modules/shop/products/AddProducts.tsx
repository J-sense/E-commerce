"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";

const AddProductForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      weight: "",
      description: "",
      keyFeatures: [{ value: "" }],
    },
  });
  const { append: featuresAppend, fields: featuresField } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });
  const handleFeature = () => {
    featuresAppend({ value: "" });
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-700 transition-all">
      <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400 text-center">
        Add New Product
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-700 dark:text-purple-300">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product name"
                      className="focus-visible:ring-2 focus-visible:ring-purple-500"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-700 dark:text-purple-300">
                    Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Price in USD"
                      className="focus-visible:ring-2 focus-visible:ring-purple-500"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-700 dark:text-purple-300">
                    Stock
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Available stock"
                      className="focus-visible:ring-2 focus-visible:ring-purple-500"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-700 dark:text-purple-300">
                    Weight
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Weight in KG"
                      className="focus-visible:ring-2 focus-visible:ring-purple-500"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-700 dark:text-purple-300">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a short product description"
                    className="min-h-[120px] focus-visible:ring-2 focus-visible:ring-purple-500"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div>
            <div className="flex justify-between">
              <h1 className="text-purple-700 font-bold text-2xl">
                Key Features
              </h1>
              <div className="border p-2 rounded-2xl" onClick={handleFeature}>
                <PlusIcon />
              </div>
            </div>
            <div className="w-1/2">
              {featuresField.map((field, idx) => (
                <div key={field.id}>
                  <FormField
                    control={form.control}
                    name={`keyFeatures.${idx}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 dark:text-purple-300">
                          Key Features {idx + 1}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`key feature ${idx + 1}`}
                            className="focus-visible:ring-2 focus-visible:ring-purple-500 mb-2"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-purple-700 font-bold text-2xl">Colors</h1>
              <div className="border p-2 rounded-2xl" onClick={handleFeature}>
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
            >
              Submit Product
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;

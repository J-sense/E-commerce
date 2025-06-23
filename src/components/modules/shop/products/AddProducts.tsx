/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
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
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/services/shop";
import { getAllBrands } from "@/services/shop/brand";
import { ICategory } from "@/types/category";
import { IBrand } from "../brands/ManageBrands";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const AddProductForm = () => {
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [brands, setBrands] = useState<IBrand[] | []>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      category: "",
      brand: "",
      stock: "",
      weight: "",
      description: "",
      keyFeatures: [{ value: "" }],
      availableColors: [{ value: "" }],
      specification: [{ key: "", value: "" }],
    },
  });

  const {
    append: specAppend,
    fields: specFields,
    remove: specRemove,
  } = useFieldArray({
    control: form.control,
    name: "specification",
  });

  const {
    append: appendColors,
    fields: colourField,
    remove: removeColor,
  } = useFieldArray({
    control: form.control,
    name: "availableColors",
  });

  const {
    append: featuresAppend,
    fields: featuresField,
    remove: removeFeature,
  } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });

  const handleFeature = () => {
    featuresAppend({ value: "" });
  };

  const handleRemoveFeature = (index: number) => {
    if (featuresField.length > 1) {
      removeFeature(index);
    }
  };

  const handleColors = () => {
    appendColors({ value: "" });
  };

  const handleRemoveColor = (index: number) => {
    if (colourField.length > 1) {
      removeColor(index);
    }
  };

  const handleSpec = () => {
    specAppend({ key: "", value: "" });
  };

  const handleRemoveSpec = (index: number) => {
    if (specFields.length > 1) {
      specRemove(index);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, brandsData] = await Promise.all([
          getAllCategories(),
          getAllBrands(),
        ]);
        setCategories(categoriesData?.data || []);
        setBrands(brandsData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const specification: any = {};
      data?.specification?.forEach(
        (spec: { key: string; value: string }) =>
          (specification[spec.key] = spec.value)
      );

      const colours = data?.availableColors.map(
        (item: { value: string }) => item?.value
      );

      const features = data?.keyFeatures.map(
        (item: { value: string }) => item?.value
      );

      const modifiedData = {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock),
        weight: Number(data.weight),
        category: data.category,
        brand: data.brand,
        keyFeatures: features,
        availableColors: colours,
        specification: specification,
      };

      console.log(modifiedData);
      // Here you would typically call your API to submit the data
      // await submitProduct(modifiedData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h2 className="text-3xl font-bold">Add New Product</h2>
          <p className="text-purple-100">
            Fill in the details below to add a new product to your store
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-6"
          >
            {/* Basic Information Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                  >
                    1
                  </Badge>
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 dark:text-zinc-300">
                          Product Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter product name"
                            className="focus-visible:ring-2 focus-visible:ring-purple-500"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 dark:text-zinc-300">
                          Price *
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-2.5 text-zinc-500">
                              $
                            </span>
                            <Input
                              type="number"
                              placeholder="0.00"
                              className="pl-8 focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-purple-500">
                              <SelectValue placeholder="Select a brand" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {brands.map((brand) => (
                              <SelectItem value={brand?.name} key={brand._id}>
                                {brand?.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-purple-500">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                value={category?.name}
                                key={category._id}
                              >
                                {category?.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
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
                        <FormLabel className="text-zinc-700 dark:text-zinc-300">
                          Stock Quantity *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Available stock"
                            className="focus-visible:ring-2 focus-visible:ring-purple-500"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 dark:text-zinc-300">
                          Weight (kg) *
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="Product weight"
                              className="focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                            <span className="absolute right-3 top-2.5 text-zinc-500">
                              kg
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 dark:text-zinc-300">
                        Description *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write a detailed product description..."
                          className="min-h-[120px] focus-visible:ring-2 focus-visible:ring-purple-500"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Key Features Section */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                    >
                      2
                    </Badge>
                    Key Features
                  </CardTitle>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleFeature}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Feature
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuresField.map((field, idx) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <FormField
                      control={form.control}
                      name={`keyFeatures.${idx}.value`}
                      render={({ field }) => (
                        <FormItem className="flex-grow">
                          <FormLabel
                            className={
                              idx === 0
                                ? "text-zinc-700 dark:text-zinc-300"
                                : "sr-only"
                            }
                          >
                            Feature {idx + 1}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Enter feature ${idx + 1}`}
                              className="focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {featuresField.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFeature(idx)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2Icon className="h-5 w-5" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Colors Section */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                    >
                      3
                    </Badge>
                    Available Colors
                  </CardTitle>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleColors}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Color
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {colourField.map((color, idx) => (
                  <motion.div
                    key={color.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <FormField
                      control={form.control}
                      name={`availableColors.${idx}.value`}
                      render={({ field }) => (
                        <FormItem className="flex-grow">
                          <FormLabel
                            className={
                              idx === 0
                                ? "text-zinc-700 dark:text-zinc-300"
                                : "sr-only"
                            }
                          >
                            Color {idx + 1}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Enter color name (e.g. "Midnight Blue")`}
                              className="focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {colourField.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveColor(idx)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2Icon className="h-5 w-5" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Specifications Section */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                    >
                      4
                    </Badge>
                    Specifications
                  </CardTitle>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleSpec}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Specification
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {specFields.map((field, idx) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
                  >
                    <FormField
                      control={form.control}
                      name={`specification.${idx}.key`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              idx === 0
                                ? "text-zinc-700 dark:text-zinc-300"
                                : "sr-only"
                            }
                          >
                            Specification Key
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Key (e.g. 'Material')"
                              className="focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`specification.${idx}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              idx === 0
                                ? "text-zinc-700 dark:text-zinc-300"
                                : "sr-only"
                            }
                          >
                            Value
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Value (e.g. 'Aluminum')"
                              className="focus-visible:ring-2 focus-visible:ring-purple-500"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {specFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveSpec(idx)}
                        className="text-red-500 hover:text-red-600 md:mb-1"
                      >
                        <Trash2Icon className="h-5 w-5" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg transition-all shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit Product"
                  )}
                </Button>
              </motion.div>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default AddProductForm;

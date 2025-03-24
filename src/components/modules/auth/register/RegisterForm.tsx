"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "./Registervalidation";
import { registerUser } from "@/services/authService";
import { toast } from "sonner";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const {
    formState: { isSubmitting },
  } = form;
  const password = form.watch("password");
  const passwordConformation = form.watch("confirmPassword");
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen flex flex-row justify-center items-center ">
      <div className="w-[350px] border p-8 rounded-xl shadow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      value={field.value || ""}
                      className=""
                    ></Input>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      value={field.value || ""}
                    ></Input>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      value={field.value || ""}
                    ></Input>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Conform Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="passwordConformation"
                      value={field.value || ""}
                    ></Input>
                  </FormControl>
                  {passwordConformation && password !== passwordConformation ? (
                    <FormMessage>Password does not matched</FormMessage>
                  ) : (
                    ""
                  )}
                </FormItem>
              )}
            />
            <Button type="submit">
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;

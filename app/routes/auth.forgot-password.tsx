import { useForm } from "react-hook-form";

import { type MetaFunction } from "@remix-run/react";

import { Button } from "@/common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { H1 } from "@/common/components/ui/h1";
import { Input } from "@/common/components/ui/input";
import { Muted } from "@/common/components/ui/muted";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const meta: MetaFunction = () => {
  return [{ title: "Authentication | Forgot Password" }];
};

const ForgotPasswordFormSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-4">
        <H1>Forgot Password</H1>
        <Muted className="max-w-xs text-center">
          Fill in the field to reset the password. The reset password link will
          be sent to the email.
        </Muted>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-4 list-item text-xs font-semibold" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-md font-bold"
          >
            Send Link to Email
          </Button>
        </form>
      </Form>
    </div>
  );
}

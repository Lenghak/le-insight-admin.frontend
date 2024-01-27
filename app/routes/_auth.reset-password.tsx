import { useState } from "react";
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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { z } from "zod";

export const meta: MetaFunction = () => {
  return [{ title: "Authentication | Reset Password" }];
};

const ResetPasswordFormSchema = z.object({
  newPassword: z.string().min(8, {
    message: "Enter a new passowrd",
  }),
  confirmPassword: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export default function ResetPassword() {
  const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-4">
        <H1>Reset Password</H1>
        <Muted className="max-w-xs text-center">
          Time to reset your password. Enter a new one to proceed.
        </Muted>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter a new password"
                      className="pr-12"
                      type={isPasswordShowed ? "text" : "password"}
                      {...field}
                    />
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      type="button"
                      className="absolute right-0 top-0"
                      onClick={() => setShowPassword(!isPasswordShowed)}
                    >
                      {isPasswordShowed ? (
                        <EyeIcon size={18} />
                      ) : (
                        <EyeOffIcon size={18} />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="font-semibold italic" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Re-type your password"
                      className="pr-12"
                      type={isPasswordShowed ? "text" : "password"}
                      {...field}
                    />
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      type="button"
                      className="absolute right-0 top-0"
                      onClick={() => setShowPassword(!isPasswordShowed)}
                    >
                      {isPasswordShowed ? (
                        <EyeIcon size={18} />
                      ) : (
                        <EyeOffIcon size={18} />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="font-semibold italic" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full font-bold"
          >
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}

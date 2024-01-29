import { type MetaFunction, useNavigate } from "@remix-run/react";

import { Button } from "@/common/components/ui/button";
import { H1 } from "@/common/components/ui/h1";
import { P } from "@/common/components/ui/p";

import { MoveLeftIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [{ title: "404 | Not Found" }];
};

type ErrorPageProps = {
  code: number | string;
  message: string;
};

export default function ErrorPage({
  code = 500,
  message = "Opps! There was a problem on our server. Please try again later.",
}: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <H1 className="text-7xl underline lg:text-9xl">{code}</H1>
      <P className="max-w-sm text-center text-muted-foreground">{message}</P>

      <div className="mt-8 flex flex-row items-center justify-center gap-4">
        <Button
          size={"lg"}
          className="items-center gap-2 rounded-full font-bold"
          onClick={() => navigate(-1)}
        >
          <MoveLeftIcon size={18} />
          <span>Go back</span>
        </Button>
      </div>
    </main>
  );
}

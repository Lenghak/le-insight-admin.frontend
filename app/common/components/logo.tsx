import { useTheme } from "remix-themes";

export default function Logo() {
  const [theme] = useTheme();

  return (
    <img
      src={theme === "dark" ? "/svg/logo-dark.svg" : "/svg/logo-light.svg"}
      alt="Logo"
      className="h-10 min-h-10 w-10 min-w-10"
      loading="lazy"
    />
  );
}

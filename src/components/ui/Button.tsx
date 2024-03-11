import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";

export const buttonVariants = cva(["text-red-500", "box"], {
  variants: {
    margin: { 0: "m-0", 2: "m-2", 4: "m-4", 8: "m-8" },
    padding: { 0: "p-0", 2: "p-2", 4: "p-4", 8: "p-8" },
    size: {
      default: "h-10",
      sm: "h-9",
      lg: "h-11",
    },
    colors: {
      red: "text-red-500",
      yellow: "text-yellow-500",
    },
  },
  defaultVariants: {
    margin: 0,
    padding: 0,
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  size,
  colors,
  isLoading,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ size, colors, className }))}
      {...props}
    >
      {isLoading ? <Loader2 /> : null}
      {children}
    </button>
  );
};

export default Button;

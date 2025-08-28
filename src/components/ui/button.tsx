import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-luxury",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-luxury",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-luxury",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-luxury",
        link: "text-primary underline-offset-4 hover:underline transition-luxury",
        cta: "bg-gradient-cta text-white font-semibold shadow-cta hover:bg-gradient-cta-hover hover:shadow-luxury hover:scale-105 transition-luxury border-0 relative overflow-hidden group",
        hero: "bg-gradient-luxury text-white font-bold px-10 py-6 text-xl shadow-premium hover:shadow-glow hover:scale-110 transition-bounce border-0 relative overflow-hidden group animate-glow",
        luxury: "bg-gradient-card text-foreground font-semibold border border-primary/20 shadow-elegant hover:shadow-luxury hover:scale-105 transition-luxury relative overflow-hidden group",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

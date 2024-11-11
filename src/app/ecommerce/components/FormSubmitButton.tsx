"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-ring loading-md"></span>}
      {children}
    </button>
  );
}

export default FormSubmitButton;

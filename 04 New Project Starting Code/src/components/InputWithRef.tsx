import {
  ComponentPropsWithRef,
  forwardRef,
} from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const InputWithRef = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} ref={ref} {...props} />
      </p>
    );
  }
);

export default InputWithRef;

"use client";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}
function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

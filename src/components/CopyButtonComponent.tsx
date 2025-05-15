import { useState } from "react";
import { Button } from "react-bootstrap";

interface CopyButtonProps {
  email: string;
}

function CopyButton({ email }: CopyButtonProps) {
  const [hover, setHover] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <Button
      onClick={handleCopy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover
          ? "var(--color-secondary)"
          : "var(--color-games)",
        borderColor: hover ? "var(--color-secondary)" : "var(--color-games)",
        color: "black",
      }}
    >
      Copiar correo
    </Button>
  );
}

export default CopyButton;

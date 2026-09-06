import { useState } from "react";
import {
  CounterWrapper,
  CountWrapper,
  MinusWrapper,
  PlusWrapper,
} from "./styles";

export const Counter = ({ minimum, maximum }) => {
  const min = parseInt(minimum) || 1;
  const max = parseInt(maximum) || null;
  const [count, setCount] = useState(min);
  const handleIncrease = () => {
    if (!max) setCount((prev) => prev + 1);
    if (count < max) setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (!min) setCount((prev) => prev - 1);
    if (count > min) setCount((prev) => prev - 1);
  };
  return (
    <>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <span
          style={{
            fontSize: "0.9rem",
            fontSize: "var(--text-sm)",
            lineHeight: "var(--text-sm--line-height)",
            color: "var(--color-gray-600)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          Qty:
        </span>
        <CounterWrapper>
          <MinusWrapper onClick={handleDecrease} style={{ cursor: "pointer" }}>
            -
          </MinusWrapper>
          <CountWrapper>{count}</CountWrapper>
          <PlusWrapper onClick={handleIncrease} style={{ cursor: "pointer" }}>
            +
          </PlusWrapper>
        </CounterWrapper>
      </div>
    </>
  );
};

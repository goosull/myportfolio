"use client";
import React, { useEffect, useState } from "react";

export default function CursorGradient() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cursorPosition && (
        <div
          className="hidden sm:block pointer-events-none rounded-full sm:absolute"
          style={{
            width: "600px",
            height: "600px",
            top: cursorPosition.y - 300,
            left: cursorPosition.x - 300,
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.10) 0% , rgba(255, 255, 255, 0) 70%)",
          }}
        />
      )}
    </div>
  );
}

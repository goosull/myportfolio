"use client";
import React, { useEffect, useState } from "react";

export default function CursorGradient() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(600); // 조명 크기 상태 관리
  const [isMoving, setIsMoving] = useState(false); // 마우스 움직임 감지

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY + window.scrollY,
      });
      setIsMoving(true); // 마우스 움직임 감지
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100); // 마우스가 멈추면 isMoving을 false로 설정
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // 크기와 밝기 감소 애니메이션 구현
  useEffect(() => {
    let intervalId;
    if (isMoving) {
      // 마우스가 움직이면 크기 증가
      intervalId = setInterval(() => {
        setSize((prevSize) => Math.min(prevSize + 5, 1200)); // 최대 크기 1200px로 제한
      }, 100);
    } else {
      // 마우스가 멈추면 크기와 밝기를 서서히 감소
      intervalId = setInterval(() => {
        setSize((prevSize) => Math.max(prevSize - 5, 600)); // 최소 크기 600px로 줄어듬
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isMoving]);

  // 크기에 맞는 밝기 계산
  const brightness = Math.min((size - 600) / 600 + 0.2, 1); // 최소 0.2, 최대 1까지 밝기 설정

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cursorPosition && (
        <div
          className="hidden sm:block pointer-events-none rounded-full sm:absolute"
          style={{
            width: `${size}px`, // 동적으로 조명 크기 설정
            height: `${size}px`,
            top: cursorPosition.y - size / 2,
            left: cursorPosition.x - size / 2,
            background: `radial-gradient(circle, hsla(228, 13%, 49%, ${brightness}) 0%, hsla(204, 100%, 98%, 0) 70%)`, // 밝기 조절
          }}
        />
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    const ctx = canvas.getContext("2d");

    const options = {
      waveLength: 340,
      canvasHeight: canvas.height,
      canvasWidth: canvas.width,
      color: "#121212",
      frequency: 3,
      waveHeight: 100,
      density: 0.02,
      rippleSpeed: 0.1,
    };

    const springs = Array.from({ length: options.waveLength }, () => ({
      p: 0,
      v: 0,
    }));

    const updateSprings = () => {
      for (let spring of springs) {
        spring.v += -options.rippleSpeed * spring.p - options.density * spring.v;
        spring.p += spring.v;
      }

      for (let t = 0; t < 8; t++) {
        const leftDeltas = [], rightDeltas = [];

        for (let i = 0; i < options.waveLength; i++) {
          if (i > 0) {
            leftDeltas[i] = 0.1 * (springs[i].p - springs[i - 1].p);
            springs[i - 1].v += leftDeltas[i];
          }
          if (i < options.waveLength - 1) {
            rightDeltas[i] = 0.1 * (springs[i].p - springs[i + 1].p);
            springs[i + 1].v += rightDeltas[i];
          }
        }

        for (let i = 0; i < options.waveLength; i++) {
          if (i > 0) springs[i - 1].p += leftDeltas[i];
          if (i < options.waveLength - 1) springs[i + 1].p += rightDeltas[i];
        }
      }
    };

    const renderWaves = () => {
      ctx.clearRect(0, 0, options.canvasWidth, options.canvasHeight);
      ctx.fillStyle = options.color;
      ctx.beginPath();
      ctx.moveTo(0, options.canvasHeight);

      for (let i = 0; i < options.waveLength; i++) {
        const x = (i * options.canvasWidth) / options.waveLength;
        const y = options.canvasHeight / 2 + springs[i].p;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(options.canvasWidth, options.canvasHeight);
      ctx.fill();
    };

    const animate = () => {
      if (Math.random() * 100 < options.frequency) {
        const i = Math.floor(Math.random() * options.waveLength);
        springs[i].p = options.waveHeight;
      }
      updateSprings();
      renderWaves();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative">
      {/* Raindrop Canvas */}
      <div ref={containerRef} className="w-full h-12 relative">
        <canvas ref={canvasRef} className="absolute left-0 top-0 z-0" />
      </div>

      {/* Footer Text */}
      <footer className="w-full bg-[#121212] text-white text-center py-2 z-10 relative">
        Designed by Me 🤍
      </footer>

      {/* Social Media Icons */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 px-2 z-50">
        <a
          href="https://www.linkedin.com/in/pratanu-ghorui-2766031b7/"
          className="text-white bg-blue-600 p-2 rounded hover:bg-blue-700 transition"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/pratanughorui"
          className="text-white bg-gray-800 p-2 rounded hover:bg-gray-900 transition"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

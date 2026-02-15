"use client";

import React, { useEffect, useRef } from 'react';

export const InteractiveGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        const spacing = 55;
        const dots: { x: number; y: number; vx: number; vy: number; originalX: number; originalY: number; phase: number }[] = [];

        const initDots = (w: number, h: number) => {
            dots.length = 0;
            if (w <= 0 || h <= 0) return;
            for (let x = spacing / 2; x < w + spacing; x += spacing) {
                for (let y = spacing / 2; y < h + spacing; y += spacing) {
                    dots.push({
                        x,
                        y,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        originalX: x,
                        originalY: y,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        };

        const updateDimensions = (w: number, h: number) => {
            if (w === width && h === height) return;
            width = w;
            height = h;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.scale(dpr, dpr);
            initDots(w, h);
        };

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const target = entry.target as HTMLElement;
                updateDimensions(target.offsetWidth, target.offsetHeight);
            }
        });

        const parent = canvas.parentElement;
        if (parent) {
            resizeObserver.observe(parent);
            updateDimensions(parent.offsetWidth, parent.offsetHeight);
        }

        const render = () => {
            if (width <= 0 || height <= 0) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }

            timeRef.current += 0.01;
            const time = timeRef.current;
            ctx.clearRect(0, 0, width, height);

            const { x: mx, y: my } = mouseRef.current;

            // Autonomous Lighting Glow
            if (mx > 0) {
                const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
                gradient.addColorStop(0, 'rgba(37, 99, 235, 0.07)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            if (dots.length === 0 && width > 0) initDots(width, height);

            // Draw Connection Lines First
            ctx.beginPath();
            ctx.lineWidth = 0.5;
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dotA = dots[i];
                    const dotB = dots[j];
                    const distSq = (dotA.x - dotB.x) ** 2 + (dotA.y - dotB.y) ** 2;
                    const maxDistSq = (spacing * 1.5) ** 2; // Connect only close ones

                    if (distSq < maxDistSq) {
                        const dist = Math.sqrt(distSq);
                        const alpha = (1 - dist / (spacing * 1.5)) * 0.15;
                        ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
                        ctx.moveTo(dotA.x, dotA.y);
                        ctx.lineTo(dotB.x, dotB.y);
                    }
                }
            }
            ctx.stroke();

            dots.forEach(dot => {
                const dx = mx - dot.originalX;
                const dy = my - dot.originalY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                // Autonomous Drifting Logic
                const floatX = Math.sin(time + dot.phase) * 12;
                const floatY = Math.cos(time + dot.phase) * 12;

                if (mx > 0 && dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    const targetX = dot.originalX + (dx / dist) * force * 45;
                    const targetY = dot.originalY + (dy / dist) * force * 45;

                    dot.x += (targetX - dot.x) * 0.12;
                    dot.y += (targetY - dot.y) * 0.12;

                    // Light up interaction
                    ctx.beginPath();
                    ctx.arc(dot.x + floatX * 0.3, dot.y + floatY * 0.3, 1.8 + force * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(37, 99, 235, ${0.4 + force * 0.6})`;
                    ctx.shadowBlur = force * 10;
                    ctx.shadowColor = 'rgba(37, 99, 235, 0.4)';
                    ctx.fill();
                    ctx.shadowBlur = 0;
                } else {
                    // Autonomous Drift within boundary
                    const targetX = dot.originalX + floatX;
                    const targetY = dot.originalY + floatY;

                    dot.x += (targetX - dot.x) * 0.04;
                    dot.y += (targetY - dot.y) * 0.04;

                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(37, 99, 235, 0.25)';
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none block"
            style={{ mixBlendMode: 'multiply' }}
        />
    );
};

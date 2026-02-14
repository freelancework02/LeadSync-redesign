"use client";

import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift } from 'lucide-react';

export default function ScratchCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const isDrawingRef = useRef(false);
    const scratchCountRef = useRef(0);
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || isRevealed) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        // Initialize canvas with proper sizing
        const initCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Draw the scratch-off overlay (Silver/Gray)
            ctx.fillStyle = '#cbd5e1'; // Slate 300
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add decorative pattern
            for (let i = 0; i < 40; i++) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4})`;
                ctx.beginPath();
                ctx.arc(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    Math.random() * 15 + 5,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }

            // Add text
            ctx.font = 'bold 24px "Clash Display", Inter, sans-serif';
            ctx.fillStyle = '#0f172a'; // Slate 900
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✨ SCRATCH TO WIN ✨', canvas.width / 2, canvas.height / 2);

            // Add subtitle
            ctx.font = '14px Inter, sans-serif';
            ctx.fillStyle = '#475569'; // Slate 600
            ctx.fillText('Use your mouse or finger', canvas.width / 2, canvas.height / 2 + 30);
        };

        initCanvas();

        const getPosition = (e: MouseEvent | TouchEvent): { x: number; y: number } => {
            const rect = canvas.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const scratch = (x: number, y: number) => {
            if (!ctx) return;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 25, 0, Math.PI * 2);
            ctx.fill();

            scratchCountRef.current++;

            // Check if enough has been scratched (every 10 scratches)
            if (scratchCountRef.current % 10 === 0 && !hasTriggeredRef.current) {
                checkScratchPercentage();
            }
        };

        const checkScratchPercentage = () => {
            if (!ctx || hasTriggeredRef.current) return;

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            let transparentPixels = 0;
            let totalPixels = 0;

            // Sample every 10th pixel for performance
            for (let i = 0; i < pixels.length; i += 40) {
                totalPixels++;
                if (pixels[i + 3] < 128) { // Check alpha channel
                    transparentPixels++;
                }
            }

            const scratchedPercentage = (transparentPixels / totalPixels) * 100;

            if (scratchedPercentage > 40) {
                triggerReveal();
            }
        };

        const triggerReveal = () => {
            if (hasTriggeredRef.current) return;
            hasTriggeredRef.current = true;

            // Fade out canvas
            canvas.style.transition = 'opacity 0.6s ease-out';
            canvas.style.opacity = '0';

            // Trigger confetti
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981']
                });

                // Second burst
                setTimeout(() => {
                    confetti({
                        particleCount: 50,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 }
                    });
                    confetti({
                        particleCount: 50,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 }
                    });
                }, 200);
            }, 100);

            setTimeout(() => {
                setIsRevealed(true);
            }, 600);
        };

        const handleStart = (e: MouseEvent | TouchEvent) => {
            // e.preventDefault(); // Moved inside to prevent issues with other elements but needed for touch
            isDrawingRef.current = true;
            const pos = getPosition(e);
            scratch(pos.x, pos.y);
        };

        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDrawingRef.current) return;
            if (e.cancelable) e.preventDefault();
            const pos = getPosition(e);
            scratch(pos.x, pos.y);
        };

        const handleEnd = () => {
            isDrawingRef.current = false;
        };

        // Mouse events
        canvas.addEventListener('mousedown', handleStart);
        canvas.addEventListener('mousemove', handleMove);
        canvas.addEventListener('mouseup', handleEnd);
        canvas.addEventListener('mouseleave', handleEnd);

        // Touch events
        canvas.addEventListener('touchstart', handleStart, { passive: false });
        canvas.addEventListener('touchmove', handleMove, { passive: false });
        canvas.addEventListener('touchend', handleEnd);
        canvas.addEventListener('touchcancel', handleEnd);

        // Cleanup
        return () => {
            canvas.removeEventListener('mousedown', handleStart);
            canvas.removeEventListener('mousemove', handleMove);
            canvas.removeEventListener('mouseup', handleEnd);
            canvas.removeEventListener('mouseleave', handleEnd);
            canvas.removeEventListener('touchstart', handleStart);
            canvas.removeEventListener('touchmove', handleMove);
            canvas.removeEventListener('touchend', handleEnd);
            canvas.removeEventListener('touchcancel', handleEnd);
        };
    }, [isRevealed]);

    const handleCopyCode = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText('AWWWARDS20').then(() => {
                // Create a temporary toast notification
                const toast = document.createElement('div');
                toast.textContent = '✓ Code Copied!';
                toast.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: bold;
                    z-index: 9999;
                    animation: slideIn 0.3s ease-out;
                `;
                document.body.appendChild(toast);
                setTimeout(() => {
                    toast.style.animation = 'slideOut 0.3s ease-out';
                    setTimeout(() => toast.remove(), 300);
                }, 2000);
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[340px] aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-200 mx-auto transform transition-all duration-300 hover:shadow-3xl"
        >
            {/* Prize Content (Underlay) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0">
                <div className={`w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg ${isRevealed ? 'animate-[bounce_1s_ease-in-out_3]' : ''}`}>
                    <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-clash text-black mb-2">
                    🎉 YOU WON! 🎉
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                    Exclusive Awwwards Discount
                </p>

                <div
                    className="bg-white border-2 border-dashed border-indigo-400 p-4 rounded-xl w-full max-w-[240px] mb-3 relative overflow-hidden group cursor-pointer transform transition-all hover:scale-105 active:scale-95"
                    onClick={handleCopyCode}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative text-2xl font-mono font-bold text-indigo-600 tracking-widest">
                        AWWWARDS20
                    </span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                    👆 Click to copy • Get 20% OFF
                </p>
            </div>

            {/* Canvas Overlay */}
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full cursor-pointer z-10 select-none touch-none ${isRevealed ? 'pointer-events-none' : ''}`}
                style={{
                    opacity: isRevealed ? 0 : 1,
                    touchAction: 'none'
                }}
            />
        </div>
    );
}

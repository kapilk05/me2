import { useEffect, useRef } from 'react';

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create animated gradient background with CSS
    const canvas = document.createElement('div');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-10';
    canvas.style.pointerEvents = 'none';
    canvas.style.background = `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.25) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.25) 0%, transparent 50%),
      linear-gradient(135deg, rgba(120, 219, 255, 0.1) 0%, rgba(255, 119, 198, 0.1) 100%)
    `;
    canvas.style.animation = 'gradientShift 20s ease-in-out infinite';

    // Add floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = i % 3 === 0 ? 'rgba(120, 219, 255, 0.4)' : i % 3 === 1 ? 'rgba(255, 119, 198, 0.3)' : 'rgba(120, 119, 198, 0.3)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${Math.random() * 15 + 15}s linear infinite`;
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.filter = 'blur(1px)';
      canvas.appendChild(particle);
    }

    document.body.appendChild(canvas);

    return () => {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return null;
}
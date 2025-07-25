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
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.background = `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.15) 0%, transparent 50%)
    `;
    canvas.style.animation = 'gradientShift 15s ease-in-out infinite';

    mountRef.current.appendChild(canvas);

    // Add floating particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 4 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = 'rgba(120, 219, 255, 0.3)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.animationDelay = Math.random() * 10 + 's';
      canvas.appendChild(particle);
    }

    return () => {
      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
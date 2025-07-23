import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
}

const CursorTrail: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newBubble: Bubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setBubbles(prev => [...prev.slice(-5), newBubble]);

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
      }, 2000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="bubble-cursor"
          style={{
            left: bubble.x - 5,
            top: bubble.y - 5,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
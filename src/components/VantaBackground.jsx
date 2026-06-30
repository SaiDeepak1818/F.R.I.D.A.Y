import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';

export default function VantaBackground({ theme = 'dark' }) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (effectRef.current) effectRef.current.destroy();

    const isDark = theme === 'dark';

    effectRef.current = DOTS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      /* Dark: pitch black bg, peach-red dots */
      /* Light: off-white bg, muted peach-red dots */
      color:           isDark ? 0xe60a0a : 0xe60a0a,
      color2:          isDark ? 0xff7c73 : 0xffb3ae,
      backgroundColor: isDark ? 0x080808 : 0xf2f2f2,
      size:    2.5,
      spacing: 34,
      showLines: false,
    });

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}

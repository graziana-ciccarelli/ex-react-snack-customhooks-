import { useState, useEffect } from 'react';

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Funzione per tracciare la posizione del mouse
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // listener per il movimento del mouse
    window.addEventListener('mousemove', handleMouseMove);

    //rimuovere il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Restituiamo la posizione e il contenuto 
  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)', 
        cursor: 'none'
      }}
    >
      {content}
    </div>
  );
}

export default useCustomPointer;

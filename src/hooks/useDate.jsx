import { useState, useEffect } from "react";

function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // aggiorna ogni secondo

    // Pulisce l'intervallo quando il componente si smonta
    return () => clearInterval(interval);
  }, []);

  return currentDate;
}

export default useDate;

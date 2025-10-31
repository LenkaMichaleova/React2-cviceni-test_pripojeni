import { useEffect, useState } from 'react';

export function Offline() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    console.log('mounted ')
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    
    return () => {
      console.log('UNMOUNT')
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    }
  }, [])

  function handleOffline () {
    setIsOnline(false)
    console.log('jste offline')
  }

  function handleOnline () {
    setIsOnline(true)
  }

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  }

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;

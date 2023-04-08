import { useEffect, useRef } from 'react';

const useScrollBottom = (callback: () => void) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      const isBottom = scrollTop + clientHeight === scrollHeight;

      if (isBottom) callback();
    };

    divRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [callback]);

  return divRef;
};

export default useScrollBottom;

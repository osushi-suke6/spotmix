import { useCallback, useEffect, useRef } from 'react';

const useScrollBottom = (callback: () => void) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!divRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = divRef.current;
    const isBottom = scrollTop + clientHeight === scrollHeight;

    if (isBottom) callback();
  }, [callback]);

  useEffect(() => {
    divRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      divRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return divRef;
};

export default useScrollBottom;

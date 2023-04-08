import { useCallback, useEffect, useRef, useState } from 'react';

const useEnterKey = function useEnterKey(callback: () => void) {
  console.log('useEnterKey');

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: Refactor
  // prevent rerender after isFocused state changed

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isFocused && event.key === 'Enter') {
        callback();
      }
    },
    [callback],
  );

  const handleFocus = useCallback(() => {
    //setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    //setIsFocused(false);
  }, []);

  useEffect(() => {
    console.log('useEnterKey, useEffect');
    addEventListener('keydown', handleKeyDown);

    const input = inputRef.current;
    input?.addEventListener('focus', handleFocus);
    input?.addEventListener('blur', handleBlur);

    return () => {
      removeEventListener('keydown', handleKeyDown);
      input?.removeEventListener('focus', handleFocus);
      input?.removeEventListener('bluer', handleBlur);
    };
  }, [handleKeyDown, inputRef.current]);

  return inputRef;
};

export default useEnterKey;

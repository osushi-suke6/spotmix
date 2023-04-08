import { useEffect, useRef, useState } from 'react';

export default function useEnterKey(callback: () => void) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: Refactor
  // prevent rerender after isFocused state changed

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isFocused && event.key === 'Enter') {
        callback();
      }
    }

    addEventListener('keydown', handleKeyDown);

    function handleFocus() {
      setIsFocused(true);
    }

    function handleBlur() {
      setIsFocused(false);
    }

    const input = inputRef.current;
    input?.addEventListener('focus', handleFocus);
    input?.addEventListener('blur', handleBlur);

    return () => {
      removeEventListener('keydown', handleKeyDown);
      input?.removeEventListener('focus', handleFocus);
      input?.removeEventListener('bluer', handleBlur);
    };
  }, [callback, inputRef.current]);

  return inputRef;
}

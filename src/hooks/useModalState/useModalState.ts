import { useCallback, useState } from "react";
import { ModalStateOptions } from "./types";

const useModalState = (options?: ModalStateOptions) => {
  const [open, setOpen] = useState<boolean>(options?.initialState || false);

  const toggleIsOpen = useCallback(() => {
    if (options?.customToggle) {
      options.customToggle();
    } else {
      setOpen((open) => !open);
    }
  }, [options]);

  return [open, toggleIsOpen, setOpen] as const;
};

export default useModalState;

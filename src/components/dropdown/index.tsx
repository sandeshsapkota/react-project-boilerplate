import { ReactNode, useRef, useState } from 'react';
import useClickOutside from '@/utils/hooks/useClickOutside';
import OpacityFader from '@/components/motion/OpacityFader';

const Dropdown = ({
  trigger,
  content,
}: {
  trigger: ReactNode;
  content: ReactNode;
}) => {
  /*
   * STATE
   * */
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  /*
   * HANDLERS
   * */
  const handleClose = () => setOpen(false);

  useClickOutside(dropdownRef, handleClose);

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setOpen(!open)} type="button">
        {trigger}
      </button>
      <OpacityFader
        animate={open}
        duration={0.2}
        classes="absolute right-0 z-[99] bg-white shadow-2xl p-5 sm:p-8 rounded-2xl padding-deducted-vw-width sm:w-[458px]"
      >
        {content}
      </OpacityFader>
    </div>
  );
};

export default Dropdown;

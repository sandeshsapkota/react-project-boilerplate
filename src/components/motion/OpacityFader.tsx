import { FC, PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

interface OpacityFaderProps {
  classes?: string;
  animate: boolean;
  duration?: number;
}

/*
 * OPACITY FADER COMPONENT
 * provides a smooth opacity fade-in animation
 * */

const OpacityFader: FC<PropsWithChildren<OpacityFaderProps>> = (props) => {
  /*
   * PROPS
   * */
  const { classes, animate, children, duration } = props;

  // AnimatePresence - animate components when they're removed from the dom
  return (
    <AnimatePresence>
      {animate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration || 0.3 }}
          className={classNames(classes)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpacityFader;

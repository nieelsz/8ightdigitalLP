import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  className, 
  children, 
  id,
  ...props 
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

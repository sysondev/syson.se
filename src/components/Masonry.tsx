import React, { useState, useEffect, useCallback } from 'react';
import debounce from '../utils/debounce';

const Masonry = ({
  children,
  breakpointCols,
  column,
  columnClassName,
  className,
  ...rest
}: {
  children: React.ReactNode;
  breakpointCols: {
    [key: number]: number;
    default: number;
  };
  column?: React.HTMLAttributes<HTMLDivElement>;
  columnClassName?: string;
  className?: string;
}) => {
  const [columnCount, setColumnCount] = useState(breakpointCols.default || 2);

  const reCalculateColumnCount = useCallback(() => {
    const matchedBreakpoints = Object.keys(breakpointCols).filter(
      breakpoint => window.innerWidth >= Number(breakpoint)
    );
    const matchedBreakpoint = Number(matchedBreakpoints[matchedBreakpoints.length - 1]);
    setColumnCount(breakpointCols[matchedBreakpoint] || breakpointCols.default);
  }, [breakpointCols]);

  useEffect(() => {
    reCalculateColumnCount();
  }, [reCalculateColumnCount]);

  const onResize = debounce(reCalculateColumnCount);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const itemsInColumns = () => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.reduce((accumulator: React.ReactNode[][], child: React.ReactNode, index: number) => {
      const columnIndex: number = index % columnCount;
      if (!accumulator[columnIndex]) {
        accumulator[columnIndex] = [];
      }
      accumulator[columnIndex].push(child);
      return accumulator;
    }, []);
  };

  const renderColumns = () => {
    const childrenInColumns = itemsInColumns();
    const width = `${100 / childrenInColumns.length}%`;

    return childrenInColumns.map((items, i) => {
      return (
        <div key={i} className={columnClassName} style={{ width }} {...column}>
          {items}
        </div>
      );
    });
  };
  return <div {...rest}>{renderColumns()}</div>;
};

export default Masonry;

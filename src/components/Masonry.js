import React, { useState, useEffect, useCallback } from 'react';
import debounce from '../utils/debounce';

const Masonry = ({
  children,
  breakpointCols,
  column,
  columnClassName,
  ...rest
}) => {
  const [columnCount, setColumnCount] = useState(breakpointCols.default || 2);

  const reCalculateColumnCount = useCallback(() => {
    const matchedBreakpoints = Object.keys(breakpointCols).filter(
      breakpoint => window.innerWidth >= breakpoint
    );
    const matchedBreakpoint = matchedBreakpoints[matchedBreakpoints.length - 1];
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
    return children.reduce((accumulator, child, index) => {
      const columnIndex = index % columnCount;
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

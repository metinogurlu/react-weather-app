import * as React from 'react';

function SvgAdd(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10v-4z" fill="currentColor" />
    </svg>
  );
}

export default SvgAdd;

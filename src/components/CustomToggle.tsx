import React from 'react';

const useAccordionToggle = (eventKey, fn: ()=>void) =>  {
    return ()=>{}
}
const decoratedOnClick = useAccordionToggle("0", () =>
  console.log('totally custom!'),
);

const CustomToggle: React.FC = ({ children }) => {

  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


  export default CustomToggle;
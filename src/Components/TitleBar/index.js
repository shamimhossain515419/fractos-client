import React from 'react';

const TitleBar = ({ title, paragraph, withe , aline, subtitle }) => {
   
     return (
          <div >
               <div className={`${aline} `}>
                    
                    <h2 className={`secondary text-xl md:text-2xl    font-semibold  `}  > {subtitle} </h2>
                    <h1 className= {` ${withe}  text-2xl  primary md:text-3xl lg:text-6xl  py-4   font-extrabold `}> {title} </h1>
                    <p className={ ` text-base  md:text-lg font-normal `}> {paragraph} </p>
               </div>
          </div>
     );
};

export default TitleBar;
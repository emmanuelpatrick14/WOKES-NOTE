// import React from 'react'

function About() {
  // show that js can be done in this funct using {}
  // inject  variables 
  
  const Food1 = 'Orange';
  const Food2 = 'Apple';
  

  return (
    <div style={{padding:'50px'}}>
         {['orange','apple','pear'].map((item,index)=>(
        <a
        href={`#${item}`}
        key={item + index}
        aria-label={item}>{item}</a>
      ))}
      <ul>
        <li>{Food1}</li>
        <li>{Food2}</li>
        <li>{Food1}</li>
      </ul>

      {/* //rearrnge the comp in app to show app flow */}
    </div>
  )
}

export default About


 
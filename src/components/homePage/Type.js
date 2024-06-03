import React from "react";
import Typewriter from "typewriter-effect";

function Type(prop) {
  return (
    <Typewriter
      options={{
        strings: prop.text,
        autoStart: true,
        loop: true,
        delay: prop.delay, 
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

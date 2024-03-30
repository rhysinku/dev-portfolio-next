import React from "react";

const ParagraphText = ({ prgh }) => {
  return (
    <>
      <span className="inline-block">
        {prgh.split(" ").map((word, i) => (
          <span key={i}>
            {word.split("").map((l, j) => (
              <span className="inline-block" key={j}>
                {l}
              </span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </>
  );
};

export default ParagraphText;

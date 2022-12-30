import React from "react";

const NamesList = ( { babyNames } ) => {

  return (
    <ul className="names-list">
      {babyNames.map(({ name, sex }) =>
        sex === "m" ? (
          <li key={name} className="names names-m">
            {name}
          </li>
        ) : sex === "f" ? (
          <li key={name} className="names names-f">
            {name}
          </li>
        ) : (
          <li key={name} className="names">
            {name}
          </li>
        )
      )}
    </ul>
  );
};

export default NamesList;

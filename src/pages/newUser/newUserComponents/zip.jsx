import React from "react"

const Zip = ({zipValue, zipDataValue}) => {
  const catchZip = (e) => {
    zipValue(e.target.value);
  };
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Zip Code
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-city3"
        type="text"
        placeholder="4560"
        value={zipDataValue}
       // required
        onChange={catchZip}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default Zip;

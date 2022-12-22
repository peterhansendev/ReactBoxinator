import React from "react"

const Email = ({emailValue, emailDataValue}) => {
    const catchEmail = (e) => {
        emailValue(e.target.value);
      };
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3 mt-2 md:mt-0">
          E-Mail
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="email"
          value={emailDataValue}
         // required
          placeholder="@"
          onChange={catchEmail}
        />
      </div>
    </div>
  );
};
export default Email
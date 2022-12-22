import { useState, useEffect } from "react";

export default function OldPassword({ passwordValue, passwordDataValue }) {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const catchPassword = (e) => {
    setPassword(e.target.value);
  };

  const catchNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const catchConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const getApiData = async () => {
    const response = await fetch(
      "https://634943afa59874146b1b72d0.mockapi.io/test4/1"
    ).then((response) => response.json());
    setOldPassword(response.password);
  };
  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    if (
      newPassword === confirmPassword &&
      newPassword !== "" &&
      password === oldPassword
    ) {
      passwordValue(newPassword);
    }
  
    if (newPassword !== confirmPassword || password !== oldPassword) {
      passwordDataValue(false);
    } else {
      passwordDataValue(true);
    }
  
  }, [
    confirmPassword,
    newPassword,
    passwordValue,
    passwordDataValue,
    password,
    oldPassword,
  ]);

  return (
    <div className="relative">
      {/* Old Password */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Current Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            placeholder="******************"
            required
            onChange={catchPassword}
          />
        </div>
      </div>

      {password && password !== oldPassword && (
        <span className="absolute -mt-32 -ml-20 text-red-500">
          Current password incorrect
        </span>
      )}

      <div className=" flex flex-wrap justify-between -mx-3 mb-6 ">
        {/* Password */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
          <div className=" ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              New Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password1"
              type="password"
              placeholder="******************"
              name="foo"
              required
              onChange={catchNewPassword}
            />
          </div>
        </div>
        {/* Repeat Password */}
        <div className="w-full md:w-1/2 px-3  md:mb-0 ">
          <div className=" ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Repeat Password
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password2"
              type="password"
              placeholder="******************"
              required
              onChange={catchConfirmPassword}
            />
          </div>
        </div>
        {newPassword !== confirmPassword && (
          <span className="absolute -mt-7 ml-40 md:ml-48 text-red-500">
            Passwords doesn't match
          </span>
        )}
      </div>
    </div>
  );
}

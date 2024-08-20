import React from "react";
import { IoCalculator } from "react-icons/io5";
import FirstImage from "./FirstImage.svg";


const PaymentForm = () => {
  return (
    <div className="flex flex-row items-center py-30 p-2 justify-center rounded-2xl py-16">

      <form className=" w-[30%] border py-2 px-6 rounded shadow-2xl focus:outline-none">
      <div className="flex items-center space-x-8 mb-6">
        <h3 className="text-xl font-semibold">Mortgage Calculator</h3>
        <h2 className="text-gray-400 underline">Clear All</h2>
      </div>
        <label
          htmlFor="mortgageAmount"
          className="text-sm focus:outline-none font-medium mb-2 text-gray-400"
        >
          Mortgage Amount
        </label>
        <input
          type=""
          placeholder=""
          className="w-full border rounded px-3 py-2"
        />
        <div className="flex py-8 flex-row w-full gap-5">
          <div className="w-1/2">
            <label className="text-gray-400">Interest term</label>
            <input
              type=""
              placeholder="years"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="w-1/2 text-right">
            <label className="text-gray-400">mortgage rate</label>
            <input
              type="text"
              placeholder="%"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="py-6">
          <label className="text-gray-400">mortgage type</label>
          <input
            type="text"
            placeholder="Repayment"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="interest only"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className=" flex justify-center py-7">
          <button className="bg-yellow-300 space-x-2 flex items-center justify-center rounded-3xl font-semibold py-2 px-4">
            <IoCalculator />
            <span className="text-gray-400">calculate Repayments</span>
          </button>
        </div>
      </form>
      <div className="bg-slate-950 w-[30%] border p-28 px-6 rounded text-center">
       <div className="items-center">
       <FirstImage />
       </div>
        <h3 className="text-white font-bold">Results shown here</h3>
        <p className="text-gray-500 font-semibold">Compelete the form and click "Calculator repayments"<br /> to see what your monthly repayments would be.</p>
      </div>
    </div>
  );
};

export default PaymentForm;

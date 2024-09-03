import React, { useState } from "react";
import { IoCalculator } from "react-icons/io5";
import { LuPoundSterling } from "react-icons/lu";
import FirstImage from "./FirstImage.svg";

const PaymentForm = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [interestTerm, setInterestTerm] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState(null);

  const calculateRepayments = (e) => {
    e.preventDefault();
    if (!mortgageAmount || !interestTerm || !mortgageRate || !mortgageType) {
      alert("Please fill in all fields.");
      return;
    }
    const principal = parseFloat(mortgageAmount);
    const interestRate = parseFloat(mortgageRate) / 100 / 12;
    const numberOfPayments = parseInt(interestTerm) * 12;

    let monthlyRepayment;

    if (mortgageType.toLowerCase() === "repayment") {
      monthlyRepayment =
        (principal * interestRate) /
        (1 - Math.pow(1 + interestRate, -numberOfPayments));
    } else if (mortgageType.toLowerCase() === "interest only") {
      monthlyRepayment = principal * interestRate;
    } else {
      alert(
        "Invalid mortgage type. Please enter 'Repayment' or 'Interest only'."
      );
      return;
    }

    setResult(monthlyRepayment.toFixed(2));
  };

  return (
    <div className="flex flex-col md:flex-row items-center py-16 px-4 md:px-8 lg:px-16 justify-center rounded-2xl">
      <form
        className="w-full border shadow-2xl py-8 px-4 md:w-[40%] lg:w-[30%] rounded md:mb-0"
        onSubmit={calculateRepayments}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Mortgage Calculator</h3>
          <h2
            className="text-gray-400 underline cursor-pointer"
            onClick={() => {
              setMortgageAmount("");
              setInterestTerm("");
              setMortgageRate("");
              setMortgageType("");
              setResult(null);
            }}
          >
            Clear All
          </h2>
        </div>
        <label
          htmlFor="mortgageAmount"
          className="text-sm font-medium mb-2 text-gray-400"
        >
          Mortgage Amount
        </label>
        <div className="relative w-full mb-4">
          <span className="absolute inset-y-0 flex items-center">
            <LuPoundSterling className="bg-blue-200 w-full h-full font-semibold text-sm text-gray-500" />
          </span>
          <input
            type="text"
            placeholder=""
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            className="w-full border rounded px-3 py-2 pl-10 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row md:py-8 gap-5">
          <div className="relative w-full md:w-1/2">
            <label className="text-gray-400">Interest term</label>
            <input
              type="text"
              placeholder=""
              value={interestTerm}
              onChange={(e) => setInterestTerm(e.target.value)}
              className="w-full px-3 py-3 pr-16 border rounded-lg focus:outline-none"
              required
            />
            <span className="absolute inset-y-8 mt-4 right-0 flex items-center pr-0">
              <p className="text-gray-400 bg-blue-200 px-2 py-3 w-12 h-12 rounded">
                years
              </p>
            </span>
          </div>

          <div className="relative w-full md:w-1/2">
            <label className="text-gray-400">Mortgage rate</label>
            <input
              type="text"
              placeholder=""
              value={mortgageRate}
              onChange={(e) => setMortgageRate(e.target.value)}
              className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-0">
              <p className="text-gray-400 bg-blue-200 px-2 py-3 w-12 h-12 mt-5 rounded">%</p>
            </span>
          </div>
        </div>
        {/* cheackbox */}
        <label className="block text-gray-700">Mortgage Type</label>
        <div className="mt-2 flex space-x-4" />
        <label className="flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer">
          <input
            type="radio"
            placeholder="Repayment"
            value={mortgageType}
            onChange={(e) => setMortgageType(e.target.value)}
            className="form-radio h-4 w-4"
          />
          <span className="ml-2 text-gray-700">Mortgage Type</span>
        </label>

        <div className="">
          <label className="block text-gray-700"></label>
          <div className="mt-2 flex space-x-4" />
          <label className="flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer">
            <input
              type="radio"
              placeholder="Repayment"
              value={mortgageType}
              onChange={(e) => setMortgageType(e.target.value)}
              className="form-radio h-4 w-4"
            />
            <span className="ml-2 text-gray-700">Mortgage Type</span>
          </label>
        </div>

        <div className="flex justify-center py-7">
          <button className="bg-yellow-300 space-x-2 flex items-center justify-center rounded-3xl font-semibold py-2 px-4">
            <IoCalculator />
            <span className="text-gray-400">Calculate Repayments</span>
          </button>
        </div>
      </form>
      <div className="w-full md:w-[40%] lg:w-[30%] bg-slate-950 border py-32 px-6 rounded text-center">
        <div className="flex justify-center mb-4">
          <FirstImage className="w-28 h-10" />
        </div>
        <h3 className="text-white font-semibold">Results shown here</h3>
        <p className="text-gray-500 font-semibold">
          {result
            ? `Your monthly repayment would be $${result}`
            : "Complete the form and click 'Calculate Repayments' to see what your monthly repayments would be."}
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;

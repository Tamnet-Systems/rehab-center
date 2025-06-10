import React from "react";

const requirements = [
  "Desires to abstain completely from alcohol and any other mood-altering drugs such as Kuber, opium, heroin, cocaine, cannabis, etc.",
  "Is accompanied by a sponsor/guardian who will undertake to commit to the formalities of admission.",
  "Accepts to undergo treatment for the set period of 12 weeks for an alcoholic and 28 weeks for a drug addict.",
  "For continuing recovering addicts/alcoholics, we also offer Alcoholics Anonymous (AA) and Narcotics Anonymous (NA) meetings every Wednesday from 1-2pm, and aftercare programs in general.",
  "Brings enough clothes and pocket money for personal effects such as soap, toothpaste, tissue rolls, etc., as the centre does not provide clothing nor personal effects for inpatients.",
  "Deposits a NON-REFUNDABLE FEE OF KSHS 40,000 and then pays the remaining Ksh. 80,000 in two installments to complete the payment at the beginning of the last month of treatment.",
  "Accepts to adhere to the laid down rules and regulations and commits him/herself in writing."
];

const charges = [
  { label: "Inpatient residential treatment", value: "Ksh 1,167 per day" },
  { label: "Alcoholics", value: "40,000 per Month for 3 months" },
  { label: "Drug Addicts", value: "40,000 per Month for 6 months" }
];

const Admission = () => (
  <div className="min-h-screen py-12 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-brand-darkblue mb-8">Admission & Fees</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Admission Requirements</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Centre Charges</h2>
          <ul className="divide-y divide-gray-200">
            {charges.map((charge, idx) => (
              <li key={idx} className="flex justify-between py-2 text-gray-700">
                <span>{charge.label}</span>
                <span className="font-semibold text-gray-900">{charge.value}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Payment Details</h2>
          <div className="bg-gray-100 rounded p-4 mb-2">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <div>
                <span className="block font-bold text-gray-800">SALMO CENTRE</span>
                <span className="block">MPESA PAYBILL: <span className="font-semibold">247247</span></span>
                <span className="block">ACCOUNT: <span className="font-semibold">0771879257</span></span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">(A deposit of a month's fee is required upon admission for inpatient treatment.)</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Other Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Meetings: AA & NA every Wednesday, 1-2pm</li>
            <li>Aftercare programs available for continuing recovery</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Admission;

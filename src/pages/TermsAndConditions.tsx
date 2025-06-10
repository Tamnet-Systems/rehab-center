import React from "react";

const TermsAndConditions = () => (
  <div className="min-h-screen py-12 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-brand-darkblue mb-8">Terms & Conditions</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg prose prose-lg max-w-none">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>All information provided on this website is for general guidance and does not constitute medical advice. Please consult a qualified professional for personalized care.</li>
          <li>By submitting a booking or inquiry, you agree to provide accurate and truthful information.</li>
          <li>Admission to Salmo Rehabilitation Centre is subject to meeting the stated requirements and payment of the necessary fees.</li>
          <li>All fees paid are subject to our refund policy. The initial deposit is non-refundable.</li>
          <li>Clients must adhere to the centre's rules and regulations during their stay and treatment.</li>
          <li>We reserve the right to update these terms and conditions at any time. Continued use of our services constitutes acceptance of any changes.</li>
        </ul>
        <p className="mt-4 text-gray-600 text-sm">By submitting a booking, you confirm that you have read and agree to these terms and conditions.</p>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;

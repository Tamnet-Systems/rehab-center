import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Compassion",
      description: "We treat every person with dignity, respect, and understanding, recognizing that recovery is a deeply personal journey."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of clinical care and continuously improve our services based on evidence-based practices."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our interactions and treatment approaches."
    },
    {
      title: "Hope",
      description: "We believe in the potential for recovery and help our clients rediscover hope for a fulfilling, substance-free life."
    }
  ];

  const accreditations = [
    "Joint Commission Accredited",
    "CARF International Accredited",
    "State Licensed Treatment Facility",
    "DEA Registered for Medication-Assisted Treatment",
    "In-Network with Major Insurance Providers"
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-skyblue/10 to-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-darkblue mb-8">
            About Us
          </h1>
          <p className="text-lg text-brand-darkblue/80 mb-8">
            {/* ...about text... */}
          </p>
          <Button className="bg-brand-brightred hover:bg-brand-darkblue text-white px-8 py-4 text-lg transition-all hover:scale-105">
            Book a Session
          </Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To be a supper center for treatment and counselling of drug and alcohol addicts.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To offer the highest quality of therapy services embracing psychological and psychiatry approaches through professionalism.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/services">Explore Our Programs</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Heart className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Recovery Statistics</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Treatment Completion Rate</span>
                  <span className="text-2xl font-bold text-teal-600">87%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">6-Month Sobriety Rate</span>
                  <span className="text-2xl font-bold text-blue-600">73%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-green-600">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Our facility maintains the highest standards of care through rigorous accreditation and certification processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <Check className="h-6 w-6 text-white flex-shrink-0" />
                <span className="text-white font-medium">{accreditation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to answer your questions and help you take 
            the first step toward recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-3">
              <Link to="/bookings">Schedule Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { motion } from "framer-motion";
import { Check, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { TiltCard } from "@/components/ui/tilt-card";

const pricingPlans = [
  {
    name: "Alcohol Recovery",
    price: "40,000",
    duration: "per month",
    totalDuration: "3 months program",
    dailyRate: "1,167 per day",
    description: "Comprehensive alcohol addiction recovery program",
    features: [
      "Professional medical supervision",
      "Individual therapy sessions",
      "Group counseling",
      "Family therapy",
      "Relapse prevention training",
      "Aftercare planning",
      "AA meetings access"
    ],
    highlight: false,
    buttonText: "Begin Recovery",
  },
  {
    name: "Drug Recovery",
    price: "40,000",
    duration: "per month",
    totalDuration: "6 months program",
    dailyRate: "1,167 per day",
    description: "Intensive drug addiction treatment program",
    features: [
      "Medically supervised detox",
      "Personalized treatment plan",
      "Individual counseling",
      "Group therapy sessions",
      "Family involvement",
      "Relapse prevention strategies",
      "NA meetings access"
    ],
    highlight: true,
    buttonText: "Start Healing",
  },
  {
    name: "Outpatient Care",
    price: "Contact",
    duration: "for pricing",
    totalDuration: "Flexible scheduling",
    dailyRate: "Varies by need",
    description: "Flexible care while maintaining daily life",
    features: [
      "Weekly therapy sessions",
      "Continued support",
      "Relapse prevention",
      "Community integration",
      "Life skills development",
      "Recovery maintenance",
      "Support group access"
    ],
    highlight: false,
    buttonText: "Learn More",
  }
];

const Pricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO 
        title="Pricing - Salmo Rehabilitation Centre"
        description="View our transparent pricing and treatment options for alcohol and drug rehabilitation programs at Salmo Rehabilitation Centre in Kisii, Kenya."
        keywords="rehab pricing, addiction treatment cost, rehabilitation fees, Kisii, Kenya"
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Transparent </span>
              <span className="text-teal-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We believe in complete transparency with our pricing. Your journey to recovery 
              shouldn't come with hidden costs or surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TiltCard className="h-full" tiltAmount={5} glareEnabled={plan.highlight}>
                  <div className={`h-full rounded-2xl overflow-hidden shadow-lg border ${
                    plan.highlight 
                      ? 'border-teal-400 shadow-teal-100' 
                      : 'border-gray-200'
                  }`}>
                    {plan.highlight && (
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2"></div>
                    )}
                    <div className={`px-6 py-8 ${plan.highlight ? 'bg-gradient-to-b from-teal-50 to-white' : 'bg-white'}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">Ksh {plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.duration}</span>
                        <div className="text-sm text-gray-500 mt-1">{plan.totalDuration}</div>
                        <div className="text-sm text-gray-500">({plan.dailyRate})</div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        asChild 
                        className={`w-full py-6 rounded-xl ${
                          plan.highlight 
                            ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                      >
                        <Link to="/contact" className="flex items-center justify-center">
                          {plan.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                What's Included in Your Recovery Journey
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Admission Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Commitment to abstain completely from alcohol and mood-altering substances</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Presence of a sponsor/guardian for admission formalities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Acceptance of the treatment duration (12 weeks for alcohol, 28 weeks for drugs)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Agreement to follow center rules and regulations</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <AlertCircle className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <p className="font-medium">Non-refundable deposit of Ksh 40,000 required at admission</p>
                      <p className="text-sm text-gray-600">Remaining Ksh 80,000 payable in two installments</p>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                    <h4 className="font-semibold text-teal-800 mb-2">Payment Details</h4>
                    <div className="space-y-2">
                      <p className="font-bold text-gray-900">SALMO CENTRE</p>
                      <p>MPESA PAYBILL: <span className="font-semibold">247247</span></p>
                      <p>ACCOUNT: <span className="font-semibold">0771879257</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Weekly AA & NA meetings (Wednesdays, 1-2pm)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive aftercare programs for continuing recovery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Family therapy and support sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Life skills development workshops</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <p className="text-gray-600 mb-6">
                  Please note: Patients are required to bring sufficient clothing and pocket money for personal 
                  effects such as toiletries, as these are not provided by the center.
                </p>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 rounded-full px-8 py-6">
                  <Link to="/contact">Contact Us for More Information</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 
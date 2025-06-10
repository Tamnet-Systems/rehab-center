import { Heart, Mail, Calendar, Facebook, Twitter, Instagram, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParticlesComponent } from "./ui/particles";

export const Footer = () => {
  const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent 
          className="absolute inset-0 w-full h-full"
          particlesOptions={{
            particles: {
              number: { value: 50, density: { enable: true, area: 1000 } },
              opacity: { value: 0.2 },
              move: { speed: 0.5 }
            }
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeInUpAnimation} className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
                Salmo Rehabilitation Centre
              </span>
            </motion.div>
            <motion.p variants={fadeInUpAnimation} className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Providing compassionate, evidence-based addiction treatment and mental health services in Kisii, Kenya. 
              Our mission is to help individuals and families heal and recover with dignity and professionalism.
            </motion.p>
            <motion.div variants={fadeInUpAnimation} className="flex space-x-4 mb-6">
              <Mail className="h-5 w-5 text-teal-400" />
              <span className="text-gray-300">salmocentre@gmail.com</span>
            </motion.div>
            <motion.div variants={fadeInUpAnimation} className="flex space-x-4">
              <a 
                href="https://facebook.com/salmocentre" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/salmocentre" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter" 
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/salmocentre" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
            }}
          >
            <motion.h3 variants={fadeInUpAnimation} className="text-lg font-semibold mb-6 flex items-center">
              <span className="h-1 w-6 bg-teal-400 rounded-full mr-2"></span>
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {[
                { name: "Our Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Success Stories", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
                { name: "Pricing", path: "/pricing" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" }
              ].map((link, index) => (
                <motion.li key={index} variants={fadeInUpAnimation}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1 w-0 bg-teal-400 rounded-full mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
            }}
          >
            <motion.h3 variants={fadeInUpAnimation} className="text-lg font-semibold mb-6 flex items-center">
              <span className="h-1 w-6 bg-teal-400 rounded-full mr-2"></span>
              Contact
            </motion.h3>
            <div className="space-y-4 text-gray-300">
              <motion.p variants={fadeInUpAnimation} className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-teal-400 mt-1 flex-shrink-0" />
                <span>Salmo Rehabilitation Centre, Mosocho<br />Kisii, Kenya</span>
              </motion.p>
              <motion.p variants={fadeInUpAnimation} className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-teal-400 flex-shrink-0" />
                <span>24/7 Crisis Support</span>
              </motion.p>
              <motion.a 
                href="tel:+254714638334"
                variants={fadeInUpAnimation} 
                className="flex items-center group hover:text-teal-400 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 mr-3 text-teal-400 flex-shrink-0" />
                <span className="font-semibold">+254 714 638 334</span>
              </motion.a>
              <motion.a 
                href="https://maps.google.com/?q=Salmo+Rehabilitation+Centre+Mosocho+Kisii+Kenya" 
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUpAnimation}
                className="inline-flex items-center px-4 py-2 mt-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <span>View on Map</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Salmo Rehabilitation Centre. All rights reserved.</p>
          <p className="mt-2 text-sm">
            If you are experiencing a medical emergency, please call <a href="tel:+254714638334" className="text-teal-400 hover:underline">+254 714 638 334</a> immediately.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

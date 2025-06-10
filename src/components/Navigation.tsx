import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className={`backdrop-blur-md bg-white/90 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "py-4"
      }`}
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group" aria-label="Salmo Center - Home">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src="/logo-salmo.png"
                  alt="Salmo Center Logo"
                  className="h-10 w-10 object-contain rounded-full bg-white border border-gray-200 group-hover:border-teal-400 transition-colors"
                  width="40"
                  height="40"
                />
              </motion.div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-600">
                Salmo Center
              </span>
            </Link>
          </div>

          {/* Emergency Contact - Always visible */}
          <div className="hidden sm:flex items-center mr-4 lg:mr-6">
            <motion.a 
              href="tel:+254714638334" 
              className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">24/7 Support:</span> +254 714 638 334
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive(item.href)
                      ? "bg-teal-50 text-teal-600"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div 
                      className="h-0.5 bg-teal-600 mt-0.5 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-teal-600 hover:bg-teal-700 rounded-full shadow-md">
                <Link to="/bookings">Book Session</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden"
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-2 bg-white rounded-xl shadow-lg"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 }
                }}
              >
                {/* Mobile emergency contact */}
                <motion.a 
                  href="tel:+254714638334" 
                  className="flex items-center px-3 py-2 text-base font-medium text-teal-600 hover:text-teal-800 border-b border-gray-100 pb-3"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  24/7 Support: +254 714 638 334
                </motion.a>
                
                <div className="border-t border-gray-100 my-2"></div>
                
                {navigation.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg ${
                        isActive(item.href)
                          ? "text-teal-600 bg-teal-50"
                          : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isActive(item.href) ? "rotate-180 text-teal-600" : ""}`} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="px-3 py-2"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.2, delay: navigation.length * 0.05 }}
                >
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 rounded-full shadow-md">
                    <Link to="/bookings">
                      Book Session
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

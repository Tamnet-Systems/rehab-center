import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, ArrowRight, Star, Phone, Calendar, MapPin, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { ParticlesComponent } from "@/components/ui/particles";

const Index = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Services data
  const services = [
    {
      icon: Heart,
      title: "Psychological/Psychiatric Services",
      description: "Comprehensive mental health assessments, counseling, and psychiatric care for individuals and families."
    },
    {
      icon: Shield,
      title: "Drugs & Alcohol Rehabilitation",
      description: "Evidence-based rehabilitation programs, substance use screening, and ongoing support for recovery."
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description: "Therapeutic support for couples to rebuild trust, improve communication, and heal together."
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Guided sessions to strengthen family relationships and foster a supportive recovery environment."
    },
    {
      icon: Users,
      title: "Individual Therapy",
      description: "Personalized one-on-one therapy to address unique challenges and promote lasting change."
    },
    {
      icon: Users,
      title: "Adolescence Therapy",
      description: "Specialized therapy for adolescents facing substance use or mental health challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed", icon: Heart },
    { number: "87%", label: "Completion Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Phone },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Home - Your Journey to Recovery Begins Here"
        description="Salmo Rehabilitation Centre provides compassionate addiction treatment and mental health services in Kisii, Kenya. Begin your recovery journey with our evidence-based programs."
        keywords="addiction treatment, rehabilitation center, recovery, mental health, therapy, Kisii, Kenya"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900/70 to-gray-900 py-24 lg:py-32 overflow-hidden">
        {/* Particles background */}
        <div className="absolute inset-0 z-0">
          <ParticlesComponent 
            className="absolute inset-0 w-full h-full"
            particlesOptions={{
              particles: {
                color: { value: "#ffffff" },
                number: { value: 40 },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 3 } },
                move: { speed: 0.8 }
              }
            }}
          />
        </div>
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/re.jpg"
            alt="Recovery journey"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="eager"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/70 to-gray-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                variants={fadeIn}
              >
                <span className="block text-white">Your Journey</span>
                <span className="block text-teal-400">to Recovery Begins Here</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={fadeIn}
              >
                At Salmo centre, we believe every person deserves compassionate care, hope, and a chance to heal. 
                Our evidence-based treatments create a sanctuary where transformation becomes possible.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeIn}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                >
                  <Link to="/bookings">Begin Your Recovery Journey</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all"
                >
                  <Link to="/contact">Speak With Our Team</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <GlassCard className="p-6 lg:p-8 max-w-md mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-teal-500/20 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-teal-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Compassionate Care</h3>
                      <p className="text-gray-300">Personalized treatment with dignity and respect</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-teal-500/20 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-teal-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Evidence-Based</h3>
                      <p className="text-gray-300">Proven methods for lasting recovery</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-teal-500/20 p-3 rounded-full">
                      <Users className="h-6 w-6 text-teal-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">Supportive Community</h3>
                      <p className="text-gray-300">Heal together in a safe environment</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TiltCard className="h-full">
                  <Card className="h-full border-none bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8 flex flex-col items-center">
                      <div className="bg-teal-500/10 p-4 rounded-full mb-4">
                        <stat.icon className="h-8 w-8 text-teal-600" />
                      </div>
                      <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium text-center">{stat.label}</div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our Services</span>
              <span className="block text-teal-600 mt-2">at Salmo Rehabilitation Centre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of specialized services to support your journey to wellness and recovery. 
              Our team is dedicated to providing compassionate, evidence-based care for individuals, couples, and families.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TiltCard className="h-full">
                  <Card className="h-full border border-gray-100 hover:border-teal-200 transition-colors bg-white shadow-md hover:shadow-xl">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto bg-teal-50 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-teal-600" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center text-lg">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all group"
            >
              <Link to="/services" className="flex items-center">
                Explore All Our Programs
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Stories of Hope</span>
              <span className="block text-teal-600 mt-2">& Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from brave individuals who found their way back to themselves. 
              Each journey is a testament to the power of healing and human resilience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Vincent Zedekiah",
                text: "Salmo gave me back my life and my family. The compassionate care here made all the difference in my recovery journey.",
                duration: "18 months sober",
                image: "/testimonial-1.jpg"
              },
              {
                name: "Michael Juma",
                text: "The supportive environment and understanding staff created a safe space where I could finally heal and grow.",
                duration: "2 years sober",
                image: "/testimonial-2.jpg"
              },
              {
                name: "Jennifer Igunza",
                text: "This place doesn't just treat addiction - it treats the whole person. I found myself again here.",
                duration: "14 months sober",
                image: "/testimonial-3.jpg"
              }
            ].map((story, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TiltCard className="h-full" glareEnabled={true} tiltAmount={5}>
                  <Card className="h-full border border-gray-100 hover:border-teal-200 transition-colors bg-white shadow-lg hover:shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                    <div className="relative pt-8 pb-6 px-6">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-teal-100 shadow-lg transform -translate-y-1/2 absolute top-0">
                          <img 
                            src={story.image} 
                            alt={`${story.name} testimonial`} 
                            className="w-full h-full object-cover" 
                            onError={(e) => e.currentTarget.src = '/placeholder-testimonial.jpg'}
                          />
                        </div>
                      </div>
                      <blockquote className="text-gray-700 mb-6 text-lg text-center italic mt-12 md:mt-16 px-2">
                        "{story.text}"
                      </blockquote>
                      <div className="border-t border-gray-100 pt-4 text-center">
                        <p className="font-semibold text-gray-900">{story.name}</p>
                        <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                          {story.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50 rounded-full opacity-70 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-50 rounded-full opacity-70 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background particles */}
            <div className="absolute inset-0">
              <ParticlesComponent 
                className="absolute inset-0 w-full h-full"
                particlesOptions={{
                  particles: {
                    color: { value: "#ffffff" },
                    number: { value: 15 },
                    opacity: { value: 0.1 },
                    size: { value: { min: 1, max: 3 } },
                    move: { speed: 0.3 }
                  }
                }}
              />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Your Recovery Journey Starts Today
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the first step towards a life of hope, healing, and renewed purpose. 
                  Our compassionate team is here to guide you every step of the way.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center"
                  whileHover={{ y: -5, style: { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="h-6 w-6 text-teal-300 mr-3" />
                  <span className="text-lg font-semibold text-white">+254 714 638 334</span>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center"
                  whileHover={{ y: -5, style: { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
                  transition={{ duration: 0.3 }}
                >
                  <Calendar className="h-6 w-6 text-teal-300 mr-3" />
                  <span className="text-lg text-white">24/7 Crisis Support</span>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center"
                  whileHover={{ y: -5, style: { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="h-6 w-6 text-teal-300 mr-3" />
                  <span className="text-lg text-white">Mosocho, Kisii</span>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-teal-800 hover:bg-gray-100 rounded-full shadow-lg shadow-teal-900/20 px-8 py-6 text-lg"
                  >
                    <Link to="/bookings">Schedule a Confidential Consultation</Link>
                  </Button>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
                  >
                    <Link to="/contact">Get Help Now</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

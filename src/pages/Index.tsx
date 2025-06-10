import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, ArrowRight, Star, Phone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Update website name and services
  const services = [
    {
      icon: Heart,
      title: "Psychological/Psychiatric Services",
      description: "Comprehensive mental health assessments, counseling, and psychiatric care for individuals and families."
    },
    {
      icon: Shield,
      title: "Drugs & Alcohol Rehabilitation / Drug Test",
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
    },
    {
      icon: Shield,
      title: "Detoxification",
      description: "Medically supervised detox programs to ensure safe withdrawal and stabilization."
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Peer-supported group sessions to share experiences, build community, and encourage growth."
    }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed", icon: Heart },
    { number: "87%", label: "Completion Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Phone },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-skyblue/10 to-brand-white py-20 lg:py-32 overflow-hidden">
        {/* Doctor celebrating background image */}
        <img
          src="/re.jpg"
          alt="Obsession and recovery"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-skyblue/30 to-transparent" style={{ zIndex: 1 }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <div className="text-centre">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
              <span className="block mx-auto text-brand-darkblue transition-colors duration-200 hover:text-brand-brightred cursor-pointer">Your Journey</span>
              <span className="block text-brand-brightred">to Recovery Begins Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-darkblue/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Salmo centre, we believe every person deserves compassionate care, hope, and a chance to heal. 
              Our evidence-based treatments create a sanctuary where transformation becomes possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand-brightred hover:bg-brand-darkblue text-white px-8 py-4 text-lg transition-all hover:scale-105"
              >
                <Link to="/bookings">Begin Your Recovery Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue hover:text-white px-8 py-4 text-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Speak With Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Card className="hover:shadow-lg transition-shadow border-brand-skyblue/30">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-brand-darkblue mx-auto mb-4" />
                    <div className="text-4xl font-bold text-brand-darkblue mb-2">{stat.number}</div>
                    <div className="text-brand-darkblue/80 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-brand-skyblue/10 to-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-brand-darkblue">Our Services</span>
              <br />
              <span className="text-brand-brightred">at Salmo Rehabilitation Centre</span>
            </h2>
            <p className="text-xl text-brand-darkblue/80 max-w-3xl mx-auto">
              We offer a wide range of specialized services to support your journey to wellness and recovery. Our team is dedicated to providing compassionate, evidence-based care for individuals, couples, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-brand-skyblue/30">
                <CardHeader className="text-centre pb-4">
                  <service.icon className="h-16 w-16 text-brand-darkblue mx-auto mb-4" />
                  <CardTitle className="text-2xl text-brand-darkblue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-darkblue/80 text-centre text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-centre mt-12">
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-brand-brightred text-brand-brightred hover:bg-brand-brightred hover:text-white transition-all hover:scale-105 px-8 py-4"
            >
              <Link to="/services">
                Explore All Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-brand-darkblue">Stories of Hope</span>
              <br />
              <span className="text-brand-brightred">& Transformation</span>
            </h2>
            <p className="text-xl text-brand-darkblue/80 max-w-3xl mx-auto mb-8">
              Real stories from brave individuals who found their way back to themselves. 
              Each journey is a testament to the power of healing and human resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "vincent zedekiah.",
                text: "Salmo gave me back my life and my family. The compassionate care here made all the difference in my recovery journey.",
                duration: "18 months sober"
              },
              {
                name: "Michae Juma",
                text: "The supportive environment and understanding staff created a safe space where I could finally heal and grow.",
                duration: "2 years sober"
              },
              {
                name: "Jennifer igunza",
                text: "This place doesn't just treat addiction - it treats the whole person. I found myself again here.",
                duration: "14 months sober"
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-brand-skyblue/30">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-brand-darkblue mb-6 italic text-lg">
                    "{story.text}"
                  </blockquote>
                  <div className="border-t border-brand-skyblue/30 pt-4">
                    <p className="font-semibold text-brand-darkblue">{story.name}</p>
                    <div className="bg-brand-skyblue/20 text-brand-darkblue px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                      {story.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-centre">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-brightred hover:bg-brand-darkblue text-white transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/testimonials">
                Read More Success Stories
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-darkblue to-brand-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Recovery Journey Starts Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a life of hope, healing, and renewed purpose. 
            Our compassionate team is here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-centre items-centre mb-8">
            <div className="flex items-centre text-white">
              <Phone className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">+254 714 638 334</span>
            </div>
            <div className="flex items-centre text-white">
              <Calendar className="h-6 w-6 mr-3" />
              <span className="text-lg">24/7 Crisis Support</span>
            </div>
            <div className="flex items-centre text-white">
              <MapPin className="h-6 w-6 mr-3" />
              <span className="text-lg">mosocho Kisii</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="text-brand-darkblue hover:bg-white/90 transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/bookings">Schedule a Confidential Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-darkblue transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/contact">Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

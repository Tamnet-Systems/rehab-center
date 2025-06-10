import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, Clock } from "lucide-react";

const Services = () => {
  // Updated programs/services
  const programs = [
    {
      title: "Psychological/Psychiatric Services",
      duration: "Ongoing",
      description: "Comprehensive mental health assessments, counseling, and psychiatric care for individuals and families.",
      features: [
        "Mental health assessments",
        "Psychiatric evaluation",
        "Medication management",
        "Individual counseling",
        "Crisis intervention"
      ],
      icon: Heart
    },
    {
      title: "Drugs & Alcohol Rehabilitation / Drug Test",
      duration: "Varies",
      description: "Evidence-based rehabilitation programs, substance use screening, and ongoing support for recovery.",
      features: [
        "Medical detoxification",
        "Drug and alcohol testing",
        "Relapse prevention",
        "Aftercare planning",
        "Support groups"
      ],
      icon: Calendar
    },
    {
      title: "Couples Therapy",
      duration: "Ongoing",
      description: "Therapeutic support for couples to rebuild trust, improve communication, and heal together.",
      features: [
        "Relationship counseling",
        "Conflict resolution",
        "Communication skills",
        "Joint goal setting"
      ],
      icon: Users
    },
    {
      title: "Family Therapy",
      duration: "Ongoing",
      description: "Guided sessions to strengthen family relationships and foster a supportive recovery environment.",
      features: [
        "Family counseling",
        "Education and support",
        "Family dynamics assessment",
        "Coping strategies"
      ],
      icon: Users
    },
    {
      title: "Individual Therapy",
      duration: "Ongoing",
      description: "Personalized one-on-one therapy to address unique challenges and promote lasting change.",
      features: [
        "Personalized treatment plans",
        "Cognitive behavioral therapy (CBT)",
        "Motivational interviewing",
        "Trauma-informed care"
      ],
      icon: Users
    },
    {
      title: "Adolescence Therapy",
      duration: "Ongoing",
      description: "Specialized therapy for adolescents facing substance use or mental health challenges.",
      features: [
        "Youth counseling",
        "Peer support groups",
        "Family involvement",
        "School collaboration"
      ],
      icon: Users
    },
    {
      title: "Detoxification",
      duration: "Short-term",
      description: "Medically supervised detox programs to ensure safe withdrawal and stabilization.",
      features: [
        "Medical monitoring",
        "Withdrawal management",
        "24/7 nursing care",
        "Transition to further treatment"
      ],
      icon: Heart
    },
    {
      title: "Group Therapy",
      duration: "Ongoing",
      description: "Peer-supported group sessions to share experiences, build community, and encourage growth.",
      features: [
        "Support groups",
        "Skill-building workshops",
        "Peer encouragement",
        "Topic-focused sessions"
      ],
      icon: Users
    }
  ];

  const specialties = [
    {
      title: "Alcohol Addiction",
      description: "Comprehensive treatment for alcohol use disorders with medical support."
    },
    {
      title: "Drug Addiction",
      description: "Evidence-based treatment for substance use disorders including opioids, cocaine, and methamphetamines."
    },
    {
      title: "Dual Diagnosis",
      description: "Integrated treatment for co-occurring mental health and substance use disorders."
    },
    {
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma-related disorders and PTSD."
    },
    {
      title: "Mental Health",
      description: "Treatment for depression, anxiety, bipolar disorder, and other mental health conditions."
    },
    {
      title: "Family Therapy",
      description: "Healing for the whole family affected by addiction and mental health issues."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-skyblue/10 to-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-darkblue mb-8">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-centre">
                  <program.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-900">{program.title}</CardTitle>
                  <div className="flex items-centre justify-centre text-teal-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{program.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-centre text-gray-700">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-centre mt-12">
            <Button className="bg-brand-brightred hover:bg-brand-darkblue text-white px-8 py-4 text-lg transition-all hover:scale-105">
              <Link to="/bookings">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized programs address a wide range of addiction and mental health conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, confidential assessment. Our admissions team 
            will help determine the best treatment program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/bookings">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

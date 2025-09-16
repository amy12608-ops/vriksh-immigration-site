import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/ui/layout";
import { 
  GraduationCap, 
  Briefcase, 
  FastForward, 
  Plane, 
  Heart, 
  MapPin, 
  FileText, 
  Home, 
  Flag, 
  Building, 
  Shield, 
  CreditCard 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Study Permits",
      description: "Student visa applications for international education in Canada. Get expert guidance on school selection, application process, and requirements.",
      href: "/services/study-permits",
      popular: true
    },
    {
      icon: Briefcase,
      title: "Work Permits", 
      description: "Temporary work authorization for skilled professionals. Navigate LMIA requirements and employer-specific permits with ease.",
      href: "/services/work-permits",
      popular: true
    },
    {
      icon: FastForward,
      title: "Express Entry",
      description: "Fast-track your permanent residency through Canada's Express Entry system. Maximize your CRS score and application success.",
      href: "/services/express-entry",
      popular: true
    },
    {
      icon: Plane,
      title: "Visitor Visas",
      description: "Temporary resident visas for tourism, business visits, or family visits. Ensure smooth approval with proper documentation.",
      href: "/services/visitor-visas"
    },
    {
      icon: Heart,
      title: "Family Sponsorship",
      description: "Reunite with your loved ones through family immigration programs. Sponsor spouses, children, parents, and grandparents.",
      href: "/services/family-sponsorship"
    },
    {
      icon: MapPin,
      title: "Provincial Nominee Program",
      description: "Province-specific immigration pathways across Canada. Explore opportunities in your preferred province or territory.",
      href: "/services/pnp"
    },
    {
      icon: FileText,
      title: "LMIA Applications",
      description: "Labour Market Impact Assessment for employers. Secure work permits through proper LMIA approval processes.",
      href: "/services/lmia"
    },
    {
      icon: Home,
      title: "Permanent Residency",
      description: "Complete PR application services across all immigration programs. Your pathway to becoming a Canadian permanent resident.",
      href: "/services/permanent-residency"
    },
    {
      icon: Flag,
      title: "Citizenship Applications",
      description: "Canadian citizenship applications and ceremony preparation. Complete your journey to becoming a Canadian citizen.",
      href: "/services/citizenship"
    },
    {
      icon: Building,
      title: "Business Immigration",
      description: "Investor and entrepreneur programs for business expansion. Start-up visas, self-employed persons, and investor programs.",
      href: "/services/business-immigration"
    },
    {
      icon: Shield,
      title: "Refugee & Asylum Claims",
      description: "Protection for those seeking refuge in Canada. Compassionate assistance for refugee claimants and protected persons.",
      href: "/services/refugee-asylum"
    },
    {
      icon: CreditCard,
      title: "PR Card Renewal & Travel Documents",
      description: "Renew your PR card and obtain travel documents. Maintain your permanent resident status and travel freely.",
      href: "/services/pr-card-renewal"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Immigration Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive immigration solutions by CICC-licensed consultants. From temporary visas to permanent residency and citizenship.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Immigration Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every immigration journey is unique. Our expert team provides personalized guidance across all Canadian immigration programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-medium transition-smooth ${service.popular ? 'ring-2 ring-secondary ring-opacity-50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <a href={service.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Immigration Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive assessment of your immigration goals and eligibility"
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Customized immigration strategy based on your unique circumstances"
              },
              {
                step: "03",
                title: "Application Preparation",
                description: "Meticulous preparation and review of all required documentation"
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous guidance until successful approval and beyond"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Immigration Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific immigration needs and learn how we can help you achieve your Canadian dreams.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default Services;
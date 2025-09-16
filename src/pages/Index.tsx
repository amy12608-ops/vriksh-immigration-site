import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Journey to Canada Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional immigration services by CICC-licensed consultants. Let us guide you through every step of your Canadian immigration journey.
          </p>
          <div className="flex justify-center">
            <BookConsultationButton className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90" />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">CICC Licensed</h3>
              <p className="text-muted-foreground">Certified Immigration Consultants</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Clients</h3>
              <p className="text-muted-foreground">Successfully served</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">95% Success Rate</h3>
              <p className="text-muted-foreground">Approved applications</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Countries</h3>
              <p className="text-muted-foreground">Clients worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Immigration Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive immigration solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Express Entry",
                description: "Fast-track your permanent residency through Canada's Express Entry system",
                href: "/services/express-entry"
              },
              {
                title: "Study Permits",
                description: "Student visa applications for international education in Canada",
                href: "/services/study-permits"
              },
              {
                title: "Work Permits",
                description: "Temporary work authorization for skilled professionals",
                href: "/services/work-permits"
              },
              {
                title: "Family Sponsorship",
                description: "Reunite with your loved ones through family immigration programs",
                href: "/services/family-sponsorship"
              },
              {
                title: "Business Immigration",
                description: "Investor and entrepreneur programs for business expansion",
                href: "/services/business-immigration"
              },
              {
                title: "Provincial Nominee Program",
                description: "Province-specific immigration pathways across Canada",
                href: "/services/pnp"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <a href={service.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VrikshImmigration?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with CICC-licensed professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CICC Licensed Experts",
                description: "Our consultants are licensed by the College of Immigration and Citizenship Consultants"
              },
              {
                title: "Personalized Approach",
                description: "Tailored immigration strategies based on your unique circumstances and goals"
              },
              {
                title: "End-to-End Support",
                description: "Complete assistance from initial assessment to final approval and settlement"
              },
              {
                title: "Transparent Process",
                description: "Clear communication and regular updates throughout your immigration journey"
              },
              {
                title: "Proven Track Record",
                description: "Years of experience with high success rates across all immigration programs"
              },
              {
                title: "Multilingual Service",
                description: "Support in multiple languages to ensure clear communication"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Canadian Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a consultation with our CICC-licensed experts and take the first step towards your Canadian dream.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default Index;
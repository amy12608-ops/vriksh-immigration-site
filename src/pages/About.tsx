import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Shield, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VrikshImmigration</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partners in Canadian immigration, guided by expertise, integrity, and a commitment to your success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                VrikshImmigration was founded with a simple yet powerful mission: to help individuals and families achieve their Canadian immigration dreams through professional, ethical, and personalized service. Like the tree in our logo, we believe in growth, strong roots, and reaching new heights.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our team of CICC-licensed consultants brings years of experience and deep understanding of Canadian immigration law. We have successfully guided hundreds of clients from over 50 countries through their immigration journey, maintaining one of the highest success rates in the industry.
              </p>
              <p className="text-lg leading-relaxed">
                At VrikshImmigration, we understand that immigration is not just about paperwork—it's about dreams, aspirations, and building a better future. That's why we provide comprehensive support that goes beyond just application submission, offering guidance on settlement, integration, and making Canada your new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that ensure your success and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description: "To provide exceptional immigration services that transform dreams into reality, ensuring every client receives personalized attention and expert guidance."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We operate with complete transparency, honesty, and ethical practices in all our client interactions and application processes."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in service delivery, staying updated with the latest immigration policies and procedures."
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Your success is our success. We tailor our services to meet your unique needs and circumstances, providing support every step of the way."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CICC Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">CICC Licensed Professionals</h2>
            <div className="bg-accent rounded-lg p-8">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Licensed by the College of Immigration and Citizenship Consultants</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our consultants are licensed and regulated by the College of Immigration and Citizenship Consultants (CICC), 
                ensuring that you receive services from qualified professionals who adhere to the highest standards of practice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Professional Standards</h4>
                  <p className="text-muted-foreground">Adherence to strict professional and ethical guidelines</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Continuous Education</h4>
                  <p className="text-muted-foreground">Regular training on latest immigration policies and procedures</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Client Protection</h4>
                  <p className="text-muted-foreground">Professional liability insurance and complaint resolution process</p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://iccrc-crcic.ca/find-a-professional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium underline"
                >
                  Verify Our CICC Membership →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive knowledge across all Canadian immigration programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Express Entry & Federal Skilled Worker",
              "Provincial Nominee Programs (All Provinces)",
              "Study Permits & Student Visas",
              "Work Permits & LMIA Applications",
              "Family Sponsorship Programs",
              "Business & Investor Immigration",
              "Temporary Resident Visas",
              "Permanent Residency Applications",
              "Citizenship Applications",
              "Refugee & Asylum Claims",
              "PR Card Renewal & Travel Documents",
              "Immigration Appeals & Reviews"
            ].map((expertise, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the VrikshImmigration Difference</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our CICC-licensed experts guide you through your Canadian immigration journey with personalized service and proven results.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default About;
import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Briefcase, CheckCircle, Clock, FileText, Users, Award } from "lucide-react";

const WorkPermits = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Work Permits</h1>
              <p className="text-xl text-white/90">Build your career in Canada</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Professional guidance for temporary work authorization in Canada. Navigate LMIA requirements, employer-specific permits, and open work permits with expert support.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Work in Canada</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Canada offers excellent opportunities for skilled workers from around the world. A work permit allows you to work temporarily in Canada and can often serve as a pathway to permanent residency through various immigration programs.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team helps you navigate the complex work permit application process, ensuring compliance with all requirements and maximizing your chances of approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Work Permits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Work Permits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the different work permit categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Employer-Specific Work Permit</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Tied to a specific employer</p>
                  <p>• Usually requires an LMIA</p>
                  <p>• Most common type of work permit</p>
                  <p>• Can lead to permanent residency</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Open Work Permit</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Work for any employer in Canada</p>
                  <p>• No LMIA required</p>
                  <p>• Available in specific situations</p>
                  <p>• Greater employment flexibility</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">LMIA-Exempt Work Permits</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Under international agreements</p>
                  <p>• Intra-company transfers</p>
                  <p>• Significant benefit to Canada</p>
                  <p>• Faster processing times</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Post-Graduation Work Permit</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• For international graduates</p>
                  <p>• No job offer required</p>
                  <p>• Length based on study duration</p>
                  <p>• Pathway to permanent residency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">General Eligibility Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key requirements for work permit applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Job Offer",
                description: "Valid job offer from a Canadian employer (for employer-specific permits)"
              },
              {
                icon: Award,
                title: "Qualifications",
                description: "Education and work experience matching the job requirements"
              },
              {
                icon: Users,
                title: "LMIA",
                description: "Labour Market Impact Assessment (if required) approved by ESDC"
              },
              {
                title: "Language Proficiency",
                description: "Sufficient language skills to perform the job effectively"
              },
              {
                title: "Financial Support",
                description: "Ability to support yourself and family members in Canada"
              },
              {
                title: "Admissibility",
                description: "Meet health and security requirements for entry to Canada"
              }
            ].map((requirement, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  {requirement.icon && <requirement.icon className="h-12 w-12 text-secondary mx-auto mb-4" />}
                  <h3 className="text-lg font-semibold mb-3">{requirement.title}</h3>
                  <p className="text-muted-foreground">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your work permit application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "LMIA Guidance",
                description: "Assist employers with Labour Market Impact Assessment applications and requirements."
              },
              {
                title: "Work Permit Applications",
                description: "Complete preparation and submission of work permit applications with all required documentation."
              },
              {
                title: "Employer Support",
                description: "Guidance for Canadian employers on hiring foreign workers and compliance requirements."
              },
              {
                title: "Document Preparation",
                description: "Assistance with educational credential assessments, translations, and certification requirements."
              },
              {
                title: "Extension Applications",
                description: "Help with work permit extensions and status maintenance while in Canada."
              },
              {
                title: "Permanent Residency Pathway",
                description: "Strategic planning for transitioning from temporary work permit to permanent residency."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Processing Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
                  <p className="text-muted-foreground">2-8 weeks (varies by country and permit type)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">LMIA Processing</h3>
                  <p className="text-muted-foreground">6-8 weeks for most positions</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">92% approval rate with our guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Canadian Work Journey</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to work in Canada? Let our experts guide you through the work permit process.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default WorkPermits;
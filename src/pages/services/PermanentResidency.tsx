import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Home, CheckCircle, Clock, FileText, Users, Award } from "lucide-react";

const PermanentResidency = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Home className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Permanent Residency</h1>
              <p className="text-xl text-white/90">Make Canada your permanent home</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Comprehensive permanent residency services across all immigration programs. From Express Entry to family sponsorship, we guide you through every step to achieve your Canadian PR status.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Canadian Permanent Residency</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Canadian permanent residency grants you the right to live, work, and study anywhere in Canada indefinitely. As a permanent resident, you enjoy most of the same rights as Canadian citizens, including access to healthcare and social services, with the opportunity to apply for citizenship after meeting residency requirements.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team provides comprehensive support across all permanent residency programs, ensuring your application is properly prepared and submitted with the highest chance of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PR Programs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Permanent Residency Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple pathways to Canadian permanent residency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Express Entry System</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Federal Skilled Worker Program</p>
                  <p>• Canadian Experience Class</p>
                  <p>• Federal Skilled Trades Program</p>
                  <p>• 6-month processing time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Provincial Nominee Program</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Province-specific programs</p>
                  <p>• Enhanced Express Entry streams</p>
                  <p>• Direct application streams</p>
                  <p>• Various eligibility criteria</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Family Class Sponsorship</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Spouse/partner sponsorship</p>
                  <p>• Dependent children</p>
                  <p>• Parent and Grandparent Program</p>
                  <p>• Other eligible relatives</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Business Immigration</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Start-up Visa Program</p>
                  <p>• Self-employed Persons Program</p>
                  <p>• Investor programs (provincial)</p>
                  <p>• Quebec business programs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Caregiver Programs</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Home Child Care Provider Pilot</p>
                  <p>• Home Support Worker Pilot</p>
                  <p>• Live-in Caregiver Program (closed)</p>
                  <p>• Pathway to permanent residency</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Protected Persons</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Government-assisted refugees</p>
                  <p>• Privately sponsored refugees</p>
                  <p>• Protected persons in Canada</p>
                  <p>• Special humanitarian programs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PR Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Canadian Permanent Residency</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rights and benefits of being a Canadian permanent resident
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Live Anywhere in Canada",
                description: "Freedom to live, work, and study in any province or territory across Canada"
              },
              {
                title: "Universal Healthcare",
                description: "Access to Canada's universal healthcare system and provincial health insurance"
              },
              {
                title: "Social Benefits",
                description: "Eligibility for various social benefits including employment insurance and pension plans"
              },
              {
                title: "Education Rights",
                description: "Access to public education and domestic tuition rates at Canadian universities"
              },
              {
                title: "Legal Protection",
                description: "Protection under Canadian law and the Canadian Charter of Rights and Freedoms"
              },
              {
                title: "Path to Citizenship",
                description: "Ability to apply for Canadian citizenship after meeting residency requirements"
              },
              {
                title: "Family Sponsorship",
                description: "Right to sponsor eligible family members for Canadian permanent residency"
              },
              {
                title: "Travel Freedom",
                description: "Ability to travel in and out of Canada freely with valid PR card"
              },
              {
                title: "Work Rights",
                description: "No restrictions on employment - work for any employer anywhere in Canada"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our PR Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Permanent Residency Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end support for your permanent residency journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Comprehensive Eligibility Assessment",
                description: "Detailed evaluation of your qualifications across all permanent residency programs to identify the best pathway."
              },
              {
                title: "Program Strategy Development",
                description: "Customized immigration strategy based on your unique circumstances, timeline, and goals."
              },
              {
                title: "Document Preparation & Review",
                description: "Assistance with gathering, preparing, and reviewing all required documents to ensure completeness and accuracy."
              },
              {
                title: "Application Completion",
                description: "Professional completion of all application forms with attention to detail and accuracy."
              },
              {
                title: "Language Test Guidance",
                description: "Strategic advice on language testing (IELTS, CELPIP, TEF) to maximize your scores."
              },
              {
                title: "Educational Credential Assessment",
                description: "Guidance on obtaining Educational Credential Assessment (ECA) from designated organizations."
              },
              {
                title: "Medical Examination Coordination",
                description: "Assistance with scheduling and completing required medical examinations with panel physicians."
              },
              {
                title: "Police Clearance Assistance",
                description: "Guidance on obtaining police clearance certificates from all countries where you've lived."
              },
              {
                title: "Application Tracking & Updates",
                description: "Regular monitoring of your application status and communication with immigration authorities."
              },
              {
                title: "Interview Preparation",
                description: "Preparation for any required interviews including common questions and appropriate responses."
              },
              {
                title: "Landing & Settlement Support",
                description: "Guidance on completing the landing process and initial settlement in Canada."
              },
              {
                title: "PR Card Application",
                description: "Assistance with your first PR card application after becoming a permanent resident."
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

      {/* Success Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Permanent Residency Success</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Average Processing</h3>
                  <p className="text-muted-foreground">6-18 months (varies by program)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">96% approval rate with our guidance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Clients Served</h3>
                  <p className="text-muted-foreground">400+ successful PR applications</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Home className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Programs Covered</h3>
                  <p className="text-muted-foreground">All federal and provincial programs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Permanent Residency Journey</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to make Canada your permanent home? Let our experts guide you through the best permanent residency pathway for your situation.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default PermanentResidency;
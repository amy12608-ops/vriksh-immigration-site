import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Heart, CheckCircle, Clock, FileText, Users, Home } from "lucide-react";

const FamilySponsorship = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Family Sponsorship</h1>
              <p className="text-xl text-white/90">Reunite with your loved ones in Canada</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Expert guidance for sponsoring your spouse, children, parents, and grandparents. Navigate the complex family reunification process with professional support and maximize your chances of success.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Family Reunification in Canada</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Canada values family unity and offers several programs for Canadian citizens and permanent residents to sponsor their family members for immigration. Family sponsorship allows eligible relatives to become permanent residents and eventually Canadian citizens.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team provides comprehensive support throughout the sponsorship process, ensuring all requirements are met and applications are properly prepared to avoid delays and refusals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Be Sponsored */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who Can You Sponsor?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Eligible family members for sponsorship programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Spouse/Partner</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Legally married spouse</p>
                  <p>• Common-law partner</p>
                  <p>• Conjugal partner</p>
                  <p>• No age restriction</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Dependent Children</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Children under 22 years old</p>
                  <p>• Children 22+ with disability</p>
                  <p>• Biological or adopted children</p>
                  <p>• Must be unmarried</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Parents & Grandparents</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Parents and grandparents</p>
                  <p>• Subject to annual caps</p>
                  <p>• Income requirements apply</p>
                  <p>• Lottery selection system</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Other Eligible Relatives</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Orphaned relatives under 18</p>
                  <p>• Relatives if no other family</p>
                  <p>• Must meet specific criteria</p>
                  <p>• Limited circumstances</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Super Visa</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Parents and grandparents</p>
                  <p>• Multi-entry visa for 10 years</p>
                  <p>• Stay up to 2 years per visit</p>
                  <p>• Alternative to sponsorship</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Special Programs</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Protected persons family</p>
                  <p>• One-year window of protection</p>
                  <p>• Urgent protection cases</p>
                  <p>• Special circumstances</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sponsor Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What you need to qualify as a sponsor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Citizenship or Residency Status",
                description: "Must be a Canadian citizen or permanent resident living in Canada (citizens can sponsor from abroad)."
              },
              {
                title: "Age Requirement",
                description: "Must be at least 18 years old to sponsor a family member for immigration to Canada."
              },
              {
                title: "Financial Requirements",
                description: "Meet minimum income requirements and provide financial support for the sponsored person."
              },
              {
                title: "Undertaking Agreement",
                description: "Sign an undertaking to provide basic needs and support for the period specified by law."
              },
              {
                title: "No Criminal Record",
                description: "Must not have been convicted of certain criminal offenses or immigration violations."
              },
              {
                title: "Not in Default",
                description: "Must not be in default of previous sponsorship undertakings or immigration loans."
              }
            ].map((requirement, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{requirement.title}</h3>
                      <p className="text-muted-foreground">{requirement.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">How We Help Reunite Families</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your family sponsorship application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Eligibility Assessment",
                description: "Thorough evaluation of sponsor and applicant eligibility for various family class programs."
              },
              {
                title: "Program Selection",
                description: "Guidance on choosing the most appropriate sponsorship program based on your specific circumstances."
              },
              {
                title: "Document Preparation",
                description: "Assistance with gathering and organizing all required documents including relationship proof."
              },
              {
                title: "Application Completion",
                description: "Professional completion of sponsorship and permanent residence application forms."
              },
              {
                title: "Relationship Evidence",
                description: "Strategic guidance on documenting genuine relationships to avoid refusals for fraud concerns."
              },
              {
                title: "Financial Documentation",
                description: "Help with preparing income proof and meeting minimum necessary income requirements."
              },
              {
                title: "Interview Preparation",
                description: "Preparation for interviews and guidance on potential questions for both sponsor and applicant."
              },
              {
                title: "Appeal Assistance",
                description: "Support with appeals to the Immigration Appeal Division if your application is refused."
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
                  <p className="text-muted-foreground">8-24 months (varies by relationship and country)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                  <p className="text-muted-foreground">25-35 documents typically required</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">93% approval rate with our guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Reunite Your Family in Canada</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to bring your loved ones to Canada? Let our experts guide you through the family sponsorship process.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default FamilySponsorship;
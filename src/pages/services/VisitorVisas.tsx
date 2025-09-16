import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Plane, CheckCircle, Clock, FileText, Users, MapPin } from "lucide-react";

const VisitorVisas = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Plane className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Visitor Visas</h1>
              <p className="text-xl text-white/90">Explore Canada with confidence</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Expert assistance for temporary resident visas to visit Canada for tourism, business, or family visits. Ensure smooth approval with proper documentation and professional guidance.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Canada</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A visitor visa (Temporary Resident Visa - TRV) is required for most foreign nationals to visit Canada for tourism, business meetings, family visits, or other temporary purposes. The visa demonstrates that you meet the requirements for admission to Canada.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team ensures your visitor visa application is properly prepared and documented, maximizing your chances of approval and avoiding common pitfalls that lead to refusals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Visitor Visas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Visitor Visas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Different visa types for different purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Tourist Visa</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Sightseeing and tourism</p>
                  <p>• Visiting friends and family</p>
                  <p>• Cultural events and festivals</p>
                  <p>• Short recreational stays</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Business Visitor Visa</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Business meetings and conferences</p>
                  <p>• Trade shows and exhibitions</p>
                  <p>• Contract negotiations</p>
                  <p>• Professional consultations</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Transit Visa</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Connecting through Canadian airports</p>
                  <p>• Short transit stops</p>
                  <p>• Required for certain countries</p>
                  <p>• Limited duration stays</p>
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
            <h2 className="text-3xl font-bold mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key requirements for visitor visa approval
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Valid Passport",
                description: "Passport valid for at least 6 months beyond your planned stay in Canada"
              },
              {
                title: "Financial Support",
                description: "Proof of sufficient funds to support your stay and return journey"
              },
              {
                title: "Ties to Home Country",
                description: "Strong ties to your home country showing your intent to return"
              },
              {
                title: "Purpose of Visit",
                description: "Clear documentation of the purpose and duration of your visit"
              },
              {
                title: "Health Requirements",
                description: "Medical examination may be required depending on your country and length of stay"
              },
              {
                title: "Criminal Background",
                description: "No criminal history or security concerns that would make you inadmissible"
              }
            ].map((requirement, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">{requirement.title}</h3>
                  <p className="text-muted-foreground">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Refusal Reasons */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Prevent Refusals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing common reasons for visitor visa refusals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Insufficient Financial Resources",
                description: "We help you properly document your financial capacity and provide guidance on acceptable proof of funds."
              },
              {
                title: "Weak Ties to Home Country",
                description: "Strategic advice on demonstrating strong ties through employment, property, family, and other commitments."
              },
              {
                title: "Unclear Purpose of Visit",
                description: "Assistance in preparing a detailed itinerary and purpose statement that clearly explains your visit."
              },
              {
                title: "Previous Immigration Violations",
                description: "Guidance on addressing past immigration issues and presenting a strong case for approval."
              },
              {
                title: "Incomplete Documentation",
                description: "Comprehensive checklist and review to ensure all required documents are properly prepared and submitted."
              },
              {
                title: "Medical Inadmissibility",
                description: "Guidance on health requirements and medical examination process when required."
              }
            ].map((reason, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Visitor Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your visitor visa application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Eligibility Assessment",
                description: "Thorough evaluation of your eligibility and identification of potential issues before application."
              },
              {
                title: "Documentation Guidance",
                description: "Complete assistance with gathering, preparing, and organizing all required supporting documents."
              },
              {
                title: "Application Preparation",
                description: "Professional completion of visitor visa application forms with attention to detail and accuracy."
              },
              {
                title: "Interview Preparation",
                description: "Coaching for visa interviews including common questions and appropriate responses."
              },
              {
                title: "Refusal Appeals",
                description: "Assistance with addressing previous refusals and preparing stronger reapplications."
              },
              {
                title: "Extension Applications",
                description: "Support for extending your stay in Canada if your circumstances change while visiting."
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
      <section className="py-16 bg-muted/50">
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
                  <p className="text-muted-foreground">2-4 weeks (varies by country)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Validity Period</h3>
                  <p className="text-muted-foreground">Up to 10 years or passport expiry</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">88% approval rate with our guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit to Canada</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to visit Canada? Let our experts ensure your visitor visa application is approved the first time.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default VisitorVisas;
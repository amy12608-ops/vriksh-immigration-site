import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { MapPin, CheckCircle, Clock, FileText, Users, Award } from "lucide-react";

const PNP = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Provincial Nominee Program</h1>
              <p className="text-xl text-white/90">Choose your ideal Canadian province</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Expert guidance for Provincial Nominee Programs across Canada. Discover opportunities in your preferred province and gain 600 additional Express Entry points for guaranteed invitation.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Provincial Nominee Program (PNP)</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                The Provincial Nominee Program allows Canadian provinces and territories to nominate immigrants who want to settle in a particular province. Each province has its own immigration programs targeting specific skills, experience, and qualifications needed in their local economy.
              </p>
              <p className="text-lg leading-relaxed">
                A provincial nomination provides 600 additional points in the Express Entry system, virtually guaranteeing an Invitation to Apply (ITA) for permanent residency. Our experts help you identify the best provincial program match for your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Programs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Provincial and Territorial Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Immigration opportunities across Canada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { province: "Alberta", program: "Alberta Immigrant Nominee Program (AINP)" },
              { province: "British Columbia", program: "BC Provincial Nominee Program (BC PNP)" },
              { province: "Manitoba", program: "Manitoba Provincial Nominee Program (MPNP)" },
              { province: "New Brunswick", program: "New Brunswick Provincial Nominee Program (NBPNP)" },
              { province: "Newfoundland and Labrador", program: "Newfoundland and Labrador Provincial Nominee Program (NLPNP)" },
              { province: "Northwest Territories", program: "Northwest Territories Nominee Program (NTNP)" },
              { province: "Nova Scotia", program: "Nova Scotia Nominee Program (NSNP)" },
              { province: "Ontario", program: "Ontario Immigrant Nominee Program (OINP)" },
              { province: "Prince Edward Island", program: "Prince Edward Island Provincial Nominee Program (PEI PNP)" },
              { province: "Saskatchewan", program: "Saskatchewan Immigrant Nominee Program (SINP)" },
              { province: "Yukon", program: "Yukon Nominee Program (YNP)" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.province}</h3>
                  <p className="text-sm text-muted-foreground">{item.program}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular PNP Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular PNP Streams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common pathways available across provinces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Skilled Worker</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For skilled professionals</p>
                  <p>• Work experience required</p>
                  <p>• Language proficiency needed</p>
                  <p>• Most common stream</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Express Entry</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Enhanced nomination</p>
                  <p>• 600 additional CRS points</p>
                  <p>• Guaranteed ITA</p>
                  <p>• Faster processing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">International Graduate</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For recent graduates</p>
                  <p>• Provincial education required</p>
                  <p>• Job offer may be needed</p>
                  <p>• Smooth transition to PR</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Entrepreneur/Business</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For business investors</p>
                  <p>• Investment requirements</p>
                  <p>• Business plan needed</p>
                  <p>• Job creation expected</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">In-Demand Occupation</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Specific occupations</p>
                  <p>• Provincial labour needs</p>
                  <p>• May not require job offer</p>
                  <p>• Regularly updated lists</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">French-Speaking</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For French speakers</p>
                  <p>• Language advantage</p>
                  <p>• Francophone communities</p>
                  <p>• Special streams available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages of PNP */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advantages of Provincial Nomination</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why PNP is an excellent immigration pathway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "600 Express Entry Points",
                description: "Provincial nomination adds 600 points to your CRS score, virtually guaranteeing an ITA."
              },
              {
                title: "Lower Competition",
                description: "Provincial draws often have lower cut-off scores compared to federal Express Entry draws."
              },
              {
                title: "Targeted Selection",
                description: "Provinces target specific skills and occupations needed in their local economy."
              },
              {
                title: "Settlement Support",
                description: "Provinces often provide settlement services and support for nominees."
              },
              {
                title: "Multiple Opportunities",
                description: "You can be eligible for multiple provincial programs simultaneously."
              },
              {
                title: "Direct Application Route",
                description: "Some streams allow direct application without Express Entry profile."
              }
            ].map((advantage, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">How We Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic guidance for your provincial nomination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Province Matching",
                description: "Identify the best provincial programs that match your qualifications, experience, and preferences."
              },
              {
                title: "Eligibility Assessment",
                description: "Comprehensive evaluation of your eligibility for various provincial nomination streams."
              },
              {
                title: "Application Strategy",
                description: "Develop a strategic approach to maximize your chances of provincial nomination."
              },
              {
                title: "Document Preparation",
                description: "Assistance with preparing all required documents specific to provincial requirements."
              },
              {
                title: "Expression of Interest",
                description: "Help with submitting Expression of Interest (EOI) applications to provincial programs."
              },
              {
                title: "Post-Nomination Support",
                description: "Guidance on next steps after receiving provincial nomination, including Express Entry."
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
                  <p className="text-muted-foreground">2-6 months (varies by province)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">CRS Boost</h3>
                  <p className="text-muted-foreground">600 additional Express Entry points</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">94% nomination success with our guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Ideal Canadian Province</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to explore provincial nomination opportunities? Let our experts find the perfect program for your profile.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default PNP;
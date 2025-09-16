import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { FileText, CheckCircle, Clock, Users, Award, Briefcase } from "lucide-react";

const LMIA = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">LMIA Applications</h1>
              <p className="text-xl text-white/90">Labour Market Impact Assessment</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Expert assistance for Canadian employers seeking to hire foreign workers. Navigate the Labour Market Impact Assessment process with professional guidance and ensure compliance with all requirements.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is LMIA?</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Labour Market Impact Assessment (LMIA) is a document that a Canadian employer must obtain before hiring a foreign worker. It demonstrates that hiring a foreign worker will have a positive or neutral impact on the Canadian labour market and that no Canadian worker is available to do the job.
              </p>
              <p className="text-lg leading-relaxed">
                Our experienced team assists both employers and foreign workers through the complex LMIA application process, ensuring all requirements are met and maximizing the chances of approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of LMIA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of LMIA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Different LMIA categories for various employment situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">High-Wage Stream</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Wages at or above provincial median</p>
                  <p>• Skilled positions (NOC 0, 1, 2, 3)</p>
                  <p>• Transition plan required</p>
                  <p>• Express Entry pathway</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Low-Wage Stream</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Wages below provincial median</p>
                  <p>• Various skill levels</p>
                  <p>• Caps on low-wage workers</p>
                  <p>• Additional requirements</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Global Talent Stream</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• High-skilled in-demand occupations</p>
                  <p>• Faster processing (10 business days)</p>
                  <p>• Category A and B occupations</p>
                  <p>• Referral partners available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Seasonal Agricultural</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Seasonal agricultural workers</p>
                  <p>• Specific to agriculture industry</p>
                  <p>• Seasonal work programs</p>
                  <p>• Special requirements</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Caregiver Program</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Home child care providers</p>
                  <p>• Home support workers</p>
                  <p>• Pathway to permanent residence</p>
                  <p>• Special eligibility criteria</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">PR-Supporting LMIA</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Supports permanent residence application</p>
                  <p>• 50-200 Express Entry points</p>
                  <p>• Higher wages required</p>
                  <p>• Additional requirements</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LMIA Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">LMIA Requirements for Employers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key requirements employers must meet for LMIA approval
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Job Advertisement Requirements",
                description: "Advertise the position for at least 4 weeks on Job Bank and 2 additional sources to demonstrate recruitment efforts."
              },
              {
                title: "Recruitment Report",
                description: "Provide detailed report of recruitment efforts, including number of applications received and reasons for not hiring Canadians."
              },
              {
                title: "Wages and Working Conditions",
                description: "Offer wages and working conditions that meet or exceed prevailing rates for the occupation and location."
              },
              {
                title: "Business Legitimacy",
                description: "Demonstrate that the business is legitimate and actively operating in Canada with proper registration and licenses."
              },
              {
                title: "Labour Market Benefits",
                description: "Show how hiring the foreign worker will create positive benefits for the Canadian labour market."
              },
              {
                title: "Compliance History",
                description: "Maintain good compliance with previous LMIA conditions and employment standards if applicable."
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
            <h2 className="text-3xl font-bold mb-4">Our LMIA Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for employers and foreign workers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "LMIA Eligibility Assessment",
                description: "Evaluate employer and position eligibility for LMIA and determine the most appropriate stream."
              },
              {
                title: "Recruitment Strategy",
                description: "Develop comprehensive recruitment strategy to meet advertising requirements and document efforts."
              },
              {
                title: "Application Preparation",
                description: "Complete LMIA application forms and prepare all required supporting documentation."
              },
              {
                title: "Job Advertisement Compliance",
                description: "Ensure job advertisements meet all requirements for content, duration, and placement."
              },
              {
                title: "Wage Assessment",
                description: "Determine prevailing wages and ensure offer meets or exceeds minimum requirements."
              },
              {
                title: "Business Documentation",
                description: "Assist with preparing business legitimacy documents and financial information."
              },
              {
                title: "Response to Requests",
                description: "Handle any additional information requests from Employment and Social Development Canada."
              },
              {
                title: "Work Permit Support",
                description: "Assist foreign workers with work permit applications after LMIA approval."
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
              <h2 className="text-3xl font-bold mb-4">LMIA Processing Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Standard Processing</h3>
                  <p className="text-muted-foreground">2-3 months average</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Global Talent Stream</h3>
                  <p className="text-muted-foreground">10 business days</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">89% approval with our guidance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Validity</h3>
                  <p className="text-muted-foreground">6 months from approval</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need LMIA Support?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to hire foreign workers or need LMIA for your work permit? Let our experts guide you through the process.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default LMIA;
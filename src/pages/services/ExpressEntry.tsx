import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { FastForward, CheckCircle, Clock, Trophy, Users, Target } from "lucide-react";

const ExpressEntry = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <FastForward className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Express Entry</h1>
              <p className="text-xl text-white/90">Fast-track to Canadian permanent residency</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Canada's premier immigration system for skilled workers. Maximize your Comprehensive Ranking System (CRS) score and secure your invitation to apply for permanent residency.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Express Entry?</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Express Entry is Canada's fastest and most popular immigration pathway for skilled workers. It manages applications for three federal economic immigration programs: Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program.
              </p>
              <p className="text-lg leading-relaxed">
                The system uses a points-based Comprehensive Ranking System (CRS) to rank candidates. The highest-scoring candidates receive Invitations to Apply (ITA) for permanent residency during regular draws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Express Entry Programs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Express Entry Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three federal programs managed through Express Entry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Federal Skilled Worker</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For skilled workers with foreign work experience</p>
                  <p>• Minimum 1 year work experience</p>
                  <p>• Language and education requirements</p>
                  <p>• No job offer required</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Canadian Experience Class</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For temporary workers and graduates</p>
                  <p>• Canadian work experience required</p>
                  <p>• Minimum 1 year work experience in Canada</p>
                  <p>• No job offer required</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Federal Skilled Trades</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• For skilled tradespersons</p>
                  <p>• 2 years work experience in skilled trades</p>
                  <p>• Job offer or certificate of qualification</p>
                  <p>• Language requirements apply</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CRS Factors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">CRS Ranking Factors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding how your CRS score is calculated
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Core Human Capital Factors (500 points)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Age</span>
                      <span className="text-secondary font-medium">Up to 110 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Education</span>
                      <span className="text-secondary font-medium">Up to 150 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language Ability</span>
                      <span className="text-secondary font-medium">Up to 160 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Work Experience</span>
                      <span className="text-secondary font-medium">Up to 80 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Additional Factors (600 points)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Job Offer</span>
                      <span className="text-secondary font-medium">50-200 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Provincial Nomination</span>
                      <span className="text-secondary font-medium">600 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Canadian Education</span>
                      <span className="text-secondary font-medium">15-30 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French Language</span>
                      <span className="text-secondary font-medium">15-50 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Maximize Your Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic guidance to optimize your Express Entry profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "CRS Score Optimization",
                description: "Detailed analysis of your profile and strategic recommendations to maximize your CRS score."
              },
              {
                title: "Program Eligibility Assessment",
                description: "Determine which Express Entry program best suits your qualifications and experience."
              },
              {
                title: "Educational Credential Assessment",
                description: "Guidance on obtaining Educational Credential Assessment (ECA) from designated organizations."
              },
              {
                title: "Language Test Preparation",
                description: "Strategic advice on IELTS, CELPIP, or TEF preparation to achieve maximum language points."
              },
              {
                title: "Provincial Nomination Support",
                description: "Identify Provincial Nominee Program opportunities to gain additional 600 CRS points."
              },
              {
                title: "Post-ITA Application",
                description: "Complete assistance with permanent residency application after receiving your ITA."
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
              <h2 className="text-3xl font-bold mb-4">Express Entry Success</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">6 Months</h3>
                  <p className="text-muted-foreground">Average processing time</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Trophy className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">98%</h3>
                  <p className="text-muted-foreground">Success rate with ITA</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">200+</h3>
                  <p className="text-muted-foreground">Express Entry approvals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">450+</h3>
                  <p className="text-muted-foreground">Average CRS improvement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Express Entry Success?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experts optimize your Express Entry profile and guide you to permanent residency in Canada.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default ExpressEntry;
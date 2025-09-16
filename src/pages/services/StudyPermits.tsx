import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { GraduationCap, CheckCircle, Clock, FileText, Users, Award } from "lucide-react";

const StudyPermits = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Study Permits</h1>
              <p className="text-xl text-white/90">Your gateway to world-class Canadian education</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Expert guidance for international students seeking to study in Canada. From university selection to permit approval, we make your educational dreams a reality.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Study in Canada</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Canada offers world-renowned educational institutions, diverse programs, and excellent post-graduation opportunities. A Canadian study permit allows international students to pursue their academic goals while experiencing one of the world's most welcoming countries.
              </p>
              <p className="text-lg leading-relaxed">
                Our CICC-licensed consultants provide comprehensive support throughout your study permit application process, ensuring you meet all requirements and maximize your chances of approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key requirements for Canadian study permit applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Letter of Acceptance",
                description: "Acceptance letter from a designated learning institution (DLI) in Canada"
              },
              {
                icon: Award,
                title: "Academic Qualifications",
                description: "Meet the academic requirements of your chosen program and institution"
              },
              {
                icon: Users,
                title: "Financial Support",
                description: "Proof of sufficient funds to cover tuition, living expenses, and return transportation"
              },
              {
                title: "Language Proficiency",
                description: "Demonstrate proficiency in English or French through approved language tests"
              },
              {
                title: "Medical Examination",
                description: "May be required depending on your country of residence and program duration"
              },
              {
                title: "No Criminal Record",
                description: "Police clearance certificate may be required from countries where you've lived"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your study permit application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "School Selection Guidance",
                description: "Help you choose the right institution and program based on your academic goals and career aspirations."
              },
              {
                title: "Application Preparation",
                description: "Complete assistance with study permit application forms, documentation, and submission."
              },
              {
                title: "Financial Planning",
                description: "Guidance on demonstrating financial capacity and exploring scholarship opportunities."
              },
              {
                title: "Statement of Purpose",
                description: "Professional assistance in crafting a compelling statement of purpose and study plan."
              },
              {
                title: "Interview Preparation",
                description: "Preparation for visa interviews and guidance on common questions and expected responses."
              },
              {
                title: "Pre-Arrival Support",
                description: "Information on accommodation, health insurance, and what to expect upon arrival in Canada."
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
                  <p className="text-muted-foreground">4-8 weeks (varies by country)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                  <p className="text-muted-foreground">15-20 documents typically required</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                  <p className="text-muted-foreground">95% approval rate with our guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Canadian Education Journey</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to pursue your education in Canada? Let our experts guide you through the study permit process.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default StudyPermits;
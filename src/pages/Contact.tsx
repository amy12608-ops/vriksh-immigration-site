import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact VrikshImmigration</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your Canadian immigration journey? Get in touch with our CICC-licensed consultants today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:amy12608@gmail.com" 
                          className="text-primary hover:text-primary/80 transition-smooth"
                        >
                          amy12608@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">Available during consultation hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: By appointment only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Service Area</h3>
                        <p className="text-muted-foreground">Serving clients worldwide with remote consultations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Consultation Booking */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Book Your Consultation</h2>
              
              <Card className="mb-6">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Free Initial Consultation</h3>
                    <p className="text-muted-foreground">
                      Schedule a complimentary 30-minute consultation to discuss your immigration goals and eligibility.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Comprehensive eligibility assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Personalized immigration strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">No obligation consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Available via video call or phone</span>
                    </div>
                  </div>
                  
                  <BookConsultationButton className="w-full text-lg py-3" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                    <h3 className="font-semibold">Quick Questions?</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For quick questions or to request more information about our services, send us an email and we'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:amy12608@gmail.com?subject=Immigration Inquiry"
                    className="text-primary hover:text-primary/80 font-medium transition-smooth"
                  >
                    Send Email →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our immigration services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How much do your services cost?",
                  answer: "Our fees vary depending on the complexity of your case and the immigration program. We provide transparent pricing during your initial consultation with no hidden costs."
                },
                {
                  question: "How long does the immigration process take?",
                  answer: "Processing times vary by program and individual circumstances. Express Entry can take 6-8 months, while other programs may take longer. We provide realistic timelines during consultation."
                },
                {
                  question: "Do you guarantee approval?",
                  answer: "While we cannot guarantee approval (no legitimate consultant can), we have a 95% success rate due to our thorough preparation and expertise in immigration law."
                },
                {
                  question: "Can you help if my application was previously refused?",
                  answer: "Yes, we often help clients who have had previous refusals. We review the reasons for refusal and develop strategies to address any issues in a new application."
                },
                {
                  question: "Do you provide services in other languages?",
                  answer: "Yes, we provide services in multiple languages to ensure clear communication throughout your immigration journey. Please inquire about language support during consultation."
                },
                {
                  question: "What documents will I need?",
                  answer: "Required documents vary by program and individual circumstances. We provide a comprehensive checklist and guide you through gathering all necessary documentation."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Canadian Immigration Journey Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait to pursue your Canadian dreams. Contact our CICC-licensed consultants and take the first step towards your new life in Canada.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
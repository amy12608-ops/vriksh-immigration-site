import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      program: "Express Entry",
      country: "China",
      rating: 5,
      text: "VrikshImmigration made my Express Entry process seamless. Their expert guidance helped me improve my CRS score and I received my ITA within 6 months. Highly recommended!",
      year: "2024"
    },
    {
      name: "Rajesh Patel",
      program: "Work Permit",
      country: "India", 
      rating: 5,
      text: "The team at VrikshImmigration handled my LMIA and work permit application with such professionalism. They kept me informed throughout the process and achieved approval faster than expected.",
      year: "2024"
    },
    {
      name: "Maria Rodriguez",
      program: "Family Sponsorship",
      country: "Mexico",
      rating: 5,
      text: "After a previous failed attempt with another consultant, VrikshImmigration successfully helped me sponsor my husband. Their attention to detail and expertise made all the difference.",
      year: "2023"
    },
    {
      name: "Ahmed Hassan",
      program: "Study Permit",
      country: "Egypt",
      rating: 5,
      text: "From university selection to study permit approval, VrikshImmigration guided me every step. Now I'm studying at my dream university in Toronto. Thank you for making it possible!",
      year: "2024"
    },
    {
      name: "Jennifer Thompson",
      program: "Provincial Nominee Program",
      country: "United Kingdom",
      rating: 5,
      text: "The PNP process seemed overwhelming until I contacted VrikshImmigration. They matched me with the perfect province and program. I'm now a permanent resident of British Columbia!",
      year: "2023"
    },
    {
      name: "Luis Gonzalez",
      program: "Business Immigration",
      country: "Colombia",
      rating: 5,
      text: "VrikshImmigration's expertise in business immigration was invaluable. They helped me navigate the Start-up Visa program and I'm now running my tech company in Vancouver.",
      year: "2024"
    },
    {
      name: "Priya Sharma",
      program: "Citizenship Application",
      country: "India",
      rating: 5,
      text: "After years in Canada, VrikshImmigration helped me complete my citizenship journey. The ceremony was beautiful, and I'm proud to call myself a Canadian citizen!",
      year: "2024"
    },
    {
      name: "Michael Johnson",
      program: "Visitor Visa",
      country: "Nigeria",
      rating: 5,
      text: "When my visitor visa was initially refused, VrikshImmigration helped me reapply with a stronger application. I was able to visit my family in Canada as planned.",
      year: "2023"
    },
    {
      name: "Elena Petrov",
      program: "PR Card Renewal",
      country: "Russia",
      rating: 5,
      text: "My PR card renewal was processed efficiently by VrikshImmigration. They ensured I met all residency requirements and had my new card well before travel.",
      year: "2024"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real experiences from clients who achieved their Canadian immigration dreams with VrikshImmigration.
          </p>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Successful Applications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <p className="text-muted-foreground">Approval Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from real clients about their immigration journey with VrikshImmigration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country} • {testimonial.year}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Reviews */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Families Worldwide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <Quote className="h-6 w-6 text-secondary mb-3" />
                <p className="text-muted-foreground italic mb-4">
                  "VrikshImmigration didn't just help with paperwork - they supported our entire family through every step. Professional, caring, and incredibly knowledgeable."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">The Kumar Family</div>
                  <div className="text-muted-foreground">Family Sponsorship - India to Canada</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-soft">
                <Quote className="h-6 w-6 text-secondary mb-3" />
                <p className="text-muted-foreground italic mb-4">
                  "What sets VrikshImmigration apart is their genuine care for clients. They celebrate your successes as if they were their own. Exceptional service!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">David & Sarah Miller</div>
                  <div className="text-muted-foreground">Express Entry - Australia to Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who achieved their Canadian immigration goals with VrikshImmigration.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Building, CheckCircle, Clock, Award } from "lucide-react";

const BusinessImmigration = () => {
  return (
    <div>
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Business Immigration</h1>
              <p className="text-xl text-white/90">Invest and immigrate to Canada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Business & Investor Programs</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore business immigration opportunities including Start-up Visa Program, Self-employed Persons Program, and provincial investor programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
                <p className="text-muted-foreground">12-24 months</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Investment Required</h3>
                <p className="text-muted-foreground">Varies by program</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Plan</h3>
                <p className="text-muted-foreground">Professional assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Business in Canada</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Explore business immigration opportunities. Let our experts guide you through investor and entrepreneur programs.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default BusinessImmigration;
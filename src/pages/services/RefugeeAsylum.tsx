import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { Shield, CheckCircle, Clock, Award } from "lucide-react";

const RefugeeAsylum = () => {
  return (
    <div>
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Refugee & Asylum Claims</h1>
              <p className="text-xl text-white/90">Protection and safety in Canada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Protection in Canada</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compassionate assistance for those seeking protection in Canada. We provide expert guidance for refugee claims, protected persons applications, and humanitarian cases.
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
                <p className="text-muted-foreground">Varies by case</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Support</h3>
                <p className="text-muted-foreground">Comprehensive assistance</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Confidential</h3>
                <p className="text-muted-foreground">Safe and secure process</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Seek Protection in Canada</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Need protection and safety? Our compassionate team provides expert guidance for refugee and asylum claims.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default RefugeeAsylum;
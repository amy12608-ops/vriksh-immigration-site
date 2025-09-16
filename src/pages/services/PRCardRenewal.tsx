import { Card, CardContent } from "@/components/ui/card";
import { BookConsultationButton } from "@/components/ui/layout";
import { CreditCard, CheckCircle, Clock, Award } from "lucide-react";

const PRCardRenewal = () => {
  return (
    <div>
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <CreditCard className="h-16 w-16 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">PR Card Renewal</h1>
              <p className="text-xl text-white/90">Maintain your permanent resident status</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">PR Card Renewal & Travel Documents</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Keep your permanent resident status current with PR card renewal and travel document services. Ensure compliance with residency obligations and maintain your ability to travel.
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
                <p className="text-muted-foreground">4-6 weeks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Residency Check</h3>
                <p className="text-muted-foreground">Compliance assessment</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Freedom</h3>
                <p className="text-muted-foreground">Maintain travel ability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-professional-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Renew Your PR Card Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't let your PR card expire. Ensure continued permanent resident status and travel freedom with professional renewal assistance.
          </p>
          <BookConsultationButton className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90" />
        </div>
      </section>
    </div>
  );
};

export default PRCardRenewal;
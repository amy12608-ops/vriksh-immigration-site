import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/ui/layout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import StudyPermits from "./pages/services/StudyPermits";
import WorkPermits from "./pages/services/WorkPermits";
import ExpressEntry from "./pages/services/ExpressEntry";
import VisitorVisas from "./pages/services/VisitorVisas";
import FamilySponsorship from "./pages/services/FamilySponsorship";
import PNP from "./pages/services/PNP";
import LMIA from "./pages/services/LMIA";
import PermanentResidency from "./pages/services/PermanentResidency";
import Citizenship from "./pages/services/Citizenship";
import BusinessImmigration from "./pages/services/BusinessImmigration";
import RefugeeAsylum from "./pages/services/RefugeeAsylum";
import PRCardRenewal from "./pages/services/PRCardRenewal";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/study-permits" element={<StudyPermits />} />
            <Route path="/services/work-permits" element={<WorkPermits />} />
            <Route path="/services/express-entry" element={<ExpressEntry />} />
            <Route path="/services/visitor-visas" element={<VisitorVisas />} />
            <Route path="/services/family-sponsorship" element={<FamilySponsorship />} />
            <Route path="/services/pnp" element={<PNP />} />
            <Route path="/services/lmia" element={<LMIA />} />
            <Route path="/services/permanent-residency" element={<PermanentResidency />} />
            <Route path="/services/citizenship" element={<Citizenship />} />
            <Route path="/services/business-immigration" element={<BusinessImmigration />} />
            <Route path="/services/refugee-asylum" element={<RefugeeAsylum />} />
            <Route path="/services/pr-card-renewal" element={<PRCardRenewal />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

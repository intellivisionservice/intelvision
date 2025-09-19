import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CallCenter from "./pages/services/CallCenter";
import CustomerSupport from "./pages/services/CustomerSupport";
import DataProcessing from "./pages/services/DataProcessing";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import Compliance from "./pages/services/Compliance";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/call-center" element={<CallCenter />} />
          <Route path="/services/customer-support" element={<CustomerSupport />} />
          <Route path="/services/data-processing" element={<DataProcessing />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

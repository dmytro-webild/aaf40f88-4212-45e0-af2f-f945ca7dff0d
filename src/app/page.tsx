"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Gallery", id: "gallery" },
        { name: "Estimate", id: "estimate" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="ROOFiT.ng"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "radial-gradient" }}
      logoText="ROOFiT.ng"
      description="Premium Roofing Solutions Built on Integrity, Durability & Precision. To save your changes and access the builder interface, simply click the floating 'Save' button in the bottom right corner of the screen."
      buttons={[{ text: "Get a Free Inspection", href: "#contact" }]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-with-helmet-working-roof-full-shot_23-2149343662.jpg"
      mediaAnimation="slide-up"
      frameStyle="card"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Built on Integrity"
      description="We don't just fix roofs; we build trust through exceptional craftsmanship and durable solutions tailored to your home's unique needs."
      bulletPoints={[
        { title: "Integrity", description: "We are honest about what you need and what you don't." },
        { title: "Reliability", description: "On time, on budget, and always professional." },
        { title: "Quality Work", description: "Superior materials and expert installation guaranteed." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/question-profile-demanding-business-woman-with-long-blond-hair-protective-helmet-looking-attentively-talking-man-with-laptop-standing-construction-site_259150-57776.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        { title: "Roof Repair", description: "Prompt and professional fixes for damaged shingles and minor issues.", imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill-low-view_23-2148748772.jpg" },
        { title: "Leak Fixing", description: "Expert diagnostic and lasting solutions for troublesome leaks.", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-with-paint_23-2149714286.jpg" },
        { title: "Full Installation", description: "New roof builds executed with precision for maximum longevity.", imageSrc: "http://img.b2bpic.net/free-photo/rows-seats_1398-4403.jpg" },
      ]}
      title="Our Services"
      description="Comprehensive roofing solutions for every challenge."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Transformation 1", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/tile-roof-house-home-textures_74190-9990.jpg" },
        { id: "2", name: "Transformation 2", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-together-roof_23-2149343674.jpg" },
        { id: "3", name: "Transformation 3", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343673.jpg" },
        { id: "4", name: "Transformation 4", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/yellow-facade-small-house-camping-de-nolle-vlissingen-netherlands_181624-20422.jpg" },
        { id: "5", name: "Transformation 5", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/old-abandoned-farm-with-barely-visible-grungy-company-name-ceiling_181624-1209.jpg" },
        { id: "6", name: "Transformation 6", price: "Completed", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-skyscrapers_1359-26.jpg" },
      ]}
      title="Transformations"
      description="See the impact of our professional roofing work."
    />
  </div>

  <div id="estimate" data-section="estimate">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        { id: "est-1", value: "5000", title: "Estimated Price per sqm", items: ["Transparent pricing", "Competitive rates"] },
      ]}
      title="Instant Estimate"
      description="Get a ballpark cost for your roofing project based on square footage."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Amazing job fixing my roof leakage. Truly professional and the quality is unmatched."
      rating={5}
      author="Sarah Johnson"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg", alt: "Client 1" },
        { src: "http://img.b2bpic.net/free-photo/front-view-carpenter-man-sitting-smiling_23-2148748790.jpg", alt: "Client 2" },
        { src: "http://img.b2bpic.net/free-photo/man-holding-hammer-drill-looking-away_23-2148748783.jpg", alt: "Client 3" },
        { src: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg", alt: "Client 4" },
        { src: "http://img.b2bpic.net/free-photo/low-angle-business-hand-shake_23-2148480352.jpg", alt: "Client 5" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to fix your roof? We're available 24/7 for consultations."
      buttons={[{ text: "Call ROOFiT.ng", href: "tel:+2340000000000" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="ROOFiT.ng"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
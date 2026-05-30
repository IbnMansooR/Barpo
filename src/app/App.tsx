import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import logo from '../assets/logo.png';
import { ArchitecturalTower } from "./components/ArchitecturalTower";
import { FloorSection } from "./components/FloorSection";
import { Menu } from "lucide-react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFloor, setCurrentFloor] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const floor = Math.floor(latest * 5);
      setCurrentFloor(Math.min(floor, 4));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative bg-[#F5F3EF]">
      {/* Atmospheric grain texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXh0IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cGF0aCBkPSJNMCAwaDMwMHYzMDBIMHoiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-8"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img src={logo} alt="Logo" className="tracking-tight cursor-pointer" style={{ height: 24 }} />

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-10">
              {["Work", "Philosophy", "Contact"].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  whileHover={{ opacity: 0.6 }}
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="tracking-[0.15em] uppercase opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
            >
              <Menu className="w-6 h-6 opacity-60" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16">
        <div className="max-w-7xl w-full mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 8rem)',
                lineHeight: '1.1',
              }}
              className="tracking-tight"
            >
              Biz shunchaki qurmaymiz.Qurilish jarayonini boshqaramiz
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              style={{ fontFamily: 'var(--font-body)' }}
              className="max-w-2xl mx-auto leading-relaxed tracking-wide opacity-60"
            >
              BARPO — tijorat obyektlari, biznes markazlar, klinikalar, savdo markazlari, ishlab chiqarish binolari va turar joy majmualari uchun tizimli qurilish hamkori.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
      </section>

      {/* Architectural Tower - Fixed in center */}
      <ArchitecturalTower scrollProgress={scrollYProgress} currentFloor={currentFloor} />

      {/* Qavat 1 - Introduction */}

      
      <FloorSection
        floorNumber={1}
        title="BARPO nima qiladi?"
        description="Biz obyektni faqat qurilish maydonidagi ishchi kuchi bilan emas, balki reja, grafika, texnik nazorat, brigadalar koordinatsiyasi, materiallar boshqaruvi va sifat qabul qilish tizimi orqali olib boramiz" subtitle={""}      >
        <div className="flex gap-8 mt-8">
          <div className="space-y-2">
            <div style={{ fontFamily: 'var(--font-display)' }} className="opacity-90">
              25+
            </div>
            <div style={{ fontFamily: 'var(--font-body)' }} className="tracking-wide opacity-50">
              Years experience
            </div>
          </div>
          <div className="w-[1px] bg-[#3B3A36]/15" />
          <div className="space-y-2">
            <div style={{ fontFamily: 'var(--font-display)' }} className="opacity-90">
              180+
            </div>
            <div style={{ fontFamily: 'var(--font-body)' }} className="tracking-wide opacity-50">
              Projects completed
            </div>
          </div>
        </div> 
      </FloorSection>

      {/* Floor 2 - Services */}
      <FloorSection
        floorNumber={2}
        subtitle="What we create"
        title="Architectural services"
        description="From conceptual design to final execution, we guide every project with a commitment to thoughtful restraint. Our services span residential, commercial, and cultural spaces—each one designed to stand the test of time."
        alignment="right"
      >
        <div className="space-y-4 mt-8">
          {[
            "Conceptual design",
            "Spatial planning",
            "Material curation",
            "Construction oversight",
          ].map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
              style={{ fontFamily: 'var(--font-body)' }}
              className="flex items-center gap-4 tracking-wide opacity-60"
            >
              <div className="w-8 h-[1px] bg-[#3B3A36]/30" />
              {service}
            </motion.div>
          ))}
        </div>
      </FloorSection>

      {/* Floor 3 - Process */}
      <FloorSection
        floorNumber={3}
        subtitle="How we work"
        title="The construction process"
        description="Every build begins with listening. We immerse ourselves in the site, understand its context, and let the environment guide our decisions. Construction is not rushed—it is refined, adjusted, and honored."
        alignment="left"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 p-8 border border-[#3B3A36]/15 bg-[#FAFAF8]/50"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="italic opacity-60 leading-relaxed">
            "We do not impose. We reveal. The structure already exists within the
            landscape—we simply help it emerge."
          </p>
        </motion.div>
      </FloorSection>

      {/* Floor 4 - Craftsmanship */}
      <FloorSection
        floorNumber={4}
        subtitle="Our commitment"
        title="Premium craftsmanship"
        description="Every detail matters. From hand-selected timber to precisely poured concrete, we work with artisans who understand that true luxury lies in subtlety, durability, and the quiet confidence of exceptional work."
        alignment="right"
      >
        <div className="grid grid-cols-2 gap-6 mt-8">
          {["Concrete", "Timber", "Stone", "Steel"].map((material, i) => (
            <motion.div
              key={material}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 border border-[#3B3A36]/15 bg-[#FAFAF8]/30 text-center cursor-pointer"
            >
              <div style={{ fontFamily: 'var(--font-display)' }} className="opacity-80">
                {material}
              </div>
            </motion.div>
          ))}
        </div>
      </FloorSection>

      {/* Floor 5 - Contact */}
      <FloorSection
        floorNumber={5}
        subtitle="Begin your journey"
        title="Let's create together"
        description="Whether you have a vision in mind or are seeking guidance, we invite you to start a conversation. Great architecture begins with great collaboration."
        alignment="left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 space-y-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(58, 58, 58, 0.95)' }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: 'var(--font-body)' }}
            className="px-10 py-4 bg-[#3A3A3A] text-[#F5F3EF] tracking-[0.15em] uppercase border border-[#3A3A3A]/20 shadow-lg transition-colors"
          >
            Get in touch
          </motion.button>

          <div style={{ fontFamily: 'var(--font-body)' }} className="tracking-wide opacity-50">
            hello@archi.studio
          </div>
        </motion.div>
      </FloorSection>

      {/* Footer */}
      <footer className="relative py-16 px-8 md:px-16 border-t border-[#3B3A36]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div style={{ fontFamily: 'var(--font-display)' }} className="mb-4 tracking-tight">
                ARCHI
              </div>
              <p style={{ fontFamily: 'var(--font-body)' }} className="tracking-wide opacity-40 max-w-md">
                Architectural design and construction
                <br />
                guided by Japanese philosophy
              </p>
            </div>

            <div className="flex gap-12">
              {["Instagram", "LinkedIn", "Behance"].map((platform) => (
                <motion.a
                  key={platform}
                  whileHover={{ opacity: 1 }}
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="tracking-[0.15em] uppercase opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#3B3A36]/10">
            <p style={{ fontFamily: 'var(--font-body)' }} className="tracking-wide opacity-30 text-center">
              © 2026 ARCHI Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

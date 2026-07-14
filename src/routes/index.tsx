import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

// Impor default untuk menjamin kompatibilitas penuh dengan SSR Vite
import * as LucideIcons from "lucide-react";

// Komponen pembungkus dinamis agar aman saat proses render SSR dijalankan
const Icon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  const TargetIcon = (LucideIcons as any)[name];
  if (!TargetIcon) return null;
  return <TargetIcon {...props} />;
};


// Buat ulang referensi komponen lama agar kamu tidak perlu mengubah ratusan tag di dalam JSX
const BadgeCheck = (props: any) => <Icon name="BadgeCheck" {...props} />;
const Users = (props: any) => <Icon name="Users" {...props} />;
const Award = (props: any) => <Icon name="Award" {...props} />;
const Headphones = (props: any) => <Icon name="Headphones" {...props} />;
const ShieldCheck = (props: any) => <Icon name="ShieldCheck" {...props} />;
const Sparkles = (props: any) => <Icon name="Sparkles" {...props} />;
const Hotel = (props: any) => <Icon name="Hotel" {...props} />;
const CreditCard = (props: any) => <Icon name="CreditCard" {...props} />;
const UserCheck = (props: any) => <Icon name="UserCheck" {...props} />;
const Clock = (props: any) => <Icon name="Clock" {...props} />;
const Plane = (props: any) => <Icon name="Plane" {...props} />;
const Utensils = (props: any) => <Icon name="Utensils" {...props} />;
const Star = (props: any) => <Icon name="Star" {...props} />;
const ChevronDown = (props: any) => <Icon name="ChevronDown" {...props} />;
const ArrowRight = (props: any) => <Icon name="ArrowRight" {...props} />;
const MapPin = (props: any) => <Icon name="MapPin" {...props} />;
const Mail = (props: any) => <Icon name="Mail" {...props} />;
const Phone = (props: any) => <Icon name="Phone" {...props} />;
const MessageCircle = (props: any) => <Icon name="MessageCircle" {...props} />;
const Instagram = (props: any) => <Icon name="Instagram" {...props} />;
const Facebook = (props: any) => <Icon name="Facebook" {...props} />;
const Youtube = (props: any) => <Icon name="Youtube" {...props} />;
const Play = (props: any) => <Icon name="Play" {...props} />;
const Quote = (props: any) => <Icon name="Quote" {...props} />;

import heroKaaba from "@/assets/hero-kaaba.jpeg";
import masjidNabawi from "@/assets/masjid-nabawi.jpeg";
import ctaKaabaNight from "@/assets/cta-kaaba-night.jpeg";
import pkgPremium from "@/assets/pkg-premium.jpeg";
import pkgStandard from "@/assets/pkg-standard.jpeg";
import pkgFamily from "@/assets/pkg-family.jpeg";
import galleryKiswa from "@/assets/gallery-kiswa.jpeg";
import galleryAirport from "@/assets/gallery-airport.jpeg";
import about from "@/assets/about.webp";
import logo from "@/assets/logo.png";
import aa from "@/assets/aa.jpeg";
import bb from "@/assets/bb.jpeg";
import cc from "@/assets/cc.jpeg";
import dd from "@/assets/dd.jpeg";
import ee from "@/assets/ee.jpeg";
import ff from "@/assets/ff.jpeg";
import a from "@/assets/a.png";
import b from "@/assets/b.png";
import c from "@/assets/c.png";


const images = [
  heroKaaba,        
  masjidNabawi,      
  ctaKaabaNight,   
];

// 4. TERAKHIR, PANGGIL ROUTE NYA DI SINI
export const Route = createFileRoute("/")({
  component: Index, // Pastikan fungsi paling bawah file lu namanya 'Index' dan merender <Hero />
});

// ---------- Reusable primitives ----------
function GoldButton({ children, variant = "solid", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "ghost" | "outline" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "text-navy shadow-[var(--shadow-gold)] hover:-translate-y-0.5 [background:var(--gradient-gold)]"
      : variant === "outline"
      ? "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      : "text-navy hover:text-emerald-deep";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function EmeraldButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 [background:var(--gradient-emerald)] shadow-[var(--shadow-elegant)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-soft)] bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-emerald-deep backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-gold" />
      {children}
    </div>
  );
}

// Animated counter
function useCounter(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { value, ref };
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCounter(target);
  return (
    <div className="text-center">
      <div className="font-display text-5xl font-semibold text-navy sm:text-6xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        <span className="text-gold-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

// Reveal on scroll
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("animate-rise");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ---------- Sections ----------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#packages", label: "Paket" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#journey", label: "Journey" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_1px_0_0_rgba(16,42,67,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className={`grid h-15 w-15 place-items-center rounded-full ${scrolled ? "[background:var(--gradient-emerald)]" : "bg-white/15 backdrop-blur-md"}`}>
            <img src="src/assets/logo.png" alt="Hayatun" className="h-15 w-15" />
          </span>
          <span className={`font-display text-xl ${scrolled ? "text-navy" : "text-white"}`}>Hayatun Tour </span>
        </a>
        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full ${
                  scrolled ? "text-navy/80 hover:text-emerald-deep" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <GoldButton className="hidden sm:inline-flex">
          Book Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </GoldButton>
      </nav>
    </header>
  );
}



function Particles() {
  const [isMounted, setIsMounted] = useState(false);
  const [particleStyles, setParticleStyles] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate nilai acak satu kali saja di sisi klien (browser)
    const generated = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 6 + 6}s`,
    }));
    
    setParticleStyles(generated);
  }, []);

  // Jangan render partikel apa pun di server agar HTML-nya klop kosong terlebih dahulu
  if (!isMounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      {particleStyles.map((style, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-[color:var(--gold-soft)] blur-[1px] animate-float opacity-60"
          style={{
            width: style.width,
            height: style.width, // Gunakan nilai width yang sama agar proporsional
            left: style.left,
            top: style.top,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
const [nextIndex, setNextIndex] = useState(1);
const [isTransitioning, setIsTransitioning] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setIsTransitioning(true);
    
    // Tunggu proses fade selesai baru pindah index utama
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setNextIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 1500); // Durasi fade 1.5 detik
    
  }, 5000); // Ganti gambar tiap 5 detik

  return () => clearInterval(interval);
}, []);

  const trust = [
    { icon: ShieldCheck, label: "Officially Licensed" },
    { icon: Users, label: "10,000+ Happy Pilgrims" },
    { icon: Award, label: "15+ Years Experience" },
    { icon: Headphones, label: "24/7 Support" },
  ];

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">

  {/* ================= BACKGROUND CAROUSEL ANTI-PATAH V3 ================= */}
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      
      {/* Layer Belakang: Menahan gambar sebelumnya biar pas transisi gak kosong/hitam */}
      <img
        src={images[(currentIndex - 1 + images.length) % images.length]}
        alt="Previous Background"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />

      {/* Layer Depan: Gambar yang aktif & selalu fade-in mulus dari opacity 0 ke 100 */}
      <img
        key={currentIndex} // <-- PENTING! Ini yang bikin balik ke gambar pertama tetep smooth
        src={images[currentIndex]}
        alt="Active Background"
        className="absolute inset-0 h-full w-full object-cover animate-fade-in animate-kenburns"
        style={{
          animation: 'fadeIn 1500ms cubic-bezier(0.4, 0, 0.2, 1) forwards, kenburns 20s linear infinite'
        }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
    </div>
    {/* ========================================================================= */}
      <Particles />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-16 text-center lg:pt-40">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold-soft" /> Izin Haji Khusus no. 91200034800480007 - Izin Umroh U.121 Tahun 2020
          </span>
        </Reveal>
        <Reveal delay={120}>
         <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] text-white">
          Mulailah Perjalanan Suci Anda
          <br />
          <span className="italic text-gold-gradient">dengan Penuh Keyakinan</span>
        </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-2xl text-base text-white/85 sm:text-lg">
           Nikmati pengalaman umrah plus yang berkesan bersama travel terpercaya. 
           Rasakan kenyamanan ibadah di tanah suci sekaligus jelajahi destinasi halal bersejarah melalui fasilitas eksklusif kami.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <GoldButton>
              Konsultasi Gratis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </GoldButton>
            <GoldButton variant="outline">Semua Paket</GoldButton>
          </div>
        </Reveal>

        <Reveal delay={520} className="mt-16 w-full">
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-3 rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:grid-cols-4">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-2xl px-3 py-3 text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
                  <Icon className="h-4 w-4 text-gold-soft" />
                </span>
                <span className="text-xs font-medium text-white/90 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative border-y border-border bg-[color:var(--sand)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <Stat target={15} suffix="+" label="Years of Experience" />
          <Stat target={10000} suffix="+" label="Pilgrims Served" />
          <Stat target={98} suffix="%" label="Customer Satisfaction" />
          <Stat target={100} suffix="%" label="Visa Assistance" />
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-60">
          {["IATA", "Ministry of Hajj", "Saudia", "Emirates", "Marriott", "Hilton"].map((p) => (
            <span key={p} className="font-display text-lg tracking-wide text-navy/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={about}
              alt="Sakina pilgrims and guides at the Haramain"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-3xl border border-border bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full [background:var(--gradient-emerald)]">
                <Award className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="font-display text-lg text-navy">Travel Berlisensi</div>
                <div className="text-xs text-muted-foreground">Tersertifikasi oleh Kementrian Haji & Umrah</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionEyebrow>Tentang Hayatun</SectionEyebrow>
          <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
            Kenapa Harus Hayatun{" "}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sebagai salah satu pelopor travel haji, umroh, dan wisata halal terbaik di Indonesia, 
              Hayatun Tour hadir untuk mewujudkan perjalanan spiritual impian Anda. Melalui paket Umroh Plus, 
              kami tidak hanya mendampingi Anda beribadah di Mekah dan Madinah, tetapi juga mengajak Anda menelusuri jejak sejarah Islam di 
              berbagai belahan dunia, mulai dari Thaif, Turki, Mesir, hingga benua Eropa. Kami berkomitmen menyajikan perjalanan yang aman, 
              nyaman, dan sepenuhnya muslim-friendly agar ibadah dan petualangan Anda berjalan dengan sempurna.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Tersertifikasi",
              "Pembimbing Bersertifikat",
              "Terakreditasi A LSM-645-IDN",
              "13 Tahun Pengalaman",
              "Transparansi & Profesional"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3">
                <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-deep" />
                <span className="text-sm text-navy">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <EmeraldButton>
              Meet Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </EmeraldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Packages() {
  const packages = [
    {
      img: pkgStandard,
      name: "Paket Umrah Esensial",
      badge: null,
      duration: "10 Hari",
      hotel: "Hotel bintang 4 dekat Masjidil Haram & Masjid Nabawi",
      meals: "Sarapan & makan malam setiap hari",
      flight: "Tiket pesawat pulang-pergi langsung",
      transport: "Transportasi grup pribadi",
      guide: "Pembimbing ibadah (Mutawwif)",
      price: "2,450",
    },
    {
      img: pkgPremium,
      name: "Paket Umrah Signature",
      badge: "Paling Populer",
      duration: "14 Hari",
      hotel: "Hotel bintang 5 Fairmont / Anjum – pemandangan Masjidil Haram",
      meals: "Makan prasmanan lengkap",
      flight: "Tiket pulang-pergi Premium Economy",
      transport: "Layanan transportasi VIP",
      guide: "Mutawwif berbahasa Indonesia",
      price: "4,890",
    },
    {
      img: pkgFamily,
      name: "Paket Haji Excellence",
      badge: "Haji 2026",
      duration: "21 Hari",
      hotel: "Hotel bintang 5 Mövenpick + tenda ber-AC di Mina",
      meals: "Makan lengkap termasuk katering di Mina",
      flight: "Tiket pulang-pergi Kelas Bisnis",
      transport: "Layanan mobil pribadi",
      guide: "Pembimbing ibadah & ustaz pendamping",
      price: "9,750",
    },
    {
      img: a,
      name: "Wisata Halal Eropa",
      badge: "Wisata Halal",
      duration: "21 Hari",
      hotel: "Hotel bintang 5 Mövenpick + tenda ber-AC di Mina",
      meals: "Makan lengkap termasuk katering di Mina",
      flight: "Tiket pulang-pergi Kelas Bisnis",
      transport: "Layanan mobil pribadi",
      guide: "Pembimbing ibadah & ustaz pendamping",
      price: "9,750",
    },
    {
      img: b,
      name: " Wisata Halal Asia & Australia",
      badge: "Wisata Halal",
      duration: "21 Hari",
      hotel: "Hotel bintang 5 Mövenpick + tenda ber-AC di Mina",
      meals: "Makan lengkap termasuk katering di Mina",
      flight: "Tiket pulang-pergi Kelas Bisnis",
      transport: "Layanan mobil pribadi",
      guide: "Pembimbing ibadah & ustaz pendamping",
      price: "9,750",
    },
     {
      img: c,
      name: "Wisata Halal Canada",
      badge: "Wisata Halal",
      duration: "21 Hari",
      hotel: "Hotel bintang 5 Mövenpick + tenda ber-AC di Mina",
      meals: "Makan lengkap termasuk katering di Mina",
      flight: "Tiket pulang-pergi Kelas Bisnis",
      transport: "Layanan mobil pribadi",
      guide: "Pembimbing ibadah & ustaz pendamping",
      price: "9,750",
    },
  ];

  return (
    <section id="packages" className="relative bg-[color:var(--sand)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Paket Unggulan</SectionEyebrow>

            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Perjalanan ibadah yang dirancang dengan cermat,{" "}
              <span className="italic text-gold-gradient">
                setiap detail telah dipersiapkan
              </span>
            </h2>

            <p className="mt-5 text-muted-foreground">
              Setiap paket dirancang untuk memberikan kenyamanan, lokasi yang
              dekat dengan Masjidil Haram dan Masjid Nabawi, serta kesempatan
              beribadah dengan lebih tenang. Pilih paket yang paling sesuai
              dengan kebutuhan perjalanan spiritual Anda.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {p.badge && (
                    <span className="absolute left-5 top-5 rounded-full [background:var(--gradient-gold)] px-3 py-1 text-xs font-medium text-navy shadow-[var(--shadow-gold)]">
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{p.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <ul className="space-y-3 text-sm text-navy/80">
                    {[
                      [Hotel, p.hotel],
                      [Plane, p.flight],
                      [Utensils, p.meals],
                      [UserCheck, p.guide],
                      [MapPin, p.transport],
                    ].map(([Icon, text], idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-deep" />
                        <span>{text as string}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-end justify-between border-t border-border pt-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">From</div>
                      <div className="font-display text-3xl text-navy">
                        ${p.price}
                        <span className="text-sm font-sans text-muted-foreground"> / person</span>
                      </div>
                    </div>
                    <EmeraldButton className="px-5 py-3 text-xs">
                      Book Now <ArrowRight className="h-3.5 w-3.5" />
                    </EmeraldButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
  {
    icon: ShieldCheck,
    title: "Berizin Resmi",
    text: "Memiliki izin resmi sesuai ketentuan Kementerian Haji & Umrah serta seluruh perizinan yang diperlukan.",
  },
  {
    icon: UserCheck,
    title: "Pembimbing Berpengalaman",
    text: "Didampingi mutawwif profesional yang siap membimbing setiap rangkaian ibadah dengan ilmu, pengalaman, dan penuh kepedulian.",
  },
  {
    icon: Hotel,
    title: "Hotel Premium",
    text: "Menginap di hotel berbintang dengan lokasi strategis, dekat Masjidil Haram dan Masjid Nabawi.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Fleksibel",
    text: "Tersedia pilihan pembayaran yang mudah, aman, dan dapat disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: Headphones,
    title: "Pelayanan Profesional",
    text: "Layanan terbaik mulai dari proses pendaftaran hingga Anda kembali ke Tanah Air.",
  },
  {
    icon: Clock,
    title: "Pendampingan 24/7",
    text: "Tim kami siap membantu kapan pun Anda membutuhkan selama berada di Makkah maupun Madinah.",
  },
  ];
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              A journey built on <span className="italic text-gold-gradient">trust & devotion</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold-soft)] hover:shadow-[var(--shadow-elegant)]">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40 [background:var(--gradient-gold)]" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl [background:var(--gradient-emerald)]">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="relative mt-6 font-display text-2xl text-navy">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { title: "Consultation", text: "A private conversation to understand your intention and needs." },
    { title: "Registration", text: "Simple, transparent booking with a personal coordinator." },
    { title: "Visa Processing", text: "We handle every document end-to-end." },
    { title: "Flight Departure", text: "Assisted airport experience and smooth boarding." },
    { title: "Arrival in Madinah", text: "VIP transfer and welcome to your five-star hotel." },
    { title: "Umrah & Worship Guidance", text: "Scholars walk with you through every ritual." },
    { title: "Return Home", text: "A calm, cared-for return with lasting memories." },
  ];
  return (
    <section id="journey" className="relative overflow-hidden bg-[color:var(--sand)] py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Reveal>
            <SectionEyebrow>The Journey</SectionEyebrow>
            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Seven steps to <span className="italic text-gold-gradient">the House of Allah</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--emerald-deep)] to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-14">
            {steps.map((s, i) => (
              <li 
                key={s.title} 
               
                className="relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-14"
              >
             
                <span className="absolute left-4 top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full [background:var(--gradient-gold)] ring-4 ring-[color:var(--sand)] md:left-1/2 z-10" />
                
               
                <Reveal 
                  delay={i * 90} 
                  className={i % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}
                >
                  <div className={`ml-12 md:ml-0 ${i % 2 === 1 ? "md:pl-14 md:text-left" : "md:pr-14 md:text-right"}`}>
                    <div className="text-xs uppercase tracking-[0.25em] text-emerald-deep">Step 0{i + 1}</div>
                    <h3 className="mt-2 font-display text-2xl text-navy sm:text-3xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: aa, alt: "Kaaba at golden hour", cls: "row-span-2" },
    { src: bb, alt: "Masjid Nabawi", cls: "" },
    { src: cc, alt: "Hotel with Kaaba view", cls: "" },
    { src: dd, alt: "Kaaba kiswa detail", cls: "row-span-2" },
    { src: ee, alt: "Pilgrims at the airport", cls: "" },
    { src: ff, alt: "Pilgrims praying", cls: "" },
  ];
  return (
    <section id="gallery" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Gallery</SectionEyebrow>
            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Moments from <span className="italic text-gold-gradient">the sacred journey</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80} className={`overflow-hidden rounded-3xl ${it.cls}`}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {it.alt}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Amina R.",
      country: "United Kingdom",
      text: "From the first call to the return flight, every detail was handled. Our guide made the rituals easy to understand and deeply moving.",
      rating: 5,
    },
    {
      name: "Yusuf K.",
      country: "Canada",
      text: "The hotel was steps from the Haram and the staff was extraordinary. Sakina truly treats you like family.",
      rating: 5,
    },
    {
      name: "Fatima H.",
      country: "Malaysia",
      text: "I travelled with my elderly parents. The care and attention we received was beyond anything we expected. Truly a spiritual experience.",
      rating: 5,
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, [reviews.length]);
  const r = reviews[idx];
  return (
    <section className="relative overflow-hidden bg-[color:var(--sand)] py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
            Stories from <span className="italic text-gold-gradient">our pilgrims</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14 rounded-[2rem] border border-border bg-white p-10 shadow-[var(--shadow-soft)] sm:p-14">
            <Quote className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-6 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
              “{r.text}”
            </p>
            <div className="mt-8 flex items-center justify-center gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="mt-4 text-sm text-navy">
              <span className="font-medium">{r.name}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-muted-foreground">{r.country}</span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-emerald-deep" : "w-1.5 bg-navy/20"
                  }`}
                />
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-xs text-navy transition hover:border-[color:var(--gold-soft)]">
              <Play className="h-3.5 w-3.5 fill-emerald-deep text-emerald-deep" />
              Watch video testimonials
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What documents do I need for a Hajj or Umrah visa?", a: "A passport valid for at least six months, biometric photos, and a completed application. We handle the entire visa process, including the mahram documentation where required." },
    { q: "How close are the hotels to the Haramain?", a: "Our Signature and Hajj Excellence hotels are within a short walk of Masjid al-Haram and Masjid Nabawi. Many rooms offer direct views of the Haram." },
    { q: "Are flights included in the packages?", a: "Yes, all listed packages include return international flights. Business class and premium economy upgrades are available on request." },
    { q: "What payment options are available?", a: "We accept international cards and bank transfers, and offer interest-free installment plans up to 12 months." },
    { q: "What is your cancellation policy?", a: "Full refunds are available up to 60 days before departure. Between 30 and 60 days, a partial refund applies. Terms are clearly outlined in your booking agreement." },
    { q: "Do you provide guides in multiple languages?", a: "Yes. Our mutawwifs speak English, Arabic, Urdu, French, and Bahasa. Additional languages can be arranged in advance." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Reveal>
            <SectionEyebrow>Frequently Asked</SectionEyebrow>
            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Everything you'd like to <span className="italic text-gold-gradient">know</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`overflow-hidden rounded-3xl border transition-all duration-500 ${isOpen ? "border-[color:var(--gold-soft)] bg-white shadow-[var(--shadow-soft)]" : "border-border bg-white/60"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="font-display text-lg text-navy sm:text-xl">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-transform duration-500 ${isOpen ? "rotate-180 [background:var(--gradient-emerald)] text-white" : "text-navy"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-7 pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaKaabaNight}
          alt="Kaaba at night surrounded by pilgrims"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <Reveal>
          <SectionEyebrow>
            <span className="text-gold-soft">Begin now</span>
          </SectionEyebrow>
          <h2 className="font-display text-4xl leading-tight text-white sm:text-6xl">
            Your journey to the House of Allah
            <br />
            <span className="italic text-gold-gradient">starts here</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80">
            Speak with a Sakina consultant today. We'll craft a pilgrimage as personal as your
            intention.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <GoldButton>
              Schedule Free Consultation <ArrowRight className="h-4 w-4" />
            </GoldButton>
            <GoldButton variant="outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div>
         <div className="flex items-center gap-2.5">
          {/* Pembungkus lingkaran tetap dipertahankan, isinya diganti tag img */}
          <span className="grid h-20 w-20 place-items-center rounded-full [background:var(--gradient-gold)] overflow-hidden">
            <img 
              src={logo} 
              alt="Hayatun Tour Logo Icon" 
              className="h-full w-full object-contain p-1" 
            />
          </span>
          <span className="font-display text-2xl text-white">Hayatun Tour</span>
        </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Premium Hajj & Umrah pilgrimages crafted with devotion, hospitality, and care since 2010.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {["Umrah Packages", "Hajj Packages", "Journey", "Gallery", "FAQ"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> +1 (800) 555-0142</li>
            <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-gold" /> WhatsApp: +1 (800) 555-0142</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> hello@hayatuntour.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> London · Dubai · Kuala Lumpur</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Newsletter</h4>
          <p className="mt-5 text-sm">Receive quiet updates on upcoming departures and package openings.</p>
          <form className="mt-5 flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button className="px-5 text-sm text-navy [background:var(--gradient-gold)]">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Hayatun Tour. All rights reserved.</span>
          <span>Licensed by the Ministry of Hajj & Umrah</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <>
      <a
        href="#"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 p-3 backdrop-blur-xl sm:hidden">
        <EmeraldButton className="w-full">
          Book Free Consultation <ArrowRight className="h-4 w-4" />
        </EmeraldButton>
      </div>
    </>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustSection />
      <About />
      <Packages />
      <WhyChoose />
      <Timeline />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}

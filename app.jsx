import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Target, 
  Users, 
  MapPin, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone,
  Linkedin,
  Award,
  Zap,
  ChevronRight,
  Instagram
} from 'lucide-react';

// Main Portfolio Component - Optimized for Business Representative Role
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: 'Profil' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'documentation', label: 'Studi Kasus' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Header / Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter">
            ZAINAL<span className="text-blue-700">ARDI.</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-[11px] font-bold tracking-widest uppercase text-slate-500">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a href="#contact" className="px-6 py-2 bg-blue-700 text-white text-[10px] font-black rounded-full hover:bg-blue-800 transition-all uppercase tracking-widest">
            Hubungi Saya
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-24 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
              <Zap size={12} /> Tersedia untuk Penempatan Area Aceh
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
              Membangun <span className="text-blue-700 underline decoration-blue-200 decoration-8 underline-offset-4">Market</span> & Relasi Strategis.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Sarjana Ekonomi (S.E.) dengan 5+ tahun pengalaman di bidang Sales Executive, Account Management, dan Partnership. Ahli dalam navigasi pasar lokal Lhokseumawe.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl"
              >
                Cek Rekam Jejak <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <TrendingUp className="text-green-500" />
                <span className="text-sm font-bold">Target-Oriented</span>
              </div>
            </div>
          </div>
          <div className="relative animate-in zoom-in duration-700">
            <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
              <img 
                src="assets/hero1.jpg" 
                className="w-full h-full object-cover" 
                alt="Zainal Ardi Portfolio"
                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'}
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-700 text-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
              <Award className="mb-2" />
              <p className="text-xs uppercase font-bold opacity-80 mb-1">Kualifikasi</p>
              <p className="text-lg font-black leading-tight tracking-tighter">Sarjana Ekonomi (S.E.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - Value Prop */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-blue-700 font-black text-sm tracking-[0.3em] uppercase mb-4">Kenapa Saya?</h2>
            <h3 className="text-3xl font-black mb-12">Solusi untuk Kebutuhan Business Representative Anda</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <ValueCard 
                icon={<Target size={32} />}
                title="Sales-Mindset"
                desc="Memiliki rekam jejak dalam mencapai target penjualan iklan radio dan manajemen akun klien."
              />
              <ValueCard 
                icon={<Users size={32} />}
                title="Networking Aktif"
                desc="Berpengalaman membangun relasi dengan komunitas, kampus, dan berbagai stakeholder brand lokal."
              />
              <ValueCard 
                icon={<MapPin size={32} />}
                title="Ekspertis Lokal"
                desc="Paham mendalam mengenai karakteristik pasar dan jaringan bisnis di wilayah Lhokseumawe."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Optimized for Sales/Business */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Pengalaman Kerja</h2>
              <div className="h-2 w-24 bg-blue-700 mt-3"></div>
            </div>
            <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">Result & Partnership Focused</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <ExperienceItem 
              role="Staff Account Sales Executive"
              company="PT. Vina Vira FM Lhokseumawe"
              period="2018 - 2020"
              focus="Sales & Account Management"
              bullets={[
                "Mencapai target penjualan iklan harian dan bulanan.",
                "Mengidentifikasi peluang pasar baru dan mengelola akuisisi klien.",
                "Membangun hubungan jangka panjang dengan pemangku kepentingan bisnis."
              ]}
            />
            <ExperienceItem 
              role="Head of Talent & Hospitality"
              company="Melofest Vol. 2 (Project)"
              period="2025"
              focus="Partnership & Operations"
              bullets={[
                "Mengelola kemitraan strategis dengan manajemen artis nasional.",
                "Memimpin koordinasi operasional backstage dan standar pelayanan.",
                "Bertanggung jawab atas branding offline melalui aktivasi booth kampus."
              ]}
            />
            <ExperienceItem 
              role="Radio Announcer"
              company="PT. Vina Vira FM Lhokseumawe"
              period="2020 - 2021"
              focus="Public Communication"
              bullets={[
                "Membangun engagement audiens melalui program siaran harian.",
                "Merepresentasikan brand radio dalam berbagai event offline.",
                "Mengolah data feedback pendengar untuk pengembangan program."
              ]}
            />
            <div className="p-10 bg-blue-700 text-white rounded-[2.5rem] flex flex-col justify-center shadow-xl">
              <GraduationCap className="mb-6" size={40} />
              <h4 className="text-2xl font-black mb-2 leading-tight">Latar Belakang Akademik</h4>
              <p className="text-blue-100 font-bold mb-4">Universitas Malikussaleh (2013-2019)</p>
              <p className="text-sm text-blue-50 opacity-80 leading-relaxed">
                Sarjana Ekonomi dengan konsentrasi Manajemen Keuangan. Dasar pendidikan yang kuat untuk analisis profitabilitas dan strategi bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 px-6 bg-slate-900 text-white relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic">Core Skills.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Kombinasi antara kemampuan interpersonal yang kuat dan manajemen data yang terstruktur.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
                  <TrendingUp className="text-blue-400 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Growth</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
                  <Users className="text-blue-400 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Relation</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <SkillBlock title="Business Dev" items={["Sales Strategy", "Client Acquisition", "Market Mapping", "Negotiation"]} />
              <SkillBlock title="Communication" items={["Public Speaking", "Public Relations", "Brand Advocacy", "Presentation"]} />
              <SkillBlock title="Operational" items={["Event Management", "Hospitality Management", "Team Coordination", "Reporting"]} />
              <SkillBlock title="Tools" items={["Microsoft Excel", "Canva Expert", "Social Media Ads", "Data Handling"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Documentation */}
      <section id="documentation" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">Studi Kasus & Dokumentasi</h3>
            <p className="text-slate-500 max-w-lg mx-auto italic">Bukti nyata eksekusi operasional dan penyelesaian masalah di lapangan.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <CaseStudy 
              id={2}
              title="Koordinasi Backstage"
              challenge="Perubahan jadwal mendadak dan keterbatasan waktu pergantian band."
              solution="Komunikasi cepat lintas divisi via intercom 10 menit sebelum artis naik panggung."
              result="Penampilan berjalan sesuai rundown tanpa keterlambatan signifikan."
            />
            <CaseStudy 
              id={3}
              title="Manajemen Volunteer"
              challenge="Perbedaan ritme kerja antar volunteer dan waktu briefing yang terbatas."
              solution="Membuat timeline kerja di WA & Drive serta memberikan contoh langsung di lapangan."
              result="Tim volunteer bekerja solid dan semua divisi berjalan sinkron."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 container mx-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-50 overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-16 flex flex-col justify-center bg-slate-50">
            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter italic text-blue-700">Let's Connect.</h3>
            <div className="space-y-8">
              <ContactInfo icon={<Phone className="text-blue-600" />} label="WhatsApp" value="0823-4651-9932" />
              <ContactInfo icon={<Mail className="text-blue-600" />} label="Email" value="Zainalardi8@gmail.com" />
              <ContactInfo icon={<Instagram className="text-blue-600" />} label="Instagram" value="@arbi66" />
            </div>
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <p className="text-lg font-bold mb-6 text-slate-700 italic">"Saya siap berkontribusi untuk memperkuat representasi bisnis Anda di area Aceh."</p>
            <div className="space-y-4">
              <a href="mailto:Zainalardi8@gmail.com" className="w-full py-4 bg-blue-700 text-white font-black rounded-2xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-lg">
                Kirim Email Lamaran <Mail size={16} />
              </a>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-slate-100 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Lokasi</p>
                  <p className="font-bold text-xs uppercase tracking-tighter">Aceh, Indonesia</p>
                </div>
                <div className="flex-1 p-4 bg-slate-100 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Status</p>
                  <p className="font-bold text-xs uppercase tracking-tighter">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
        &copy; 2026 Zainal Ardi, S.E. &bull; Business Representative Portfolio
      </footer>
    </div>
  );
}

// Sub-components
function ValueCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
      <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-2xl w-fit group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="font-black text-xl mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ExperienceItem({ role, company, period, focus, bullets }) {
  return (
    <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-lg transition-all flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-blue-700 font-bold text-[10px] uppercase tracking-widest">{focus}</span>
          <h4 className="text-2xl font-black mt-1 leading-tight">{role}</h4>
          <p className="text-slate-400 font-bold text-sm mt-1">{company} &bull; {period}</p>
        </div>
        <div className="p-3 bg-slate-50 text-slate-300 rounded-xl"><Briefcase size={20} /></div>
      </div>
      <ul className="space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
            <CheckCircle2 size={16} className="text-green-500 shrink-0" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
      <h4 className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2">{title}</h4>
      <div className="grid grid-cols-2 gap-3">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            <span className="text-[12px] text-slate-300 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudy({ id, title, challenge, solution, result }) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm group">
      <div className="aspect-video bg-slate-200 relative overflow-hidden">
        <img 
          src={`assets/hero${id}.jpg`} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          alt={title}
          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'}
        />
        <div className="absolute top-6 left-6 px-4 py-1 bg-blue-700 text-white rounded-full text-[10px] font-black uppercase tracking-tighter">
          Case Study
        </div>
      </div>
      <div className="p-10">
        <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">{title}</h4>
        <div className="grid gap-4">
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
            <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">Tantangan</p>
            <p className="text-xs text-red-900 leading-relaxed font-medium">{challenge}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
            <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Solusi</p>
            <p className="text-xs text-green-900 leading-relaxed font-medium">{solution}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Hasil</p>
            <p className="text-xs text-blue-900 leading-relaxed font-bold">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
        <p className="font-black text-lg tracking-tighter">{value}</p>
      </div>
    </div>
  );
}

function GraduationCap(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
    </svg>
  );
}


// Letak file: /src/app.jsx
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Target, Users, MapPin, TrendingUp, 
  ArrowRight, CheckCircle2, Mail, Phone, Award, Zap, Linkedin, Instagram
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter uppercase text-slate-900">ZAINAL<span className="text-blue-700">ARDI.</span></div>
          <div className="hidden md:flex space-x-8 text-[10px] font-bold tracking-widest uppercase text-slate-500">
            <button onClick={() => document.getElementById('about').scrollIntoView({behavior:'smooth'})} className="hover:text-blue-700 transition-colors">Profil</button>
            <button onClick={() => document.getElementById('experience').scrollIntoView({behavior:'smooth'})} className="hover:text-blue-700 transition-colors">Pengalaman</button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="hover:text-blue-700 transition-colors">Kontak</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
            <Zap size={12} /> Area: Lhokseumawe, Aceh
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 italic uppercase tracking-tighter">
            Business <span className="text-blue-700">Representative.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
            Sarjana Ekonomi (S.E.) dengan 5+ tahun pengalaman dalam Sales & Partnership. Spesialis dalam memperluas jangkauan brand dan manajemen klien strategis.
          </p>
          <div className="flex gap-4">
            <a href="mailto:Zainalardi8@gmail.com" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl uppercase text-xs tracking-widest">
              Hubungi Saya <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
            <img 
              src="assets/hero1.jpg" 
              className="w-full h-full object-cover" 
              alt="Profil Zainal Ardi" 
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'} 
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-blue-700 text-white p-4 rounded-2xl shadow-xl z-10 hidden md:block">
            <Award className="mb-1" size={24} />
            <p className="text-[10px] font-bold opacity-80 uppercase tracking-tighter text-left">Gelar</p>
            <p className="text-sm font-black italic">Sarjana Ekonomi</p>
          </div>
        </div>
      </section>

      {/* Profile Value */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-blue-700 font-black text-sm tracking-[0.3em] uppercase mb-4">Value Proposition</h2>
            <h3 className="text-3xl font-black uppercase italic">Partner Pertumbuhan Bisnis Anda</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left uppercase italic font-bold">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-blue-700 hover:text-white transition-all">
              <Target className="mb-4 text-blue-700 group-hover:text-white" size={32} />
              <h4 className="text-lg mb-2">Sales Focus</h4>
              <p className="text-xs font-medium normal-case not-italic opacity-70 tracking-normal">Ahli dalam manajemen akun iklan dan pencapaian target profitabilitas.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-blue-700 hover:text-white transition-all">
              <Users className="mb-4 text-blue-700 group-hover:text-white" size={32} />
              <h4 className="text-lg mb-2">Networking</h4>
              <p className="text-xs font-medium normal-case not-italic opacity-70 tracking-normal">Relasi aktif dengan berbagai komunitas bisnis dan instansi di Aceh.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-blue-700 hover:text-white transition-all">
              <MapPin className="mb-4 text-blue-700 group-hover:text-white" size={32} />
              <h4 className="text-lg mb-2">Area Expert</h4>
              <p className="text-xs font-medium normal-case not-italic opacity-70 tracking-normal">Memiliki pengetahuan mendalam tentang pasar lokal di Lhokseumawe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-slate-50 px-6">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-black mb-16 uppercase tracking-tighter italic border-b-4 border-blue-700 inline-block text-left text-slate-900">Pengalaman Kerja</h3>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-slate-200 last:border-0 text-left">
              <div className="md:w-1/3">
                <h4 className="text-xl font-black italic uppercase leading-tight">Account Sales Executive</h4>
                <p className="text-blue-700 font-bold text-xs mt-1 uppercase tracking-tighter">PT. Vina Vira FM Lhokseumawe | 2018 - 2020</p>
              </div>
              <div className="md:w-2/3 border-l-2 border-slate-200 pl-8">
                <ul className="space-y-4 text-sm text-slate-600 font-bold italic uppercase leading-relaxed">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Mengelola akuisisi klien baru dan retensi akun iklan strategis.</li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Mencapai target profitabilitas bulanan melalui strategi yang terukur.</li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Pemetaan pasar untuk identifikasi potensi bisnis baru di Aceh Utara.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-slate-200 last:border-0 text-left">
              <div className="md:w-1/3">
                <h4 className="text-xl font-black italic uppercase leading-tight">Head of Talent & Partnership</h4>
                <p className="text-blue-700 font-bold text-xs mt-1 uppercase tracking-tighter">Melofest Vol. 2 | 2025</p>
              </div>
              <div className="md:w-2/3 border-l-2 border-slate-200 pl-8">
                <ul className="space-y-4 text-sm text-slate-600 font-bold italic uppercase leading-relaxed">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Manajemen kemitraan dengan artis nasional dan vendor lokal.</li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Eksekusi branding offline melalui aktivasi booth strategis.</li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Koordinasi operasional lapangan dan hospitality management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 bg-white border-t border-slate-100 px-6 text-center">
        <h3 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Mari Berkolaborasi.</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-12 font-bold text-sm uppercase italic">
          <div className="flex items-center gap-2"><Phone size={18} className="text-blue-700"/> 0823-4651-9932</div>
          <div className="flex items-center gap-2"><Mail size={18} className="text-blue-700"/> Zainalardi8@gmail.com</div>
          <div className="flex items-center gap-2 underline decoration-blue-700 underline-offset-4"><Instagram size={18} className="text-blue-700"/> @arbi66</div>
        </div>
        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.5em]">&copy; 2026 Zainal Ardi, S.E. &bull; Professional Portfolio</p>
      </footer>
    </div>
  );
}


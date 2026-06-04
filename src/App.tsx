import { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  ChevronRight,
  Download,
  Terminal,
  Cpu,
  Globe,
  MessageSquare,
  Server,
  Cloud,
  Database,
  Layers,
  Phone
} from 'lucide-react';
// import myPhoto from './assets/photo_2026-05-28_12-46-35.webp';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Github = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          MDRK.
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </a>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
          Resume
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-400 font-mono text-lg tracking-wider">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              M. Donny <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rahmat K</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              Fullstack Web Developer & DevOps Engineer with 5+ years of experience in building scalable systems and orchestrating cloud environments.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group">
              Explore Portfolio
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-2">
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-slate-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/donny-rahmat-774b7a192/" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-slate-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex gap-8 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-slate-500 text-sm">Years Exp.</p>
            </div>
            <div className="w-px h-12 bg-slate-800" />
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-slate-500 text-sm">Enterprises</p>
            </div>
            <div className="w-px h-12 bg-slate-800" />
            <div>
              <p className="text-3xl font-bold text-white">Cianjur</p>
              <p className="text-slate-500 text-sm">Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
            <img 
              src="/photo_2026-05-28_12-46-35.webp" 
              alt="M. Donny Rahmat K" 
              fetchPriority="high"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Current Role</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Cloud Engineer & Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Web Developer & DevOps (Freelance)",
      company: "Nekads Partner",
      period: "Sept 2024 - Now",
      description: "Implemented environment configuration and service orchestration for KITB CRM and HRIS CSA. Designed Docker-based application stacks and Nginx reverse proxies.",
      tags: ["Laravel", "React", "Docker", "Nginx", "PostgreSQL", "Radix UI"]
    },
    {
      title: "Web Developer (Freelance)",
      company: "Resolve Collaboration Corp (Canada)",
      period: "May 2023 - Oct 2024",
      description: "Developed customer portals for broadcasting management on OBS/YouTube. Managed transcoders in AWS and optimized internal application data.",
      tags: ["CakePHP", "AWS SDK", "MySQL", "JavaScript"]
    },
    {
      title: "Cloud Engineer",
      company: "PT. Sigma Cipta Caraka (Telkomsigma)",
      period: "Aug 2022 - Now",
      description: "Monitoring and maintaining OpenStack-based private cloud environment. Orchestrating high-availability Kubernetes clusters (RKE2 & Rancher).",
      tags: ["OpenStack", "Kubernetes", "Ceph", "Prometheus", "Grafana"]
    },
    {
      title: "Web Developer",
      company: "PT. Appinesstopia Global Karya",
      period: "Dec 2021 - May 2022",
      description: "Developed Monitoring & Evaluation apps for FAO using Laravel & Vue. Managed local server deployments.",
      tags: ["Laravel", "Vue.js", "Server Management"]
    },
    {
      title: "Web Developer",
      company: "PT. Sagara Xinix Solusitama",
      period: "Sept 2020 - Dec 2021",
      description: "Built BNPT terrorism reporting portal and CSMS/CQMS management systems for Danone SN Indonesia.",
      tags: ["PHP (Bono)", "Laravel", "Metronic UI", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase">Professional Path</h2>
          <h3 className="text-4xl font-bold text-white">Work Experience</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-slate-800">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h4>
                    <p className="text-slate-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-blue-400/80 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{exp.period}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "CRM Grand Batang City (KITB)",
      description: "Comprehensive CRM system for managing commercial leads and tenants in an integrated industrial zone.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#",
      tech: ["Laravel", "Metronic UI", "Docker", "Nginx"]
    },
    {
      title: "HRIS Vesperia (CSA)",
      description: "Advanced Human Resource Information System with attendance management via Leaflet maps and automated payroll.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
      link: "#",
      tech: ["React (TS)", "Radix UI", "TanStack", "PostgreSQL"]
    },
    {
      title: "Environment & Server Setup (IDX)",
      description: "CI/CD pipeline and monitoring setup for microservices at the Indonesia Stock Exchange.",
      image: "https://images.unsplash.com/photo-1558494949-ef8b56821806?q=80&w=1974&auto=format&fit=crop",
      link: "#",
      tech: ["Kubernetes", "Golang", "ArgoCD", "Grafana"]
    },
    {
      title: "Website Portal Aduan BNPT",
      description: "Public portal for reporting acts of terrorism, featuring multi-level filtering by location and photo evidence auditing.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      tech: ["PHP", "Metronic UI", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <h2 className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase">Showcase</h2>
            <h3 className="text-4xl font-bold text-white">Project Portfolio</h3>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 group border-b border-blue-400/20 pb-1">
            View Case Studies
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="pt-4 mt-auto">
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn">
                    Details
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
            <Mail className="w-64 h-64 -rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Let's build the future together.
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-4 text-white/90">
                <Mail className="w-6 h-6" />
                <span className="text-lg">rahmatdonny70@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 text-white/90">
                <Phone className="w-6 h-6" />
                <span className="text-lg">081770464571</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:rahmatdonny70@gmail.com" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-100 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </a>
              <button className="bg-blue-700/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-800 pt-12">
          <p className="text-slate-500 text-sm">
            © 2026 M. Donny Rahmat K. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Github</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const skills = [
    { name: "PHP & Laravel", years: "5 Years", icon: Database },
    { name: "HTML & CSS", years: "5 Years", icon: Code2 },
    { name: "JavaScript & JQuery", years: "3 Years", icon: Code2 },
    { name: "React & TypeScript", years: "1 Year", icon: Layers },
    { name: "Cloud (OpenStack/AWS)", years: "3 Years", icon: Cloud },
    { name: "Docker & Kubernetes", years: "3 Years", icon: Server },
    { name: "Linux Administration", years: "3 Years", icon: Terminal },
    { name: "Golang", years: "Entry", icon: Terminal },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase">About Me</h2>
              <h3 className="text-4xl font-bold text-white">Fullstack Developer & Cloud Infrastructure Specialist.</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I am a Bachelor of Computer Science from Universitas Pamulang (2021). My expertise lies in bridging the gap between robust software development and scalable system architecture. I've successfully delivered mission-critical applications for enterprises like Danone, KITB, and the Indonesia Stock Exchange.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    System Design
                  </div>
                  <p className="text-sm text-slate-500">Expertise in microservices architecture and API integration.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    Deployment
                  </div>
                  <p className="text-sm text-slate-500">Proven track record in CI/CD, Kubernetes, and Cloud management.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-8 h-fit">
              <h4 className="text-xl font-bold text-white">Skills & Experience</h4>
              <div className="space-y-4">
                {skills.map(skill => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors">
                        <skill.icon className="w-4 h-4" />
                        {skill.name}
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{skill.years}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full group-hover:opacity-80 transition-opacity" 
                        style={{ width: skill.years.includes('5') ? '90%' : skill.years.includes('3') ? '65%' : '40%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

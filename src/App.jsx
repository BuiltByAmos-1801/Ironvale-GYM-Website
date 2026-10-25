import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, ChevronRight, Dumbbell, Instagram,
  Menu, X, Zap, Clock3, Users, Trophy, CalendarDays, MapPin, Phone,
  CircleCheck, MessageCircle, Flame
} from 'lucide-react'

const plans = [
  { name: 'Starter', price: '₹1,499', period: '/ month', note: 'Build your routine', features: ['Full gym floor access', 'Locker room access', 'Fitness orientation'], popular: false },
  { name: 'Unlimited', price: '₹2,499', period: '/ month', note: 'Make it a lifestyle', features: ['Unlimited gym access', 'All group classes', 'Monthly progress check-in', 'Guest pass every month'], popular: true },
  { name: 'Performance', price: '₹4,999', period: '/ month', note: 'Train with a purpose', features: ['Everything in Unlimited', '2 personal training sessions', 'Personalised training plan', 'Priority class booking'], popular: false },
]
const classes = [
  { time: '06:30 AM', name: 'Strength Lab', type: 'Strength', coach: 'Coach Arjun', image: 'photo-1534438327276-14e5300c3a48', days: 'MON · WED · FRI' },
  { time: '08:00 AM', name: 'Engine Room', type: 'Conditioning', coach: 'Coach Meera', image: 'photo-1517836357463-d25dfeac3438', days: 'TUE · THU · SAT' },
  { time: '06:00 PM', name: 'Athletic Build', type: 'Performance', coach: 'Coach Kabir', image: 'photo-1583454110551-21f2fa2afe61', days: 'MON · WED · FRI' },
]
const benefits = [
  { icon: Dumbbell, title: 'Serious equipment', body: 'A purposeful mix of free weights, racks, machines, and functional training space.' },
  { icon: Users, title: 'Coaching that cares', body: 'Real guidance, clear progressions, and a community that keeps you accountable.' },
  { icon: Zap, title: 'Built around you', body: 'Strength, conditioning, and mobility sessions for every stage of your journey.' },
  { icon: Trophy, title: 'Progress you can track', body: 'Set goals, review milestones, and celebrate the work that gets you there.' },
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePlan, setActivePlan] = useState('Unlimited')
  const [leadOpen, setLeadOpen] = useState(false)
  const [leadName, setLeadName] = useState('')
  const [leadPhone, setLeadPhone] = useState('')
  const [leadGoal, setLeadGoal] = useState('Build strength')
  const [leadSent, setLeadSent] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)

  const sendWhatsApp = (message) => {
    const phone = '919999999999' // Replace with the gym's WhatsApp number, country code + number, digits only.
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  const submitLead = (e) => {
    e.preventDefault()
    const message = `Hi IRONVALE! I'd like to book a free trial.\nName: ${leadName}\nPhone: ${leadPhone}\nGoal: ${leadGoal}\nMembership interest: ${activePlan}`
    setLeadSent(true)
    sendWhatsApp(message)
  }
  const bookClass = (name) => sendWhatsApp(`Hi IRONVALE! I'd like to ask about booking a trial for the ${name} class.`)

  return <div className="min-h-screen overflow-hidden bg-iron-black text-iron-white">
    <div className="bg-iron-lime px-4 py-2 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-iron-black sm:text-[10px]">
      Your first session is on us <span className="mx-2">✳</span> Book a free gym tour today
    </div>
    <header className="sticky top-0 z-40 border-b border-iron-line bg-iron-black/95 backdrop-blur-md">
      <div className="wrap flex h-[76px] items-center justify-between">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center bg-iron-lime text-iron-black"><Dumbbell size={20} strokeWidth={2.5}/></span>
          <span><span className="impact block text-[25px] font-bold leading-none tracking-wide">IRONVALE</span><span className="mt-1 block text-[7px] font-semibold uppercase tracking-[.34em] text-iron-muted">Training Club</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#approach" className="eyebrow text-iron-muted transition hover:text-iron-lime">Our approach</a>
          <a href="#classes" className="eyebrow text-iron-muted transition hover:text-iron-lime">Classes</a>
          <a href="#membership" className="eyebrow text-iron-muted transition hover:text-iron-lime">Membership</a>
        </nav>
        <button onClick={() => setLeadOpen(true)} className="flex items-center gap-3 bg-iron-lime px-4 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-iron-black transition hover:bg-white sm:px-5 sm:text-[10px]">
          <span className="hidden sm:inline">Start your trial</span><span className="sm:hidden">Free trial</span><ArrowRight size={15}/>
        </button>
      </div>
      {menuOpen && <div className="border-t border-iron-line px-6 py-5 md:hidden"><div className="flex flex-col gap-5">
        {['approach','classes','membership'].map((id) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`} className="eyebrow text-iron-muted">{id === 'approach' ? 'Our approach' : id === 'classes' ? 'Classes' : 'Membership'}</a>)}
      </div></div>}
    </header>

    <main>
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90" alt="Modern strength training gym" className="h-full w-full object-cover object-center opacity-40"/>
          <div className="absolute inset-0 bg-gradient-to-r from-iron-black via-iron-black/80 to-iron-black/20"/>
          <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-transparent to-iron-black/15"/>
        </div>
        <div className="wrap relative grid min-h-[650px] grid-cols-1 items-center gap-12 py-20 md:min-h-[700px] md:grid-cols-[1.15fr_.85fr] md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow mb-7 flex items-center gap-3 font-semibold text-iron-lime"><span className="h-px w-9 bg-iron-lime"/> Train with intent. Live with power.</p>
            <h1 className="impact text-[76px] font-extrabold leading-[.83] tracking-impact sm:text-[105px] lg:text-[135px]">EARN<br/>YOUR <span className="text-iron-lime">EDGE.</span></h1>
            <p className="mt-8 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">More than a gym. A training ground for people who show up, put in the work, and keep moving forward — one rep at a time.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => setLeadOpen(true)} className="group flex items-center gap-6 bg-iron-lime px-6 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-iron-black transition hover:bg-white">Book a free trial <ArrowRight size={16} className="transition group-hover:translate-x-1"/></button>
              <a href="#membership" className="flex items-center gap-3 border border-white/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.16em] transition hover:border-iron-lime hover:text-iron-lime">View memberships <ArrowDownRight size={16}/></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div><p className="impact text-3xl font-bold">12K<span className="text-iron-lime">+</span></p><p className="eyebrow mt-1 text-white/50">Sq. ft. training floor</p></div>
              <div><p className="impact text-3xl font-bold">30<span className="text-iron-lime">+</span></p><p className="eyebrow mt-1 text-white/50">Weekly classes</p></div>
              <div><p className="impact text-3xl font-bold">1:1</p><p className="eyebrow mt-1 text-white/50">Coaching available</p></div>
            </div>
          </div>
          <div className="hidden justify-end md:flex">
            <div className="w-[260px] border border-white/20 bg-iron-black/60 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between"><span className="eyebrow text-white/60">The daily standard</span><Flame size={18} className="text-iron-lime"/></div>
              <p className="impact mt-8 text-5xl font-bold leading-[.9]">SHOW<br/>UP.</p>
              <div className="my-5 h-px bg-white/20"/>
              <p className="text-xs leading-6 text-white/65">The hardest part is walking through the door. We'll help you take it from there.</p>
              <button onClick={() => setLeadOpen(true)} className="mt-6 flex w-full items-center justify-between bg-iron-lime px-4 py-3 text-[9px] font-bold uppercase tracking-[.15em] text-iron-black">Let's get started <ArrowRight size={14}/></button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-iron-lime/50"/>
      </section>

      <section className="border-b border-iron-line bg-iron-panel">
        <div className="wrap grid grid-cols-2 gap-6 py-7 sm:grid-cols-4 sm:py-8">
          {[['01','Train smarter'],['02','Move stronger'],['03','Find your people'],['04','Repeat the work']].map(([n,t])=><div key={n} className="flex items-center gap-3"><span className="impact text-2xl text-iron-lime">{n}</span><span className="eyebrow text-[8px] font-semibold sm:text-[9px]">{t}</span></div>)}
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 py-20 sm:py-28">
        <div className="wrap">
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div><p className="eyebrow mb-4 text-iron-lime">Why IRONVALE</p><h2 className="impact max-w-xl text-5xl font-bold leading-[.92] sm:text-7xl">BUILT FOR THE<br/><span className="text-iron-lime">LONG GAME.</span></h2></div>
            <p className="max-w-lg text-sm leading-7 text-iron-muted md:justify-self-end">Your goals are personal. Your training should be too. Find the space, equipment, coaching, and community to build a stronger version of yourself — at your pace.</p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-iron-line sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({icon: Icon,title,body},i)=><div key={title} className="group bg-iron-black p-7 transition hover:bg-iron-panel sm:p-8">
              <div className="flex items-center justify-between"><Icon size={25} strokeWidth={1.5} className="text-iron-lime"/><span className="impact text-xl text-white/25">0{i+1}</span></div>
              <h3 className="impact mt-10 text-3xl font-bold">{title}</h3><p className="mt-3 text-xs leading-6 text-iron-muted">{body}</p>
              <div className="mt-7 h-px w-8 bg-iron-lime transition-all group-hover:w-16"/>
            </div>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-iron-line bg-iron-panel">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=85" alt="Athlete training with weights" className="h-full w-full object-cover opacity-20"/><div className="absolute inset-0 bg-gradient-to-r from-iron-panel via-iron-panel/90 to-iron-panel/55"/></div>
        <div className="wrap relative grid grid-cols-1 gap-10 py-16 sm:py-20 md:grid-cols-2 md:items-center">
          <div><p className="eyebrow mb-4 text-iron-lime">Your first step</p><h2 className="impact text-5xl font-bold leading-[.9] sm:text-7xl">NO PRESSURE.<br/><span className="text-iron-lime">JUST POTENTIAL.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-iron-muted">Come see the space, meet the coaches, and try a session. No awkward sales pitch. Just a chance to see if we're your kind of place.</p></div>
          <div className="border border-white/15 bg-iron-black/70 p-6 sm:p-8">
            <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center bg-iron-lime text-iron-black"><CalendarDays size={23}/></div><div><h3 className="impact text-3xl font-bold">YOUR FIRST SESSION IS FREE.</h3><p className="mt-2 text-xs leading-6 text-iron-muted">Tour the gym, try the equipment, and talk through your goals with our team.</p></div></div>
            <div className="my-6 h-px bg-iron-line"/>
            <div className="flex flex-wrap gap-5 text-[10px] text-white/70"><span className="flex items-center gap-2"><Check size={13} className="text-iron-lime"/> No commitment</span><span className="flex items-center gap-2"><Check size={13} className="text-iron-lime"/> All levels welcome</span></div>
            <button onClick={() => setLeadOpen(true)} className="mt-7 flex w-full items-center justify-between bg-iron-lime px-5 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-iron-black transition hover:bg-white">Claim your free trial <ArrowRight size={16}/></button>
          </div>
        </div>
      </section>

      <section id="classes" className="scroll-mt-24 py-20 sm:py-28">
        <div className="wrap">
          <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow mb-4 text-iron-lime">Find your pace</p><h2 className="impact text-5xl font-bold sm:text-7xl">TRAIN TOGETHER.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-iron-muted">Expert-led sessions. Good energy. Better effort. Find a class that gets you moving.</p></div>
            <button onClick={() => sendWhatsApp('Hi IRONVALE! Please send me the full weekly group class schedule.')} className="flex items-center gap-3 self-start border border-iron-line px-5 py-4 text-[9px] font-semibold uppercase tracking-[.15em] transition hover:border-iron-lime hover:text-iron-lime sm:self-auto">Full class schedule <ArrowRight size={15}/></button>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {classes.map((c,i)=><article key={c.name} className="group border border-iron-line bg-iron-panel transition hover:border-iron-lime/60">
              <div className="relative h-56 overflow-hidden sm:h-64"><img src={`https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=1000&q=85`} alt={c.name} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"/><div className="absolute inset-0 bg-gradient-to-t from-iron-black/80 to-transparent"/><span className="absolute left-4 top-4 bg-iron-lime px-3 py-2 text-[8px] font-bold uppercase tracking-[.15em] text-iron-black">{c.type}</span><span className="impact absolute bottom-4 left-5 text-4xl font-bold">{c.time}</span></div>
              <div className="p-5 sm:p-6"><p className="eyebrow text-iron-lime">{c.days}</p><h3 className="impact mt-3 text-3xl font-bold">{c.name}</h3><p className="mt-2 text-xs text-iron-muted">{c.coach} · All levels welcome</p><button onClick={() => bookClass(c.name)} className="mt-6 flex w-full items-center justify-between border-t border-iron-line pt-4 text-[9px] font-semibold uppercase tracking-[.16em] transition hover:text-iron-lime">Ask about a trial <ChevronRight size={15}/></button></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="membership" className="scroll-mt-24 bg-iron-panel py-20 sm:py-28">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center"><p className="eyebrow mb-4 text-iron-lime">Memberships</p><h2 className="impact text-5xl font-bold sm:text-7xl">INVEST IN YOURSELF.</h2><p className="mt-4 text-sm leading-7 text-iron-muted">Straightforward memberships. No mystery. Pick the plan that fits your goals and build from there.</p></div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {plans.map(plan=><article key={plan.name} className={`relative flex flex-col border p-6 sm:p-8 ${plan.popular ? 'border-iron-lime bg-iron-black shadow-lime' : 'border-iron-line bg-iron-panel'}`}>
              {plan.popular && <span className="absolute right-5 top-5 bg-iron-lime px-3 py-2 text-[8px] font-bold uppercase tracking-[.15em] text-iron-black">Most popular</span>}
              <p className="eyebrow text-iron-muted">{plan.note}</p><h3 className="impact mt-5 text-4xl font-bold">{plan.name}</h3>
              <div className="mt-5 flex items-end gap-2"><span className="impact text-5xl font-bold">{plan.price}</span><span className="pb-1 text-xs text-iron-muted">{plan.period}</span></div>
              <div className="my-7 h-px bg-iron-line"/>
              <ul className="flex-1 space-y-4">{plan.features.map(feature=><li key={feature} className="flex items-start gap-3 text-xs text-iron-muted"><CircleCheck size={15} className="shrink-0 text-iron-lime"/>{feature}</li>)}</ul>
              <button onClick={() => { setActivePlan(plan.name); setLeadOpen(true) }} className={`mt-8 flex w-full items-center justify-between px-5 py-4 text-[9px] font-bold uppercase tracking-[.16em] transition ${plan.popular ? 'bg-iron-lime text-iron-black hover:bg-white' : 'border border-iron-line hover:border-iron-lime hover:text-iron-lime'}`}>Choose {plan.name} <ArrowRight size={15}/></button>
            </article>)}
          </div>
          <p className="mt-6 text-center text-[10px] text-iron-muted">Demo pricing for concept purposes. Update membership details before publishing.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div><p className="eyebrow mb-4 text-iron-lime">Good to know</p><h2 className="impact text-5xl font-bold sm:text-6xl">QUESTIONS?<br/>WE GOT YOU.</h2><p className="mt-5 max-w-md text-sm leading-7 text-iron-muted">New to training or coming back after a break? Here's what most people want to know before they start.</p><button onClick={() => sendWhatsApp('Hi IRONVALE! I have a few questions before joining. Could someone help me?')} className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.15em] text-iron-lime">Ask our team <ArrowRight size={15}/></button></div>
          <div className="border-t border-iron-line">
            {[
              ['I am a beginner. Can I still join?', 'Absolutely. We welcome all experience levels. Our team can help you get oriented, learn the equipment, and find a pace that feels right for you.'],
              ['Can I try the gym before joining?', 'Yes — book a free trial through the form or WhatsApp. We will help arrange a visit and show you around.'],
              ['Do you offer personal training?', 'Yes. Personal training is available, and our Performance membership includes two sessions per month in this demo plan.'],
              ['What should I bring for my first session?', 'Bring comfortable workout clothes, training shoes, a water bottle, and a willingness to start. We will take it from there.'],
            ].map(([q,a],i)=><div key={q} className="border-b border-iron-line"><button onClick={() => setFaqOpen(faqOpen===i?-1:i)} className="flex w-full items-center justify-between gap-5 py-5 text-left"><span className="text-sm font-medium">{q}</span><span className={`flex h-7 w-7 shrink-0 items-center justify-center border border-iron-line transition ${faqOpen===i?'border-iron-lime bg-iron-lime text-iron-black':'text-iron-lime'}`}>{faqOpen===i?<X size={13}/>:<ArrowRight size={13}/>}</span></button>{faqOpen===i&&<p className="max-w-lg pb-5 pr-8 text-xs leading-6 text-iron-muted">{a}</p>}</div>)}
          </div>
        </div>
      </section>

      <section className="relative border-y border-iron-lime/30 bg-iron-lime text-iron-black">
        <div className="wrap flex flex-col items-start justify-between gap-7 py-12 sm:py-16 md:flex-row md:items-center">
          <div><p className="eyebrow mb-3 font-bold">No more someday</p><h2 className="impact text-5xl font-extrabold leading-[.9] sm:text-7xl">YOUR NEXT REP<br/>STARTS HERE.</h2></div>
          <button onClick={() => setLeadOpen(true)} className="group flex items-center gap-8 border border-iron-black bg-iron-black px-6 py-4 text-[10px] font-bold uppercase tracking-[.17em] text-iron-lime transition hover:bg-transparent hover:text-iron-black">Book your free trial <ArrowRight size={16} className="transition group-hover:translate-x-1"/></button>
        </div>
      </section>
    </main>

    <footer className="bg-iron-black">
      <div className="wrap grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div><a href="#" className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center bg-iron-lime text-iron-black"><Dumbbell size={20}/></span><span><span className="impact block text-2xl font-bold leading-none">IRONVALE</span><span className="mt-1 block text-[7px] uppercase tracking-[.34em] text-iron-muted">Training Club</span></span></a><p className="mt-5 max-w-xs text-xs leading-6 text-iron-muted">A stronger you is built one session at a time. Show up, do the work, keep going.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs text-iron-muted hover:text-iron-lime"><Instagram size={15}/> Follow on Instagram</a></div>
        <div><p className="eyebrow mb-5 text-white/40">Explore</p><div className="flex flex-col gap-3 text-xs text-iron-muted"><a href="#approach" className="hover:text-iron-lime">Our approach</a><a href="#classes" className="hover:text-iron-lime">Classes & coaching</a><a href="#membership" className="hover:text-iron-lime">Memberships</a><button onClick={() => setLeadOpen(true)} className="text-left hover:text-iron-lime">Free trial</button></div></div>
        <div><p className="eyebrow mb-5 text-white/40">Visit us</p><div className="flex flex-col gap-3 text-xs text-iron-muted"><p className="flex gap-2"><MapPin size={14} className="shrink-0 text-iron-lime"/> Your City, India<br/>(replace with real address)</p><p className="flex gap-2"><Clock3 size={14} className="shrink-0 text-iron-lime"/> Mon–Sat · 6 AM–10 PM</p><p className="flex gap-2"><Phone size={14} className="shrink-0 text-iron-lime"/> +91 99999 99999</p></div></div>
        <div><p className="eyebrow mb-5 text-white/40">Let's talk</p><p className="text-xs leading-6 text-iron-muted">Got a goal in mind? Let's make a plan that works for you.</p><button onClick={() => sendWhatsApp('Hi IRONVALE! I would like to know more about the gym and memberships.')} className="mt-4 inline-flex items-center gap-2 border border-iron-line px-4 py-3 text-[9px] font-bold uppercase tracking-[.14em] hover:border-iron-lime hover:text-iron-lime"><MessageCircle size={14}/> WhatsApp us</button></div>
      </div>
      <div className="border-t border-iron-line"><div className="wrap flex flex-col gap-3 py-5 text-[9px] uppercase tracking-[.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} IRONVALE Training Club. All rights reserved.</span><span>Demo gym concept · Built by <a href="https://builtbyamos.in" target="_blank" rel="noreferrer" className="text-iron-lime hover:text-white">Built By Amos</a></span></div></div>
    </footer>

    {leadOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={e=>{if(e.target===e.currentTarget)setLeadOpen(false)}}>
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto border border-iron-line bg-iron-panel p-6 sm:p-8">
        <button onClick={()=>setLeadOpen(false)} aria-label="Close trial form" className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-iron-line hover:border-iron-lime"><X size={17}/></button>
        {leadSent ? <div className="py-8 text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center bg-iron-lime text-iron-black"><Check size={26}/></span><h3 className="impact mt-6 text-4xl font-bold">YOU'RE ONE STEP CLOSER.</h3><p className="mt-3 text-sm leading-6 text-iron-muted">Your WhatsApp message should open in a new tab. Send it to the gym to confirm your free trial.</p><button onClick={()=>{setLeadOpen(false);setLeadSent(false)}} className="mt-7 bg-iron-lime px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-iron-black">Back to the site</button></div> : <>
          <p className="eyebrow mb-3 text-iron-lime">Start strong</p><h3 className="impact pr-10 text-4xl font-bold sm:text-5xl">BOOK YOUR FREE TRIAL.</h3><p className="mt-3 text-xs leading-6 text-iron-muted">Tell us a little about yourself. We'll prepare a WhatsApp message so the team can help you take the first step.</p>
          <form onSubmit={submitLead} className="mt-7 space-y-5">
            <label className="block"><span className="eyebrow mb-2 block text-iron-muted">Your name</span><input required value={leadName} onChange={e=>setLeadName(e.target.value)} placeholder="Enter your name" className="w-full border border-iron-line bg-iron-black px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-iron-lime"/></label>
            <label className="block"><span className="eyebrow mb-2 block text-iron-muted">WhatsApp number</span><input required value={leadPhone} onChange={e=>setLeadPhone(e.target.value)} type="tel" placeholder="Your contact number" className="w-full border border-iron-line bg-iron-black px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-iron-lime"/></label>
            <label className="block"><span className="eyebrow mb-2 block text-iron-muted">Your main goal</span><select value={leadGoal} onChange={e=>setLeadGoal(e.target.value)} className="w-full border border-iron-line bg-iron-black px-4 py-3.5 text-sm outline-none focus:border-iron-lime"><option>Build strength</option><option>Improve fitness</option><option>Build muscle</option><option>Weight management</option><option>Train for a sport</option><option>Get started as a beginner</option></select></label>
            <div className="border border-iron-line p-4"><p className="eyebrow text-iron-muted">Membership interest</p><div className="mt-3 grid grid-cols-3 gap-2">{plans.map(p=><button type="button" key={p.name} onClick={()=>setActivePlan(p.name)} className={`px-2 py-3 text-[9px] font-semibold uppercase tracking-wide ${activePlan===p.name?'bg-iron-lime text-iron-black':'border border-iron-line text-iron-muted'}`}>{p.name}</button>)}</div></div>
            <button type="submit" className="flex w-full items-center justify-between bg-iron-lime px-5 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-iron-black transition hover:bg-white">Continue on WhatsApp <ArrowRight size={16}/></button>
            <p className="text-center text-[9px] leading-5 text-iron-muted">Demo form · Replace the WhatsApp number and gym contact details before launch.</p>
          </form>
        </>}
      </div>
    </div>}
  </div>
}
export default App

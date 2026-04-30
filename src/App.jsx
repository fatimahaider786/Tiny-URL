import React, { useState } from 'react';
// MUI Icons
import LinkIcon from '@mui/icons-material/Link';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Assets (Make sure paths are correct)
import demoVideo from './assets/shortener-video.mp4';
import heroVideo from './assets/platform-highlight-video.mp4';

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased text-[#333]">
      {/* 1. NAVBAR */}
      <nav className="bg-[#002b5c] sticky top-0 z-50 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h2 className="text-white font-black text-3xl tracking-tighter cursor-pointer">TINYURL</h2>
            <div className="hidden md:flex gap-8 text-white/90 font-medium text-sm">
              <a href="#" className="hover:text-blue-300 transition">Plans</a>
              <a href="#" className="hover:text-blue-300 transition">Features</a>
              <a href="#" className="hover:text-blue-300 transition">Domains</a>
              <a href="#" className="hover:text-blue-300 transition">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white font-bold text-sm hover:underline">Log In</a>
            <button className="border-2 border-white text-white font-bold px-5 py-2 rounded-md hover:bg-white hover:text-[#002b5c] transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Matches Video 1) */}
      <section className="bg-[#002b5c] pt-12 pb-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div className="text-white mt-8">
            <h1 className="text-[2.75rem] font-bold leading-[1.1] mb-6 tracking-tight">
              URL Shortener, Branded Short Links & Analytics
            </h1>
            <p className="text-[1.05rem] leading-relaxed opacity-90 mb-8 max-w-md">
              Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.
              <br /><br />
              You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="border border-white text-white font-bold px-6 py-2.5 rounded-md hover:bg-white hover:text-[#002b5c] transition text-sm">
                View Plans
              </button>
              <button className="bg-[#2ba6de] hover:bg-[#238bb9] text-white font-bold px-6 py-2.5 rounded-md transition shadow-md text-sm">
                Create Free Account
              </button>
            </div>

            <div className="mt-20">
              <h3 className="font-bold text-lg mb-4">Your Recent Links:</h3>
              <div className="bg-white/10 border border-white/20 rounded-md p-3 flex items-center gap-3 text-sm">
                <span className="bg-white text-[#002b5c] rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs">!</span>
                No links yet in your history
              </div>
            </div>
          </div>

          {/* Shortener Box */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden mt-4">
            <div className="flex border-b">
              <button className="flex-1 py-4 font-bold flex items-center justify-center gap-2 border-b-4 border-blue-500 text-[#002b5c] text-sm">
                <LinkIcon fontSize="small" /> Shorten a Link
              </button>
              <button className="flex-1 py-4 font-bold text-gray-400 flex items-center justify-center gap-2 bg-blue-50/30 text-sm">
                <QrCodeIcon fontSize="small" /> Generate QR Code
              </button>
            </div>
            <div className="p-8">
              <label className="flex items-center gap-2 font-bold text-[11px] uppercase text-gray-600 mb-2">
                <ChevronRightIcon className="text-blue-600 !text-sm" /> Long URL <span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Paste long URL here" className="w-full p-4 border border-gray-300 rounded-md bg-white mb-6 focus:outline-blue-500" />
              <div className="grid grid-cols-[1.2fr_1fr] gap-4 mb-8">
                <div>
                  <label className="font-bold text-[11px] uppercase text-gray-600 mb-2 block">Domain</label>
                  <select className="w-full p-4 border border-gray-300 rounded-md bg-white text-sm"><option>tinyurl.com</option></select>
                </div>
                <div>
                  <label className="font-bold text-[11px] uppercase text-gray-600 mb-2 block">Alias (optional)</label>
                  <input type="text" placeholder="Add alias here" className="w-full p-4 border border-gray-300 rounded-md bg-white text-sm" />
                </div>
              </div>
              <button className="w-full bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 rounded-md text-lg shadow-md transition">
                Shorten Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TINYURL PLANS INCLUDE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#002b5c] mb-16">TinyURL Plans Include:</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { t: 'Detailed Link Analytics', d: 'Stay on top of your links performance and get insights into the clicks you earn and people you reach', i: 'https://tinyurl.com/images/feature-1.webp?46e5238bcf5a4660a3af3ec77fbcde7d' },
              { t: 'Fully Branded Domains', d: 'Customize every part of your links with branded domains — say goodbye to default link shortening!', i: 'https://tinyurl.com/images/feature-2.webp?12dfa23947c4fe285b6101296974fd2b' },
              { t: 'Bulk Short URLs', d: 'Scale your communications with our API, and create thousands of unique short links in the blink of an eye.', i: 'https://tinyurl.com/images/feature-3.webp?395fcf909a9247108ea2d8f8e7571fe0' },
              { t: 'Link Management', d: 'Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.', i: 'https://tinyurl.com/images/feature-4.webp?9c503823a480ef2d8ca66db5eed22205' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="font-bold text-lg mb-3 text-[#002b5c]">{item.t}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[200px]">{item.d}</p>
                <img src={item.i} alt={item.t} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LINK SHORTENING DONE QUICK SECTION */}
      <section className="w-full bg-[#2ba6de] text-white">
        <div className="grid lg:grid-cols-2 items-stretch w-full min-h-[500px]">
          <div className="relative overflow-hidden bg-gray-200">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2ba6de]">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">Link Shortening Done Quick and Easy</h2>
            <p className="text-lg font-bold mb-4">Our URL shortener is not only among the first-ever link shorteners on the Internet — it’s the best out there.</p>
            <p className="text-lg opacity-90 mb-10">Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.</p>
             <p className="text-lg opacity-90 mb-10">Wave goodbye to long, clunky links and give your audiences the experiences they deserve!</p>
            <div className="flex gap-4">
              <button className="bg-white text-[#2ba6de] font-bold px-8 py-3 rounded-md shadow-md">View Plans</button>
              <button className="bg-[#002b5c] text-white font-bold px-8 py-3 rounded-md shadow-md">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONE-STOP SOLUTION SECTION */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#002b5c] mb-4">Your One-Stop Solution for Branding and Managing Links</h2>
          <p className="text-gray-500 mb-10">We offer a comprehensive suite of premium features to help users track and manage links conveniently and confidently.</p>
          <button className="bg-[#2ba6de] text-white font-bold px-10 py-3 rounded-md mb-16 shadow-lg">View Plans</button>
          
          <div className="grid md:grid-cols-3 gap-12 text-left items-center">
            <div className="space-y-12">
              <div>
                <h3 className="font-bold text-xl text-[#002b5c] mb-2">Unlimited Tracked Clicks</h3>
                <p className="text-gray-500 text-sm">We don't believe in making you suffer for your success! Track as many clicks as you earn with our Pro plans!</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#002b5c] mb-2">Detailed Link Analytics</h3>
                <p className="text-gray-500 text-sm">Get actionable insights into your social media, email, and other marketing performance.</p>
              </div>
            </div>
            <div>
              <img src="https://tinyurl.com/images/overhauling/card-feature-2.webp" alt="Solution" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="font-bold text-xl text-[#002b5c] mb-2">Fully Custom Links</h3>
                <p className="text-gray-500 text-sm">Create short links that put your brand front-and-center. Attaching your brand domain to TinyURL is quick and intuitive.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#002b5c] mb-2">Bulk Short URLs</h3>
                <p className="text-gray-500 text-sm">Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRANSFORMING LANDSCAPE */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#002b5c] text-white p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">Transforming the Digital Landscape Since ‘02</h2>
          <div className="space-y-8">
            <div className="flex justify-between border-b border-white/20 pb-4">
              <span className="text-5xl font-bold">Billions</span>
              <span className="text-xs uppercase opacity-70 self-end">of redirects per month</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-4">
              <span className="text-5xl font-bold">24 years</span>
              <span className="text-xs uppercase opacity-70 self-end">of shortening URLs</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-4">
              <span className="text-5xl font-bold">31,414,229,791</span>
              <span className="text-xs uppercase opacity-70 self-end">TinyURLs created</span>
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 7. FAQ SECTION (This is what you were missing) */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#002b5c] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a URL Shortener?", a: "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links." },

              { q: "How Does a URL Shortener Work?", a: "URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses." },

              { q: "What Are the Benefits of Using a Short URL?", a: "Brands, organizations, and individuals use link shorteners to make sharing links more convenient. They make it possible to fit links into emails, social media posts, print materials, billboards, or even make it so links can be read aloud on audio-dependent media like podcasts With our paid plans, you can even shorten links using your own brand’s domain, and then track detailed click analytics for sharper, faster decision-making!" },

              { q: "How Do I Shorten a URL for Free?", a: "You can shorten a URL for free using TinyURL’s link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the 'Shorten URL' button. If you’re feeling creative, you can try and attach a unique back half (ex. tinyurl.com/example) by using the ‘Alias’ field." },

              { q: "Can I Use a Domain I Already Own?", a: "Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (subdomain.example.com) provided they don’t have web content built on top of them." },

            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-[#002b5c] hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <ExpandMoreIcon className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. READY SECTION */}
      <section className="bg-[#002b5c] py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready for Shorter, Smarter Links?</h2>
        <p className="mb-8 opacity-80">Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#002b5c] font-bold px-8 py-3 rounded-md">View Plans</button>
          <button className="bg-[#2ba6de] text-white font-bold px-8 py-3 rounded-md">Create Free Account</button>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#001a38] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h2 className="text-2xl font-black mb-6">TINYURL</h2>
            <p className="opacity-60">© 2024 TinyURL, LLC</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 opacity-70">
              <li>Link Management</li>
              <li>Branded Domains</li>
              <li>Bulk Shortening</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 opacity-70">
              <li>Blog</li>
              <li>Developers</li>
              <li>Help Desk</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 opacity-70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
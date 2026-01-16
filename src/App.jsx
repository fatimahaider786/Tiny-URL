import React from 'react';

// MUI Icons
import LinkIcon from '@mui/icons-material/Link';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';
import EditIcon from '@mui/icons-material/Edit';

// Video Import
import demoVideo from './assets/shortener-video.mp4';

function App() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>

      {/* 1. NAVBAR */}
      <nav className="navbar navbar-expand-lg py-3 sticky-top" style={{ backgroundColor: '#0d6efd' }}>
        <div className="container px-lg-5">
          <a className="navbar-brand text-white fw-bold fs-2" href="#">TINYURL</a>
          <div className="collapse navbar-collapse ms-5">
            <ul className="navbar-nav me-auto gap-4">
              <li className="nav-item"><a className="nav-link text-white opacity-75" href="#">Plans</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75" href="#">Domains</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75" href="#">Resources</a></li>
            </ul>
            <div className="d-flex gap-4 align-items-center">
              <a href="#" className="text-white text-decoration-none fw-bold small">Log In</a>
              <button className="btn btn-light fw-bold px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION + SHORTENER BOX */}
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(180deg, #002b5c 0%, #004a99 100%)',
          minHeight: '80vh'
        }}
      >
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white">
              <h1 className="fw-bold mb-4" style={{ fontSize: '3.2rem' }}>
                URL Shortener, Branded Short Links & Analytics
              </h1>
              <p className="fs-5 opacity-90 mb-4">
                Welcome to the original link shortener — simplifying the Internet since 2002.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light fw-bold px-4 py-3 text-primary">View Plans</button>
                <button className="btn btn-primary fw-bold px-4 py-3">Create Free Account</button>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="d-flex bg-light">
                  <button className="flex-fill py-3 border-0 bg-white fw-bold d-flex justify-content-center gap-2 border-bottom border-primary border-3">
                    <LinkIcon /> Shorten a Link
                  </button>
                  <button className="flex-fill py-3 border-0 bg-light fw-bold text-muted d-flex justify-content-center gap-2">
                    <QrCodeIcon /> Generate QR Code
                  </button>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="fw-bold small text-secondary d-flex gap-1 mb-2">
                      <ChevronRightIcon fontSize="small" /> Long URL <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Paste long URL here" />
                  </div>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="fw-bold small text-secondary d-flex gap-1 mb-2">
                        <LanguageIcon fontSize="small" /> Domain
                      </label>
                      <select className="form-select form-control-lg bg-light border-0"><option>tinyurl.com</option></select>
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold small text-secondary d-flex gap-1 mb-2">
                        <EditIcon fontSize="small" /> Alias (optional)
                      </label>
                      <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Add alias here" />
                    </div>
                  </div>
                  <button className="btn btn-success w-100 py-3 fw-bold fs-5 shadow-sm">Shorten Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLANS INCLUDE SECTION */}
      <section className="py-5 bg-white">
        <div className="container px-lg-5 text-center">
          <h2 className="fw-bold mb-5">TinyURL Plans Include</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <h5 className="fw-bold">Detailed Link Analytics</h5>
              <p className="text-muted small">Stay on top of your links' performance and get insights into the clicks you earn and people you reach.</p>
              <img src="https://tinyurl.com/images/feature-1.webp" className="img-fluid mt-3" alt="f1" />
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Fully Branded Domains</h5>
              <p className="text-muted small">Customize every part of your links with branded domains — say goodbye to default link shortening!</p>
              <img src="https://tinyurl.com/images/feature-2.webp" className="img-fluid mt-3" alt="f2" />
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Bulk Short URLs</h5>
              <p className="text-muted small">Scale your communications with our API, and create thousands of unique short links in the blink of an eye.</p>
              <img src="https://tinyurl.com/images/feature-3.webp" className="img-fluid mt-3" alt="f3" />
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Link Management</h5>
              <p className="text-muted small">Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.</p>
              <img src="https://tinyurl.com/images/feature-4.webp" className="img-fluid mt-3" alt="f4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIDEO HERO SECTION (Video on Left, Larger Size) */}
      <section style={{ backgroundColor: '#2ba6de', padding: '120px 0', overflow: 'hidden' }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Side: Video (Increased Size) */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative mb-5 mb-lg-0">
              {/* Green Circle Backdrop - size increased */}
              <div style={{ 
                position: 'absolute', 
                width: '500px', 
                height: '500px', 
                backgroundColor: '#82bc00', 
                borderRadius: '50%', 
                zIndex: 1,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}></div>
              
              {/* Video Frame - size increased to match image layout */}
              <div style={{ 
                zIndex: 2, 
                width: '380px',  // Size badha diya gaya hai
                height: '560px', // Size badha diya gaya hai
                borderRadius: '45px', 
                overflow: 'hidden', 
                boxShadow: '0px 30px 60px rgba(0,0,0,0.4)',
                backgroundColor: '#fff',
                border: '12px solid white' // Thicker frame
              }}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={demoVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="col-lg-6 text-white ps-lg-5">
              <h1 className="fw-bold mb-4" style={{ fontSize: '3.8rem', lineHeight: '1.1' }}>
                Link Shortening <br /> Done <br /> Quick and Easy
              </h1>
              
              <p className="fs-4 mb-4" style={{ opacity: '0.9' }}>
                Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.
              </p>
              
              <p className="fs-5 mb-4" style={{ opacity: '0.8' }}>
                Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.
              </p>

              <p className="fs-5 mb-5" style={{ opacity: '0.9' }}>
                Wave goodbye to long, clunky links and give your audiences the experiences they deserve!
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-light fw-bold px-5 py-3" style={{ color: '#2ba6de', fontSize: '1.1rem' }}>
                  View Plans
                </button>
                <button className="btn fw-bold px-5 py-3 text-white" style={{ backgroundColor: '#003580', fontSize: '1.1rem' }}>
                  Contact Sales
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
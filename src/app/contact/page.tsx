export default function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch for wholesale inquiries and partnerships</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="contact-info">
              <h2>Soubhagya Traders</h2>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Head Office Address:</strong><br />
                  Soubhagya Traders<br />
                  Near Kozhikode Railway Station<br />
                  Kozhikode (Calicut), Kerala - 673001<br />
                  India
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone Numbers:</strong><br />
                  Primary: +91 495 XXX XXXX<br />
                  Secondary: +91 495 XXX XXXX<br />
                  WhatsApp: +91 9XXXX XXXXX
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  info@soubhagyatraders.com<br />
                  orders@soubhagyatraders.com<br />
                  support@soubhagyatraders.com
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Business Hours:</strong><br />
                  Monday - Saturday: 8:00 AM - 7:00 PM<br />
                  Sunday: 9:00 AM - 2:00 PM<br />
                  Emergency orders: Call for availability
                </div>
              </div>
            </div>
            
            <div className="enhanced-contact-form">
              <h3 style={{ marginBottom: '2rem', color: '#2c5530', textAlign: 'center' }}>Quick Contact Form</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Business Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Contact Person *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Business Type</label>
                    <select className="form-select">
                      <option value="">Select your business type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="grocery-store">Grocery Store</option>
                      <option value="supermarket">Supermarket</option>
                      <option value="hotel">Hotel</option>
                      <option value="catering">Catering Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Monthly Purchase Volume</label>
                    <select className="form-select">
                      <option value="">Select volume range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                      <option value="250k-500k">₹2,50,000 - ₹5,00,000</option>
                      <option value="above-500k">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Delivery Address/Location</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="City, District, Kerala"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message & Requirements *</label>
                  <textarea 
                    required 
                    className="form-textarea"
                    placeholder="Please describe your specific requirements, preferred delivery schedule, product categories of interest, or any special requests..."
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit">
                  Send Inquiry & Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">
            Visit our warehouse and office in the heart of Kozhikode
          </p>
          
          <div className="map-container">
            <div className="map-placeholder">
              <h3>📍 Soubhagya Traders</h3>
              <p>Near Kozhikode Railway Station<br />Kozhikode (Calicut), Kerala - 673001</p>
              <a 
                href="https://maps.google.com/maps?q=Kozhikode+Railway+Station+Kerala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                🗺️ Open in Google Maps
              </a>
            </div>
          </div>
          
          <div className="about-content" style={{ marginTop: '3rem' }}>
            <div className="about-text">
              <h3>Easy to Find</h3>
              <p>
                Our warehouse and office are conveniently located near Kozhikode Railway Station, 
                making it easy for customers to visit us. We're in the commercial heart of the city 
                with excellent connectivity to major roads and highways.
              </p>
              
              <h3>Directions</h3>
              <p>
                <strong>By Road:</strong> Take NH66 to Kozhikode city. Our office is just 2km from the railway station.<br />
                <strong>By Train:</strong> Kozhikode Railway Station is the nearest major station.<br />
                <strong>By Air:</strong> Calicut International Airport is 25km away.
              </p>
            </div>
            
            <div className="about-highlights">
              <h3>Warehouse Timings</h3>
              <ul className="highlight-list">
                <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
                <li>Saturday: 7:00 AM - 7:00 PM</li>
                <li>Sunday: 9:00 AM - 2:00 PM</li>
                <li>Loading/Unloading: 24/7 for bulk orders</li>
                <li>Office Hours: 9:00 AM - 6:00 PM (Mon-Sat)</li>
                <li>Emergency Contact: Available 24/7</li>
                <li>Advance appointment recommended</li>
                <li>Free parking available for customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Service Areas</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏙️</div>
              <h3>Kozhikode City</h3>
              <p>Complete coverage within Kozhikode municipal limits with same-day delivery options</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌊</div>
              <h3>Malabar Region</h3>
              <p>Regular delivery to Malappuram, Kannur, Kasaragod, and surrounding areas</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏔️</div>
              <h3>Wayanad District</h3>
              <p>Weekly delivery schedules to hill stations and remote areas of Wayanad</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Custom Delivery</h3>
              <p>Special delivery arrangements for bulk orders outside regular service areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Partnership Opportunities</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Become Our Distribution Partner</h3>
              <p>
                We are always looking for reliable distribution partners to expand our reach. 
                If you have a good network in retail or food service industry, we offer 
                attractive partnership opportunities with competitive margins.
              </p>
              
              <h3>Supplier Partnership</h3>
              <p>
                Are you a manufacturer or supplier of quality grocery products? We welcome 
                proposals from suppliers who can meet our quality standards and delivery 
                requirements. Contact us to discuss potential collaboration.
              </p>
              
              <h3>Corporate Accounts</h3>
              <p>
                We offer special corporate account services for large enterprises, hotel chains, 
                and restaurant groups. Our corporate services include dedicated account management, 
                customized pricing, and flexible payment terms.
              </p>
            </div>
            
            <div className="about-highlights">
              <h3>Why Partner With Us?</h3>
              <ul className="highlight-list">
                <li>Established brand reputation in Kerala</li>
                <li>Wide product range and reliable supply chain</li>
                <li>Competitive pricing and attractive margins</li>
                <li>Marketing support for partners</li>
                <li>Training and technical assistance</li>
                <li>Flexible partnership models</li>
                <li>Territory protection for distributors</li>
                <li>Regular business reviews and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#2c5530', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#90EE90', marginBottom: '2rem' }}>Ready to Partner With Us?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Join hundreds of satisfied customers who trust Soubhagya Traders for their wholesale grocery needs
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+91495XXXXXXX" className="btn" style={{ backgroundColor: 'white', color: '#2c5530' }}>
              📞 Call Now
            </a>
            <a href="mailto:info@soubhagyatraders.com" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
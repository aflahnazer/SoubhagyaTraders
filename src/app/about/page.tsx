export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Soubhagya Traders</h1>
          <p className="page-subtitle">Your Trusted Wholesale Grocery Partner in Kozhikode</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Soubhagya Traders has been a cornerstone of the wholesale grocery industry in Kozhikode, Kerala, 
                for over two decades. We started as a small family business with a simple mission: to provide 
                high-quality grocery products at competitive prices to local businesses.
              </p>
              <p>
                Today, we have grown into one of the most trusted wholesale grocers in the region, serving 
                hundreds of restaurants, grocery stores, and supermarkets across Kerala. Our success is built 
                on the foundation of quality, reliability, and exceptional customer service.
              </p>
              <p>
                We understand that your business depends on consistent, high-quality supplies delivered on time. 
                That's why we've invested in modern storage facilities, efficient logistics, and a dedicated 
                team to ensure your needs are always met.
              </p>
            </div>
            
            <div className="about-highlights">
              <h3>Why Businesses Choose Us</h3>
              <ul className="highlight-list">
                <li>Over 20 years of industry experience</li>
                <li>Extensive product range with 1000+ items</li>
                <li>Competitive wholesale pricing</li>
                <li>Reliable delivery across Kerala</li>
                <li>Quality assurance on all products</li>
                <li>Flexible payment terms</li>
                <li>Dedicated customer support</li>
                <li>Modern storage and handling facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>Bulk Supply</h3>
              <p>Large quantity supplies for supermarkets and grocery chains with attractive volume discounts</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Restaurant Supply</h3>
              <p>Specialized product selection for restaurants, hotels, and food service establishments</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Scheduled Delivery</h3>
              <p>Regular delivery schedules to ensure your inventory is always stocked</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>Credit Facilities</h3>
              <p>Flexible payment terms for established businesses to help manage cash flow</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Custom Orders</h3>
              <p>Special product sourcing and custom packaging solutions for unique requirements</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Market Insights</h3>
              <p>Regular updates on market trends and pricing to help your business stay competitive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Commitment</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Quality First</h3>
              <p>
                Every product in our inventory goes through rigorous quality checks. We partner only with 
                trusted manufacturers and suppliers who share our commitment to excellence. Our temperature-controlled 
                storage facilities ensure that products maintain their quality from our warehouse to your business.
              </p>
              
              <h3>Sustainability</h3>
              <p>
                We believe in responsible business practices. Our operations are designed to minimize waste, 
                and we actively promote eco-friendly packaging options. We work with suppliers who follow 
                sustainable practices and support local producers whenever possible.
              </p>
              
              <h3>Community Support</h3>
              <p>
                As a Kerala-based business, we're committed to supporting our local community. We prioritize 
                local suppliers, create employment opportunities, and contribute to the economic growth of 
                our region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
 
import Carousel from './components/Carousel'
import Testimonials from './components/Testimonials'

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Wholesale grocery warehouse',
    title: 'Soubhagya Traders',
    description: 'Leading wholesale grocer serving Kozhikode and beyond'
  },
  {
    src: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    alt: 'Fresh produce and groceries',
    title: 'Quality Products',
    description: 'Premium quality groceries for restaurants, stores, and supermarkets'
  },
  {
    src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Spices and condiments',
    title: 'Authentic Kerala Spices',
    description: 'Traditional spices and condiments from the heart of Kerala'
  },
  {
    src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80',
    alt: 'Delivery truck',
    title: 'Reliable Delivery',
    description: 'Timely delivery across Kerala with dedicated logistics team'
  }
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <Carousel images={carouselImages} />
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div>Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div>Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div>Products Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            We offer an extensive range of high-quality grocery products to meet the diverse needs of our clients
          </p>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">🌾</div>
              <h3>Staples</h3>
              <p>Rice, wheat, sugar, oil, pulses and other essential staples for your business needs</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🌶️</div>
              <h3>Spices & Condiments</h3>
              <p>A comprehensive variety of spices, curry masalas, and essential condiments</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">📦</div>
              <h3>Packaged Foods</h3>
              <p>Biscuits, snacks, noodles, and other convenience foods for retail</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">☕</div>
              <h3>Beverages</h3>
              <p>Tea, coffee, soft drinks, and more beverage options</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🧴</div>
              <h3>Personal Care</h3>
              <p>Soaps, detergents, and other daily essential products</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">➕</div>
              <h3>And Much More</h3>
              <p>We continuously expand our offerings to include new and in-demand products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Soubhagya Traders?</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏆</div>
              <h3>Quality Assurance</h3>
              <p>We maintain the highest standards of quality in all our products</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Reliable Delivery</h3>
              <p>Timely and dependable delivery services across the region</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best wholesale prices to help your business grow</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Trusted Partnership</h3>
              <p>Building long-term relationships with our valued clients</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/contact" className="btn">Get in Touch Today</a>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  )
}
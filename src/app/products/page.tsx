export default function Products() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">Comprehensive range of wholesale grocery products for your business</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">🌾</div>
              <h3>Staples & Grains</h3>
              <p><strong>Essential staples for every kitchen and food business</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Premium Basmati Rice - Various grades</li>
                <li>Regular Rice - Boiled and Raw varieties</li>
                <li>Wheat Flour - All-purpose and specialty flours</li>
                <li>Sugar - White, Brown, and Jaggery</li>
                <li>Cooking Oils - Coconut, Sunflower, Groundnut</li>
                <li>Pulses - Dal varieties, Chickpeas, Lentils</li>
                <li>Semolina, Vermicelli, and other grain products</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">🌶️</div>
              <h3>Spices & Condiments</h3>
              <p><strong>Authentic Kerala spices and condiments</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Traditional Kerala Spices - Cardamom, Pepper, Cloves</li>
                <li>Curry Powders and Masalas</li>
                <li>Turmeric, Coriander, Cumin powders</li>
                <li>Garam Masala and specialty spice blends</li>
                <li>Pickles and Chutneys</li>
                <li>Vinegar, Soy Sauce, and cooking sauces</li>
                <li>Salt - Table salt, Rock salt, Sea salt</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">📦</div>
              <h3>Packaged Foods</h3>
              <p><strong>Ready-to-eat and convenience foods</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Biscuits - Sweet, Savory, and Cream varieties</li>
                <li>Instant Noodles and Pasta</li>
                <li>Breakfast Cereals and Oats</li>
                <li>Snacks - Chips, Namkeen, Nuts</li>
                <li>Canned Foods - Vegetables, Fruits, Ready meals</li>
                <li>Bread, Rusk, and Bakery products</li>
                <li>Frozen Foods and Ready-to-cook items</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">☕</div>
              <h3>Beverages</h3>
              <p><strong>Hot and cold beverages for all preferences</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Tea - Assam, Darjeeling, Herbal varieties</li>
                <li>Coffee - Instant, Ground, and Beans</li>
                <li>Soft Drinks and Carbonated beverages</li>
                <li>Fruit Juices and Health drinks</li>
                <li>Energy Drinks and Sports beverages</li>
                <li>Drinking Water and Flavored water</li>
                <li>Traditional Drinks - Buttermilk powder, etc.</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">🧴</div>
              <h3>Personal Care & Hygiene</h3>
              <p><strong>Daily essentials for personal hygiene</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Bathing Soaps - Beauty and Medicated</li>
                <li>Shampoos and Hair care products</li>
                <li>Toothpaste and Oral care</li>
                <li>Laundry Detergents - Powder and Liquid</li>
                <li>Dish washing liquids and soaps</li>
                <li>Toilet papers and Tissues</li>
                <li>Sanitary products and Baby care items</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">🧽</div>
              <h3>Cleaning Supplies</h3>
              <p><strong>Professional cleaning and maintenance products</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Floor Cleaners and Disinfectants</li>
                <li>Glass and Surface cleaners</li>
                <li>Kitchen cleaning products</li>
                <li>Toilet and Bathroom cleaners</li>
                <li>Air Fresheners and Deodorizers</li>
                <li>Cleaning tools - Brushes, Mops, Cloths</li>
                <li>Industrial cleaning chemicals</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">🏠</div>
              <h3>Household Items</h3>
              <p><strong>Essential household and kitchen accessories</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Kitchen Utensils and Cookware</li>
                <li>Storage Containers and Boxes</li>
                <li>Aluminum Foil and Plastic wraps</li>
                <li>Disposable plates, cups, and cutlery</li>
                <li>Candles, Matches, and Lighters</li>
                <li>Batteries and Small electronics</li>
                <li>Stationery and Office supplies</li>
              </ul>
            </div>
            
            <div className="product-card">
              <div className="product-image">🎁</div>
              <h3>Seasonal & Special Items</h3>
              <p><strong>Festival and seasonal specialty products</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Festival Special items - Diwali, Christmas</li>
                <li>Wedding and Celebration supplies</li>
                <li>Import specialty products</li>
                <li>Organic and Health food products</li>
                <li>Premium and Gourmet items</li>
                <li>Bulk catering supplies</li>
                <li>Custom product sourcing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Product Quality & Standards</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✅</div>
              <h3>Quality Certified</h3>
              <p>All products meet FSSAI standards and carry proper certifications</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌡️</div>
              <h3>Proper Storage</h3>
              <p>Temperature-controlled warehouses ensure product freshness</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Fresh Stock</h3>
              <p>Regular inventory rotation ensures you get the freshest products</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Quality Checks</h3>
              <p>Rigorous quality inspection before dispatch to your location</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Bulk Ordering Benefits</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Volume Discounts</h3>
              <p>
                We offer attractive volume discounts for bulk orders. The more you order, the better 
                prices you get. Our tiered pricing structure ensures that your business gets the most 
                competitive rates in the market.
              </p>
              
              <h3>Custom Packaging</h3>
              <p>
                For large orders, we can provide custom packaging solutions to meet your specific 
                requirements. Whether you need smaller portion packs or larger bulk containers, 
                we can accommodate your needs.
              </p>
              
              <h3>Priority Service</h3>
              <p>
                Bulk order customers receive priority in our delivery schedule and get dedicated 
                customer service representatives to handle their accounts efficiently.
              </p>
            </div>
            
            <div className="about-highlights">
              <h3>Order Information</h3>
              <ul className="highlight-list">
                <li>Minimum order quantity varies by product</li>
                <li>Volume discounts start from ₹50,000 orders</li>
                <li>Free delivery for orders above ₹25,000</li>
                <li>Special rates for monthly contracts</li>
                <li>Credit terms available for verified businesses</li>
                <li>Emergency delivery available</li>
                <li>Product customization on request</li>
                <li>Regular price updates and catalogs</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/contact" className="btn">Request Product Catalog</a>
          </div>
        </div>
      </section>
    </>
  )
}
const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Malabar Restaurant",
    location: "Kozhikode",
    rating: 5,
    text: "Soubhagya Traders has been our reliable partner for over 5 years. Their quality products and timely delivery have helped us maintain consistency in our restaurant operations.",
    image: "https://via.placeholder.com/80x80/2c5530/white?text=RK"
  },
  {
    name: "Priya Menon",
    business: "Fresh Mart Supermarket",
    location: "Kannur",
    rating: 5,
    text: "The best wholesale grocer in Kerala! Their extensive product range and competitive pricing have significantly improved our profit margins. Highly recommended!",
    image: "https://via.placeholder.com/80x80/4a7c59/white?text=PM"
  },
  {
    name: "Mohammed Ali",
    business: "Spice Garden Hotel",
    location: "Wayanad",
    rating: 5,
    text: "Exceptional service and premium quality spices. Soubhagya Traders understands the hospitality industry's needs and delivers accordingly. Outstanding partnership!",
    image: "https://via.placeholder.com/80x80/2c5530/white?text=MA"
  },
  {
    name: "Lakshmi Nair",
    business: "Nair's Grocery Store",
    location: "Malappuram",
    rating: 5,
    text: "From staples to specialty items, they have everything we need. Their credit facilities and flexible payment terms have been crucial for our business growth.",
    image: "https://via.placeholder.com/80x80/4a7c59/white?text=LN"
  },
  {
    name: "Suresh Chandran",
    business: "College Canteen Services",
    location: "Kozhikode",
    rating: 5,
    text: "Bulk orders, timely delivery, and consistent quality - that's what makes Soubhagya Traders special. They've been supporting our institutional catering for years.",
    image: "https://via.placeholder.com/80x80/2c5530/white?text=SC"
  },
  {
    name: "Deepa Krishnan",
    business: "Organic Foods Co-op",
    location: "Kochi",
    rating: 5,
    text: "Their commitment to quality and sustainability aligns perfectly with our values. Great selection of organic products and excellent customer service.",
    image: "https://via.placeholder.com/80x80/4a7c59/white?text=DK"
  }
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers across Kerala
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-business">{testimonial.business}</p>
                  <p className="testimonial-location">📍 {testimonial.location}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div>Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div>Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div>Customer Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div>Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
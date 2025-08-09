import Link from 'next/link'
import MobileNav from './components/MobileNav'
import './globals.css'

export const metadata = {
  title: 'Soubhagya Traders - Wholesale Grocers Kozhikode',
  description: 'Leading wholesale grocer in Kozhikode, Kerala. Reliable supplier to restaurants, grocery stores, and supermarkets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="navbar">
            <div className="nav-container">
              <Link href="/" className="nav-logo">
                Soubhagya Traders
              </Link>
              <div className="nav-menu">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/products" className="nav-link">Products</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </div>
              
              <MobileNav />
            </div>
          </nav>
        </header>
        
        <main className="main">
          {children}
        </main>
        
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Soubhagya Traders</h3>
              <p>Leading wholesale grocer in Kozhikode, Kerala</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Kozhikode, Kerala</p>
              <p>Serving restaurants, grocery stores & supermarkets</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Soubhagya Traders. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
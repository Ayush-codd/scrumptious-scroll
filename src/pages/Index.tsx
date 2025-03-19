
import React from 'react';
import '../styles/Index.css';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      <nav className="side-nav">
        <div className="nav-logo">DB</div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About</a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => {
              e.preventDefault();
              scrollToSection('gallery');
            }}>Gallery</a>
          </li>
          <li>
            <a href="#recipes" onClick={(e) => {
              e.preventDefault();
              scrollToSection('recipes');
            }}>Recipes</a>
          </li>
          <li>
            <a href="#video" onClick={(e) => {
              e.preventDefault();
              scrollToSection('video');
            }}>Videos</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <header id="home" className="header">
          <h1>Welcome to Delicious Bites</h1>
          <p className="header-subtitle">Discover mouth-watering recipes, food inspiration, and cooking tips.</p>
          <a href="#recipes" className="btn header-btn" onClick={(e) => {
            e.preventDefault();
            scrollToSection('recipes');
          }}>Explore More</a>
        </header>

        <section id="about" className="section about-section">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>We share delicious recipes and cooking tips to make every meal special. Our team of chefs and food enthusiasts curate the best recipes from around the world to bring joy to your kitchen and delight to your table.</p>
            <p>Delicious Bites was founded with a simple mission: to make cooking enjoyable, accessible, and rewarding for everyone regardless of skill level.</p>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Delicious Dish" />
            </div>
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Tasty Dessert" />
            </div>
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Fresh Ingredients" />
            </div>
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="Cooking Process" />
            </div>
          </div>
        </section>

        <section id="recipes" className="section recipes-section">
          <h2 className="section-title">Recipes</h2>
          <div className="recipe-cards">
            <div className="recipe-card">
              <h3>Spaghetti Carbonara</h3>
              <p>A creamy pasta dish with eggs, cheese, pancetta, and pepper.</p>
              <a href="#" className="btn recipe-btn">View Recipe</a>
            </div>
            <div className="recipe-card">
              <h3>Grilled Chicken with Herbs</h3>
              <p>Tender chicken marinated in fresh herbs and grilled to perfection.</p>
              <a href="#" className="btn recipe-btn">View Recipe</a>
            </div>
            <div className="recipe-card">
              <h3>Chocolate Lava Cake</h3>
              <p>Rich chocolate cake with a molten chocolate center.</p>
              <a href="#" className="btn recipe-btn">View Recipe</a>
            </div>
          </div>
        </section>

        <section id="video" className="section video-section">
          <h2 className="section-title">Cooking Videos</h2>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/V1n5bfJqzIU" frameBorder="0" allowFullScreen title="Cooking video"></iframe>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <p>Email us at: <a href="mailto:food@deliciousbites.com">food@deliciousbites.com</a></p>
            <p>Follow us on social media for daily recipe inspiration.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">YT</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Delicious Bites. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

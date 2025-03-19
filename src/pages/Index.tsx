
import React, { useState } from 'react';
import '../styles/Index.css';

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const foodItems = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
      description: "A creamy pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["400g spaghetti", "200g pancetta", "4 large eggs", "100g Parmesan cheese", "Freshly ground black pepper", "Salt"],
      instructions: [
        "Cook spaghetti according to package instructions until al dente.",
        "While pasta is cooking, fry pancetta in a large pan until crispy.",
        "In a bowl, whisk eggs and grated Parmesan together.",
        "Once pasta is cooked, reserve 1/2 cup of pasta water and drain.",
        "Working quickly, add hot pasta to the pancetta pan, remove from heat.",
        "Add the egg mixture, tossing constantly with tongs until creamy.",
        "Add pasta water as needed to achieve desired consistency.",
        "Season with freshly ground black pepper and serve immediately."
      ]
    },
    {
      id: 2,
      name: "Grilled Chicken with Herbs",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
      description: "Tender chicken marinated in fresh herbs and grilled to perfection.",
      ingredients: ["4 chicken breasts", "3 tbsp olive oil", "2 garlic cloves, minced", "1 tbsp fresh rosemary, chopped", "1 tbsp fresh thyme, chopped", "1 lemon, juiced", "Salt and pepper to taste"],
      instructions: [
        "In a bowl, mix olive oil, garlic, herbs, lemon juice, salt, and pepper.",
        "Place chicken in a ziplock bag and pour marinade over it.",
        "Seal and refrigerate for at least 2 hours, or overnight for best results.",
        "Preheat grill to medium-high heat.",
        "Grill chicken for 6-7 minutes per side until internal temperature reaches 165°F.",
        "Let rest for 5 minutes before serving."
      ]
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      description: "Rich chocolate cake with a molten chocolate center.",
      ingredients: ["200g dark chocolate", "120g unsalted butter", "3 eggs", "3 egg yolks", "100g sugar", "40g flour", "Cocoa powder for dusting", "Vanilla ice cream (optional)"],
      instructions: [
        "Preheat oven to 400°F. Butter and dust 6 ramekins with cocoa powder.",
        "Melt chocolate and butter together in a double boiler.",
        "In a separate bowl, whisk eggs, egg yolks, and sugar until pale.",
        "Fold chocolate mixture into egg mixture, then fold in flour.",
        "Fill ramekins 3/4 full with batter.",
        "Bake for 12-14 minutes until edges are firm but center is soft.",
        "Let cool for 1 minute, then invert onto serving plates.",
        "Serve immediately with vanilla ice cream if desired."
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    document.body.classList.add('recipe-open');
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
    document.body.classList.remove('recipe-open');
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
            <a href="#food-items" onClick={(e) => {
              e.preventDefault();
              scrollToSection('food-items');
            }}>Food Items</a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => {
              e.preventDefault();
              scrollToSection('gallery');
            }}>Gallery</a>
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
          <a href="#food-items" className="btn header-btn" onClick={(e) => {
            e.preventDefault();
            scrollToSection('food-items');
          }}>View Food Items</a>
        </header>

        <section id="about" className="section about-section">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>We share delicious recipes and cooking tips to make every meal special. Our team of chefs and food enthusiasts curate the best recipes from around the world to bring joy to your kitchen and delight to your table.</p>
            <p>Delicious Bites was founded with a simple mission: to make cooking enjoyable, accessible, and rewarding for everyone regardless of skill level.</p>
          </div>
        </section>

        <section id="food-items" className="section food-items-section">
          <h2 className="section-title">Food Items</h2>
          <p className="section-description">Click on any food item to view its recipe</p>
          <div className="food-items-grid">
            {foodItems.map((item) => (
              <div key={item.id} className="food-item" onClick={() => openRecipe(item)}>
                <div className="food-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3 className="food-item-name">{item.name}</h3>
                <p className="food-item-description">{item.description}</p>
                <button className="btn recipe-btn">View Recipe</button>
              </div>
            ))}
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

      {selectedRecipe && (
        <div className="recipe-modal">
          <div className="recipe-modal-content">
            <button className="recipe-close-btn" onClick={closeRecipe}>×</button>
            <div className="recipe-modal-header">
              <h2>{selectedRecipe.name}</h2>
              <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            </div>
            <div className="recipe-modal-body">
              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

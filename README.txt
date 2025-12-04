================================================================================
                    LITTLE LEMON RESTAURANT WEBSITE
                         Project Documentation
================================================================================

PROJECT OVERVIEW
================================================================================
Little Lemon is a Mediterranean restaurant website built with HTML5 and CSS3.
The site showcases the restaurant's menu, allows table reservations, and 
provides information about the restaurant.

Project Location: c:\Users\md\OneDrive\Desktop\front end project\

FILES & STRUCTURE
================================================================================
├── index.html                    (Home/Landing page)
├── menu.html                     (Menu with items & prices in INR)
├── book.html                     (Table reservation form)
├── about.html                    (Restaurant information)
├── style.css                     (All styling & animations)
├── images/                       (Folder containing all images)
└── README.txt                    (This file)

FEATURES
================================================================================
✓ Responsive design (works on desktop, tablet, mobile)
✓ Animated image slider on home page
✓ Dynamic menu with hover effects
✓ Table reservation form
✓ Restaurant about page
✓ Modern color scheme (Green + Peach)
✓ Smooth animations & transitions

COLOR SCHEME
================================================================================
Primary Green:     #495E57    (Headers, nav, buttons)
Accent Peach:      #EE9972    (Links, prices, hover states)
Light Background:  #EDEFEE    (Footer, light elements)
Dark Text:         #333       (Body text)
Overlay Dark:      #000000    (Image overlays)

FONTS
================================================================================
Heading Font:      'Markazi Text' (Serif, elegant)
Body Font:         'Karla'        (Sans-serif, clean)
Font Sizes:
  - h1: 3rem (headings), 4rem (slider)
  - h2: 2.5rem
  - p, ul: 1.25rem

================================================================================
                              PAGE DETAILS
================================================================================

1. INDEX.HTML - HOME PAGE
================================================================================
File: c:\Users\md\OneDrive\Desktop\front end project\index.html

PURPOSE:
Landing page with promotional content and restaurant introduction

SECTIONS:
- Header: Logo centered at top
- Navigation: Links to Home, Menu, Book, About
- Promotion Slider: 4 rotating slides with animations
  * Slide 1: "Little Lemon" + "Chicago"
  * Slide 2: "30% Off Pasta" + "This week only"
  * Slide 3: "Book a Table" + "Experience Mediterranean flavors"
  * Slide 4: "Fresh Food" + "Traditional Recipes"
- Main Content: Welcome message + "View Menu" button
- Footer: Logo + Copyright notice

SLIDER ANIMATION:
- 20-second animation cycle per slide
- Each slide has a 5-second offset (0s, 5s, 10s, 15s)
- Fade-in effect: 0% → 10% opacity
- Visible: 10% → 30% opacity
- Fade-out: 30% → 40% opacity
- Dark overlay gradient makes text readable

HTML CODE:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Little Lemon - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="images/little-lemon-grey-logo2_header.png" alt="Little Lemon Logo">
    </header>

    <nav>
       <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <div class="promotion">
        <div class="slide">
            <div class="slide-content">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
            </div>
        </div>
        <div class="slide">
            <div class="slide-content">
                <h1>30% Off Pasta</h1>
                <p>This week only</p>
            </div>
        </div>
        <div class="slide">
            <div class="slide-content">
                <h1>Book a Table</h1>
                <p>Experience Mediterranean flavors</p>
            </div>
        </div>
        <div class="slide">
            <div class="slide-content">
                <h1>Fresh Food</h1>
                <p>Traditional Recipes</p>
            </div>
        </div>
    </div>

    <main style="text-align: center;">
        <h2>Welcome to Little Lemon</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <br>
        <a href="menu.html" class="cta-button" style="width: 200px;">View Menu</a>
    </main>

    <footer>
        <img src="images/footer_logo.png" alt="Logo">
        <div>Copyright Little Lemon</div>
    </footer>
</body>
</html>

================================================================================

2. MENU.HTML - MENU PAGE
================================================================================
File: c:\Users\md\OneDrive\Desktop\front end project\menu.html

PURPOSE:
Display all restaurant menu items with images, descriptions, and prices in INR

MENU ITEMS (6 total):
1. Greek Salad           ₹1,078   (Lettuce, peppers, olives, feta cheese)
2. Bruschetta           ₹664     (Grilled bread with garlic)
3. Grilled Fish         ₹1,494   (Fish with lemon butter sauce)
4. Lemon Dessert        ₹415     (Grandma's recipe)
5. Classic Burger       ₹1,204   (Beef patty with secret sauce)
6. Creamy Garlic Pasta  ₹914     (Garlic cream sauce)

LAYOUT:
- Responsive grid: 3 columns (desktop), 1 column (mobile)
- 30px gap between items
- Each card has 200px image, rounded corners, hover lift effect

HTML CODE:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Little Lemon - Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <header>
        <img src="images/little-lemon-grey-logo2_header.png" alt="Little Lemon Logo">
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <main>
        <h1 style="text-align: center;">Our Menu</h1>

        <div class="items">
            <div class="menu-item-card">
                <img src="images\quick-easy-greek-pasta-salad.jpg" alt="Pasta">
                <div class="item-text">
                    <h3>Greek Salad</h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                    <span class="menu-price">₹1,078</span>
                </div>
            </div>

            <div class="menu-item-card">
                <img src="images\bruschetta-17-1200.jpg" alt="Bruschetta">
                <div class="item-text">
                    <h3>Bruschetta</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt.</p>
                    <span class="menu-price">₹664</span>
                </div>
            </div>

            <div class="menu-item-card">
                <img src="images\grilled_fiah.jpeg" alt="Grilled Fish">
                <div class="item-text">
                    <h3>Grilled Fish</h3>
                    <p>Fresh fish grilled to perfection with lemon butter sauce and a side of vegetables.</p>
                    <span class="menu-price">₹1,494</span>
                </div>
            </div>

            <div class="menu-item-card">
                <img src="images\Lemon-Pretzel-Dessert-Recipe.png" alt="Lemon Dessert">
                <div class="item-text">
                    <h3>Lemon Dessert</h3>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced.</p>
                    <span class="menu-price">₹415</span>
                </div>
            </div>

            <div class="menu-item-card">
                <img src="images\burger.png" alt="Burger">
                <div class="item-text">
                    <h3>Classic Burger</h3>
                    <p>Juicy beef patty with fresh lettuce, tomato, and our secret sauce.</p>
                    <span class="menu-price">₹1,204</span>
                </div>
            </div>
            
             <div class="menu-item-card">
                <img src="images\Creamy-garlic-pasta.jpg" alt="Pasta">
                <div class="item-text">
                    <h3>Creamy Garlic Pasta</h3>
                    <p>Silky pasta tossed in a rich, velvety garlic cream sauce, finished with a hint of parmesan and fresh herbs. Comforting, flavorful, and irresistibly smooth — a perfect choice for pasta lovers.</p>
                    <span class="menu-price">₹914</span>
                </div>
            </div>
        </div>
    </main>

     <footer>
        <img src="images/footer_logo.png" alt="Logo">
        <div>Copyright Little Lemon</div>
    </footer>
</body>
</html>

================================================================================

3. BOOK.HTML - RESERVATION PAGE
================================================================================
File: c:\Users\md\OneDrive\Desktop\front end project\book.html

PURPOSE:
Allow customers to make table reservations

FORM FIELDS:
- First Name (text input)
- Last Name (text input)
- Email (email input)
- Date (date picker)
- Number of Guests (dropdown: 1, 2, 3, 4, 5+ People)
- Comments (textarea, 4 rows)
- Book Table button

FUNCTIONALITY:
- Resets form after submission
- Shows alert: "Table Booked!"

HTML CODE:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Little Lemon - Book</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
        <img src="images/little-lemon-grey-logo2_header.png" alt="Little Lemon Logo">
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <main>
        <h1 style="text-align: center;">Make a Reservation</h1>
        
        <form >
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" placeholder="Your Name" required>

            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" placeholder="Your Last Name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
            
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>

            <label for="guests">Number of Guests:</label>
            <select id="guests" name="guests">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
            </select>

            <label for="comments">Comments:</label>
            <textarea id="comments" rows="4"></textarea>

            <button type="button" onclick="document.querySelector('form').reset(); alert('Table Booked!')">Book Table</button>       
        </form>
    </main>

     <footer>
        <img src="images/footer_logo.png" alt="Logo">
        <div>Copyright Little Lemon</div>
    </footer>
</body>
</html>

================================================================================

4. ABOUT.HTML - ABOUT PAGE
================================================================================
File: c:\Users\md\OneDrive\Desktop\front end project\about.html

PURPOSE:
Share restaurant background, mission, and featured image

LAYOUT:
- Two-column flex layout (text left, image right)
- Responsive: Stacks on mobile (flex-wrap: wrap)

CONTENT:
- Title: "About Us"
- Description of Little Lemon's mission (Mediterranean, family-owned)
- Feature image with 10px border radius

HTML CODE:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Little Lemon - About</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="images/little-lemon-grey-logo2_header.png" alt="Little Lemon Logo">
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <main>
        <h1 style="text-align: center;">About Us</h1>
        
        <div style="display: flex; gap: 40px; margin-top: 30px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
                    The restaurant features a locally-sourced menu with daily specials.
                </p>
                <p>
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <div style="flex: 1;">
                <img src="images/about us.jpeg" style="width: 100%; border-radius: 10px;" alt="Chef">
            </div>
        </div>
    </main>

     <footer>
        <img src="images/footer_logo.png" alt="Logo">
        <div>Copyright Little Lemon</div>
    </footer>
</body>
</html>

================================================================================
                              CSS STYLING
================================================================================

File: c:\Users\md\OneDrive\Desktop\front end project\style.css

SECTION 1: CORE FONTS & COLORS
================================================================================
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Markazi+Text:wght@400;500&display=swap');

/* Body Layout - Flexbox for full-page layout */
body {
    font-family: 'Karla', sans-serif;
    margin: 0;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Headings - Use Markazi Text for elegance */
h1, h2, h3, h4 {
    font-family: 'Markazi Text', serif;
    letter-spacing: 1px;
}

/* Font Sizing */
h1 { font-size: 3rem; margin-top: 1rem; margin-bottom: 0; color: #495E57; }
h2 { font-size: 2.5rem; color: #333333; margin: 1rem 0; }
p, ul { font-size: 1.25rem; }

/* Link Colors */
a { color: #EE9972; text-decoration: none; }
a:hover { text-decoration: underline; }

SECTION 2: HEADER & NAVIGATION
================================================================================
/* Header - Center logo */
header { 
    padding-top: 20px; 
    text-align: center; 
}
header img { 
    max-width: 300px; 
    height: auto; 
    display: block; 
    margin: 0 auto; 
}

/* Navigation Bar - Green background */
nav {
    background-color: #495E57;
    margin-top: 1rem;
    padding: 10px 0;
}

nav ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
}

/* Nav Items - Horizontal layout */
nav ul li { 
    display: inline-block; 
    margin: 0 1rem; 
}
nav ul a { 
    color: #EDEFEE; 
    text-decoration: none; 
    font-size: 1.5rem; 
}
nav ul a:hover { 
    color: #EE9972; 
    text-decoration: underline; 
}

SECTION 3: ANIMATED SLIDER (HERO)
================================================================================
/* Promotion Container */
.promotion {
    position: relative;
    height: 400px;
    overflow: hidden;
    background-color: #333;
    margin-bottom: 2rem;
}

/* Individual Slides */
.slide {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: fade 20s infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* Dark Overlay - Gradient for readability */
.slide::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(73, 94, 87, 0.7));
    z-index: 1;
}

/* Slide Content - Text on top */
.slide-content {
    position: relative;
    z-index: 2;
    text-shadow: 2px 2px 4px #000;
}

.slide-content h1 { 
    color: #EDEFEE; 
    font-size: 4rem; 
    margin: 0; 
}
.slide-content p { 
    font-size: 2rem; 
    color: #EDEFEE; 
    margin: 10px 0 0 0; 
}

/* Fade Animation - 20 second cycle */
@keyframes fade {
  0%   { opacity: 0; }
  10%  { opacity: 1; }
  30%  { opacity: 1; }
  40%  { opacity: 0; }
  100% { opacity: 0; }
}

/* Slide Background Images with Timing */
.slide:nth-child(1) { animation-delay: 0s; background-image: url('images/salaad.jpeg'); }
.slide:nth-child(2) { animation-delay: 5s; background-image: url('images/cake.jpeg'); }
.slide:nth-child(3) { animation-delay: 10s; background-image: url('images/noodelse.jpeg'); }
.slide:nth-child(4) { animation-delay: 15s; background-image: url('images/burger.jpeg'); }

SECTION 4: LAYOUT & MENU GRID
================================================================================
/* Main Container - Centered, flexible */
main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
}

/* Menu Grid - 3 columns, responsive */
.items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;
}

/* Menu Card - Rounded, shadow, hover effect */
.menu-item-card {
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s;
}

.menu-item-card:hover { 
    transform: translateY(-5px); 
}

/* Card Image - 200px height with cover fit */
.menu-item-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* Card Text Content - Centered */
.item-text { 
    padding: 15px; 
    text-align: center; 
}

/* Price Display - Peach color, bold */
.menu-price {
    display: block;
    font-size: 1.4rem;
    color: #EE9972;
    font-weight: bold;
    margin-top: 10px;
}

SECTION 5: FORMS & BUTTONS
================================================================================
/* Form Container - Max width for readability */
form { 
    max-width: 600px; 
    margin: 0 auto; 
}

/* Form Labels - Bold, block display */
label { 
    font-weight: bold; 
    display: block; 
    margin-top: 15px; 
    margin-bottom: 5px; 
}

/* Form Inputs - Full width, consistent styling */
input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
}

/* Buttons - Green background, peach hover */
button, .cta-button {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #495E57;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
}

button:hover, .cta-button:hover {
    background-color: #EE9972;
    color: #333;
}

SECTION 6: FOOTER
================================================================================
/* Footer - Light background, space between */
footer {
    background-color: #EDEFEE;
    padding: 2rem;
    margin-top: 3rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer img { 
    width: 80px; 
}

SECTION 7: RESPONSIVE DESIGN (Mobile)
================================================================================
@media (max-width: 768px) {
    /* Menu Grid - 1 column on mobile */
    .items { 
        grid-template-columns: 1fr; 
    }
    
    /* Navigation - Stack vertically */
    nav ul { 
        display: flex; 
        flex-direction: column; 
    }
    nav ul li { 
        margin: 8px 0; 
    }
    
    /* Footer - Stack vertically */
    footer { 
        flex-direction: column; 
        gap: 20px; 
    }
}

================================================================================
                            GETTING STARTED
================================================================================

1. FILE SETUP
   - Ensure all HTML files are in the same directory
   - Create an 'images' folder with all image files
   - Link style.css in each HTML file's <head>

2. OPENING THE WEBSITE
   - Open index.html in a web browser
   - Navigate between pages using the nav menu
   - Test on different screen sizes (responsive design)

3. REQUIRED IMAGES
   - little-lemon-grey-logo2_header.png
   - footer_logo.png
   - quick-easy-greek-pasta-salad.jpg
   - bruschetta-17-1200.jpg
   - grilled_fiah.jpeg
   - Lemon-Pretzel-Dessert-Recipe.png
   - burger.png
   - Creamy-garlic-pasta.jpg
   - salaad.jpeg (slider)
   - cake.jpeg (slider)
   - noodelse.jpeg (slider)
   - burger.jpeg (slider)
   - about us.jpeg

4. BROWSER COMPATIBILITY
   - Modern browsers (Chrome, Firefox, Safari, Edge)
   - Responsive: Desktop, Tablet, Mobile

================================================================================
                          CUSTOMIZATION TIPS
================================================================================

CHANGE COLORS:
- Primary Green: Update #495E57 in nav, headers, buttons
- Accent Peach: Update #EE9972 in links, prices, hover states
- Search & replace in style.css for consistency

UPDATE PRICES:
- Edit .menu-price values in menu.html
- Use rupee symbol ₹ for INR

ADD NEW MENU ITEMS:
- Copy a .menu-item-card div in menu.html
- Update image src, title, description, price
- Grid auto-adjusts

MODIFY SLIDER:
- Change animation timings in @keyframes fade
- Adjust animation-delay values for sync
- Replace background-image URLs

CHANGE FONTS:
- Update @import URL for different Google Fonts
- Modify font-family values in CSS

================================================================================
                              VERSION INFO
================================================================================
Created: December 2025
Last Updated: December 4, 2025
Status: Active
Pricing: INR (Indian Rupees)

================================================================================
                         END OF DOCUMENTATION
================================================================================

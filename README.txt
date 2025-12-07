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

================================================================================
                              CSS STYLING
================================================================================






---

## 🎨 Styling & Design (style.css)

The project’s styling is handled through a dedicated `style.css` file, which defines the overall look and feel of the Little Lemon Restaurant website. Key aspects include:

Fonts & Colors
  - Imported Google Fonts: *Markazi Text* for headings (elegant serif) and *Karla* for body text (clean sans‑serif).
  - Consistent color scheme:  
    - Primary Green `#495E57` for headers, nav, and buttons.  
    - Accent Peach `#EE9972` for links, prices, and hover states.  
    - Light background `#EDEFEE` for footer and sections.  
    - Dark text `#333` for readability.

Header & Navigation
  - Centered logo in the header.  
  - Responsive navigation bar with horizontal layout on desktop and vertical stacking on mobile.  
  - Hover effects for links to improve interactivity.

Hero Section (Animated Slider)
  - Full‑width promotional slider with four rotating slides.  
  - Smooth fade‑in/fade‑out animation cycle (20 seconds).  
  - Dark overlay gradient for text readability.  
  - Large, elegant headings and subtext styled for emphasis.

Layout & Menu Grid
  - Main content area centered with max width for readability.  
  - Menu items displayed in a responsive grid (3 columns desktop, 1 column mobile).  
  - Menu cards styled with rounded corners, shadows, and hover lift effect.  
  - Images fit neatly with `object-fit: cover`.

- Forms & Buttons
  - Reservation form styled for clarity and accessibility.  
  - Inputs, selects, and textareas with consistent padding and borders.  
  - Buttons styled with green background and peach hover effect, ensuring strong call‑to‑action visibility.

Footer
  - Light background footer with logo and copyright.  
  - Flexbox layout for spacing, stacking vertically on mobile.

Responsive Design
  - Mobile‑friendly adjustments using media queries.  
  - Navigation and footer stack vertically on smaller screens.  
  - Menu grid collapses to a single column for readability.

---


---



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
                         END OF DOCUMENTATION
================================================================================

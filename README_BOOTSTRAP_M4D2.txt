AFTERGLOW VINTAGE — M4D2 BOOTSTRAP FRAMEWORK

The Shop page (shop.html) now uses Bootstrap 5's responsive grid:
  row g-4                 = row with spacing between cards
  col-12                  = 1 card per row on small screens
  col-md-6                = 2 cards per row on medium screens
  col-lg-4                = 3 cards per row on large screens
  h-100                   = matching card heights

Bootstrap CSS loads before the existing style.css, so the shop retains
its custom burgundy/mustard/burnt-orange styling. Other pages are unchanged.

HOW TO TEST
1. Open shop.html in a browser with an internet connection.
2. Resize the browser: large = 3 columns; medium = 2; narrow = 1.
3. Open index.html and test the jQuery mobile menu as before.

PROS: responsive layout with less custom grid CSS; reusable classes.
CONS: extra dependency; Bootstrap defaults may conflict with custom styles.
The Bootstrap stylesheet is hosted online and requires internet access.

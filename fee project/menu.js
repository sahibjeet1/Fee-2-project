// ------------------------------------------------------------------
// JAVASCRIPT: Menu Tab Filtering, Dynamic Section Titles, and Add to Cart Notification
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const menuCards = document.querySelectorAll('.menu-card');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const orderOverlays = document.querySelectorAll('.menu-overlay');
    const sectionTitles = document.querySelectorAll('.section-title');
    const cartNotification = document.getElementById('cart-notification');

    // --- Utility Function for Filtering and Display ---
    function showCategory(category) {
        let delay = 0;
        
        // 1. Hide all titles first
        sectionTitles.forEach(title => title.style.display = 'none');

        menuCards.forEach(card => {
            // Reset state for animation reset
            card.classList.remove('show');
            card.style.display = 'none'; 

            if (category === 'all' || card.getAttribute('data-category') === category) {
                // Show the item with a staggered delay
                card.style.display = 'block';
                
                // Use a short timeout to ensure the browser registers the display:none/block change before applying 'show'
                setTimeout(() => {
                    card.classList.add('show');
                }, delay);
                
                delay += 80; // Staggered animation delay
            }
        });

        // 2. Show the corresponding section title, but only if not showing 'all'
        if (category !== 'all') {
            const categoryTitle = document.querySelector(`[data-category-title="${category}"]`);
            if (categoryTitle) {
                categoryTitle.style.display = 'block'; 
            }
        }

        // 3. Scroll up slightly to view the newly filtered menu
        const targetElement = document.querySelector('.category-nav');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    }

    // --- Initial Load ---
    // 1. Ensure all cards start invisible (opacity: 0, translateY(20px)) per CSS transition rules.
    // 2. Call showCategory('all') with a small delay to trigger the initial 'show' animation.
    setTimeout(() => {
        showCategory('all');
    }, 100);


    // --- Tab Click Handler ---
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Update active state on buttons
            categoryButtons.forEach(btn => btn.classList.remove('active-tab'));
            this.classList.add('active-tab');

            // Filter and show the menu items
            showCategory(category);
        });
    });

    // --- "Add to Cart" Notification Handler (Simulated Fetch/AJAX Interaction) ---
    orderOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            e.stopPropagation(); 
            
            // Get the food item name
            const card = this.closest('.menu-card');
            const h3 = card.querySelector('.menu-info h3');
            // Get the text content before the first child (which is the name, not the price span)
            const itemName = h3.firstChild.textContent.trim(); 


            // --- Simplified Logic for this static HTML file ---
            cartNotification.textContent = `✅ ${itemName} added to cart!`;
            cartNotification.classList.add('show');

            // Hide notification after 3 seconds
            setTimeout(() => {
                cartNotification.classList.remove('show');
            }, 3000);
        });
    });

});

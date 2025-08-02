document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load sidebar content
        const response = await fetch('components/sidebar.html');
        const sidebarHtml = await response.text();
        
        // Insert sidebar
        document.getElementById('sidebar-container').innerHTML = sidebarHtml;
        
        // Get current page name from URL or data attribute
        const currentPage = document.body.getAttribute('data-page');
        
        // Set active class
        if (currentPage) {
            const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
});

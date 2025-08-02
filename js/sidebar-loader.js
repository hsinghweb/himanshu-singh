document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load sidebar content
        const response = await fetch('/components/sidebar.html');
        const sidebarHtml = await response.text();
        
        // Insert sidebar
        document.getElementById('sidebar-container').innerHTML = sidebarHtml;
        
        // Get current page
        const pagePath = window.location.pathname;
        const pageName = pagePath.split('/').pop().replace('.html', '');
        
        // Set active class
        const activeLink = document.querySelector(`[data-page="${pageName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
});

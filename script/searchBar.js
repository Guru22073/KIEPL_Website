const pages = [
    { name: "Home", url: "index.html" },
    { name: "Client Hindalco(Smelter)", url: "hindalco(smelter).html" },
    { name: "Growth", url: "growth.html" },
    { name: "Company Details", url: "companydetails.html" },
    { name: "Activity", url: "activity.html" },
    { name: "Key Resources", url: "keyresources.html" },
    { name: "Manpower Strength", url: "manpower.html" },
    { name: "HIL (Smelter) Purchase", url: "HIL (Smelter) Purchase.html" },
    { name: "Contact", url: "contactus.html" },
    { name: "leader", url: "leaders.html"},
    { name: "Team", url: "contactuspage.htm"}
];

function toggleSearch(type = 'main') {
    const container = type === 'main' ? 
        document.querySelector('.header .search-container') : 
        document.querySelector('.side-bar .search-container');
    
    const input = container.querySelector('input');
    input.classList.toggle('active');
    if (input.classList.contains('active')) {
        input.focus();
    }
}

document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleSearch();
    }
});

function setupSearch(inputId, buttonId, resultsId) {
    const searchInput = document.getElementById(inputId);
    const searchButton = document.getElementById(buttonId);
    const searchResults = document.getElementById(resultsId);

    function performSearch(query) {
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query.toLowerCase()));
        if (filteredPages.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = filteredPages.map(page => 
                `<a href="${page.url}" onclick="window.location.href='${page.url}'; return false;">${page.name}</a>`
              ).join('');
            searchResults.style.display = 'block';
        }
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        performSearch(query);
    });

    
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query.toLowerCase()));
        if (filteredPages.length > 0) {
            window.location.href = filteredPages[0].url;
        }
    });
    
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            console.log('Enter pressed, navigating to first result');
            const firstResult = searchResults.querySelector('a');
            if (firstResult) {
                console.log('Navigating to:', firstResult.href);
                window.location.href = firstResult.href;
            }
        }
    });
    
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            this.classList.remove('active');
        }
    });

    document.addEventListener('click', function(event) {
        const isSearchContainer = event.target.closest('.search-container');
        if (!isSearchContainer) {
            searchInput.classList.remove('active');
            searchResults.style.display = 'none';
        }
    });
}

setupSearch('main-search', 'main-search-button', 'search-results');

setupSearch('sidebar-search', 'sidebar-search-button', 'sidebar-search-results');
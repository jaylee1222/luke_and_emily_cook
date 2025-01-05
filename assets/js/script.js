// JavaScript to toggle the sidebar
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');  // Toggle sidebar visibility
    mainContent.classList.toggle('active');  // Shift content accordingly
});

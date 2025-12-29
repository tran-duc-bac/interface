
// Hàm để load file HTML
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Gọi hàm load
loadComponent('header-placeholder', 'header.html');
loadComponent('footer-placeholder', 'footer.html');
loadComponent('sidebar-placeholder', 'sidebar.html');


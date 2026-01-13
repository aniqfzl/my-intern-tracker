document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav>
            <div class="logo"><i class="fas fa-briefcase"></i> InternPath</div>
            <a href="index.html" class="nav-link" id="nav-index"><i class="fas fa-chart-pie"></i> Dashboard</a>
            <a href="companies.html" class="nav-link" id="nav-companies"><i class="fas fa-building"></i> Companies</a>
            <a href="interviews.html" class="nav-link" id="nav-interviews"><i class="fas fa-calendar-check"></i> Interviews</a>
            <a href="profile.html" class="nav-link" id="nav-profile"><i class="fas fa-user-circle"></i> Profile</a>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    const page = window.location.pathname.split("/").pop() || "index.html";
    const activeId = "nav-" + page.replace(".html", "");
    if (document.getElementById(activeId)) document.getElementById(activeId).classList.add("active");
});
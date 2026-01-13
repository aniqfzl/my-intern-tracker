// db.js
const SUPABASE_URL = 'https://your-project-url.supabase.co';
const SUPABASE_KEY = 'your-anon-key-here';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Shared function to update stats on the dashboard
async function updateGlobalStats() {
    const { data, error } = await supabaseClient.from('internships').select('*');
    if (data) {
        if (document.getElementById('totalCount')) document.getElementById('totalCount').innerText = data.length;
        if (document.getElementById('appliedCount')) document.getElementById('appliedCount').innerText = data.filter(i => i.status === 'applied').length;
        if (document.getElementById('rejectedCount')) document.getElementById('rejectedCount').innerText = data.filter(i => i.status === 'rejected').length;
    }
}
// db.js (Add this at the bottom)
async function checkUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    // If no user is logged in and we aren't already on the login page, redirect
    if (!user && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

checkUser();

// Function to logout
async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}

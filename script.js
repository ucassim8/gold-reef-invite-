// 1. PAGE NAVIGATION LOGIC
function openInvite() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainDashboard = document.getElementById('main-dashboard');
    
    // Smooth transition
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainDashboard.classList.remove('hidden');
        // Start counting down immediately once dashboard shows
        startCountdown();
    }, 400);
}

// 2. DYNAMIC COUNTDOWN TIMER
function startCountdown() {
    // Target Date: August 22, 2026 at 09:00 AM (Theme park opening time)
    const targetDate = new Date('August 22, 2026 09:00:00').getTime();

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');

        // If the date has arrived
        if (difference < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "It's Date Day! 🎢✨";
            return;
        }

        // Display the results dynamically
        countdownElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

// 3. SPECIAL REQUEST FORM HANDLER
document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const rideStyle = document.getElementById('rides').value;
    const snacks = document.getElementById('snacks').value;
    const notes = document.getElementById('notes').value;
    
    // For now, let's give her a beautiful alert confirmation
    alert(`✨ Requests Saved! ✨\n\nRide Choice: ${rideStyle === 'thrill' ? 'Thrill Seeker! 🎢' : 'Relaxed & Fun 🎡'}\nSnacks: ${snacks || 'None requested'}\nNotes: ${notes || 'None'}\n\nCan't wait for our date!`);
    
    // Optional: Reset form after submit
    this.reset();
});

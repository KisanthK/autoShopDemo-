document.getElementById('autoContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.garage-btn');
    const success = document.getElementById('successMsg');

    // Simulate form processing
    btn.textContent = "PROCESSING...";
    
    setTimeout(() => {
        btn.style.display = "none";
        success.classList.remove('hidden');
        this.reset();
    }, 2000);
});
const featureItems = document.querySelectorAll('.feature');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkVisibility() {
    featureItems.forEach((item, index) => {
        if (isInViewport(item)) {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

window.addEventListener('load', function() {
    const notification = document.getElementById('dev-notification');
    notification.style.display = 'block';
    
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
});

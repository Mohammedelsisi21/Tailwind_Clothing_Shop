const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});
const linkss = document.querySelectorAll('#mobile-menu a');
linkss.forEach(link => {
    link.addEventListener('click', function() {
        linkss.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});
const items = document.querySelector('.carousel-items');
const indicators = document.querySelectorAll('.indicator');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('bg-red-600');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-red-600');
        }
    });
}

function moveToNext() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    items.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function moveToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    items.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

document.getElementById('next').addEventListener('click', moveToNext);
document.getElementById('prev').addEventListener('click', moveToPrev);

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        items.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
    });
});

setInterval(moveToNext, 6000);

updateIndicators();

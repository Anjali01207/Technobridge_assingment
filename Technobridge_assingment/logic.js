// Tabs Functionality
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        contents.forEach((content) => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Accordion Functionality
const accordions = document.querySelectorAll('.accordion-button');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const content = accordion.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

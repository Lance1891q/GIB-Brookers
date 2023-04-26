window.addEventListener('scroll', () => {
    document.querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0)
});

const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
    selectElement('.menu-icons').classList.toggle('color-change');
    selectElement('body').classList.toggle('hidden');
});
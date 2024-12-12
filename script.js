
let currentScreen = 'home-screen';

const navigateTo = (screenId) => {
    document.getElementById(currentScreen).classList.remove('active');
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
};

const saveEntry = () => {
    const entry = document.getElementById('journal-entry').value;
    if (entry.trim()) {
        const journalEntries = document.getElementById('journal-entries');
        const newEntry = document.createElement('div');
        newEntry.textContent = entry;
        journalEntries.appendChild(newEntry);
        document.getElementById('journal-entry').value = '';
    }
};

const loadArticles = () => {
    const articles = [
        { id: '1', title: 'Was ist Gaslighting?' },
        { id: '2', title: 'Warum isolieren Narzissten ihre Opfer?' },
    ];
    const articlesList = document.getElementById('articles-list');
    articles.forEach(article => {
        const articleItem = document.createElement('li');
        articleItem.textContent = article.title;
        articlesList.appendChild(articleItem);
    });
};

const loadResources = () => {
    const resources = [
        { id: '1', name: 'Hilfetelefon Gewalt gegen Frauen', phone: '08000 116 016' },
        { id: '2', name: 'Telefonseelsorge', phone: '0800 111 0 111' },
    ];
    const resourcesList = document.getElementById('resources-list');
    resources.forEach(resource => {
        const resourceItem = document.createElement('li');
        resourceItem.innerHTML = `${resource.name}: <a href="tel:${resource.phone}">${resource.phone}</a>`;
        resourcesList.appendChild(resourceItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(currentScreen).classList.add('active');
    loadArticles();
    loadResources();
});

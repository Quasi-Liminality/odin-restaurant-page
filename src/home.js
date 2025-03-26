export const HomePage = () => {
    const hero = (function() {
        const div = document.createElement('div');
        div.className = 'hero';
        return div;
    })();
    
    const heroHeading = (function() {
        const div = document.createElement('div');
        div.className = 'heading';
        div.textContent = 'Welcome to Odin\'s';
        return div;
    })();
    
    const heroMessage = (function() {
        const div = document.createElement('div');
        div.className = 'message';
        div.textContent = 'Where we serve you like a king.';
        return div;
    })();
    
    const heroLearnMoreButton = (function () {
        const btn = document.createElement('button');
        btn.id = 'learn';
        btn.textContent = 'Learn More';
        return btn;
    })();
       
    hero.append(heroHeading, heroMessage, heroLearnMoreButton);

    const content = document.querySelector('#content');
    content.append(hero);
};
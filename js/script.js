document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const testPage = document.getElementById('test-page');
    const charactersPage = document.getElementById('characters-page');
    const bioPage = document.getElementById('bio-page');
    
    const testBtn = document.getElementById('test-btn');
    const charactersBtn = document.getElementById('characters-btn');
    const bioBtn = document.getElementById('bio-btn');
    
    const backFromTest = document.getElementById('back-from-test');
    const backFromCharacters = document.getElementById('back-from-characters');
    const backFromBio = document.getElementById('back-from-bio');
    
    function showMainPage() {
        mainContent.style.display = 'flex';
        testPage.classList.remove('active');
        charactersPage.classList.remove('active');
        bioPage.classList.remove('active');
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 300);
    }
    
    function showPage(page) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.display = 'none';
            page.classList.add('active');
        }, 300);
    }
    
    testBtn.addEventListener('click', () => showPage(testPage));
    charactersBtn.addEventListener('click', () => showPage(charactersPage));
    bioBtn.addEventListener('click', () => showPage(bioPage));
    
    backFromTest.addEventListener('click', showMainPage);
    backFromCharacters.addEventListener('click', showMainPage);
    backFromBio.addEventListener('click', showMainPage);
    
    document.getElementById('submit-test').addEventListener('click', function() {
        let correctAnswers = 0;
        
        if (document.getElementById('q1b').checked) correctAnswers++;
        if (document.getElementById('q2c').checked) correctAnswers++;
        if (document.getElementById('q3a').checked) correctAnswers++;
        if (document.getElementById('q4b').checked) correctAnswers++;
        if (document.getElementById('q5b').checked) correctAnswers++;

        const resultMessage = document.createElement('div');
        resultMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--surface0);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            border: 2px solid var(--mauve);
            text-align: center;
            z-index: 1000;
            max-width: 80%;
        `;
        
        resultMessage.innerHTML = `
            <h3 style="color: var(--lavender); margin-bottom: 1rem;">Вынікі тэсту</h3>
            <p style="margin-bottom: 1.5rem;">Вы адказалі правільна на <strong style="color: var(--peach);">${correctAnswers}</strong> з 5 пытанняў.</p>
            <button id="close-result" style="padding: 0.5rem 1rem; background: var(--mauve); color: var(--base); border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Закрыць</button>
        `;
        
        document.body.appendChild(resultMessage);
        
        document.getElementById('close-result').addEventListener('click', function() {
            document.body.removeChild(resultMessage);
        });
    });
});

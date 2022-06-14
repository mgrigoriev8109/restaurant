const mainPage = () => {
    const content = document.createElement('div');
    content.id = 'content'
    content.textContent = "When you visit Gri you don't get a meal, you get an experience.";
    document.body.appendChild(content);
}

export default mainPage;
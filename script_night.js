function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".waffle-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let profileSection = document.querySelector('#profile');
let vantaContainer = document.createElement('div');
vantaContainer.classList.add('vanta-container');
profileSection.appendChild(vantaContainer);


let vantaEffect = VANTA.NET({
    el: vantaContainer,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x6767ff
});

// Define the base path for images
const basePath = './assets/tech_assets/';

document.querySelectorAll('.article-container').forEach(container => {
    // Retrieve the data attributes
    const topicsAttr = container.getAttribute('data-topics');
    const imagesAttr = container.getAttribute('data-images');

    // Check if attributes are present
    if (!topicsAttr || !imagesAttr) {
        console.warn('Missing data-topics or data-images attribute on container:', container);
        return; // Skip this container if attributes are missing
    }

    // Get topics and image file names
    const topics = topicsAttr.split(',').map(topic => topic.trim());
    const imageFilenames = imagesAttr.split(',').map(filename => filename.trim());

    // Check if the number of topics matches the number of images
    if (topics.length !== imageFilenames.length) {
        console.warn('Mismatch between number of topics and images for container:', container);
        return; // Skip this container if there's a mismatch
    }

    // Map topics to image filenames
    const topicImageMap = topics.reduce((map, topic, index) => {
        map[topic] = basePath + imageFilenames[index];
        return map;
    }, {});

    // Sort topics alphabetically
    const sortedTopics = Object.keys(topicImageMap).sort();

    // Clear any existing content
    container.innerHTML = '';

    // Create and append articles in sorted order
    sortedTopics.forEach(topic => {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.src = topicImageMap[topic];
        img.alt = `${topic} icon`;
        img.classList.add('icon');

        const div = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.textContent = topic;

        div.appendChild(h3);
        article.appendChild(img);
        article.appendChild(div);
        container.appendChild(article);
    });
});




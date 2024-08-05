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
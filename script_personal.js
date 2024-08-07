function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".waffle-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function toggleChestWaffle() {
    const menu = document.querySelector('.menu-links');
    const chest = document.querySelector('.chest-icon');
    const isOpen = menu.classList.toggle('open');
  
    if (isOpen) {
      // Play the opening animation
      chest.src = "assets/Chest-Opening-Ani.gif"; // Replace with the path to the opening GIF
      setTimeout(() => {
        // Pause the animation halfway
        chest.src = "assets/Chest-Half.gif"; // Replace with the static halfway frame
      }, 500); // Adjust time to match halfway through the GIF
    } else {
      // Play the closing animation
      chest.src = "assets/Chest-Closing-Ani.gif"; // Replace with the path to the closing GIF
      setTimeout(() => {
        // Reset to static image
        chest.src = "assets/Chest-Static.gif"; // Replace with the static image
      }, 600); // Adjust time to match the closing GIF duration
    }
  }
  
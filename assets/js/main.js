/**
 * ========= Sidebar Start ========
 */

(function () {
  /* ========= sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  const menuToggleCrossIcon = document.querySelector("#menu-CrossIcon");
  const overlay = document.querySelector(".overlay");

  const changeMenuBtnIcon = () => {

    if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
        //change menu button icon
        menuToggleButtonIcon.classList.remove("lni-chevron-left");
        menuToggleButtonIcon.classList.add("lni-menu");

      } else {
        //change menu button icon
        menuToggleButtonIcon.classList.remove("lni-menu");
        menuToggleButtonIcon.classList.add("lni-chevron-left");

      }

  }


  menuToggleButton.addEventListener("click", () => {//if clicked on menu button

    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");

    changeMenuBtnIcon();

  });

  const openMenu = () => {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.add("active");
    mainWrapper.classList.remove("active");
    changeMenuBtnIcon();
  }
  const closeMenu = () => {
    sidebarNavWrapper.classList.add("active");
    overlay.classList.remove("active");
    mainWrapper.classList.add("active");
    changeMenuBtnIcon();
  }

  overlay.addEventListener("click", () => {
    closeMenu()
  });

  menuToggleCrossIcon.addEventListener("click", () => {
    closeMenu()
  });

  if (window.innerWidth > 1199) {
    openMenu();
  }

})();

/**
 * ========= Sidebar End ========
 */



/**
 * ========= Theme Change Start ========
 */

document.addEventListener('DOMContentLoaded', function() {

  const darkThemeButton = document.getElementById("darkmode-toggle");
  const styleButton = document.getElementById("stylemode-toggle");
  const toggleTheme = () => { // Function to toggle the theme

    const logo = document.querySelector(".navbar-logo img");
    const lightSrc = logo.dataset.lightmode;
    const darkSrc = logo.dataset.darkmode;
    const attr = darkThemeButton.dataset;

    //Check the Current Theme
    if(attr.checked === "off"){
      //to Dark Mode
      darkThemeButton.dataset.checked = "on";
      document.body.classList.add('darkTheme');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      logo.setAttribute('src', darkSrc);

      document.cookie = "darkmode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

      return "Dark Mode is on";
    }
    else{
      //to Light Mode
      darkThemeButton.dataset.checked = "off";
      document.body.classList.remove('darkTheme');
      document.documentElement.setAttribute('data-bs-theme', 'light');
      logo.setAttribute('src', lightSrc);
      document.cookie = "darkmode=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      return "Light Mode is on";
    }
  }
  const toggleStyle = () =>{ //Function to Toggle Style of Menu

    const sideBar = document.querySelector(".sidebar-nav-wrapper");
    let attr = styleButton.dataset;

    if(attr.checked === "on"){
      styleButton.dataset.checked = "off";
      sideBar.classList.remove('style-2');
      document.cookie = "style=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    else{
      styleButton.dataset.checked = "on";
      sideBar.classList.add('style-2');
      document.cookie = "style=two; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    }
  }

  darkThemeButton.addEventListener("click", toggleTheme);
  styleButton.addEventListener("click", toggleStyle);

});

/**
 * ========= Theme Change End ========
 */



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

  class DarkMode {
    constructor() {
      this.darkThemeButton = document.getElementById('darkmode-toggle');
      this.logo = document.querySelector('.navbar-logo img');
      this.darkModeKey = 'darkMode';
      this.lightSrc = this.logo.dataset.lightmode;
      this.darkSrc = this.logo.dataset.darkmode;

      this.initEventListeners();

      this.initCurrentMode();
    }

    initEventListeners() {
      this.darkThemeButton.addEventListener('click', () => this.toggleTheme());
    }

    initCurrentMode() {
      let local = localStorage.getItem(this.darkModeKey);
      if (local === 'off') {
        this.setLightMode();
      } else {
        this.setDarkMode();
      }
    }

    toggleTheme() {
      let local = localStorage.getItem(this.darkModeKey);
      if (local === 'off') {
        this.setDarkMode();
      } else {
        this.setLightMode();
      }
    }

    setDarkMode() {
      this.darkThemeButton.dataset.checked = 'on';
      this.darkThemeButton.checked = true;

      document.body.classList.add('darkTheme');
      document.documentElement.setAttribute('data-bs-theme', 'dark');

      this.logo.setAttribute('src', this.darkSrc);

      localStorage.setItem(this.darkModeKey, 'on');
      document.cookie = "darkmode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }

    setLightMode() {
      this.darkThemeButton.dataset.checked = 'off';
      this.darkThemeButton.checked = false;

      document.body.classList.remove('darkTheme');
      document.documentElement.setAttribute('data-bs-theme', 'light');

      this.logo.setAttribute('src', this.lightSrc);

      localStorage.setItem(this.darkModeKey, 'off');
      document.cookie = "darkmode=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  class SideBarStyle {
    constructor() {
      this.styleButton = document.getElementById("stylemode-toggle");
      this.sideBar = document.querySelector(".sidebar-nav-wrapper");
      this.styleModeKey = 'solidMode';
      this.initEventListeners();
      this.initializeStyle();
    }

    initEventListeners() {
      this.styleButton.addEventListener("click", () => this.toggleStyle());
    }

    initializeStyle() {
      // Initialize the sidebar style based on local storage on page load
      const styleMode = localStorage.getItem(this.styleModeKey);
      if(styleMode === "on") {
        this.applySolidStyle();
      } else {
        this.removeSolidStyle();
      }
    }

    applySolidStyle() {
      this.styleButton.dataset.checked = "on";
      this.styleButton.checked = true;
      this.sideBar.classList.add('style-2');
      localStorage.setItem(this.styleModeKey, 'on');
      document.cookie = "style=two; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }

    removeSolidStyle() {
      this.styleButton.dataset.checked = "off";
      this.styleButton.checked = false;
      this.sideBar.classList.remove('style-2');
      localStorage.setItem(this.styleModeKey, 'off');
      document.cookie = "style=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    toggleStyle() {
      const styleMode = localStorage.getItem(this.styleModeKey);
      if(styleMode === "on") {
        this.removeSolidStyle();
      } else {
        this.applySolidStyle();
      }
    }
  }

  new DarkMode();
  new SideBarStyle();

/**
 * ========= Theme Change End ========
 */



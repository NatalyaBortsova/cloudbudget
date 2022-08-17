document.addEventListener("DOMContentLoaded", function (event) {
  //burger
  
  const burger = document.querySelector("#burger");
  const sidebar = document.querySelector("#sidebar");
  const menuItem = sidebar.querySelectorAll(".sidebar__item");

  burger.addEventListener("click", toggleSidebarMenu);
  document.addEventListener("click", (e) => {
    if (e.target !== burger && e.target !== sidebar) {
      closeSidebarMenu();
    }
  });
  menuItem.forEach((el) => {
    el.addEventListener("click", closeSidebarMenu);
  });
  function toggleSidebarMenu() {
    sidebar.classList.toggle("active");
    burger.classList.toggle("active");
  }

  function closeSidebarMenu() {
    sidebar.classList.remove("active");
    burger.classList.remove("active");
  }

  //Tabs

  const tabs = document.querySelector("#tabs");
  const content = document.querySelectorAll(".section");

  function changeClassTab() {
    let tabBtns = document.querySelectorAll(".sidebar__button");

    for (const tabBtn of tabBtns) {
      tabBtn.addEventListener("click", () => {
        clearActiveClasses();

        tabBtn.classList.add("active");
      });
    }

    function clearActiveClasses() {
      tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });
    }
  }


  function toggleTabContent() {
    tabs.addEventListener("click", (e) => {
      const currTab = e.target.dataset.tab;
      changeClassTab(e.target);
      for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
        if (content[i].dataset.content === currTab) {
          content[i].classList.add("active");
        }
      }
    });
  }

  toggleTabContent();

  // select option
  const selectBlock = document.querySelector(".form__menu");
  const modalSelect = selectBlock.querySelector(".form__select");
  const modalOptions = document.querySelectorAll(".form__option");
  const label = document.querySelector(".form__filter-selected");
  const labelTextcontent = label.textContent;
  function openSelectBox() {
    selectBlock.classList.toggle("active");
    modalSelect.classList.toggle("active");
  }

  selectBlock.addEventListener("click", openSelectBox);

  modalOptions.forEach((option) => {
    option.addEventListener("click", () => {
      label.textContent = option.textContent;
    });
  });
});

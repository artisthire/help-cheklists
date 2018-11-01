if (typeof localStorage !== 'undefined') {

  var html_checklist = document.querySelector(".js-checklist--html");
  var css_checklist = document.querySelector(".js-checklist--css");

  var html_input_list = html_checklist.querySelectorAll("input[type='checkbox']");
  var css_input_list = css_checklist.querySelectorAll("input[type='checkbox']");

  var save_html_checklist = document.querySelector(".js-save-checklist--html");
  var reset_html_checklist = document.querySelector(".js-reset-checklist--html");
  var save_css_checklist = document.querySelector(".js-save-checklist--css");
  var reset_css_checklist = document.querySelector(".js-reset-checklist--css");
  var reset_checklist = document.querySelector(".js-global-reset-checklist");
  
  //для обработки и сохранения имени текущего проекта
  var project_name__btn = document.querySelector(".js-project-name__btn");
  var project_name__input = document.querySelector(".js-project-name__input");
  var project_name__output = document.querySelector(".js-project-name__output");
  
  project_name__btn.addEventListener("click", function () {
    if (project_name__input.value !== "") {
      project_name__output.textContent = project_name__input.value;
      localStorage.setItem("project-name", project_name__input.value);
    }
  })

  //начальное полученние состояния флажков из localStorage и их установка на странице
  if (localStorage.length > 0) {
    for (var i=0; i < localStorage.length; i++) {
      var tag_name = localStorage.key(i);
      if (tag_name === "project-name") {
        project_name__output.textContent = localStorage.getItem("project-name");
      }
      else {
        var input_checked = (localStorage.getItem(tag_name) === 'true') ? true : false;
        document.getElementsByName(tag_name)[0].checked = input_checked;
      }
    }
  }


  //установка обработчиков на кнопки
  save_html_checklist.addEventListener('click', function() {
    saveListToStorage(html_input_list);
  })

  reset_html_checklist.addEventListener('click', function() {
    resetListInStorage(html_input_list);
  })

  save_css_checklist.addEventListener('click', function() {
    saveListToStorage(css_input_list);
  })

  reset_css_checklist.addEventListener('click', function() {
    resetListInStorage(css_input_list);
  })

  //обработчки глобальной очистки localStorage
  reset_checklist.addEventListener('click', function() {
    resetListInStorage(html_input_list);
    resetListInStorage(css_input_list);
    project_name__output.textContent = "";
    localStorage.clear();
  })


  //сохранение состояния флажков выполнения checklista
  function saveListToStorage (datalist) {
    for (var i=0; i < datalist.length; i++) {
      var input_checked = (datalist[i].checked === true) ? 'true' : '';
      localStorage.setItem(datalist[i].name, input_checked);
    }
  }

  //сброс состояния флажков выполнения checklista
  function resetListInStorage (datalist) {
    for (var i=0; i < datalist.length; i++) {
      datalist[i].checked = false;
      localStorage.setItem(datalist[i].name, '');
    }
    
  }
}
else {
  document.getElementById('js-error-message').className = 'error-message';
}
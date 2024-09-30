document.querySelector('#push').onclick = () => {
  if (document.querySelector('#newtask input').
    value.length == 0) {
    alert("Please Enter a Task")
  }
  else {
    document.querySelector('#tasks').innerHTML
      += `
          <div class = "task">
            <div id = "taskname">
              ${document.querySelector('#newtask input').value}
              <button class = "delete">
                delete
              </button>
            </>
          </div>
        `;

    var current_task = document.querySelectorAll('.delete')
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove()
      }
    }

    var tasks = document.querySelectorAll('.task')
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed')
      }
    }

    document.querySelector('#newtask input').value = '';

  }
}
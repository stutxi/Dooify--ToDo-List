document.getElementById('taskFilter').addEventListener('change', function () {
    const selectedType = this.value;
    const tasks = document.querySelectorAll('.list-group-item');
  
    tasks.forEach((task) => {
      const taskType = task.getAttribute('data-type');
      if (selectedType === 'all' || selectedType === taskType) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  });
  
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const tasks = [];

app.get('/', (req, res) => {
  res.render('index.ejs', { tasks });
});

app.post('/addTask', (req, res) => {
  const { taskText, taskType } = req.body;
  if (taskText) {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      type: taskType,
      completed: false,
    };
    tasks.push(newTask);
  }
  res.redirect('/');
});

app.get('/completeTask/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
  res.redirect('/');
});

app.get('/deleteTask/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

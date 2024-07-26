document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let isRunning = false;
    let timeLeft = 1500; 
  
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
  
    function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(timer);
          alert('Time is up!');
          isRunning = false;
        }
      }, 1000);
    }
  
    function resetTimer() {
      clearInterval(timer);
      timeLeft = 1500;
      isRunning = false;
      updateTimerDisplay();
    }
  
    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);
  
    updateTimerDisplay();
  });

  
  document.addEventListener('DOMContentLoaded', function () {
   
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
   
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  
    
    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
    
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
    
    loadPollResults();
  });

  document.addEventListener('DOMContentLoaded', function () {
    
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
    
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  
    
    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
    
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
    
    loadPollResults();
  
    
    const booksAndQuotes = [
      {
        book: "To Kill a Mockingbird",
        quote: "The one thing that doesn't abide by majority rule is a person's conscience."
      },
      {
        book: "1984",
        quote: "War is peace. Freedom is slavery. Ignorance is strength."
      },
      {
        book: "Pride and Prejudice",
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      },
      {
        book: "The Great Gatsby",
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
      },
      {
        book: "Moby Dick",
        quote: "Call me Ishmael."
      }
    ];
  
    const bookTitle = document.getElementById('book-title');
    const bookQuote = document.getElementById('book-quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
      const selectedBookQuote = booksAndQuotes[randomIndex];
      bookTitle.textContent = selectedBookQuote.book;
      bookQuote.textContent = selectedBookQuote.quote;
    }
  
    newQuoteButton.addEventListener('click', displayRandomQuote);
  
    
    displayRandomQuote();
  });

  document.addEventListener('DOMContentLoaded', function () {
    
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
    
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  
    
    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
    
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
    
    loadPollResults();
  
    
    const booksAndQuotes = [
      {
        book: "To Kill a Mockingbird",
        quote: "The one thing that doesn't abide by majority rule is a person's conscience."
      },
      {
        book: "1984",
        quote: "War is peace. Freedom is slavery. Ignorance is strength."
      },
      {
        book: "Pride and Prejudice",
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      },
      {
        book: "The Great Gatsby",
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
      },
      {
        book: "Moby Dick",
        quote: "Call me Ishmael."
      }
    ];
  
    const bookTitle = document.getElementById('book-title');
    const bookQuote = document.getElementById('book-quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
      const selectedBookQuote = booksAndQuotes[randomIndex];
      bookTitle.textContent = selectedBookQuote.book;
      bookQuote.textContent = selectedBookQuote.quote;
    }
  
    newQuoteButton.addEventListener('click', displayRandomQuote);
  
    
    displayRandomQuote();
  
    
    const issueForm = document.getElementById('issue-form');
    const issueResponse = document.getElementById('issue-response');
    const submitIssueButton = document.getElementById('submit-issue');
    const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
  
    submitIssueButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const issue = document.getElementById('issue').value;
  
      if (name && issue) {
        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, issue })
        }).then(() => {
          issueForm.style.display = 'none';
          issueResponse.style.display = 'block';
        }).catch(error => {
          console.error('Error submitting issue:', error);
        });
      } else {
        alert('Please fill out both fields before submitting.');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
    
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  
    
    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
    
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
    
    loadPollResults();
  
    
    const booksAndQuotes = [
      {
        book: "To Kill a Mockingbird",
        quote: "The one thing that doesn't abide by majority rule is a person's conscience."
      },
      {
        book: "1984",
        quote: "War is peace. Freedom is slavery. Ignorance is strength."
      },
      {
        book: "Pride and Prejudice",
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      },
      {
        book: "The Great Gatsby",
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
      },
      {
        book: "Moby Dick",
        quote: "Call me Ishmael."
      }
    ];
  
    const bookTitle = document.getElementById('book-title');
    const bookQuote = document.getElementById('book-quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
      const selectedBookQuote = booksAndQuotes[randomIndex];
      bookTitle.textContent = selectedBookQuote.book;
      bookQuote.textContent = selectedBookQuote.quote;
    }
  
    newQuoteButton.addEventListener('click', displayRandomQuote);
  
    
    displayRandomQuote();
  
    
    const issueForm = document.getElementById('issue-form');
    const issueResponse = document.getElementById('issue-response');
    const submitIssueButton = document.getElementById('submit-issue');
    const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
  
    submitIssueButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const issue = document.getElementById('issue').value;
  
      if (name && issue) {
        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, issue })
        }).then(() => {
          issueForm.style.display = 'none';
          issueResponse.style.display = 'block';
        }).catch(error => {
          console.error('Error submitting issue:', error);
        });
      } else {
        alert('Please fill out both fields before submitting.');
      }
    });
  
    
    const dgcForm = document.getElementById('dgc-form');
    const dgcTaskInput = document.getElementById('dgc-task');
    const dgcList = document.getElementById('dgc-list');
    const addTaskButton = document.getElementById('add-task');
  
    
    function loadTasks() {
      const savedTasks = localStorage.getItem('dgcTasks');
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => addTaskToList(task.text, task.completed));
      }
    }
  
    
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#dgc-list li').forEach(item => {
        tasks.push({
          text: item.querySelector('span').textContent,
          completed: item.classList.contains('completed')
        });
      });
      localStorage.setItem('dgcTasks', JSON.stringify(tasks));
    }
  
    function addTaskToList(taskText, completed = false) {
      const listItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTasks();
      });
      listItem.appendChild(deleteButton);
  
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
        saveTasks();
      });
  
      if (completed) {
        listItem.classList.add('completed');
      }
  
      dgcList.appendChild(listItem);
    }
  
    addTaskButton.addEventListener('click', () => {
      const taskText = dgcTaskInput.value.trim();
      if (taskText) {
        addTaskToList(taskText);
        dgcTaskInput.value = '';
        saveTasks();
      }
    });
  
    
    loadTasks();
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
    
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  
    
    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
    
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
    
    loadPollResults();
  
    
    const booksAndQuotes = [
      {
        book: "To Kill a Mockingbird",
        quote: "The one thing that doesn't abide by majority rule is a person's conscience."
      },
      {
        book: "1984",
        quote: "War is peace. Freedom is slavery. Ignorance is strength."
      },
      {
        book: "Pride and Prejudice",
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      },
      {
        book: "The Great Gatsby",
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
      },
      {
        book: "Moby Dick",
        quote: "Call me Ishmael."
      }
    ];
  
    const bookTitle = document.getElementById('book-title');
    const bookQuote = document.getElementById('book-quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
      const selectedBookQuote = booksAndQuotes[randomIndex];
      bookTitle.textContent = selectedBookQuote.book;
      bookQuote.textContent = selectedBookQuote.quote;
    }
  
    newQuoteButton.addEventListener('click', displayRandomQuote);
  
   
    displayRandomQuote();
  
    
    const issueForm = document.getElementById('issue-form');
    const issueResponse = document.getElementById('issue-response');
    const submitIssueButton = document.getElementById('submit-issue');
    const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
  
    submitIssueButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const issue = document.getElementById('issue').value;
  
      if (name && issue) {
        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, issue })
        }).then(() => {
          issueForm.style.display = 'none';
          issueResponse.style.display = 'block';
        }).catch(error => {
          console.error('Error submitting issue:', error);
        });
      } else {
        alert('Please fill out both fields before submitting.');
      }
    });
  
   
    const dgcForm = document.getElementById('dgc-form');
    const dgcTaskInput = document.getElementById('dgc-task');
    const dgcList = document.getElementById('dgc-list');
    const addTaskButton = document.getElementById('add-task');
  
   
    function loadTasks() {
      const savedTasks = localStorage.getItem('dgcTasks');
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => addTaskToList(task.text, task.completed));
      }
    }
  
    
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#dgc-list li').forEach(item => {
        tasks.push({
          text: item.querySelector('span').textContent,
          completed: item.classList.contains('completed')
        });
      });
      localStorage.setItem('dgcTasks', JSON.stringify(tasks));
    }
  
    
    function addTaskToList(taskText, completed = false) {
      const listItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTasks();
      });
      listItem.appendChild(deleteButton);
  
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
        saveTasks();
      });
  
      if (completed) {
        listItem.classList.add('completed');
      }
  
      dgcList.appendChild(listItem);
    }
  
    addTaskButton.addEventListener('click', () => {
      const taskText = dgcTaskInput.value.trim();
      if (taskText) {
        addTaskToList(taskText);
        dgcTaskInput.value = '';
        saveTasks();
      }
    });
  
   
    loadTasks();
  
    
    const stepsForm = document.getElementById('steps-form');
    const stepsInput = document.getElementById('steps-input');
    const totalStepsDisplay = document.getElementById('total-steps');
    const addStepsButton = document.getElementById('add-steps');
  
    
    function loadSteps() {
      const savedSteps = localStorage.getItem('totalSteps');
      if (savedSteps) {
        totalStepsDisplay.textContent = savedSteps;
      }
    }
  
   
    function saveSteps(totalSteps) {
      localStorage.setItem('totalSteps', totalSteps);
    }
  
    
    addStepsButton.addEventListener('click', () => {
      const steps = parseInt(stepsInput.value.trim());
      if (!isNaN(steps) && steps > 0) {
        let totalSteps = parseInt(totalStepsDisplay.textContent);
        totalSteps += steps;
        totalStepsDisplay.textContent = totalSteps;
        saveSteps(totalSteps);
        stepsInput.value = '';
      } else {
        alert('Please enter a valid number of steps.');
      }
    });
  
   
    loadSteps();
  });

  
  document.addEventListener('DOMContentLoaded', function () {
   
    let pollResults = {
      Python: 0,
      JavaScript: 0,
      Java: 0,
      Csharp: 0
    };
  
    const pollForm = document.getElementById('poll-form');
    const pollResultsDiv = document.getElementById('poll-results');
    const submitButton = document.getElementById('submit-poll');
  
   
    function loadPollResults() {
      const savedResults = localStorage.getItem('pollResults');
      if (savedResults) {
        pollResults = JSON.parse(savedResults);
        updatePollResultsDisplay();
      }
    }
  
    function savePollResults() {
      localStorage.setItem('pollResults', JSON.stringify(pollResults));
    }
  

    function updatePollResultsDisplay() {
      document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
      document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
      document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
      document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
    }
  
  
    submitButton.addEventListener('click', function () {
      const selectedOption = pollForm.language.value;
      if (selectedOption) {
        pollResults[selectedOption]++;
        savePollResults();
        updatePollResultsDisplay();
        pollForm.style.display = 'none';
        pollResultsDiv.style.display = 'block';
      } else {
        alert('Please select an option before submitting.');
      }
    });
  
   
    loadPollResults();
  
   
    const booksAndQuotes = [
      {
        book: "To Kill a Mockingbird",
        quote: "The one thing that doesn't abide by majority rule is a person's conscience."
      },
      {
        book: "1984",
        quote: "War is peace. Freedom is slavery. Ignorance is strength."
      },
      {
        book: "Pride and Prejudice",
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
      },
      {
        book: "The Great Gatsby",
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
      },
      {
        book: "Moby Dick",
        quote: "Call me Ishmael."
      }
    ];
  
    const bookTitle = document.getElementById('book-title');
    const bookQuote = document.getElementById('book-quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
      const selectedBookQuote = booksAndQuotes[randomIndex];
      bookTitle.textContent = selectedBookQuote.book;
      bookQuote.textContent = selectedBookQuote.quote;
    }
  
    newQuoteButton.addEventListener('click', displayRandomQuote);
  
   
    displayRandomQuote();
  
    
    const issueForm = document.getElementById('issue-form');
    const issueResponse = document.getElementById('issue-response');
    const submitIssueButton = document.getElementById('submit-issue');
    const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
  
    submitIssueButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const issue = document.getElementById('issue').value;
  
      if (name && issue) {
        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, issue })
        }).then(() => {
          issueForm.style.display = 'none';
          issueResponse.style.display = 'block';
        }).catch(error => {
          console.error('Error submitting issue:', error);
        });
      } else {
        alert('Please fill out both fields before submitting.');
      }
    });
  
    
    const dgcForm = document.getElementById('dgc-form');
    const dgcTaskInput = document.getElementById('dgc-task');
    const dgcList = document.getElementById('dgc-list');
    const addTaskButton = document.getElementById('add-task');
  
    
    function loadTasks() {
      const savedTasks = localStorage.getItem('dgcTasks');
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => addTaskToList(task.text, task.completed));
      }
    }
  
    
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#dgc-list li').forEach(item => {
        tasks.push({
          text: item.querySelector('span').textContent,
          completed: item.classList.contains('completed')
        });
      });
      localStorage.setItem('dgcTasks', JSON.stringify(tasks));
    }
  
    
    function addTaskToList(taskText, completed = false) {
      const listItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTasks();
      });
      listItem.appendChild(deleteButton);
  
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
        saveTasks();
      });
  
      if (completed) {
        listItem.classList.add('completed');
      }
  
      dgcList.appendChild(listItem);
    }
  
    addTaskButton.addEventListener('click', () => {
      const taskText = dgcTaskInput.value.trim();
      if (taskText) {
        addTaskToList(taskText);
        dgcTaskInput.value = '';
        saveTasks();
      }
    });
  
    
    loadTasks();
  
    const stepsForm = document.getElementById('steps-form');
    const stepsInput = document.getElementById('steps-input');
    const totalStepsDisplay = document.getElementById('total-steps');
    const addStepsButton = document.getElementById('add-steps');
  
   
    function loadSteps() {
      const savedSteps = localStorage.getItem('totalSteps');
      if (savedSteps) {
        totalStepsDisplay.textContent = savedSteps;
      }
    }
  
   
    function saveSteps(totalSteps) {
      localStorage.setItem('totalSteps', totalSteps);
    }
  
   
    addStepsButton.addEventListener('click', () => {
      const steps = parseInt(stepsInput.value.trim());
      if (!isNaN(steps) && steps > 0) {
        let totalSteps = parseInt(totalStepsDisplay.textContent);
        totalSteps += steps;
        totalStepsDisplay.textContent = totalSteps;
        saveSteps(totalSteps);
        stepsInput.value = '';
      } else {
        alert('Please enter a valid number of steps.');
      }
    });
  
    
    loadSteps();
  
  
    const opportunityForm = document.getElementById('opportunity-form');
    const opportunityInput = document.getElementById('opportunity-input');
    const opportunityList = document.getElementById('opportunity-list');
    const addOpportunityButton = document.getElementById('add-opportunity');
  
   
    function loadOpportunities() {
      const savedOpportunities = localStorage.getItem('opportunityBoard');
      if (savedOpportunities) {
        const opportunities = JSON.parse(savedOpportunities);
        opportunities.forEach(opportunity => addOpportunityToList(opportunity));
      }
    }
  
    function saveOpportunities() {
      const opportunities = [];
      document.querySelectorAll('#opportunity-list li').forEach(item => {
        opportunities.push(item.textContent.replace('Delete', '').trim());
      });
      localStorage.setItem('opportunityBoard', JSON.stringify(opportunities));
    }
  
    
    function addOpportunityToList(opportunityText) {
      const listItem = document.createElement('li');
      listItem.textContent = opportunityText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveOpportunities();
      });
      listItem.appendChild(deleteButton);
  
      opportunityList.appendChild(listItem);
    }
  
    addOpportunityButton.addEventListener('click', () => {
      const opportunityText = opportunityInput.value.trim();
      if (opportunityText) {
        addOpportunityToList(opportunityText);
        opportunityInput.value = '';
        saveOpportunities();
      }
    });
  
    loadOpportunities();
  });

  <div class="widget-container">
  <h2>Leaderboard</h2>
  <div id="leaderboard-widget">
    <ul id="leaderboard-list">
      <li>Most Steps Walked: <span id="most-steps">1000</span></li>
      <li>Most Pages Read: <span id="most-pages">50</span></li>
      <li>Most Pomodoro Timers Clocked: <span id="most-pomodoros">10</span></li>
    </ul>
  </div>
</div>

document.addEventListener('DOMContentLoaded', function () {
  
  let pollResults = {
    Python: 0,
    JavaScript: 0,
    Java: 0,
    Csharp: 0
  };

  const pollForm = document.getElementById('poll-form');
  const pollResultsDiv = document.getElementById('poll-results');
  const submitButton = document.getElementById('submit-poll');

 
  function loadPollResults() {
    const savedResults = localStorage.getItem('pollResults');
    if (savedResults) {
      pollResults = JSON.parse(savedResults);
      updatePollResultsDisplay();
    }
  }


  function savePollResults() {
    localStorage.setItem('pollResults', JSON.stringify(pollResults));
  }


  function updatePollResultsDisplay() {
    document.getElementById('result-python').textContent = `Python: ${pollResults.Python}`;
    document.getElementById('result-javascript').textContent = `JavaScript: ${pollResults.JavaScript}`;
    document.getElementById('result-java').textContent = `Java: ${pollResults.Java}`;
    document.getElementById('result-csharp').textContent = `C#: ${pollResults.Csharp}`;
  }

 
  submitButton.addEventListener('click', function () {
    const selectedOption = pollForm.language.value;
    if (selectedOption) {
      pollResults[selectedOption]++;
      savePollResults();
      updatePollResultsDisplay();
      pollForm.style.display = 'none';
      pollResultsDiv.style.display = 'block';
    } else {
      alert('Please select an option before submitting.');
    }
  });


  loadPollResults();


  const booksAndQuotes = [
    {
      book: "To Kill a Mockingbird",
      quote: "The one thing that doesn't abide by majority rule is a person's conscience."
    },
    {
      book: "1984",
      quote: "War is peace. Freedom is slavery. Ignorance is strength."
    },
    {
      book: "Pride and Prejudice",
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
    },
    {
      book: "The Great Gatsby",
      quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
    },
    {
      book: "Moby Dick",
      quote: "Call me Ishmael."
    }
  ];

  const bookTitle = document.getElementById('book-title');
  const bookQuote = document.getElementById('book-quote');
  const newQuoteButton = document.getElementById('new-quote');

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * booksAndQuotes.length);
    const selectedBookQuote = booksAndQuotes[randomIndex];
    bookTitle.textContent = selectedBookQuote.book;
    bookQuote.textContent = selectedBookQuote.quote;
  }

  newQuoteButton.addEventListener('click', displayRandomQuote);

 
  displayRandomQuote();

 
  const issueForm = document.getElementById('issue-form');
  const issueResponse = document.getElementById('issue-response');
  const submitIssueButton = document.getElementById('submit-issue');
  const googleScriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';

  submitIssueButton.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const issue = document.getElementById('issue').value;

    if (name && issue) {
      fetch(googleScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, issue })
      }).then(() => {
        issueForm.style.display = 'none';
        issueResponse.style.display = 'block';
      }).catch(error => {
        console.error('Error submitting issue:', error);
      });
    } else {
      alert('Please fill out both fields before submitting.');
    }
  });

  
  const dgcForm = document.getElementById('dgc-form');
  const dgcTaskInput = document.getElementById('dgc-task');
  const dgcList = document.getElementById('dgc-list');
  const addTaskButton = document.getElementById('add-task');

  
  function loadTasks() {
    const savedTasks = localStorage.getItem('dgcTasks');
    if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      tasks.forEach(task => addTaskToList(task.text, task.completed));
    }
  }

 
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#dgc-list li').forEach(item => {
      tasks.push({
        text: item.querySelector('span').textContent,
        completed: item.classList.contains('completed')
      });
    });
    localStorage.setItem('dgcTasks', JSON.stringify(tasks));
  }

  
  function addTaskToList(taskText, completed = false) {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      saveTasks();
    });
    listItem.appendChild(deleteButton);

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('completed');
      saveTasks();
    });

    if (completed) {
      listItem.classList.add('completed');
    }

    dgcList.appendChild(listItem);
  }

  addTaskButton.addEventListener('click', () => {
    const taskText = dgcTaskInput.value.trim();
    if (taskText) {
      addTaskToList(taskText);
      dgcTaskInput.value = '';
      saveTasks();
    }
  });

  
  loadTasks();

  
  const stepsForm = document.getElementById('steps-form');
  const stepsInput = document.getElementById('steps-input');
  const totalStepsDisplay = document.getElementById('total-steps');
  const addStepsButton = document.getElementById('add-steps');


  function loadSteps() {
    const savedSteps = localStorage.getItem('totalSteps');
    if (savedSteps) {
      totalStepsDisplay.textContent = savedSteps;
    }
  }

  function saveSteps(totalSteps) {
    localStorage.setItem('totalSteps', totalSteps);
  }

  
  addStepsButton.addEventListener('click', () => {
    const steps = parseInt(stepsInput.value.trim());
    if (!isNaN(steps) && steps > 0) {
      let totalSteps = parseInt(totalStepsDisplay.textContent);
      totalSteps += steps;
      totalStepsDisplay.textContent = totalSteps;
      saveSteps(totalSteps);
      stepsInput.value = '';
    } else {
      alert('Please enter a valid number of steps.');
    }
  });

 
  loadSteps();

  
  const opportunityForm = document.getElementById('opportunity-form');
  const opportunityInput = document.getElementById('opportunity-input');
  const opportunityList = document.getElementById('opportunity-list');
  const addOpportunityButton = document.getElementById('add-opportunity');

  
  function loadOpportunities() {
    const savedOpportunities = localStorage.getItem('opportunityBoard');
    if (savedOpportunities) {
      const opportunities = JSON.parse(savedOpportunities);
      opportunities.forEach(opportunity => addOpportunityToList(opportunity));
    }
  }

  
  function saveOpportunities() {
    const opportunities = [];
    document.querySelectorAll('#opportunity-list li').forEach(item => {
      opportunities.push(item.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('opportunityBoard', JSON.stringify(opportunities));
  }

  
  function addOpportunityToList(opportunityText) {
    const listItem = document.createElement('li');
    listItem.textContent = opportunityText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      saveOpportunities();
    });
    listItem.appendChild(deleteButton);

    opportunityList.appendChild(listItem);
  }

  addOpportunityButton.addEventListener('click', () => {
    const opportunityText = opportunityInput.value.trim();
    if (opportunityText) {
      addOpportunityToList(opportunityText);
      opportunityInput.value = '';
      saveOpportunities();
    }
  });

  
  loadOpportunities();

  
  const leaderboardList = document.getElementById('leaderboard-list');

  function loadLeaderboard() {
    const mostSteps = localStorage.getItem('mostSteps') || 0;
    const mostPages = localStorage.getItem('mostPages') || 0;
    const mostPomodoros = localStorage.getItem('mostPomodoros') || 0;

    document.getElementById('most-steps').textContent = mostSteps;
    document.getElementById('most-pages').textContent = mostPages;
    document.getElementById('most-pomodoros').textContent = mostPomodoros;
  }

  function updateLeaderboard(metric, value) {
    localStorage.setItem(metric, value);
    loadLeaderboard();
  }

  
  function incrementSteps() {
    const currentSteps = parseInt(localStorage.getItem('mostSteps') || 0);
    updateLeaderboard('mostSteps', currentSteps + 1);
  }

  function incrementPages() {
    const currentPages = parseInt(localStorage.getItem('mostPages') || 0);
    updateLeaderboard('mostPages', currentPages + 1);
  }

  function incrementPomodoros() {
    const currentPomodoros = parseInt(localStorage.getItem('mostPomodoros') || 0);
    updateLeaderboard('mostPomodoros', currentPomodoros + 1);
  }

  loadLeaderboard();

  document.getElementById('add-steps').addEventListener('click', incrementSteps);
  document.getElementById('add-pages').addEventListener('click', incrementPages);
  document.getElementById('add-pomodoros').addEventListener('click', incrementPomodoros);


  const tilForm = document.getElementById('til-form');
  const tilContent = document.getElementById('til-content');
  const tilList = document.getElementById('til-list');
  const addTILButton = document.getElementById('add-til');

  
  function loadTILEntries() {
    const savedTILs = localStorage.getItem('tilEntries');
    if (savedTILs) {
      const tilEntries = JSON.parse(savedTILs);
      tilEntries.forEach(entry => addTILToList(entry));
    }
  }

 
  function saveTILEntries() {
    const tilEntries = [];
    document.querySelectorAll('#til-list li').forEach(item => {
      tilEntries.push(item.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tilEntries', JSON.stringify(tilEntries));
  }

  
  function addTILToList(tilText) {
    const listItem = document.createElement('li');
    listItem.textContent = tilText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      saveTILEntries();
    });
    listItem.appendChild(deleteButton);

    tilList.appendChild(listItem);
  }

  addTILButton.addEventListener('click', () => {
    const tilText = tilContent.value.trim();
    if (tilText) {
      addTILToList(tilText);
      tilContent.value = '';
      saveTILEntries();
    }
  });

 
  loadTILEntries();
});

document.addEventListener('DOMContentLoaded', function () {

  const meetLinkInput = document.getElementById('meet-link');
  const joinMeetButton = document.getElementById('join-meet');

  joinMeetButton.addEventListener('click', () => {
    const meetLink = meetLinkInput.value.trim();
    if (meetLink) {
      window.open(meetLink, '_blank');
    } else {
      alert('Please enter a Google Meet link.');
    }
  });

});

document.addEventListener('DOMContentLoaded', function () {
 
  const openKeepButton = document.getElementById('open-keep');

  openKeepButton.addEventListener('click', () => {
    window.open('https://keep.google.com/', '_blank');
  });
 
});

document.addEventListener('DOMContentLoaded', function () {
  
  const openChatGPTButton = document.getElementById('open-chatgpt');

  openChatGPTButton.addEventListener('click', () => {
    window.open('https://chat.openai.com/', '_blank');
  });

});


document.addEventListener('DOMContentLoaded', function () {
  


  const timerDisplay = document.getElementById('timer-display');
  const startButton = document.getElementById('start-timer');
  const stopButton = document.getElementById('stop-timer');
  const resetButton = document.getElementById('reset-timer');
  const timerStatus = document.getElementById('timer-status');

  let timer;
  let minutes = 25;
  let seconds = 0;
  let isRunning = false;

  function updateDisplay() {
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerStatus.textContent = 'Status: Working';
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          timerStatus.textContent = 'Status: Break Time';
          isRunning = false;
         
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (!isRunning) return;
    clearInterval(timer);
    timerStatus.textContent = 'Status: Paused';
    isRunning = false;
  }

  function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    timerStatus.textContent = 'Status: Idle';
    isRunning = false;
  }

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);

  
});

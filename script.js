document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.textContent = ''; 
    errorMsg.style.color = 'red'; 

    if (name === '') {
        errorMsg.textContent = 'Name is required.';
        return;
    }

    if (email === '') {
        errorMsg.textContent = 'Email is required.';
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
    }

    if (message === '') {
        errorMsg.textContent = 'Message is required.';
        return;
    }

  
    console.log('Form Submitted Successfully!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    errorMsg.style.color = 'green'; 
    errorMsg.textContent = 'Thank you for your message! We will get back to you soon.';

    
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        errorMsg.textContent = ''; 
    }, 3000); 
});



document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    const todoList = document.getElementById('todoList');
    const todoErrorMsg = document.getElementById('todoErrorMsg');

    todoErrorMsg.textContent = ''; 

    if (todoText === '') {
        todoErrorMsg.textContent = 'Please enter a task.';
        return;
    }


    const listItem = document.createElement('li');

  
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todoText;
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    }) 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem); 
    });

   
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

   
    todoList.appendChild(listItem);

   
    todoInput.value = '';
}
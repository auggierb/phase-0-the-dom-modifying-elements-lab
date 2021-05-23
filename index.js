// Write your code here!
main.remove();

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader);
newHeader.id = 'victory'
document.getElementById('victory').textContent = 'YOUR-NAME is the champion'

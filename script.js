
const toggleButton = document.getElementById('toggleButton');


const contentDiv = document.getElementById('content');

toggleButton.addEventListener('click', function() {
 
  if (contentDiv.classList.contains('hidden')) {
    contentDiv.classList.remove('hidden');
  } else {
    contentDiv.classList.add('hidden');
  }
});

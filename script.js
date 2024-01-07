document.addEventListener("DOMContentLoaded", function() {
  const buttonsContainer = document.getElementById('buttons');

  // 1から40までのボタンを生成
  for (let i = 1; i <= 40; i++) {
      let button = document.createElement('button');
      button.innerHTML = i;
      button.style.backgroundColor = 'red';
      button.onclick = function() {
          this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'blue' : 'red';
      };
      buttonsContainer.appendChild(button);
  }
});

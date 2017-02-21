// main.js
console.log('Hello Justin');
const firBtn = document.createElement('button');
const firInput = document.createElement('input');
const enterBtn = document.createElement('button');
const nestRootDiv = document.createElement('div');
const rootDiv = document.querySelector('#root');
const body = document.querySelector('body');
let num = 0;

rootDiv.append(firBtn);
rootDiv.append(firInput);
rootDiv.append(enterBtn);
rootDiv.append(nestRootDiv);

firBtn.textContent = num;
enterBtn.textContent = 'Submit Color';
firBtn.addEventListener('click', function (evt){
  num++;
  firBtn.textContent = num;
});

  let rendHtml = [];
enterBtn.addEventListener('click', function(evt){
  body["style"] = "background-color: " + firInput.value + ";";
  rendHtml.push(firInput.value);
  let compHtml = '<ol>';
  rendHtml.forEach(function(newColor){
    compHtml += '<li>' + newColor + '</li>';
  })
  compHtml += '</ol>';
  nestRootDiv.innerHTML = compHtml;
});



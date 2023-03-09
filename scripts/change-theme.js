const inputElements = document.querySelectorAll('.switch-inputs input');
const elementsArray = [...inputElements];
//elements to change
const body = document.body;
const main = body.querySelector('main');
const h2 = document.querySelector('h2');
const h6 = document.querySelector('h6');
const screenTheme = document.getElementById('screen');
const numKey = document.querySelectorAll('.num');
const resetKey = document.querySelector('button[value="RESET"]');
const delKey = document.querySelector('button[value="DEL"]');
const opKey = document.querySelectorAll('.op');
const resultKey = document.querySelector('button[value="="]');
const keyPad = document.querySelector('.keypad');
const switchTheme = document.querySelector('.switch-inputs');

elementsArray.forEach(element => {
  element.addEventListener('click', () => {
    element.style.opacity = '1';
    const otherElements = elementsArray.filter(el => {
      return el != element;
    });
    otherElements.forEach(el => {
      el.style.opacity = '0';
    });
  });
});

function changeThemeHandler(e) {
  const themeNum = e.target.value;

  if (themeNum === '1') {
    changeTheme(
      'theme-one-body-bg',
      'calc-body theme-one-body-bg',
      'theme-one-font-color',
      'theme-one-font-color',
      'theme-one-screen-bg theme-one-font-color',
      'num theme-one-key-color theme-one-key-hover',
      'theme-one-key-color theme-one-del-reset-bg theme-one-del-reset-hover',
      'op theme-one-key-color theme-one-key-hover',
      'theme-one-key-color theme-one-result-bg theme-one-result-hover',
      'keypad theme-one-keypad-bg',
      'switch-inputs theme-one-switch-color'
    );
    inputElements.forEach(e => {
      e.style.backgroundColor = 'hsl(6, 63%, 50%)';
    });
  } else if (themeNum === '2') {
    changeTheme(
      'theme-two-body-bg',
      'calc-body theme-two-body-bg',
      'theme-two-font-color',
      'theme-two-font-color',
      'theme-two-screen-bg theme-two-font-color',
      'num theme-two-key-color theme-two-key-hover',
      'theme-two-key-color theme-two-del-reset-bg theme-two-del-reset-hover',
      'op theme-two-key-color theme-two-key-hover',
      'theme-two-key-color theme-two-result-bg theme-two-result-hover',
      'keypad theme-two-keypad-bg',
      'switch-inputs theme-two-switch-color'
    );
  } else {
    changeTheme(
      'theme-three-body-bg',
      'calc-body theme-three-body-bg',
      'theme-three-font-color',
      'theme-three-font-color',
      'theme-three-screen-bg theme-three-font-color',
      'num theme-three-key-color theme-three-key-hover',
      'theme-three-key-color theme-three-del-reset-bg theme-three-del-reset-hover',
      'op theme-three-key-color theme-three-key-hover',
      'theme-three-key-color theme-three-result-bg theme-three-result-hover',
      'keypad theme-three-keypad-bg',
      'switch-inputs theme-three-switch-color'
    );
    inputElements.forEach(e => {
      e.style.backgroundColor = 'hsl(176, 100%, 44%)';
    });
  }
}

function changeTheme(
  bodyClasses,
  mainClasses,
  h2Classes,
  h6Classes,
  screenClasses,
  numKeyClasses,
  resDelClasses,
  opKeyClasses,
  resultKeyClasses,
  keyPadClasses,
  switchClasses
) {
  body.classList = bodyClasses;
  main.classList = mainClasses;
  h2.classList = h2Classes;
  h6.classList = h6Classes;
  screenTheme.classList = screenClasses;
  numKey.forEach(num => {
    num.classList = numKeyClasses;
  });
  resetKey.classList = resDelClasses;
  delKey.classList = resDelClasses;
  opKey.forEach(op => {
    op.classList = opKeyClasses;
  });
  resultKey.classList = resultKeyClasses;
  keyPad.classList = keyPadClasses;
  switchTheme.classList = switchClasses;
}

elementsArray.forEach(el => {
  el.addEventListener('change', changeThemeHandler);
});

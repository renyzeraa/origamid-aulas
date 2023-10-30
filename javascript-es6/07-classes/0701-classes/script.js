function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
}

const blueButton = new Button('comprar', 'blue')
console.log(blueButton.element())
document.body.appendChild(blueButton.element());

class ButtonComClass {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
    return this;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new ButtonComClass(text, 'blue', 'white');
  }
}

const botaoAzul = new ButtonComClass('Comprar 2', 'red', 'white');
console.log(botaoAzul.appendTo('body'))


class ButtonTwo {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const optionsBlue = {
  backgroundColor: 'blue',
  text: 'Comprar 3',
  color: 'green',
}

const blueButton2 = new Button(optionsBlue);

// const blueButtonStatic = Button.createButton('Clique', 'blue');

// console.log(blueButtonStatic);
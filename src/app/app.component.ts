import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  password: string = ""
  length: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  isBtnDisabled: boolean = true;

  private shouldToggleButtonDisable() {
    if(this.length>0 && (this.useLetters || this.useNumbers || this.useSymbols)) {
      this.isBtnDisabled = false;
    } else this.isBtnDisabled = true;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
      this.shouldToggleButtonDisable();
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    this.shouldToggleButtonDisable();
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    this.shouldToggleButtonDisable();
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    this.shouldToggleButtonDisable();
  }

  onButtonClick() {
    console.log(`
      length: ${this.length};
      useLetters: ${this.useLetters};
      useNumbers: ${this.useNumbers};
      useSymbols: ${this.useSymbols};
    `);

    const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMBERS = '0123456789';
    const SYMBOLS = '!@#$%^&*()';

    let validChars = '';
    if(this.useLetters) {
      validChars += LETTERS;
    }
    if(this.useNumbers) {
      validChars += NUMBERS;
    }
    if(this.useSymbols) {
      validChars += SYMBOLS;
    }

    

    let generatedPwd:string = '';
    for(let i=0; i<this.length; i++) {
      const newChar:string = validChars.charAt(Math.round(Math.random() * validChars.length));
      generatedPwd += newChar;
    }

    console.log(validChars);
    console.log(generatedPwd);
    this.password = generatedPwd;
  }
}




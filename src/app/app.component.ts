import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password :string = '';
  wantLetter:boolean = false;
  wantNumbers:boolean = false;
  wantSymbols:boolean = false;
  length : number = 0;
  onChangeLength(event:Event){
    var target = event.target as HTMLInputElement
    this.length = parseInt(target.value)
  }
  useLetter(){
    this.wantLetter = !this.wantLetter;
    console.log('wantLetter',this.wantLetter)
  }
  useSymbols(){
    this.wantSymbols = !this.wantSymbols;
    console.log('wantSymbols',this.wantSymbols)

  }
  useNumbers(){
    this.wantNumbers = !this.wantNumbers;
    console.log('wantNumbers',this.wantNumbers);

  }
  generate(){
    // if(!this.wantLetter && !this.wantNumbers && !this.wantSymbols){
      
    //   return alert('Please select atleast 1 checkbox');
    // }
    // if(this.length <0){
    //   return alert('length should be greater than or equals to 0')
    // }
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '1234567890';
    var symbols = '!@#$%^&*()';

    var completePossiblePassword :any = '';
    if(this.wantLetter){
      completePossiblePassword += letters;
    }
    if(this.wantNumbers){
      completePossiblePassword += numbers;
    }
    if(this.wantSymbols){
      completePossiblePassword += symbols;
    }

    var generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      var index = Math.floor(Math.random() * completePossiblePassword.length);
      generatedPassword += completePossiblePassword[index];
    }
    this.password = generatedPassword;
  }
  getPassword(){
    return this.password;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  input = '';
  display = "";
  IsDone = false;
  result = ''


  numPress(num: string){
    if(this.IsDone){
      this.display = num;
      this.input += num;
      this.IsDone = false;
      return;
    }
    this.input += num;
    this.display = this.input;
    
  }
  
  simbolPress(simbol: string){

    if(this.input == ""){
      console.log ('Empty String')
      return;
    }

    if(simbol == '.'){
      this.numPress(simbol);
      return
    }

    this.doMath();
    this.input += simbol;
    this.display = this.result;
  }

  clearAll(){
    this.input = '';
    this.display = "";
    this.IsDone = false;
    this.result = ''; 
  }

  doMath(){
    let lastkey = this.result[this.result.length -1];
    if( lastkey === '/' || lastkey === '*' || lastkey === '-' || lastkey === '+' || lastkey === '.' ) {
      this.result = this.result.substring(0,this.result.length -1);
    };
    this.IsDone = true;
    this.result = eval(this.input)
  }


  getResult(){
    this.doMath();
    this.display= this.result;
    this.input = '';
    this.IsDone = false;
    this.result = '';

  }
}

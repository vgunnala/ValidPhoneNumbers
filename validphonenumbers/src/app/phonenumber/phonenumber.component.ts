import { CommonModule, NumberSymbol } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.scss']
})

export class PhonenumberComponent implements OnInit {
  
  @ViewChild('phoneNbr', { static: true }) usernameElement: ElementRef;
  public phoneNbr: string = "";
  public errorMsg: string ="";
  p: number = 1;
  constructor(usernameElement: ElementRef) {
    this.usernameElement = usernameElement;

  }
  

  ngOnInit(): void {
  }

  numberSequence:string[] = [];

  getList(){
    this.phoneNbr = (<HTMLInputElement>document.getElementById("phoneNbr")).value;
    this.errorMsg ="";
    this.numberSequence = new Array();
    this.generateNumbers();

  }
  generateNumbers()
  {
    if(this.phoneNbr != null &&  (this.phoneNbr.length == 7 || this.phoneNbr.length == 10))
    {
      this.numberSequence.push(this.phoneNbr);
      for(let i =0 ; i<this.phoneNbr.length;i++)
      {
        var apl = this.GetAlphabets(this.phoneNbr[i]);
        console.log(this.phoneNbr[i] + apl.toString());
        if(apl != null && apl.length >1)
        {
            for(let a =0;a < apl.length;a++)
            {
              let pn = this.phoneNbr.substring(0,i)+apl[a]+this.phoneNbr.substring(i+1);
              this.numberSequence.push(pn);
            }
          
        }
      }
 
 
    }
    else{
      this.errorMsg = "Phone Number should be either 7 (or) 10 numbers.";
      this.numberSequence =[];
    }
  }

 
  GetPhoneNumbers(phoneNbr:string):string[]
  {
      var numbers:string[] = new Array();
      numbers.push(phoneNbr);
      var i:number =0;
      var len:number = phoneNbr.length;
      var al:number =0;
      for (i = 0; i < len; i++) {
        var aphabets =this.GetAlphabets(phoneNbr[i]);
        if(aphabets.length > 1)
        {
          for(al =0; al< aphabets.length; al++)
          {
            var num = phoneNbr;
            numbers.push(num.substring(0,i) + aphabets[al] + num.substring(i+1));
          }
        }
      }
      return numbers;
  }
  GetAlphabets(num:string):string[] {
    switch(num)
    {
      case "1":
        return new Array("");
      case "2":
        return new Array("A","B","C");
      case "3":
          return new Array("D","E","F");
      case "4":
          return new Array("G","H","I");
      case "5":
         return new Array("J","K","L");
      case "6":
        return new Array("M","N","O");
      case "7":
          return new Array("P","Q","R","S");
      case "8":
          return new Array("T","U","V");
      case "9":
          return new Array("W","X","Y","Z");
      default:
          return new Array("");
    }


  } 
 
  }


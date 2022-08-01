import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PhonenumberComponent } from './phonenumber.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { By } from '@angular/platform-browser';

describe('PhonenumberComponent', () => {
  let component: PhonenumberComponent;
  let fixture: ComponentFixture<PhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenumberComponent ],
      imports: [ 
        NgxPaginationModule,
        RouterTestingModule, // make sure you have this
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Should return the aplhabets realted to Key 1', () => {
    component.phoneNbr = "1";
    var a  = component.GetPhoneNumbers("1");
     expect(a.length).toBeGreaterThanOrEqual(1);
    
  });

  it('Should return the alphabets realted to Key 2', () => {
      var a = component.GetPhoneNumbers("2");
     expect(a.length).toBeGreaterThanOrEqual(3);
    
  });

 it('Should throw error message', () => {
   component.phoneNbr = "123";
   component.generateNumbers();
   expect(component.errorMsg).toContain("7");
  
});

it('Should generate numbers', () => {
  component.phoneNbr = "1234567";
  component.generateNumbers();
  expect(component.numberSequence[1]).toBe("1A34567");
 
});

it('Should generate numbers', () => {
  component.phoneNbr = "1234567890";
  component.generateNumbers();
  expect(component.numberSequence[1]).toBe("1A34567890");
 
});



});

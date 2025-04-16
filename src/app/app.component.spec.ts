import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'temp-nan' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('temp-nan');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Temp NaN');
  });

  it('should render all required elements correctly//render elementi ok', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Arrange
    fixture.detectChanges(); // Renderizza il componente
  
    // Act (query degli elementi)
    const container = fixture.nativeElement.querySelector('.container');
    const title = fixture.nativeElement.querySelector('h1');
    const subContainer1 = fixture.nativeElement.querySelector('.sub-container1');
    const subContainer2 = fixture.nativeElement.querySelector('.sub-container2');
    const dateElements = fixture.nativeElement.querySelectorAll('.sub-container1 div');
    const tempElements = fixture.nativeElement.querySelectorAll('.sub-container2 div');
  
    // Assert (verifica presenza elementi)
    expect(container).toBeTruthy();
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Temp NaN');
    expect(subContainer1).toBeTruthy();
    expect(subContainer2).toBeTruthy();
    expect(dateElements.length).toBe(2); // Data Inizio e Data Fine
    expect(tempElements.length).toBe(3); // Min, Max, Media
  });
});

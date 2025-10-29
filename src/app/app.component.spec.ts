import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the addition of two numbers', () => {
    const result = component.sum(2, 3);
    expect(result).toBe(5);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeliPage } from './peli.page';

describe('PeliPage', () => {
  let component: PeliPage;
  let fixture: ComponentFixture<PeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

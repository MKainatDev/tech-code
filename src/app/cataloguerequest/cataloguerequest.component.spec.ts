import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguerequestComponent } from './cataloguerequest.component';

describe('CataloguerequestComponent', () => {
  let component: CataloguerequestComponent;
  let fixture: ComponentFixture<CataloguerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataloguerequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CataloguerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

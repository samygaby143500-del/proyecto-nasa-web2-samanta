import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NasaTv } from "./nasa-tv";

describe("NasaTv", () => {
  let component: NasaTv;
  let fixture: ComponentFixture<NasaTv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaTv],
    }).compileComponents();

    fixture = TestBed.createComponent(NasaTv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

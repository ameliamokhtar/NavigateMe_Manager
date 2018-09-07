import { FacilitiesModule } from './facilities.module';

describe('FacilitiesModule', () => {
  let facilitiesModule: FacilitiesModule;

  beforeEach(() => {
    facilitiesModule = new FacilitiesModule();
  });

  it('should create an instance', () => {
    expect(facilitiesModule).toBeTruthy();
  });
});

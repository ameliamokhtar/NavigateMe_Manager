import { StaffsModule } from './staffs.module';

describe('TablesModule', () => {
  let staffsModule: StaffsModule;

  beforeEach(() => {
    staffsModule = new StaffsModule();
  });

  it('should create an instance', () => {
    expect(staffsModule).toBeTruthy();
  });
});

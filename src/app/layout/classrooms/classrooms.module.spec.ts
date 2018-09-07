import { ClassroomsModule } from './classrooms.module';

describe('ClassroomsModule', () => {
  let classroomsModule: ClassroomsModule;

  beforeEach(() => {
    classroomsModule = new ClassroomsModule();
  });

  it('should create an instance', () => {
    expect(classroomsModule).toBeTruthy();
  });
});

type Course = 'Computer Science' | 'Mathematics' | 'Literature';

interface CourseInfo {
  professor: string;
  cfu: number;
}

const courses: Record<Course, CourseInfo> = {
  'Computer Science': {
    professor: 'Mary Jane',
    cfu: 12,
  },
  Mathematics: {
    professor: 'John Doe',
    cfu: 12,
  },
};

console.log(courses['Computer Science']);

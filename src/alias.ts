type skill = [number, string, number];

const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'javascript', 30];

const allSkills: skill[] = [
  [1, 'html', 10],
  [2, 'css', 20],
  [3, 'javascript', 30],
];

type module = {
  index: number;
  title: string;
  hours: number;
};

type FinalProject = {
  descriptionFinalProject: string;
  hoursFinalProject: number;
};

type ModuleWithFinalProject = module | FinalProject;

const m1: ModuleWithFinalProject = {
  index: 1,
  title: 'base HTML',
  hours: 5,
};

const m2: module = {
  index: 2,
  title: 'base CSS',
  hours: 8,
};

const m3: module = {
  index: 3,
  title: 'base JS',
  hours: 12,
};

const m4: ModuleWithFinalProject = {
  index: 4,
  title: 'HTML, CSS, JS, Final Project',
  hours: 12,
  descriptionFinalProject: 'CRM',
  hoursFinalProject: 12,
};

const course1: readonly module[] = [
  {
    index: 1,
    title: 'base HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'base CSS',
    hours: 8,
  },
  {
    index: 3,
    title: 'base JS',
    hours: 12,
  },
];

const course2: ReadonlyArray<module> = [
  {
    index: 1,
    title: 'base HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'base CSS',
    hours: 8,
  },
  {
    index: 3,
    title: 'base JS',
    hours: 12,
  },
];

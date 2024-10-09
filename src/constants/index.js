import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  java,
  springboot,
  php,
  symfony,
  reactjs,
  nodejs,
  git,
  docker,
  postgresql,
  ccl,
  jumpforce,
  oxemis,
  synergie,
  sdis59,
  mysql,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name : 'Java',
    icon: java
  },
  {
    name:'SpringBoot',
    icon: springboot
  },
  {
    name:'Symfony',
    icon: symfony
  },
  {
    name: 'Php',
    icon: php
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'MySql',
    icon: mysql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Développeur Full Stack',
    company_name: 'Oxemis',
    icon: oxemis,
    iconBg: '#333333',
    date: 'Avril 2021 - Juillet 2023',
  },
  {
    title: 'Sapeur Pompier Volontaire',
    company_name: 'SDIS 59',
    icon: sdis59,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Job étudiant',
    company_name: 'Synergie',
    icon: synergie,
    iconBg: '#F4F6FF',
    date: 'Juillet 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hero Train...in progress',
    description: 'Un site pour aider des sportifs à planifier des entrainements à l\'aide de deux coachs réputés',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: ccl,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Jumpforce',
    description:
      'Un site web de vente de vêtements de sport.',
    tags: [
    ],
    image: jumpforce,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };

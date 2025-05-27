import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAngular,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress,
  SiPostgresql,
  SiMicrosoftsqlserver as SiSqlServer,
  SiK6,
  SiCypress,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  Angular: <SiAngular size={iconSize} className='text-red-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  PWA: <SiPwa size={iconSize} className='text-amber-600' />,
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Socket: <SiSocketdotio size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
  Jquery: <SiJquery size={iconSize} />,
  PostgreSQL: <SiPostgresql size={iconSize} className='text-blue-600' />,
  SqlServer: <SiSqlServer size={iconSize} className='text-blue-600' />,
  K6: <SiK6 size={iconSize} className='text-blue-500' />,
  Cypress: <SiCypress size={iconSize} className='text-green-500' />,
};

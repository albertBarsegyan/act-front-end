import { AngularIcon } from '@/icons/angular-icon';
import { DjangoIcon } from '@/icons/django-icon';
import { FigmaIcon } from '@/icons/figma-icon';
import { JsIcon } from '@/icons/js-icon';
import { KotlinIcon } from '@/icons/kotlin-icon';
import { NodeJsIcon } from '@/icons/node-js-icon';
import { PhpIcon } from '@/icons/php-icon';
import { PythonIcon } from '@/icons/python-icon';
import { ReactIcon } from '@/icons/react-icon';
import { SwiftIcon } from '@/icons/swift-icon';
import { VueIcon } from '@/icons/vue-icon';

export const technologiesFirstLine = [
  {
    id: 0,
    icon: <ReactIcon />,
    text: 'React',
  },
  {
    id: 1,
    icon: <VueIcon />,
    text: 'Vue.js',
  },
  {
    id: 2,
    icon: <AngularIcon />,
    text: 'Angular',
  },
  {
    id: 3,
    icon: <DjangoIcon />,
    text: 'Django',
  },
];

export const technologiesSecondLine = [
  {
    id: 0,
    icon: <JsIcon />,
    text: 'JavaScript',
  },
  {
    id: 1,
    icon: <PhpIcon />,
    text: 'PHP',
  },
  {
    id: 2,
    icon: <PythonIcon />,
    text: 'Python',
  },
  {
    id: 3,
    icon: <KotlinIcon />,
    text: 'Kotlin',
  },
  {
    id: 4,
    icon: <SwiftIcon />,
    text: 'Swift',
  },
];

export const technologiesThirdLine = [
  {
    id: 0,
    icon: <NodeJsIcon />,
    text: 'Node.js',
  },
  {
    id: 1,
    icon: <FigmaIcon />,
    text: 'Figma',
  },
  {
    id: 2,
    icon: <span className="px-14 text-[48px] leading-[0px]">...</span>,
    text: '',
  },
];

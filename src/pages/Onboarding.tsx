import { useEffect, useState } from 'react';
import FinalView from '../components/onboarding/FinalView';
import OnboardingView from '../components/onboarding/OnboardingView';

// responsabilidad del componente: Mostrar las vistas del proceso de Onboarding y su informacion pertinente
const Onboarding = () => {
  const [view, setView] = useState(1); // view es el estado que representa la vista actual
  const [gifBackground, setGifBackground] = useState('');

  useEffect(() => {
    // useeffect para cargar el gif 1 sola vez y mejorar el rendimiento
    const loadGif = async () => {
      const gif = await import('/bg2.gif');
      setGifBackground(gif.default);
    };
    loadGif();
  }, []);

  const views = [
    {
      backgroundImage: '/bg1.png',
      logo: '/logo2.png',
      texts: [
        '¡Hola!',
        'Nos alegra que quieras ser parte de nuestra comunidad de psicólogos.',
      ],
      buttonText: 'Comenzar',
    },
    {
      backgroundImage: gifBackground,
      logo: '/logo1.png',
      texts: [
        '¿Qué puedes hacer en Mindup?',
        'Encuentra nuevos pacientes que buscan ayuda profesional',
      ],
      buttonText: 'Continuar',
    },
    {
      backgroundImage: gifBackground,
      logo: '/logo1.png',
      texts: [
        '¿Qué puedes hacer en Mindup?',
        'Agenda consultas con nuevos pacientes en tu zona o de forma virtual.',
      ],
      buttonText: 'Continuar',
    },
    {
      backgroundImage: gifBackground,
      logo: '/logo1.png',
      texts: [
        '¿Qué puedes hacer en Mindup?',
        'Ayuda de forma instantánea a pacientes en emergencia.',
      ],
      buttonText: 'Continuar',
    },
  ];

  const handleNextView = () => {
    if (view < 5) {
      setView(view + 1);
    }
  };

  return (
    <div>
      {view <= 4 ? (
        <OnboardingView
          backgroundImage={views[view - 1].backgroundImage}
          logo={views[view - 1].logo}
          texts={views[view - 1].texts}
          buttonText={views[view - 1].buttonText}
          onButtonClick={handleNextView}
          step={view}
        />
      ) : (
        <FinalView />
      )}
    </div>
  );
};

export default Onboarding;

// import { useState } from 'react';
// import bg1 from '../../public/Onboardingbg1.png';
// import bgGif from '../../public/onboardingBackground.gif';
// import logo from '../../public/logo.png';
// import logo2 from '../../public/logo2.png';
// import { useNavigate } from 'react-router-dom';

// interface PhaseContent {
//   logo: string;
//   background: string;
//   title: string;
//   text: string;
//   buttonText: string;
// }

// const phaseContent: { [key: number]: PhaseContent } = {
//   1: {
//     logo: logo2,
//     background: bg1,
//     title: '!Hola!',
//     text: 'Nos alegra que quieras ser parte de nuestra comunidad de psicologos.',
//     buttonText: 'Comenzar',
//   },
//   2: {
//     logo: logo,
//     background: bgGif,
//     title: '¿Que puedes hacer en MindUp?',
//     text: 'Encuentra el apoyo emocional que necesitas, cuando lo necesites.',
//     buttonText: 'Continuar',
//   },
//   3: {
//     logo: logo,
//     background: bgGif,
//     title: '¿Que puedes hacer en MindUp?',
//     text: 'Elige entre nuestros perfiles y agenda una consulta.',
//     buttonText: 'Continuar',
//   },
//   4: {
//     logo: logo,
//     background: bgGif,
//     title: '¿Que puedes hacer en MindUp?',
//     text: 'Comienza aquí para encontrar a tu psicólogo/a ideal.',
//     buttonText: 'Empezar cuestionario',
//   },
// };

// const Onboarding: React.FC = () => {
//   const [currentPhase, setCurrentPhase] = useState<number>(1);
//   const navigate = useNavigate();

//   const handleNextPhase = () => {
//     if (currentPhase < 4) {
//       setCurrentPhase(currentPhase + 1);
//     }
//     else if (currentPhase >= 4) {
//       navigate('/profile')
//     }
//   };

//   return (
//     <div
//       className="min-h-screen w-full min-w-mobile flex flex-col items-center justify-between bg-slate-800"
//       style={{
//         backgroundImage: `url(${phaseContent[currentPhase].background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="flex justify-center w-full mt-32">
//         <img src={phaseContent[currentPhase].logo} alt="logo" />
//       </div>

//       <div
//         className={`flex flex-col items-center text-center px-6 ${
//           currentPhase === 1
//             ? 'mt-4 space-y-2 max-w-xs'
//             : 'mt-8 space-y-6 max-w-sm'
//         }`}
//       >
//         <p
//           className={`${
//             currentPhase === 1 ? 'text-black' : 'text-white'
//           } text-2xl sm:text-4xl md:text-5xl lg:text-6xl`}
//         >
//           {phaseContent[currentPhase].title}
//         </p>
//         <p
//           className={`${
//             currentPhase === 1 ? 'text-black' : 'text-white'
//           } text-lg sm:text-xl md:text-2xl lg:text-3xl font-light transition-all duration-300`}
//         >
//           {phaseContent[currentPhase].text}
//         </p>
//       </div>

//       <div className="w-full flex justify-center mb-32">
//         <button
//           className={`w-72 py-2 px-6 mt-8 rounded-md text-lg ${
//             currentPhase === 1
//               ? 'bg-secondary text-background'
//               : 'bg-background text-secondary'
//           }`}
//           onClick={handleNextPhase}
//         >
//           {phaseContent[currentPhase].buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Onboarding;

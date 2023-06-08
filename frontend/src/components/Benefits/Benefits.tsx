import React from 'react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Topic Conversation',
    description: 'Join fluency-building English conversations with people from all around the world. ',
    imageUrl: 'https://i.ibb.co/B2JQ2DY/offer1-c3bc1035.jpg',
  },
  {
    id: 2,
    title: 'English Debate',
    description: 'Practice English and critical thinking skills in engaging moderated debates about interesting topics and issues.',
    imageUrl: 'https://i.ibb.co/JFmYhFz/offer2-7ab41ddc.jpg',
  },
  {
    id: 3,
    title: 'Find Language Partner',
    description: 'Find a member who can help you practice your target language',
    imageUrl: 'https://i.ibb.co/N6pp8Yr/offer4-df1e772a.jpg',
  },
];

const Benefits: React.FC = () => {
  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
    {benefits.map((benefit) => (
      <div key={benefit.id} className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg" style={{ height: '420px' }}>
        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
          <img className="relative w-56 h-56 object-cover" src={benefit.imageUrl} alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6 flex flex-col justify-center">
          <span className="block opacity-75 -mb-1 text-center">{benefit.description}</span>
          <div className="flex justify-center mt-4">
            <span className="block font-semibold text-xl">{benefit.title}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
};

export default Benefits;

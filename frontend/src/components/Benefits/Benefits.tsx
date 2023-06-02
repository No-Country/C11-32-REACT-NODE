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
    description: 'Join fluency-building English conversations with people from all around the world. All sessions are hosted by native English teachers.',
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
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">See what we offer
</h2>
          
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-start justify-between bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={benefit.imageUrl} alt={benefit.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

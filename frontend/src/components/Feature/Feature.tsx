import { AiOutlineTeam, AiOutlineComment, AiOutlineBulb } from 'react-icons/ai';

const Feature = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 relative">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Improve Your English</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Practice Conversations</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">speakUp! provides a platform for people to practice and improve their English language skills through conversations with native or fluent speakers. It offers a supportive community where language learners can connect with conversation partners and engage in meaningful discussions.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineTeam className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Connect with language partners.
                  </dt>
                  <dd className="inline">Find conversation partners from around the world who are interested in language exchange. Practice English speaking skills with native or fluent speakers and improve your pronunciation, vocabulary, and fluency.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineComment className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Engage in meaningful discussions.
                  </dt>
                  <dd className="inline">Join topic-based discussion forums and participate in conversations on various subjects. Learn about different cultures and perspectives while practicing your English language skills.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineBulb className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Improve your language skills.
                  </dt>
                  <dd className="inline">Gain confidence in speaking English, improve your language skills, and develop fluency through regular practice and interactions with native or fluent speakers.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="relative">
            <img src="https://i.ibb.co/Chm6S2j/tutoring-57f3288c60.gif" alt="Product screenshot" className="w-full h-auto my-20 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

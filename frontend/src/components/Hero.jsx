import {useNavigate} from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const handleButton =() => {
    navigate('/jobs')
  }
  return (
    <section className="h-screen flex items-center justify-center bg-white px-6 pt-16">
      <div className="max-w-4xl text-center">
    
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Discover Your Next Career Move
        </h1>
     
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Browse thousands of job listings. Connect with employers. Take the next step in your professional journey.
        </p>

        <div
          className="mx-auto max-w-md bg-yellow-50 text-gray-800 p-6 rounded-2xl border border-yellow-100 shadow-sm transition-transform transform hover:scale-105 duration-300"
        >
          <p className="text-base md:text-lg leading-relaxed">
            Explore curated opportunities and land the role that fits your goals and values.
          </p>
        </div>

        <button
          className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 active:scale-95 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        onClick={handleButton}
        >
         
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default Hero;

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Collins, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            Talented backend developer adept at contributing to highly collaborative
            work environment, finding solutions and determining customer satisfaction. 
            Designed and developed web applications across multiple APIs, third-party integrations and databases.
            <br/>
            <span className="italic">I am also a multidisciplinary designer with a curious mind, I enjoy to meet new people and
                 understand how they are solving problems as a chance to improve myself as a professional and put
                  things in practice when I’m creating my solutions</span>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

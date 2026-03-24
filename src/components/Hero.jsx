import Button from "./Button"
import Title from "./Title"

export default function Hero() {
    return (
    
       <section id="home" className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-white-600 text-black px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
          <Title text="Hi, I'm Korede" tagName="h1"/> 
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white-600">
              Creative <span className="gradient-text">Developer</span> & Designer
            </h2>
            <p className="text-lg text-white-600 mb-8 max-w-lg">
              I build beautiful, functional websites and applications that help
              businesses grow and stand out in the digital world.
            </p>
            <div className="flex space-x-4">
              <Button
                text="Get In Touch"
                variant="normal"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              />
              <Button text="View My Work" variant="normal"
               onClick={() => {
                 const servicesSection = document.querySelector('#services');
                 if (servicesSection) {
                   servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 }
               }} />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <img src="src/assets/street.jpg" alt="Profile" className="relative w-full h-full object-cover rounded-full border-4 border-black shadow-xl floating"/>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    )
}
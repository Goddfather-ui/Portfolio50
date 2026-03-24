import { useId } from "react";
import SectionLayout from "../components/SectionLayout";
import Title from "../components/Title";


export default function AboutMe() {
const skills = [
  {
    id: useId(),
    text: "HTML/CSS",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: useId(),
    text: "JavaScript",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: useId(),
    text: "React",
    color: "bg-pink-100 text-pink-800"
  },
  {
    id: useId(),
    text: "Node.js",
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    id: useId(),
    text: "UI/UX Design",
    color: "bg-green-100 text-green-800"
  }
];


    return (
        <SectionLayout title="About Me" id = "about" >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About" className="relative w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
          <Title text="Who I Am" tagName="h3"/>
            <p className="text-black-200 mb-6">
              I'm a passionate full-stack developer and designer with over 2
              years of experience creating digital experiences that matter. My
              journey in tech started when I was just 16 years old, and I've
              been in love with coding ever since.
            </p>
            <p className="text-black-600 mb-8">
              I specialize in modern web technologies like React, Node.js, and
              TailwindCSS, but I'm always learning and expanding my skill set.
              When I'm not coding, you can find me hooping, reading sci-fi
              novels, or experimenting with new design tools.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-black-600">Name:</h4>
                <p className="text black-600">Balogun Korede</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Email:</h4>
                <p className="text-black-200">balogunkaybal04@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">From:</h4>
                <p className="text-black-200">Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Experience:</h4>
                <p className="text-black-200">2+ Years</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {skills.map(skill => (
                <span key={skill.id} className={skill.color + " px-4 py-2 rounded-full text-sm font-medium"}>
                  {skill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
    
</SectionLayout>
    )

}

    


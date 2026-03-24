import Title from "../components/Title";


export default function SectionLayout(props) {
    const {text, id, bg, description} = props;

    return (
<section id={id} className="relative min-h-screen flex items-center justify-center bg-white-500 text-black px-4 sm:px-6 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <Title text={props.title}/>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
         
    {props.children}
   </div>
    </section>


    )

}
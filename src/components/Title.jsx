export default function Title(props ) {
   const { text, tagName } = props;

   if (tagName === 'h1') return(
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{text}</h1>
    )
     return(
        <h2 className="text-3xl font-bold mb-4">{text}</h2>
    )
     if (tagName === 'h3') return(
        <h3 className="text-3xl font-semibold mb-6">{text}</h3>
    )
}
import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Cowabunga dudes!")
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
export default function Hero() {
  return (
    <section className="relative px-4 md:px-16 py-8 font-satisfy text-grey-100">
      
      {/* Conteneur principal - Deux parties côte à côte */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Partie gauche : Texte + Bouton */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
  <h2 className="text-3xl mx-2 md:text-4xl font-semibold">
    Développeuse Front-End avec un attrait pour le design et l'esthétique des interfaces.
  </h2>
  <p className="mt-4 text-lg max-w-xl">
    Actuellement, j’ai un projet de perfectionnement en <strong>expérience utilisateur (UX) </strong>
     pour <strong>créer des interfaces plus intuitives et adaptées aux besoins des utilisateurs</strong>.
  </p>

  {/* Bouton sous le texte */}
  <a
    href="#portfolio"
    className="mt-6 px-6 py-3 text-white font-bold bg-[#e27d6d] rounded-lg shadow-md 
               hover:bg-[#d95c4a] transition duration-300 self-center"
  >
    Découvrir mes réalisations
  </a>
</div>

        {/* Partie droite : Image */}
        <div className="w-full md:w-1/3 flex justify-center mx-12">
          <img
            src="./images/illustr10bis.png"
            alt="Photo de Oliva"
            className="w-full md:w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}

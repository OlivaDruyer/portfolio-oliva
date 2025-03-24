import rigueurIcon from '/images/se-concentrer.png';
import curiositeIcon from '/images/question.png';
import adaptabiliteIcon from '/images/adaptabilite.png';
import creativiteIcon from '/images/tasse-de-cafe.png';
import espritEquipeIcon from '/images/esprit-dequipe.png';

export default function Competences() {
  return (
    <section className="py-8 flex flex-col items-center text-center">
      {/* Illustration + Titre */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        <h2 className="text-3xl font-stardom text-justify mb-6">Compétences</h2>
      </div>

      {/* Compétences Techniques */}
      <h2 className="text-xl md:text-left font-stardom shadow-sm px-4 py-3 mb-6 rounded-full inline-block bg-[#C6CFAC] hover:bg-[#9fa58c] transition duration-300">Techniques</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 mb-8 justify-center items-center">
        {[
          { src: "/images/html.png", alt: "HTML" },
          { src: "/images/css.png", alt: "CSS" },
          { src: "/images/javascript.png", alt: "JavaScript" },
          { src: "/images/figma.png", alt: "Figma" },
          { src: "/images/photoshop.png", alt: "Photoshop" },
          { src: "/images/illustrator.png", alt: "Illustrator" },
          { src: "/images/react.png", alt: "React" },
          { src: "/images/angular.jpg", alt: "Angular" },
          { src: "/images/wordpress.png", alt: "Wordpress" },
          { src: "/images/tailwind.png", alt: "Tailwind" }
        ].map((tech, index) => (
          <div key={index} className="relative flex flex-col items-center group">
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-20 h-20 transition-transform duration-300 hover:scale-110"
            />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-opacity duration-300">
              {tech.alt}
            </span>
          </div>
        ))}
      </div>

      {/* Soft Skills alignées au centre */}
      <div className="mt-8 w-full flex flex-col items-center">
      <h2 className="text-xl md:text-left font-stardom shadow-sm px-4 py-3 mb-6 rounded-full inline-block bg-[#C6CFAC] hover:bg-[#9fa58c] transition duration-300">Soft Skills</h2>
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {[
            { name: "Rigueur", icon: rigueurIcon },
            { name: "Curiosité", icon: curiositeIcon },
            { name: "Adaptabilité", icon: adaptabiliteIcon },
            { name: "Créativité", icon: creativiteIcon },
            { name: "Esprit d’équipe", icon: espritEquipeIcon }
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-md text-lg font-semibold transition-transform duration-300 hover:scale-110"
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton de téléchargement du CV */}
      <a
        href="/images/cv-oliva-druyer-2025.pdf"
        download
        className="mt-10 inline-block bg-[#e27d6d] shadow-md hover:bg-[#d95c4a] transition duration-300 text-white px-6 py-3 rounded-full font-semibold"
      >
        Télécharger mon CV
      </a>
    </section>
  );
}

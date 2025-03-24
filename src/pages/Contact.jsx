export default function Contact() {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-16 relative">
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        {/* Illustration de gauche */}
        <div className="hidden md:block w-1/3">
          <img
            src="/images/left-contact1.png"
            alt="Illustration Gauche"
            className="w-1/4 h-auto rounded-md opacity-65 absolute top-20 left-80"
          />
        </div>

        {/* Contenu principal */}
        <div className="md:w-1/2 relative z-10 p-6 flex flex-col items-center text-center md:text-left mx-2 md:items-start">
  <h2 className="text-3xl font-stardom">Me Contacter</h2>
  <p className="mt-2 text-base sm:text-lg">
    N'hésitez pas à me contacter par email ou à me rejoindre sur LinkedIn pour échanger et collaborer ! 🚀
  </p>
  <div className="mt-6">
    <a href="mailto:olivadruyer34@gmail.com" className="text-[#25455B] text-lg font-semibold block sm:inline mx-24">
      📧 olivadruyer34@gmail.com
    </a>
  </div>
  <div className="mt-4 flex items-center gap-2 justify-center md:justify-start mx-24">
    <img src="/images/logo-linkedin.avif" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
    <a
      href="https://www.linkedin.com/in/votre-profil"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#25455B] text-lg sm:text-xl font-semibold"
    >
      LinkedIn
    </a>
  </div>
</div>


        {/* Illustration de droite */}
        <div className="hidden md:block w-1/3">
          <img src="/images/right-contact.png" alt="Illustration Droite" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </section>
  );
}

  
const works = [
  {
    id: 1,
    title: "Site vitrine Boutique OCoffee",
    images: ["/images/ocoffee1.png", "/images/ocoffee2.png", "/images/ocoffee3.png"]
  },
  {
    id: 2,
    title: "Application de rencontres Senior Love",
    images: ["/images/SL1.png", "/images/SL2.png", "/images/SL3.png"]
  },
  {
    id: 3,
    title: "Site de recettes ORecipes",
    images: ["/images/OR1.png", "/images/OR2.png", "/images/OR3.png"]
  },
  {
    id: 4,
    title: "Site de photographie olivadruyer.com",
    images: ["/images/OD1.png", "/images/OD2.png", "/images/OD3.png"]
  },
  {
    id: 5,
    title: "Application Règles de gestion",
    images: ["/images/RG1.png", "/images/RG2bis.png", "/images/RG3.png"]
  },
];


export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-4 md:mx-20 py-10">
      <h2 className="text-4xl font-stardom mb-6 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
        {works.map((work) => (
          <div key={work.id} className="bg-grid shadow-md rounded-md">
            <h3 className="text-xl font-stardom py-4 text-left mx-14">{work.title}</h3>
            <div className="flex flex-wrap justify-center mb-4 gap-6 space-x-4">
              {work.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${work.title} - ${index + 1}`}
                  className="w-1/2 md:w-1/3 lg:w-1/4 h-auto object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

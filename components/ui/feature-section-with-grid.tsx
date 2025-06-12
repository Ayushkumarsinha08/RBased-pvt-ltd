
function Feature() {
  return (
    <div className="w-full bg-black py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-15 flex-col items-center"> 
            <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-3xl font-regular text-left">
                Services We Provide is Here
              </h2>
              <p className="text-2xl max-w-xl lg:max-w-5xl leading-relaxed  tracking-tight text-muted-foreground  text-left">
              We use the latest and best scientifically approved methodologies available in the research domain and help in GIS data collection, management and visualization through interactive and user-friendly apps and web portal development. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/research-img.jpg')] bg-cover bg-center rounded-md aspect-video mb-2 "></div>
              <h3 className="text-2xl tracking-tight">RESEARCH BASED SOLUTIONS</h3>
              <p className="text-muted-foreground text-lg">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/capacity-img.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">CAPACITY BUILDING</h3>
              <p className="text-muted-foreground text-lg">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/water-img.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">WATER RESOURCES</h3>
              <p className="text-muted-foreground text-lg">
              Hydrological modelling to quantify the distribution of water coming into the basin into different components like Runoff estimation and groundwater, Glaciological studies, Hydraulic modelling of rivers, etc.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/disaster.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">DISASTER MANAGEMENT</h3>
              <p className="text-muted-foreground text-lg">
              Flood and flash flood Mapping, Modelling, Risk assessment and mitigation strategies, Forest fire mapping and prediction, Landslide risk-mapping, Drought prediction and damage assessment, etc.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/climate.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">CLIMATE STUDIES</h3>
              <p className="text-muted-foreground text-lg">
              Climate change and climate variability studies, Numerical modelling of rainfall, Seasonal comparison of rainfall datasets, Asssessment of Weather and Temperature extremes, etc.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/images/urban-studies.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">URBAN STUDIES</h3>
              <p className="text-muted-foreground text-lg">
              Urban expansion, Site suitability studies, Digitisation and multi-layer map making, Digitisation and multi-layer map making, Solid and wastewater management, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

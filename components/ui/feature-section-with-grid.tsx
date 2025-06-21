
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
              RBased Services is an innovative step taken by the researchers and alumni of top technical
institutes and pioneer institute or Remote Sensing and GIS in India, Indian Institute of Remote
Sensing, ISRO Dehradun which is aimed at providing, Research Based Solution to Real Life
Problems. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/hydrology.jpg')] bg-cover bg-center rounded-md aspect-video mb-2 "></div>
              <h3 className="text-2xl tracking-tight">HYDROLOGY</h3>
              <p className="text-muted-foreground text-lg">
              Hydrological modeling to quantify the distribution of water coming into the basin into
              different components like runoff and ground water.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/studies.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">AGRICULTURAL STUDIES</h3>
              <p className="text-muted-foreground text-lg">
              Irrigation monitoring and management, command area mapping. Land cover and land degradation mapping.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/urban-studies.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">URBAN STUDIES</h3>
              <p className="text-muted-foreground text-lg">
              Urban water logging. Urban expansion. Site suitability studies. Water distribution system analysis and planning. Digitization and multi-layer map making.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/forestry-ecology.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">FORESTRY AND ECOLOGY</h3>
              <p className="text-muted-foreground text-lg">
              Forest type classification. Forest density classification. Habitat suitability Map. Forest fire spread Modelling. Environmental Impact Assessment, EIA studies. 
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/dist-mngt.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">DISASTER MANGEMENT</h3>
              <p className="text-muted-foreground text-lg">
              Flood Risk assessment and mitigation strategies. Forest fire mapping and prediction. Landslide risk zonation. Drought prediction and damage assessment.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/climatology.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">CLIMATOLOGY</h3>
              <p className="text-muted-foreground text-lg">
              Numerical modelling of rainfall. Cloudburst prediction. Climate change and climate variability studies.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/enery-sec.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">ENERGY SECTOR</h3>
              <p className="text-muted-foreground text-lg">
              Use of remote sensing and GIS in solar energy. GIS and bioenergy. GIS for wind power. 3D solar rooftop potential estimation. Terrain suitability and stability for proposed sits.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/gis-system.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">HEALTH GIS</h3>
              <p className="text-muted-foreground text-lg">
              Mapping and Management of Health Infrastructure. Geospatially studying the spread of any infection. Medical Resources allocation and management.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/capacity-mngt.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">CAPACITY BUILDING CELL</h3>
              <p className="text-muted-foreground text-lg">
              Workshops for Professionals like IFS and CWC officers. Professional course of Remote Sensing and GIS in Engineering Colleges.
              </p>
            </div>

            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/photogramentry.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">PHOTOGRAMMETRY</h3>
              <p className="text-muted-foreground text-lg">
              Description of the new service offered, highlighting its benefits and applications.
              </p>
            </div>

            <div className="flex flex-col gap-4 overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-[url('/pic-rbased/capacity.jpg')] bg-cover bg-center rounded-md aspect-video mb-2"></div>
              <h3 className="text-2xl tracking-tight">GEOGRAPHIC INFORMATION SYSTEM</h3>
              <p className="text-muted-foreground text-lg">
              Description of the new service offered, highlighting its benefits and applications.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

export default function About() {
    return (
        <div className="flex flex-col h-[80vh]">
        <main className="flex-grow relative overflow-hidden">
    
            {/* About Section */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-6xl lg:text-6xl font-extralight text-white mb-6">
                ABOUT US
            </h1>
            <p className="text-lg text-gray-300 mb-8">
                
We are an Earth observation data company that equips our customers, across multiple industries, with the information they need to optimise, plan, monitor, model, design and execute their business decisions and processes.
            </p>
            <p className="text-lg text-gray-300 mb-8">
            Bringing together high-resolution satellite imagery, smart sensors, machine learning, AI and edge computing, QL Space provides descriptive, diagnostic and predictive analytics tailored to your business goals and needs.
            </p>
            <p className="text-lg text-gray-300">
            Our downstream applications include work in areas such as precision mining, sustainability, agriculture monitoring, supply chain mapping, disaster response support, weather forecasting and infrastructure planning.
            </p>
            <p className="text-lg text-gray-300 mt-8">
            Our upstream focus involves plans to test a hybrid radar and optic payload, to further improve the insights we offer our customers.
                </p>
            </div>
        </main>
        </div>
    );
    }
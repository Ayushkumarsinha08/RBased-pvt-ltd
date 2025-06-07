export default function Card({
  title, 
  src, 
  description, 
  videoSrc
}: {
  readonly title: string, 
  readonly src: string, 
  readonly description: string,
  readonly videoSrc?: string
}) {
  
  return (
    <div>
       <div className="flex flex-col gap-4">
              {videoSrc ? (
                <video 
                  className="rounded-md aspect-video mb-2" 
                  src={videoSrc} 
                  controls
                >
                  <track kind="captions" src="./captions.vtt" label="English captions" />
                </video>
              ) : (
                <div 
                  className="rounded-md aspect-video mb-2 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              )}
              <h3 className="text-2xl tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-lg">
                {description}
              </p>
            </div>
    </div>
  );
}
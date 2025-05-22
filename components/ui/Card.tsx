import { title } from "process";

export default function Card({title, description}: {readonly title: string; readonly description: string;}) {
  return (
    <div >
       <div className="flex flex-col gap-4 ">
              <div className="bg-[url('/images/research-img.jpg')] bg-cover bg-center rounded-md aspect-video mb-2 "></div>
              <h3 className="text-2xl tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-lg">
                {description}
              </p>
            </div>
    </div>
  );
}
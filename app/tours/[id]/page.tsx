import turtleImg from "@/images/turtle.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* Local Image */}
        <div>
          <Image
            src={turtleImg}
            alt="turtle"
            priority
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
          />
          <h2>Local Image</h2>
        </div>
        {/* Remote Image */}
        <div>
          <Image
            src={url}
            alt="Tour Image"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote Image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;

import Image from "next/image";

export default function AboutDetails() {
  return (
    <div className="relative py-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2  w-full opacity-85">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 max-w-[500px] w-full">
            <Image
              src="/images/aboutimg1.webp"
              alt="Tech icons on smartphone"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4 text-sm font-light">
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful. Nor
              again is there anyone who loves or pursues or desires to obtain
              pain of itself, because it is pain, but because occasionally
              circumstances.
            </p>
            <p className="mb-4 text-sm font-light">
              Avyatech is a professional and future-oriented IT firm based in
              Delhi / NCR. We have an experienced team of developers, designers,
              and programmers that have more than 50 years of combined
              experience in the information technology industry.
            </p>
            <h2 className="text-xl font-bold mb-4">What We Do</h2>
            <p className="mb-4 text-sm font-light">
              Designing effective websites and apps for a business is like
              trying to lay down a track for a train that is already approaching
              the end of the railroad. This is because technology never stops
              progressing and businesses must continuously improve their
              internal operations and external marketing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Solutions Based on Your needs
            </h2>
            <p className="mb-4 text-sm font-light">
              Each business is unique and has different requirements. The
              systems used by a company and its objectives offer unlimited
              choices for designing digital assets. Our job is to go through a
              spectrum of unlimited possibilities and find the best solutions
              that fit the client's needs.
            </p>
            <p className="mb-4 text-sm font-light">
              Our web and mobile solutions can be implemented and customized
              easily to serve specific business needs.
            </p>
            <p className="mb-4 text-sm font-light">
              We design solutions that improve your business processes, provide
              greater value to customers, and help make your business a success.
            </p>
            <h2 className="text-xl font-bold mb-4">Aiming for the stars</h2>
            <p className="mb-4 text-sm font-light">
              Our web design and development company aims to help clients
              achieve better operational efficiency and marketing results
              through the application of new technologies.
            </p>
            <p className="mb-4 text-sm font-light">
              Avyatech offers digital solutions that are better and more
              cost-effective for your business.
            </p>
            <p className="mb-4 text-sm font-light">
              We believe in working smart to find creative and innovative IT
              solutions to our client's business problems that help them
              outperform and succeed.
            </p>
          </div>
          <div className=" max-w-[500px] w-full">
            <Image
              src="/images/aboutimg2.webp"
              alt="Person holding puzzle piece"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Bottom Background Layer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-85">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

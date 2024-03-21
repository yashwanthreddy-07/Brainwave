import { check2, grid, loading } from "../assets";
import { roadmap } from "../constans";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmao">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient":"bg-n-6"} `} key={item.id}>
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1 ">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                        <img src={item.imageUrl} alt={item.title} className="w-full" width={630} height={420} />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4"> {item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
      </div>
    </Section>
  );
};

export default Roadmap;

import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{title, link,date,description,projectType,tags}`
      )
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="bg-gray-800 min-h-screen p-12">
      <section className="container mx-auto">
        <h2 className="text-5xl flex my-6 justify-center rounded text-gray-500 cursive">
          Done Projects
        </h2>
        <section className="grid md:grid-cols-1 sm:grid-cols-1 gap-8">
          {projects &&
            projects.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-gray-400 p-16">
                <h4 className="text-gray-800 font-bold mb-2 hover:text-gray-300">
                  {project.title}
                </h4>
                <div className="text-gray-500 text-xs space-x-4">
                  <span className="font-bold">
                    {" "}
                    Finished on{" "}
                    <strong>
                      : {new Date(project.date).toLocaleDateString()}
                    </strong>
                  </span>
                  <span className="my-5 text-lg text-gray-700 leading-relaxed">
                    <p>{project.description}</p>
                  </span>
                  <span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 font-bold hover:underline hover:text-gray-400"
                    >
                      View Project{" "}
                      <span role="img" aria-label="right pointer">
                        😎
                      </span>
                    </a>
                  </span>
                  <p></p>
                  <span></span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

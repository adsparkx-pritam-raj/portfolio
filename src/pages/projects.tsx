import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import React from "react";

interface ProjectsProps {}

export default function Projects() {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects | Pritam Raj </title>
        <meta
          name="description"
          content="I love coding using tools like NodeJs, NestJs, ReactJs, NextJS Styled Components and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Pritam Raj" />
        <meta
          property="og:description"
          content="I love coding using tools like NodeJs, NestJs, ReactJs, NextJS Styled Components and more! Here are some of my favorite projects."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Projects
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work I developed. Navigate to want and
          explore the projects to see how they were created, the technologies
          used and functionalities implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Projects..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
            )}

            {projectFilter.map((project) => (
              <React.Fragment key={project.id}>
                <div className="border" />
                <S.ProjectsItem key={project.id}>
                  <div className="banner">
                    <Image
                      width={500}
                      height={300}
                      src={project.img}
                      alt={project.title}
                    />
                  </div>

                  <div>
                    <div className="title">
                      <Image
                        width={20}
                        height={20}
                        src={"/icon.svg"}
                        alt={project.title}
                      />
                      <h2>{project.title}</h2>
                    </div>
                    <div className="description">
                      <p>{project.description}</p>

                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag.name}>{tag.name}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/project/${project.url}`}>
                      <a>
                        <T.ButtonAlternatives>
                          See project
                          <ArrowRight
                            style={{
                              marginBottom: "-0.1rem",
                            }}
                            weight="bold"
                            size={16}
                          />
                        </T.ButtonAlternatives>
                      </a>
                    </Link>
                  </div>
                </S.ProjectsItem>
              </React.Fragment>
            ))}

            <p className="github">
              Hey, hey, hey... I've got even more in store{" "}
              <a
                href="https://github.com/pritam707"
                target="_blank"
                rel="noreferrer"
              >
                my GitHub{" "}
              </a>
              !
            </p>
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <Footer />
    </>
  );
}

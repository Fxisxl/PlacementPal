import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-indigo-950 text-white py-16 h-[70vh]">
        <div className="container mx-auto mt-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Your Placement Journey Starts Here
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-serif">
            Discover opportunities, connect with employers, and pave the way to
            a successful career.
          </p>

          {!isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-200"
            >
              Get Started
            </button>
          ) : (
            <p className=" text-6xl font-serif font-semibold">Welcome !!!</p>
          )}
        </div>
      </div>
      <div className="py-16 bg-[#001e2b]">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-24">
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                Welcome to Campus PlacementPal
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Start by welcoming visitors to the website and introducing them
                to the platform's primary purpose: to serve as a one-stop
                solution for streamlining the campus placement process.
                Highlight the importance of efficient organization and access to
                resources for students navigating the challenges of placement
                season. Emphasize the website's role in enhancing communication
                and collaboration among students, alumni, and the placement
                cell.
              </p>
              <p className="mt-4 text-[#aabdb5]">
                Describe how the platform revolutionizes the placement
                experience for students by offering innovative tools and
                features.
              </p>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-24">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                Empowering Students with Innovative Tools
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Highlight the quick query forum, where students can engage in
                real-time discussions, ask questions, and seek advice from peers
                or a panel of recently placed alumni. Discuss how this
                interactive platform fosters a sense of community and
                collaboration, allowing students to support each other
                throughout the placement process. Invite visitors to explore the
                website further and experience firsthand the benefits of this
                dynamic and user-friendly platform.
              </p>
              <p className="mt-4 text-[#aabdb5]">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                Engaging Community Interaction
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Introduce the preparation material aggregator, a platform for
                sharing and accessing resources such as interview experiences,
                study materials, sample questions, and tips tailored to specific
                companies or job roles. Emphasize how this feature equips
                students with the knowledge and skills needed to excel in
                placement interviews and assessments, contributing to their
                overall success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

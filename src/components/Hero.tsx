import Image from "next/image";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import RightArrowIcon from "@/assets/RightArrowIcon";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      id="hero"
      className="container-fluid bg-dark position-relative overflow-hidden"
    >
      <div
        className="container-fluid g-0  py-60"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="py-2">
          <div
            className="row g-0 position-relative text-white"
            style={{ overflow: "hidden" }}
          >
            <div
              className="w-100 position-relative"
              style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              {/* Text Content */}
              <div
                className="position-relative z-2 d-flex flex-column justify-content-center"
                style={{
                  minHeight: "679px",
                  width: "45%",
                }}
              >
                <h1 className={`${urbanist.className}  fw-bold mb-0`}>
                  Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h1 className={`${urbanist.className} fw-bold text-info mb-1`}>
                  Discover your way to success with Fametonic:
                </h1>

                <ul
                  className="list-unstyled fs-9 fw-semibold mt-3 mb-4"
                  style={{ lineHeight: "22px" }}
                >
                  <li className="d-flex gap-2 mb-13">
                    <span>&#10024;</span> Start growing your influence right
                    away—no waiting required!
                  </li>
                  <li className="d-flex gap-2 mb-13">
                    <span>&#10024;</span> Create viral TikToks and Reels step by
                    step with easy-to-follow lessons
                  </li>
                  <li className="d-flex gap-2 mb-13">
                    <span>&#10024;</span> Use a Personal AI Worker to boost your
                    content
                  </li>
                  <li className="d-flex gap-2">
                    <span>&#10024;</span> Learn from expert-led courses designed
                    for aspiring influencers
                  </li>
                </ul>

                <div className="d-inline-block w-max">
                  <button
                    className="btn btn-primary px-4 py-10"
                    style={{ minWidth: "313px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <p className="m-0 text-center text-white fs-5 fw-bold">
                        GET STARTED
                      </p>
                      <RightArrowIcon />
                    </div>
                  </button>
                  <p className="text-center my-1 fs-8">
                    1-minute quiz for personalized Insights
                  </p>
                </div>

                <p className="text-light-emphasis mt-4 mb-12 fs-8 fw-medium">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>

                <p className="text-light-emphasis fs-8 fw-medium">
                  Fametonic 2025 © All Rights Reserved.
                </p>
              </div>

              {/* Phone Image Floating */}
              <div className="position-absolute z-1 end-0 top-0">
                <Image
                  src={"/hero.png"}
                  alt="Fametonic mobile dashboard"
                  className="img-fluid"
                  width={666}
                  height={679}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

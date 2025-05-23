import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import Logo from "@/assets/Logo";
import LogoMobile from "@/assets/LogoMobile";

export default function Navbar() {
  return (
    <div className="container-fluid g-0 bg-dark">
      <div
        className="container-fluid g-0 px-20"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <nav className="navbar navbar-expand-lg py-4">
          <div className="container-fluid g-0">
            <div />
            <a className="navbar-brand" href="#">
              <LogoMobile className="d-block d-lg-none" />
              <Logo className="d-none d-lg-block" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ paddingRight: "12%" }}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
              <div className="d-flex gap-4 flex-column flex-lg-row pt-4 pb-2 py-lg-0">
                <a
                  href="#"
                  className="text-info text-decoration-none fs-10 fw-semibold lh-1"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-info text-decoration-none fs-10 fw-semibold lh-1"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

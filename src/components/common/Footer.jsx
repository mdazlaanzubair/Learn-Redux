import React from "react";

const Footer = () => {
  const social_links = [
    {
      icon: "fab fa-facebook-f",
      color: "#4267B2",
      title: "Facebook",
      link: "https://www.facebook.com/mdazlaanzubair/",
    },
    {
      icon: "fab fa-twitter",
      color: "#00acee",
      title: "Twitter",
      link: "https://twitter.com/mdazlaanzubair",
    },
    {
      icon: "fab fa-linkedin-in",
      color: "#0072b1",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
    {
      icon: "fab fa-instagram",
      color: "#e1306c",
      title: "Instagram",
      link: "https://www.instagram.com/mdazlaanzubair/",
    },
    {
      icon: "fab fa-whatsapp",
      color: "#34B7F1",
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=03113046692&text=Hi, Azlaan!",
    },
    {
      icon: "fab fa-github",
      color: "#171515",
      title: "GitHub",
      link: "https://github.com/mdazlaanzubair",
    },
  ];

  return (
    <footer className="text-center bg-light">
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="my-3">
          <h5 className="fw-bold">
            I'm social
            <sub>
              <i className="fas fa-hand-point-down text-warning"></i>
            </sub>
          </h5>
          {social_links.map((link, index) => (
            <a
              v-for="link in social_links"
              key={index}
              href={link.link}
              title={link.title}
              className="btn btn-floating m-1 mx-3"
              target="_blank"
              role="button"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </section>
        {/* <!-- Section: Social media --> */}
      </div>

      {/* <!-- Copyright --> */}
      <div className="text-center p-3 d-flex align-items-center justify-content-between px-5">
        <p className="fw-bold small">REDUX - Online Shop</p>
        <p className="fw-bold small">
          Developed with <i className="fas fa-heart text-danger me-1"></i>
          <a
            className="link"
            href="https://github.com/mdazlaanzubair"
            target="_blank"
          >
            Muhammad Azlaan Zubair
          </a>
        </p>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;

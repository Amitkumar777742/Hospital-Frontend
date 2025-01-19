import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            MedHealth Seva is a trusted healthcare service provider dedicated to
            delivering accessible, affordable, and high-quality medical
            solutions to individuals and families. Our mission is to bridge the
            gap between healthcare services and the communities that need them,
            ensuring well-being for all. At MedHealth Seva, we believe that
            everyone deserves compassionate and efficient healthcare. Whether
            it’s preventive care, diagnosis, or treatment, we are committed to
            empowering our clients with the best possible solutions tailored to
            their unique needs. Our team of experienced medical professionals,
            cutting-edge technology, and unwavering commitment to excellence
            define who we are. With MedHealth Seva, you are not just a
            patient—you are part of a community that prioritizes health, care,
            and trust. Join us on our journey to make healthcare seamless and
            reliable for everyone, everywhere.
          </p>
          
          
        </div>
      </div>
    </>
  );
};

export default Biography;

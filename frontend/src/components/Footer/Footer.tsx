import Logo from "@/assets/logonuevo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
        <img alt="logo" src={Logo} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p className="my-5">
            We are a dynamic language learning platform designed to connect language enthusiasts from across the globe through interactive video calls. Our mission is to provide a virtual space where individuals can engage in real-time conversations with native speakers or fluent speakers of their target language.
          </p>
          <p>© Speak Up</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">@speakup</p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">speakup@spk.pe</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
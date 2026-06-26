import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-full px-4 sm:px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden lg:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 sm:-top-20 sm:w-48 md:w-44 lg:top-20 lg:right-10 lg:left-auto lg:translate-x-0 lg:w-80 z-0">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-100"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path absolute md:scale-100"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font w-full font-zentry text-3xl! sm:text-4xl! md:text-5xl! lg:text-[6.2rem]! font-black! leading-[.9]!"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
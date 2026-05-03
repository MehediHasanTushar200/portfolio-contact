import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;
 

  return (
<section className="section lg:mt-16 relative overflow-hidden">
  <div className="container relative z-10">

    <div className="row pb-16 relative">

      {/* Background Image (FULL visible, not faded) */}
      <ImageFallback
        className="absolute inset-0 -z-10 object-cover object-top"
        src={"/images/map.svg"}
        fill={true}
        alt="map bg"
        priority={true}
      />

      {/* Content on top of image */}
      <div className="lg:col-6 relative z-20">
        {markdownify(
          title,
          "h1",
          "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px] text-dark"
        )}
      </div>

      <div className="contact-form-wrapper relative z-20 rounded border border-border p-6 lg:col-6 bg-white/90 dark:bg-darkmode/90">
        <h2>
          Send Us A
          <span className="ml-1.5 inline-flex items-center text-primary">
            Message <BsArrowRightShort />
          </span>
        </h2>

      <form
        className="contact-form mt-12"
        method="POST"
        action={form_action}
      >
        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="name">
            Full Name
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="email">
            Email Address
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="subject">
            Subject
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <input
            className="form-input w-full"
            name="subject"
            type="text"
            placeholder="Write your subject here"
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-secondary" htmlFor="message">
            Message
            <small className="font-secondary text-sm text-primary">*</small>
          </label>
          <textarea
            className="form-textarea w-full"
            name="message"
            placeholder="Write your message here..."
            rows="7"
            required
          />
        </div>

        <input
          className="btn btn-primary"
          type="submit"
          value="Send Message"
        />
      </form>
      </div>

    </div>
  </div>
</section>
  );
};

export default Contact;

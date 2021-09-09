import {
  faInstagram,
  faFacebookF,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="Contact">
      <address>
        <h5>ExpectAsian</h5>
        1385C North Main Street <br />
        Walnut Creek, CA 94596
      </address>
      <Link href="tel:925-300-3964">
        <a>(925) 300-3964</a>
      </Link>
      <p>Email: expectasian.ca@gmail.com</p>
      <section className="SocialMediaIcons">
        <Link href="https://www.instagram.com/expectasian.walnutcreek/">
          <a className="InstagramIcon">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </Link>

        <Link href="https://www.facebook.com/ExpectAsian-113809467006916/?view_public_for=113809467006916">
          <a className="FacebookIcon">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </a>
        </Link>

        <Link href="https://www.yelp.com/biz/expectasian-walnut-creek-2">
          <a className="YelpIcon">
            <FontAwesomeIcon icon={faYelp}></FontAwesomeIcon>
          </a>
        </Link>
      </section>
      {/* <section className="Map">
            <Map />
        </section> */}
    </div>
  );
}

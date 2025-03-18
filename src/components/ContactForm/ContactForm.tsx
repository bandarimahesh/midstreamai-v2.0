import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast from "react-hot-toast";
import "./ContactForm.css";
import FadingDots from "../Utils/LoadingAnimation/FadingDots";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string, country: object) => {
    const dialCode = `+${country.dialCode}`;
    // Ensure the number includes the country code
    if (!value.startsWith(dialCode)) {
      value = `${dialCode}${value.replace(country.dialCode, "").trim()}`;
    }
    console.log("Full Value with Country Code:", value);
    setFormData({ ...formData, mobile: value });
  };
  // Fetch environment variables for Vite
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;
  console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ensure mobile number is not just the country code
    const phoneRegex = /^\+\d{1,4}\d{7,}$/;
    if (!phoneRegex.test(formData.mobile)) {
      toast.error("Please enter a valid mobile number with country code.");
      console.log("Please enter a valid mobile number with country code.");
      return;
    }
    setLoading(true);

    const emailPromise = emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success(
          "Your form has been successfully submitted, We will contact you soon!"
        );
        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send email", error);
        alert("Failed to send request. Please try again.");
        toast.error(
          "Failed to send request. Please try again or contact through email"
        );
        setLoading(false);
      });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), 45000)
    );

    Promise.race([emailPromise, timeoutPromise]).catch((error) => {
      console.error(error.message);
      alert("Request timed out. Please try again.");
      toast.error("Request timed out. Please try again.");
      setLoading(false);
    });
  };

  return (
    <div>
      {loading ? (
        <FadingDots />
      ) : (
        <div className="form-container py-5">
          <div className="form-content bg-gradient-to-br from-primary-50 to-white">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  placeholder="Your Company Name"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex align-center gap10 db-flex-ph">
                <div className="form-group w100">
                  <label>Email</label>
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group w100">
                  <label>Mobile </label>
                  <PhoneInput
                    placeholder="Your Phone Number"
                    value={formData.mobile}
                    onChange={(value, country) =>
                      handlePhoneChange(value, country)
                    }
                    inputClass="phone-input"
                    containerClass="phone-container"
                    country="us" // Default country (optional)
                    enableLongNumbers={false}
                    autoFormat={true}
                    countryCodeEditable={false}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Enter Your Message ....."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

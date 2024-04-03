import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const contact = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [input, setInput] = useState(contact);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/send", input, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      toast.success(res.data.message);
      setInput(contact);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any City,Any Where</p>
          </div>
          <div className="item">
            <h4>Phone Us</h4>
            <p>Call Us:+91 123456789</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>yash@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371356923!2d80.77770172924532!3d26.84859648495782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711178884909!5m2!1sen!2sin"
              style={{ border: "0", width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={input.subject}
                onChange={(e) =>
                  setInput({ ...input, subject: e.target.value })
                }
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={input.message}
                onChange={(e) =>
                  setInput({ ...input, message: e.target.value })
                }
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

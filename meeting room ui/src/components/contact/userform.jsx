import React from "react";
//import Style from "./constyle.module.css";

const userForm = () => {
  return (
    <div className="homecontainer">
      <div className="contact-box">
        <div className="contact-left">
          <h3>Connect With Us</h3>
          <form>
            <div className="contact-row">
              <div className="contact-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" name="name" />
              </div>
              <div className="contact-group">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Your Phone No."
                  name="phone"
                />
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-group">
                <label>Email</label>
                <input type="email" placeholder="Your email" name="email" />
              </div>
              <div className="contact-group">
                <label className="input-lab">Subject</label>
                <input
                  type="text"
                  placeholder="Please write Subject here"
                  className="input-message"
                  name="message"
                />
              </div>
            </div>
            <label>Message</label>
            <textarea rows="5" placeholder="your message..."></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Reach Us</h3>
          <table>
            <tr className="data1">
              <td>Email</td>
              <td>contact@example.com</td>
            </tr>
            <tr className="data2">
              <td>Phone</td>
              <td>+1 5544 666</td>
            </tr>
            <tr className="data3">
              <td>Adress</td>
              <td>
                #212,Any Commercial bulding
                <br />
                near some place, some road
                <br />
                some city,Country 695893{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default userForm;

import React from 'react';
import { motion } from 'framer-motion';
import {Phone, Mail, PiSquare, PinIcon, MapPin} from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-5 min-vh-100">
      {/* Main Content */}
      <div className="container pb-5">
        <div className="row g-4">
          {/* Contact Form */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-4 shadow p-4 h-100">
              <h2 className="h4 fw-bold mb-4" style={{ color: '#1C0D0F' }}>Send Us a Message</h2>
              <form
                action="https://formsubmit.co/sales@1cloudng.com"
                method="POST"
                className="d-flex flex-column gap-3"
              >
                <div>
                  <label htmlFor="name" className="form-label text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-warning text-white fw-semibold rounded-4 w-100"
                    style={{ backgroundColor: '#E82630', paddingTop: '12px', paddingBottom: '12px' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info + Map */}
          <div className="col-md-6 d-flex flex-column gap-4">
            {/* Info */}
            <motion.div
              className="bg-white rounded-4 shadow p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="h4 fw-bold mb-4" style={{ color: '#1C0D0F' }}>Contact Information</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                    <Phone size={20} className='me-2'/>
                  <span>+95-9-400-623-499</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                    <Mail size={20} className='me-2'/>
                  <span>sales@gmail.com, support@gmail.com</span>
                </li>
                <li className="d-flex align-items-start">
                  <MapPin size={28} className='me-2'/>
                  <span>
                    Kyimyindaing, Yangon , Myanmar
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Map */}
            <motion.div
              className="bg-white rounded-4 shadow overflow-hidden flex-grow-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <iframe
                    title="Yangon Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30555.67304778318!2d96.09280320049737!3d16.8035639587596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb212e82b8ab%3A0x33cb16946138d9a8!2sKyimyindaing%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1752139297137!5m2!1sen!2smm"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                 />

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

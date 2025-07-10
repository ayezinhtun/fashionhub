import React from 'react'
import { motion } from 'framer-motion';
import { 
  Calendar, 
  TrendingUp, 
  Award, 
  Users, 
  MapPin,
  Globe,
  CheckCircle
} from 'lucide-react';

const journeyMilestones = [
  {
    year: 2015,
    title: 'The Beginning',
    description: 'Fashion Hub launches as an online store, offering a curated selection of clothing and accessories.',
  },
  {
    year: 2018,
    title: 'Expanding Our Reach',
    description: 'We expand our product range to include footwear and electronics, becoming a one-stop shop for style and technology.',
  },
  {
    year: 2020,
    title: 'A New Era',
    description: 'Fashion Hub undergoes a major website redesign, introducing new features and a more user-friendly interface.',
  },
  {
    year: 2023,
    title: 'Looking Ahead',
    description: 'We continue to grow and innovate, with plans to expand into new markets and introduce exciting new product categories.',
    
  },
];


const About = () => {
  return (
  
    <div className='py-4' style={{ backgroundColor: '#FAFAFA' }}>
      <div className='container'>
          <div className="mb-4" style={{ color: '#1C0D0F' }}>
              <h2>About Fashion Hub</h2>
                <p>At Fashioh Hub, we believe that fashion and technology should seamlessly blend into your everday life. Our journey began in 2020 with a simple idea: to create a one-stop shop where custoemrs coloud find the lateset trends in clothes, footwear and electoonics, all curated with a foucs on quality and style. From our humble beginnings as a small store, we've grown into a trusted destination for fashion-forward
                  individuals and tech enthusiasta alike. </p>
          </div>
          <div className='mb-4' style={{color: '#1C0D0F'}}>
            <h3>
              Our Mission
            </h3>
            <p>
              Our mission is to empower our customers to express their unique style and embrace innovation. We strive to offer a diverse selection of products that cater to a wide range of tastes and preferences, ensuring that everyone can find something they love. We are committed to providing exceptional customer service, fostering a sense of community, and continuously evolving to meet the ever-changing needs of our customers.
            </p>
          </div>
          <div className='mb-4' style={{ color: '#1C0D0F' }}>
            <h3>Our Values</h3>
            <p>At StyleHub, our core values guide everything we do:</p>
            <p>
              * **Quality:** We carefully select products from reputable brands and designers, ensuring that every item meets our high standards for craftsmanship and durability. <br />
              * **Style:** We stay ahead of the curve, constantly updating our inventory with the latest trends and timeless classics to keep our customers looking their best. <br />
              * **Innovation:** We embrace new technologies and approaches to enhance the shopping experience, from personalized recommendations to seamless online transactions. <br />
              * **Customer Focus:** We put our customers at the heart of our business, providing responsive support, hassle-free returns, and a commitment to satisfaction. <br />
              * **Community:** We believe in building a community of fashion and tech enthusiasts, fostering connections and celebrating individual expression.
            </p>
          </div>
        </div>

         <section className="py-5">
        <div className="container px-4">
          <div className="mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="fw-bold text-dark mb-3 fs-2"
            >
              Our History
            </motion.h2>
          </div>

          <div className="position-relative">
            <div className="d-none d-md-block position-absolute top-0 start-50 translate-middle-x w-0 border-start " style={{ height: '100%', border: '0.1px solid #E8D1D1' }}></div>

            <div className="d-flex flex-column gap-2">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="position-relative"
                >
                  <div
                    className="d-none d-md-flex position-absolute top-50 start-50 translate-middle rounded-circle text-white fw-bold align-items-center justify-content-center z-3"
                    style={{ width: '3rem', height: '3rem', backgroundColor: '#E8B5B8' }}
                  >
                    {milestone.year}
                  </div>

                  <div className={`col-md-5 ${index % 2 === 1 ? 'ms-md-auto' : ''}`}>
                    <div
                      className="d-flex d-md-none rounded-circle text-white fw-bold align-items-center justify-content-center mb-3"
                      style={{ width: '3rem', height: '3rem', backgroundColor: '#E8B5B8' }}
                    >
                      {milestone.year}
                    </div>

                    <div className="p-4 rounded">
                      <div className="d-flex align-items-center mb-3">
                        <h3 className="h5 m-0">{milestone.title}</h3>
                      </div>
                      <p className="mb-3" style={{ color: '#964F52' }}>{milestone.description}</p>
                     
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='team'>
        <div className="container">
          <h2 className='mb-4'>Meet Our Team</h2>
          <div className="row">
            <div className="col-lg-4 d-flex flex-column align-items-center">
                <div className='rounded-circle mb-3' style={{ width: '269px', height: '269px' }}>
                  <img className='h-100 w-100 object-cover rounded-circle' src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclWA4g9oGLdAm4iXxOz3wyK75knCDuueOxHl7S7Qk0ehBsgVKjVGAaU7J87CFEelHKgxdtyQwQpjiH2IWkJ98_I7udPJCBgv2tJYiNIvoIg_tc34tnad2QVqBO9WLmdiwU5-dF8Y7Zy7ICIM-lC3C7VE4XYIZCYiAKjXWPs2FOVpzFPjaqhC9DJ8xeMOi_X2TFfJgaCmX9qnFjM1PRqMYQEwnwnHNtWo0tY7bBa3ILveFC7nz14cCWWqx-jivlZibNTZZzZKJBg" alt="" />
                </div>
                <div className='text-center '>
                      <h6>Emily Carter</h6>
                      <p>CEO & Founder</p>
                  </div>
            </div>
             <div className="col-lg-4 d-flex flex-column align-items-center">
                <div className='rounded-circle mb-3' style={{ width: '269px', height: '269px' }}>
                  <img className='h-100 w-100 object-cover rounded-circle' src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRESq9rTFGGDT2ojowhnWzdWyB8wDyv-5rKxTsSjA1yQ0niZpN9Mm_AWzpFUgbUT2YCxbZ8yt2Ok4CbgMWP_psbFb2x13Zxbx7WSQ36WQ4YiTBu6dU2IrDT6b2vE225T0R33yJKT3xXwPZi0tuE1zvVXPCRxQ_ID6S2EJP7S5-dJzyy7hSfIero0v1OGEzEC5bm5C29c62XO0x1NQ07hLzHqxUDkF_GORMNVH5xHwSTH07bMBPGU7V8aciXIWhLH5lubeNE5mPyQ" alt="" />
                </div>
                <div className='text-center '>
                      <h6>Emily Carter</h6>
                      <p>CEO & Founder</p>
                  </div>
            </div>
             <div className="col-lg-4 d-flex flex-column align-items-center">
                <div className='rounded-circle mb-3' style={{ width: '269px', height: '269px' }}>
                  <img className='h-100 w-100 object-cover rounded-circle' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdKXzadWusQ8l3kcBCs7tNm3nXvfhZhlN1oLR998Euvq9h79kmJKSc6Og-5-TwINBWYL9NKmyqVbKP38blpJkJJBRqee85az4VGzD--aw1n_yK_uWi_q4GeldOlBP41giZXVDsgyIjux8QoWU8DWmdP6vWSh8T_zqOs5SuxQtgnm3bmXQTT9SOXzGbcmm8z9FfKZVevAnBr_rGicbOejgmQh32oZKVSxQCwJaRiE7EXFCCPmBlvSzQqrzHp7MBcfuBcW5Zo7Kkw" alt="" />
                </div>
                <div className='text-center '>
                      <h6>Emily Carter</h6>
                      <p>CEO & Founder</p>
                  </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    
  )
}

export default About

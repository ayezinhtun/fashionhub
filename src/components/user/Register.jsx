import React from 'react';


const Register = () => {
  return (
    <section className="d-flex align-items-center justify-content-center py-5">
      <div className="card border shadow-sm p-4" style={{ width: '450px' }}>
        <h3 className="text-center mb-4">Create an account</h3>
        
        <form>
        
        <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: '#1A0F12' }}>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#1A0F12' }}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#1A0F12' }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>

           <div className="mb-3">
            <label htmlFor="confrimpassword" className="form-label" style={{ color: '#1A0F12' }}>Confrim Password</label>
            <input
              type="password"
              className="form-control"
              id="confimpassword"
              placeholder="Confirm Your Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn text-white rounded-4" style={{ backgroundColor: '#E82630', paddingTop: '12px', paddingBottom: '12px' }}>
              Register
            </button>
          </div>
        </form>

        {/* Optional: Forgot Password */}
        <div className="text-center mt-3">
            <p>Already have an account? <a href="/login" className="text-decoration-none text-danger">Sign In</a> </p>
        </div>
      </div>
    </section>
  );
};

export default Register

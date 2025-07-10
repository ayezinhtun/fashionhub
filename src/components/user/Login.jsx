import React from 'react';

const Login = () => {
  return (
    <section className="d-flex align-items-center justify-content-center py-5">
      <div className="card border shadow-sm p-4" style={{ width: '450px' }}>
        <h3 className="text-center mb-4">Welcome Back</h3>
        
        <form>
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
 
          <div className="mb-3 d-flex align-items-center">
            <input type="checkbox" className='me-2' />
            <span style={{ color: '#1A0F12' }}>Remember me</span>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn text-white rounded-4" style={{ backgroundColor: '#E82630', paddingTop: '12px', paddingBottom: '12px' }}>
              Sign In
            </button>
          </div>
        </form>

        {/* Optional: Forgot Password */}
        <div className="text-center mt-3">
            <p>Don't have an account? <a href="/register" className="text-decoration-none text-danger">Sign Up</a> </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

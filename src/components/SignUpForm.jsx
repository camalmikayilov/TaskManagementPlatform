import { useState } from 'react';

const SignUpForm = () => {

  const [signvalues, setSignValues] = useState({
    email: '',
    password: '',
    username: '',
    adress: '',
    phoneNumber: '',
    organizationName: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // DATANI BIRINCI CEKIB YOXLAMALISAN OLMASA ELAVE ETMELISEN LOKALA - Yoxsa her defe yeni data elave edende digerini silecek. O birisi sehifelerde de bu versiyani iwlet
    var signData = JSON.parse(localStorage.getItem('signdata') || "[]");
    signData.push(signvalues)
    localStorage.setItem('signdata', JSON.stringify(signData))
  }

  // ONCHANGE VERDIM BULARI DAHA RAHAT YOLDU. COX DATA OLANDA STATELER QARIWIR ONA GORE SENIN STATELERI COMMENTE ALDM 1-NE YIGDIM.
  const handleSignUp = (e) => {
    setSignValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Organization Name"
        onChange={handleSignUp}
        className="signup-input"
        name='organizationName'
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={handleSignUp}
        className="signup-input"
        name='phoneNumber'
      />
      <input
        type="text"
        placeholder="Address"
        onChange={handleSignUp}
        className="signup-input"
        name='adress'
      />
      <input
        type="text"
        placeholder="User Name"
        onChange={handleSignUp}
        className="signup-input"
        name='username'
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleSignUp}
        className="signup-input"
        name='email'
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleSignUp}
        className="signup-input"
        name='password'
      />
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
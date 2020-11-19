import React from 'react';

function ContactInfo({phone, email}) {
  return (
    <div className="contact">
      <div>
        <label>Phone</label>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div>
        <label>Email</label>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}

export default ContactInfo;
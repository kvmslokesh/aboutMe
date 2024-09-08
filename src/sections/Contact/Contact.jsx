import { useState, forwardRef } from 'react';
import styles from './ContactStyles.module.css';

const Contact = forwardRef((props, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Thank you for reaching out! Your message has been sent.');
      } else {
        setMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMessage('Error sending the message. Please try again later.');
    }

    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <section id="contact" ref={ref} className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="40a74c77-a388-4abe-bc78-ba93439f29bf" />
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} />
      </form>
      {message && <p className="formMessage">{message}</p>}
    </section>
  );
});

export default Contact;

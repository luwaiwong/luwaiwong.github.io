import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as colors from '../../../colors.js';

const ContactContainer = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 8vw;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 6vw;
    min-height: 50vh;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 600;
  color: ${colors.TEXT};
  margin-bottom: 0.75rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: ${colors.TEXT_MUTED};
  margin-bottom: 2.5rem;
  max-width: 500px;
  text-align: center;
`;

const Form = styled(motion.form)`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${colors.TEXT};
  background: ${colors.BACKGROUND_CARD};
  border: 1px solid ${colors.BORDER};
  border-radius: 8px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.ACCENT};
  }

  &::placeholder {
    color: ${colors.TEXT_MUTED};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${colors.TEXT};
  background: ${colors.BACKGROUND_CARD};
  border: 1px solid ${colors.BORDER};
  border-radius: 8px;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.ACCENT};
  }

  &::placeholder {
    color: ${colors.TEXT_MUTED};
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.BACKGROUND};
  background: ${colors.ACCENT};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: ${colors.ACCENT_HOVER};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Footer = styled(motion.footer)`
  text-align: center;
  padding: 2rem 8vw;
  color: ${colors.TEXT_MUTED};
  font-size: 0.85rem;
  border-top: 1px solid ${colors.BORDER};
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 1.5rem 6vw;
    font-size: 0.8rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:luwaiwong@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <ContactContainer id="contact">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionTitle variants={itemVariants}>
            Get In Touch
          </SectionTitle>

          <Description variants={itemVariants}>
            Feel free to reach out for opportunities, collaborations, or just to chat about tech.
          </Description>

          <Form variants={itemVariants} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </Form>
        </motion.div>
      </ContactContainer>

      <Footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Lu-Wai Wong. Built with React.
      </Footer>
    </>
  );
};

export default Contact;

import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Analytics } from '../../services/analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border: 3px solid black;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: ${props => props.theme.shadows.comic};

  @media (max-width: 768px) {
    padding: 2rem;
    width: 95%;
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.accent};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textPrimary};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const BottomContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textPrimary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  background: white;
  color: ${props => props.theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: white;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary}80;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  min-height: 180px;
  resize: vertical;
  background: white;
  color: ${props => props.theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: white;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary}80;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${props => props.theme.fonts.accent};
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-family: ${props => props.theme.fonts.body};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid ${props => props.theme.colors.primary}20;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: ${props => props.theme.colors.accent};
  }
`;

const ContactForm = ({ onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        Analytics.trackContactFormSubmit();
        resetForm();
        alert('Message sent successfully!');
        onClose();
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <FormContainer
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Get in Touch</Title>
        <ContactInfo>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>adarcher21@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} />
            <span>+1 (215) 437-2912</span>
          </ContactItem>
        </ContactInfo>
        <Form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <TextArea
              name="message"
              placeholder="Your Message"
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message && (
              <ErrorMessage>{formik.errors.message}</ErrorMessage>
            )}
          </InputWrapper>

          <SubmitButton 
            type="submit" 
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </Form>
        
        <BottomContactInfo>
          <ContactItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Philadelphia, PA</span>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faClock} />
            <span>{currentTime}</span>
          </ContactItem>
        </BottomContactInfo>
            
        <SocialLinks>
          <SocialLink 
            href="https://github.com/AD-Archer" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/antonio-archer" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink 
            href="https://www.instagram.com/antonio_darcher/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialLink>
        </SocialLinks>
      </FormContainer>
    </ModalOverlay>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactForm; 
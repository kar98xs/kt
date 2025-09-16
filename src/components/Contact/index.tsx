import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { Title } from '../../styles/styles';
import { 
  ContactContainer, 
  ContactContent, 
  ContactInfo,
  ContactMethods,
  ContactMethod,
  SocialLinks,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  FormMessage,
  AvailabilityStatus
} from './styles';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        // Fallback: simulate email sending for demo purposes
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
      } else {
        // Send email using EmailJS
        const templateParams = {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          user_message: formData.message,
          to_name: 'Kartik Tripathi', // Your name
        };

        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      
      let errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
      
      if (error?.text) {
        // EmailJS specific error
        if (error.text.includes('Template')) {
          errorMessage = 'Email template configuration error. Please contact me directly.';
        } else if (error.text.includes('Service')) {
          errorMessage = 'Email service configuration error. Please contact me directly.';
        } else if (error.text.includes('User')) {
          errorMessage = 'Invalid user configuration. Please contact me directly.';
        }
      } else if (error?.status === 400) {
        errorMessage = 'Invalid email configuration. Please contact me directly.';
      } else if (error?.status === 401) {
        errorMessage = 'Email service authentication failed. Please contact me directly.';
      }
      
      setFormStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <Title>
        Get In Touch
        <p>&lt;/contact&gt;</p>
      </Title>
      
      <ContactContent>
        <ContactInfo>
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind, want to collaborate, or just want to say hi, 
            feel free to reach out. I'll do my best to get back to you!
          </p>
          
          <ContactMethods>
            <ContactMethod>
              <div className="icon">
                <FiMail />
              </div>
              <div className="details">
                <h4>Email</h4>
                <p>Kartik.tripathi9096@gmail.com</p>
              </div>
            </ContactMethod>
            
           
            
            <ContactMethod>
              <div className="icon">
                <FiMapPin />
              </div>
              <div className="details">
                <h4>Location</h4>
                <p>Noida, India</p>
              </div>
            </ContactMethod>
          </ContactMethods>
          
          <AvailabilityStatus>
            <div className="status-dot"></div>
            Available for freelance work
          </AvailabilityStatus>
          
          <SocialLinks>
            <a href="https://github.com/K9TX" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/k9tx" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://x.com/K9TXS" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FiTwitter />
            </a>
            <a href="https://www.instagram.com/kartik9t.xs" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FiInstagram />
            </a>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup className="half">
            <div>
              <label htmlFor="name">Name *</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Subject *</label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message *</label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or just say hello..."
              required
            />
          </FormGroup>
          
          {formStatus.type && (
            <FormMessage success={formStatus.type === 'success'}>
              {formStatus.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
              {formStatus.message}
            </FormMessage>
          )}
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};


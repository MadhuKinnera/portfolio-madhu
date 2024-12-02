import linkedinIcon from '../assets/linkedin.png'; // replace with your image paths
import emailIcon from '../assets/mail.png'; // replace with your image paths
import githubIcon from '../assets/github.png'; // replace with your image paths
import instagramIcon from '../assets/instagram.png'; // replace with your image paths

const Contact = () => {
  return (
    <section id="contact" className="py-20 transition-colors duration-200 bg-gray-50 dark:bg-gray-800">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">Contact Me</h2>
      <div className="grid">
      <div className="flex justify-center gap-6 social">
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/madhu-kinnera/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-300 icon-linkedin hover:scale-110"
              >
                <img
  src={linkedinIcon}
  alt="LinkedIn"
  className="w-10 h-10 dark:border-4 dark:rounded-md dark:bg-white "
/>

              </a>
    
              {/* Email Icon */}
              <a 
                href="mailto:kinneramadhu123@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-300 icon-email hover:scale-110"
              >
                <img src={emailIcon} alt="Email" className="w-10 h-10 dark:border-4 dark:rounded-md dark:bg-white" />
              </a>
    
              {/* GitHub Icon */}
              <a 
                href="https://github.com/MadhuKinnera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-300 icon-github hover:scale-110"
              >
                <img src={githubIcon} alt="GitHub" className="w-10 h-10 dark:border-4 dark:rounded-md dark:bg-white" />
              </a>
    
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/man_madhu_do.1.1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-300 icon-instagram hover:scale-110"
              >
                <img src={instagramIcon} alt="Instagram" className="w-10 h-10 dark:rounded-md dark:border-4 dark:bg-white" />
              </a>
            </div>
      </div>
    </div>
    </section>
  );
};





export default Contact;

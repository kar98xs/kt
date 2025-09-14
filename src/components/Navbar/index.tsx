import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useThemeContext } from '../../context/ThemeContext';
import {
  NavbarContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  NavActions,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu,
  MobileMenuBackdrop,
  MobileMenuHeader,
  MobileMenuTitle,
  MobileCloseButton,
  MobileNavLinks,
  MobileNavLink
} from './styles';

export const Navbar: React.FC = () => {
  const { currentTheme, toggleTheme } = useThemeContext();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    
    ticking.current = true;
    
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      // Only update if scroll changed significantly
      if (Math.abs(scrollY - lastScrollY.current) > 10) {
        const scrolled = scrollY > 50;
        setIsScrolled(scrolled);

        // Update active section based on scroll position
        const sections = navItems.map(item => ({
          id: item.id,
          element: document.getElementById(item.id)
        })).filter(section => section.element !== null);

        let currentSection = navItems[0].id;

        for (const section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const isInView = rect.top <= 150 && rect.bottom >= 150;
            
            if (isInView) {
              currentSection = section.id;
              break;
            }
          }
        }

        setActiveSection(currentSection);
        lastScrollY.current = scrollY;
      }
      
      ticking.current = false;
    });
  }, [navItems]);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
      
      if (isMobileMenuOpen && 
          !mobileMenu?.contains(target) && 
          !mobileMenuButton?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        // Get the element's position relative to the document
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop;
        
        
        window.scrollTo({
          top: Math.max(0, offsetTop - 100), // Account for navbar height plus margin
          behavior: 'smooth'
        });
      }, 50);
    } else {
      const sectionIndex = navItems.findIndex(item => item.id === sectionId);
      if (sectionIndex >= 0) {
        const estimatedPosition = sectionIndex * window.innerHeight;
        window.scrollTo({
          top: estimatedPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer className={isScrolled ? 'scrolled' : ''}>
        <NavContent>
          <Logo onClick={scrollToTop}>
            Portfolio
          </Logo>

          <NavLinks>
            {navItems.map(item => (
              <NavLink key={item.id}>
                <a
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </NavLink>
            ))}
          </NavLinks>

          <NavActions>
            <ThemeToggle onClick={toggleTheme} title="Toggle theme">
              {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
            
            <MobileMenuButton 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              title="Toggle menu"
              data-mobile-menu-button
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>
          </NavActions>
        </NavContent>
      </NavbarContainer>

      <MobileMenuBackdrop 
        isOpen={isMobileMenuOpen} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />
      
      <MobileMenu isOpen={isMobileMenuOpen} data-mobile-menu>
        <MobileMenuHeader>
          <MobileMenuTitle>Navigation</MobileMenuTitle>
          <MobileCloseButton 
            onClick={() => setIsMobileMenuOpen(false)}
            title="Close menu"
          >
            <FiX />
          </MobileCloseButton>
        </MobileMenuHeader>
        
        <MobileNavLinks>
          {navItems.map(item => (
            <MobileNavLink key={item.id}>
              <a
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </MobileNavLink>
          ))}
        </MobileNavLinks>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(0, 217, 255, 0.2)'
        }}>
          <ThemeToggle onClick={toggleTheme} title="Toggle theme">
            {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </div>
      </MobileMenu>
    </>
  );
};

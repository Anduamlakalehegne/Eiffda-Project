// utils/scrollToElement.js
export const scrollToElement = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition, 
        behavior: 'smooth'
      });
    }
  };
  
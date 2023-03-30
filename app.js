const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classLists.add('show');
    }
  });
});
const homeElements = document.querySelectorAll('home');
homeElements.forEach((el) => observer.observe(ell));
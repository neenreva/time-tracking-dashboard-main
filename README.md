### This is a solution to the [Frontend Mentor](https://www.frontendmentor.io/home) challenge: 

# Time tracking dashboard

**Welcome! 👋 Here's a quick look:**

![My solution](/design/FrontendMentorTimetrackingdashboard.png)

[Live Link](https://neenreva.github.io/time-tracking-dashboard-main/) [Solution Home](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw/hub/time-tracking-dashboard-KQZFeXNZZ)

### The challenge

Your challenge is to build out this dashboard and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

If you would like to practice working with JSON data, we provide a local `data.json` file for the activities. This means you'll be able to pull the data from there instead of using the content in the `.html` file.

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Reinforced all aspects of web dev but mostly grid and scss.

### Continued development

Plan to revisit and use the JSON file to dynamically add the data. In the future I would like to get away from using a plugin to compile scss. Feel like the JS could be cleaner because the 3 forEach loops in there for something pretty simple.

```
timeSpan.forEach((el) => {
  el.addEventListener("click", function () {
    timeSpan.forEach(el => el.classList.remove('active'))
    el.classList.add('active'); 
    let timePeriod = `card__${el.innerHTML.toLowerCase()}`;
    cards.forEach((el) => {
        el.classList.add('hidden');
        el.classList.contains(timePeriod) ?
        el.classList.toggle('hidden') :
        el.classList.add('hidden')
    });
  });
});
```

### Useful resources

- [Figma](https://www.figma.com) - This helped me size the type.


### As always feedback is welcome! Thanks for checking this out.
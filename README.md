https://advanced-css-project.herokuapp.com/

BLOCK ELEMENT MODIFIER (how to name classes)

.block {}
.block__element {}
.block__element--modifier{}

ARQUITECTURE (7-1 PATTERN)

7 folders that contains partial files and 1 file called "main.scss" that imports all the other files.
This partial files will be imported on the mail.scss file.
Partial files' names always begin with _ (ex: _base)

- abstracts/ : Where we put code that doesn't output any CSS (variables, mixins)
  _functions.scss
  _mixins.scss
  _variables.scss
- base/ : Basic product definitions
  _animations.scss
  _base.scss
  _typography.scss
  _utils.scss : utils classes (for ex: "u-center-text" is a class tu center text children)
- components/ : Where there is one file for each component
- layout/ : Where we define overall layout for the project (global footer, header, etc)
- pages/ : Styles for specific pages of the project
- themes/ : Diferent visual themes
- vendors/ : For all third party CSS

Relative units

PERCENTAGE
fonts -> font-size: 150% (the element will have a font-size 150% larger than the parent computed font-size)
lenghts -> padding: 10% (the element will have a padding of 10% the parent computed width)

EMS (based in font-size)
fonts -> font-size: 3em (the element will have a font-size 3 times larger than the parent computed font-size)
lenght -> padding: 2em (the element will have a padding of 2 times the current element font-size)

REMS (based in root font-size, usually 16px)
fonts and length -> margin: 10rem (the element will have a margin of 10 times the root computed font-size)

VH (% of viewport height)

VW (% of viewport width)

RESPONSIVE DESIGN

Media queries don't add any importance or specificity to selectors.

Desktop first -> max-width media queries
Mobile first -> min-width media queries

Mobile first Pros

- 100% optimised for mobile experience
- Reduces websites and apps to the absolute essentials
- Results in smaller, faster and more efficient products
- Prioritizes content over aesthetic design, which may be desirable

Mobile first Cons

- The desktop version might feel overly empty and simplistic
- More difficult and counterintuitive to develop
- Less creative freedom, making it more difficult to create distinctive products
- Clients are used to see a desktop version of the site as a prototype
- Do you users even use the mobile internet? What's the purpose of your website?

Important:

- Always keep both desktop and mobile in mind
- In desktop first design allways put the larger media query before de smaller ones to avoid conflicts. In mobile first design this will be the other way arround.
- Always declare media queries in ems.

IMAGES AND RESOLUTION

Density switching

1x screen (low-res): Means it uses 1 fisical px to display 1 px of the design.
2x screen (high-res): Means it uses 2 fisical px to display 1 px of our design. Ex: smartphones and macbooks. These needs a picture of double the size to look sharp.

````
<img srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
alt="Photo 1"
class="composition__photo composition__photo--p1"
src={nat1Large}
/>
```
srcSet: informs the browser the image size
size
sizes: specifies the image viewport width for the diferent breakpoints and the last one is default value 


Art direction

When diferent images are used depending on the resolution

```
<picture className="footer__logo">
    <source srcSet={`${logoGreenSmall1x} 1x, ${logoGreenSmall2x} 2x`} media="(max-width: 37.5em)"/>
    <img srcSet={`${logoGreenSmall1x} 1x, ${logoGreenSmall2x} 2x`} alt="Full logo"/>
</picture>
```

FLEX BOX

flex: 0 0 300px; // flex-grow (how much the element can grouw), flex-shrink (how much the element can shrink), flex-basis (width    ); 
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
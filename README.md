# LaTeX Boilerplate for thesis and what not
You guessed it, images go in /img, tex files go in /includes. You get
a directory that looks like this:
```
├── Gruntfile.js
├── README.md
├── base.tex
├── bib.bib
├── img/
├── includes/
│   ├── abstract.tex
│   ├── appendix.tex
│   ├── meat.tex
│   └── titlepage.tex
└── package.json
```

## Getting started
```bash
git clone https://github.com/charlespwd/tex-base.git
cd tex-base
npm install
vi includes/meat.tex
grunt
# BOOM!
```

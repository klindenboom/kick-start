<h1 class="sg-title sg-title-main"> Overview </h1>

##Coding Style
----
- Use soft-tabs with a two space indent.
- Put spaces after : in property declarations.
- Put spaces before { in rule declarations.
- Use hex color codes #000 unless using rgba.
- Use // for comment blocks (instead of /* */).
- Document styles with KSS.

Here is good example syntax:

    // This is a good example!
    .styleguide-format {
        border: 1px solid #0f0;
        color: #000;
        background: rgba(0,0,0,0.5);
    }

## File Organization
----
In general, the CSS file organization should follow something like this:

	styles
	├── components
	│   ├── comments.scss
	│   └── listings.scss
	├── globals
	│   ├── browser_helpers.scss
	│   ├── responsive_helpers.scss
	│   ├── variables.scss
	├── plugins
	│   ├── jquery.fancybox-1.3.4.css
	│   └── reset.scss
	├── sections
	│   ├── issues.scss
	│   ├── profile.scss
	└── shared
	    ├── forms.scss
	    └── markdown.scss

## Pixels vs. Ems
----

Use `em` for all values unless an absolute fixed pixel size is required. Additionally, unit-less `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.
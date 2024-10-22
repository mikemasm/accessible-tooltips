# Accessible Tooltips

A lightweight, accessible tooltip component that provides informational and help tooltips with various positioning options. The tooltips are keyboard-accessible and customizable through CSS/SCSS.

## Features

- Two tooltip styles: Info (ℹ️) and Help (?)
- Multiple positioning options that automatically adjust based on viewport position:
  - Top left 
  - Top center
  - Top right
  - Bottom left
  - Bottom center
  - Bottom right
- Full keyboard accessibility
- Automatic repositioning on window resize
- Close on escape key, scroll, or click outside
- Support for HTML content within tooltips
- Responsive design
- ARIA attributes for screen reader support

## File Structure

```
accessible-tooltips/
├── images/
│   ├── tooltip-arrow.svg
│   ├── info-icon-default.svg
│   ├── info-icon-hover.svg
│   ├── info-icon-selected.svg
│   ├── help-icon-default.svg
│   ├── help-icon-hover.svg
│   └── help-icon-selected.svg
├── accessible-tooltips.css
├── accessible-tooltips.css.map
├── accessible-tooltips.html
├── accessible-tooltips.js
├── accessible-tooltips.scss
└── README.md
```

## Installation

1. Include the required CSS and JavaScript files in your HTML:
```html
<link rel="stylesheet" href="accessible-tooltips.css">
<script src="accessible-tooltips.js"></script>
```

2. Add the tooltip container at the end of your body:
```html
<div class="tooltip-content d-none" role="tooltip" aria-hidden="true"></div>
```

## Usage Examples

### Standard Tooltip
```html
<a href="#" class="tooltip" data-content="Your tooltip content here">Trigger text</a>
```

### Info Icon Tooltip
```html
<a href="#" class="tooltip tooltip-info" 
   data-content="Information tooltip content" 
   title="info tooltip"></a>
```

### Help Icon Tooltip
```html
<a href="#" class="tooltip tooltip-help" 
   data-content="Help tooltip content" 
   title="help tooltip"></a>
```

### HTML Content in Tooltip
```html
<a href="#" class="tooltip" 
   data-content="Description with <a href='#'>a link</a> and more content">
   Trigger text
</a>
```

## Accessibility Features

- Keyboard navigation:
  - Space/Enter: Toggle tooltip
  - Escape: Close tooltip
  - Tab: Automatically closes tooltip when focus moves outside
- ARIA attributes:
  - `role="tooltip"`
  - `aria-hidden`
  - `aria-describedby`
- Focus management
- Screen reader support
- High contrast icons

## JavaScript Features

The component includes the following functionality:

- Automatic positioning based on viewport location
- Responsive repositioning on window resize
- Close triggers:
  - Click outside tooltip
  - Escape key
  - Scrolling
  - Tab navigation
- Unique ID generation for ARIA relationships
- Support for space bar activation
- Dynamic content injection
- Position calculation for optimal placement

## Styling

The tooltips can be customized through SCSS variables or by overriding the CSS classes. The default tooltip has:

- Light blue background (`#F2F9FF`)
- Gray border (`#757575`)
- 200px max width
- 16px padding
- 0.25rem border radius
- SVG arrows for visual direction

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

None. This is a standalone component with no external dependencies.
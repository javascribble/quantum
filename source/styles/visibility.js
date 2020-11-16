const visible = 'visible', hidden = 'hidden';

export const show = style => style.visibility = visible;

export const hide = style => style.visibility = hidden;

export const shown = style => style.visibility == visible;

export const toggle = style => shown(style) ? hide(style) : show(style);
/* @ds-bundle: {"format":3,"namespace":"OhBelmansDesignSystem_640ded","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"PricingCard","sourcePath":"components/cards/PricingCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"CategoryTab","sourcePath":"components/display/CategoryTab.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"e1bd7f217717","components/buttons/IconButton.jsx":"e5c7cbeae870","components/cards/FeatureCard.jsx":"3f5c9f54bdcd","components/cards/PricingCard.jsx":"cc837e3f70c8","components/cards/TestimonialCard.jsx":"6bf2631c01af","components/display/Avatar.jsx":"2471fe61cc52","components/display/Badge.jsx":"a694ed77cb63","components/display/CategoryTab.jsx":"e8cf874fd2f4","components/forms/Field.jsx":"c6ca689f6bd5","components/forms/Input.jsx":"76be12ce5800","components/navigation/TopNav.jsx":"d063390f4a10","ui_kits/marketing/CtaFooter.jsx":"a688b9e2e14b","ui_kits/marketing/FeatureGrid.jsx":"fd0bd4dbaed0","ui_kits/marketing/Hero.jsx":"1c92622800ce","ui_kits/marketing/Pricing.jsx":"c8d30f3627b2","ui_kits/marketing/Testimonials.jsx":"013185debf8e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OhBelmansDesignSystem_640ded = window.OhBelmansDesignSystem_640ded || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Oh Belmans primary action element.
 * Variants: primary (near-black), secondary (cream + hairline), onColor (white,
 * for use over saturated feature cards), text (inline link). Rounded 12px (--radius-md).
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 14px",
      fontSize: 13
    },
    md: {
      height: 44,
      padding: "0 20px",
      fontSize: 14
    },
    lg: {
      height: 52,
      padding: "0 28px",
      fontSize: 15
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-text)",
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 0,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 120ms ease, color 120ms ease, border-color 120ms ease",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: disabled ? "var(--primary-disabled)" : "var(--primary)",
      color: disabled ? "var(--muted)" : "var(--on-primary)"
    },
    secondary: {
      background: "var(--canvas)",
      color: disabled ? "var(--muted-soft)" : "var(--ink)",
      borderColor: "var(--hairline)"
    },
    onColor: {
      background: "var(--canvas)",
      color: "var(--ink)"
    },
    text: {
      background: "transparent",
      color: disabled ? "var(--muted-soft)" : "var(--ink)",
      height: "auto",
      padding: 0,
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--primary-active)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--surface-soft)";
      if (variant === "onColor") e.currentTarget.style.background = "var(--surface-soft)";
      if (variant === "text") e.currentTarget.style.opacity = "0.7";
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--primary)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--canvas)";
      if (variant === "onColor") e.currentTarget.style.background = "var(--canvas)";
      if (variant === "text") e.currentTarget.style.opacity = "1";
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square icon-only button. Used for nav controls, close actions,
 * toolbar icons. Circular (pill) or rounded-square shape.
 */
function IconButton({
  variant = "ghost",
  size = 44,
  shape = "rounded",
  ariaLabel,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid transparent"
    },
    soft: {
      background: "var(--surface-card)",
      color: "var(--ink)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--canvas)",
      color: "var(--ink)",
      border: "1px solid var(--hairline)"
    },
    primary: {
      background: "var(--primary)",
      color: "var(--on-primary)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: shape === "circle" ? "var(--radius-full)" : "var(--radius-md)",
      cursor: "pointer",
      transition: "background-color 120ms ease, opacity 120ms ease",
      ...(variants[variant] || variants.ghost),
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = "0.78";
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = "1";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
const SURFACES = {
  pink: {
    background: "var(--brand-pink)",
    color: "var(--on-primary)",
    sub: "rgba(255,255,255,0.82)"
  },
  teal: {
    background: "var(--brand-teal)",
    color: "var(--on-dark)",
    sub: "rgba(255,255,255,0.7)"
  },
  lavender: {
    background: "var(--brand-lavender)",
    color: "var(--ink)",
    sub: "rgba(10,10,10,0.62)"
  },
  peach: {
    background: "var(--brand-peach)",
    color: "var(--ink)",
    sub: "rgba(10,10,10,0.62)"
  },
  ochre: {
    background: "var(--brand-ochre)",
    color: "var(--ink)",
    sub: "rgba(10,10,10,0.62)"
  },
  cream: {
    background: "var(--surface-card)",
    color: "var(--ink)",
    sub: "var(--muted)"
  }
};

/**
 * FeatureCard — the brand's signature saturated single-color card. Pick a `color`,
 * give it an eyebrow, title, body and an optional `media` slot (product UI fragment
 * or illustration). Text auto-flips to white on pink/teal, ink on the lighter fills.
 */
function FeatureCard({
  color = "pink",
  eyebrow,
  title,
  children,
  media = null,
  style = {}
}) {
  const s = SURFACES[color] || SURFACES.pink;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "var(--space-xl)",
      borderRadius: "var(--radius-xl)",
      background: s.background,
      color: s.color,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: s.sub
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.4
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.55,
      color: s.sub
    }
  }, children), media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, media));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const PALETTE = ["var(--brand-pink)", "var(--brand-teal)", "var(--brand-lavender)", "var(--brand-peach)", "var(--brand-ochre)", "var(--brand-mint)"];

/**
 * Avatar — circular user image or colored initials fallback. Initials get a
 * deterministic brand-color fill from the name.
 */
function Avatar({
  src,
  name = "",
  size = 40,
  style = {}
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const bg = PALETTE[Math.abs(hash) % PALETTE.length];
  const isDark = bg === "var(--brand-teal)" || bg === "var(--brand-pink)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      flex: "none",
      background: src ? "var(--surface-card)" : bg,
      color: isDark ? "var(--on-dark)" : "var(--ink)",
      fontFamily: "var(--font-text)",
      fontSize: size * 0.38,
      fontWeight: 600,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
/**
 * TestimonialCard — customer quote on a cream surface. Avatar + name + role header,
 * quote body below.
 */
function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      margin: 0,
      padding: "var(--space-lg)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.55,
      color: "var(--body-strong)"
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatarSrc,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13,
      fontWeight: 400,
      color: "var(--muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Badge — small pill label. Cream by default; tone variants tint the fill.
 * Used for "FEATURED", category labels, status chips.
 */
function Badge({
  children,
  tone = "neutral",
  uppercase = false,
  style = {}
}) {
  const tones = {
    neutral: {
      background: "var(--surface-card)",
      color: "var(--ink)"
    },
    pink: {
      background: "var(--brand-pink)",
      color: "var(--on-primary)"
    },
    teal: {
      background: "var(--brand-teal)",
      color: "var(--on-dark)"
    },
    lavender: {
      background: "var(--brand-lavender)",
      color: "var(--ink)"
    },
    peach: {
      background: "var(--brand-peach)",
      color: "var(--ink)"
    },
    ochre: {
      background: "var(--brand-ochre)",
      color: "var(--ink)"
    },
    success: {
      background: "rgba(34,197,94,0.14)",
      color: "#15803d"
    },
    warning: {
      background: "rgba(245,158,11,0.16)",
      color: "#b45309"
    },
    error: {
      background: "rgba(239,68,68,0.12)",
      color: "#b91c1c"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: uppercase ? "5px 11px" : "4px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontSize: uppercase ? 12 : 13,
      fontWeight: uppercase ? 600 : 500,
      letterSpacing: uppercase ? "1.5px" : 0,
      textTransform: uppercase ? "uppercase" : "none",
      lineHeight: 1.4,
      ...(tones[tone] || tones.neutral),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/PricingCard.jsx
try { (() => {
/**
 * PricingCard — a plan tier. Standard tiers sit on cream-canvas with a hairline;
 * the `featured` tier flips to deep teal (the teal surface IS the featured signal).
 */
function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features = [],
  cta = "Start free",
  featured = false,
  badge,
  style = {}
}) {
  const text = featured ? "var(--on-dark)" : "var(--ink)";
  const sub = featured ? "rgba(255,255,255,0.7)" : "var(--muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "var(--space-xl)",
      borderRadius: "var(--radius-lg)",
      background: featured ? "var(--brand-teal)" : "var(--canvas)",
      border: featured ? "1px solid transparent" : "1px solid var(--hairline)",
      color: text,
      minWidth: 240,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 18,
      fontWeight: 600
    }
  }, name), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? "ochre" : "neutral",
    uppercase: true
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-1px",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: sub
    }
  }, period)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      lineHeight: 1.55,
      color: sub
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "onColor" : "primary",
    style: {
      width: "100%"
    }
  }, cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      lineHeight: 1.5,
      color: featured ? "rgba(255,255,255,0.86)" : "var(--body)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: featured ? "var(--brand-mint)" : "var(--success)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })), f))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/display/CategoryTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryTab — pill-shaped sub-nav tab. Inactive: transparent + muted text.
 * Active: cream-card fill + ink text. Render several in a row.
 */
function CategoryTab({
  active = false,
  children,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      border: "none",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
      transition: "background-color 120ms ease, color 120ms ease",
      background: active ? "var(--surface-card)" : "transparent",
      color: active ? "var(--ink)" : "var(--muted)",
      ...style
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.color = "var(--ink)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.color = "var(--muted)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — label + hint/error wrapper around any form control (Input, Select, etc).
 */
function Field({
  label,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--body-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--error)",
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13,
      fontWeight: 500,
      color: error ? "var(--error)" : "var(--muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. 44px tall, hairline border that thickens to ink
 * on focus. Optional label, hint and error message via the Field wrapper, or used bare.
 */
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  invalid = false,
  leadingIcon = null,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = invalid ? "var(--error)" : focused ? "var(--ink)" : "var(--hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 44,
      padding: "0 16px",
      background: disabled ? "var(--surface-soft)" : "var(--canvas)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      transition: "border-color 120ms ease",
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--muted)"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-text)",
      fontSize: 16,
      fontWeight: 400,
      color: "var(--ink)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/**
 * TopNav — cream sticky nav bar, 64px tall. Wordmark left, menu center,
 * "Sign in" + primary CTA right. Pass `links`, `activeLink`, and a `logo` node.
 */
function TopNav({
  logo,
  brand = "Oh Belmans",
  links = ["Product", "Solutions", "Resources", "Pricing", "Customers"],
  activeLink,
  onSignIn,
  onCta,
  ctaLabel = "Try free",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      padding: "0 24px",
      background: "var(--canvas)",
      borderBottom: "1px solid var(--hairline-soft)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, logo, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: "-0.6px",
      color: "var(--ink)"
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      padding: "8px 14px",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-text)",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      color: l === activeLink ? "var(--ink)" : "var(--muted)",
      transition: "color 120ms ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--ink)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = l === activeLink ? "var(--ink)" : "var(--muted)";
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    onClick: onSignIn,
    style: {
      marginRight: 8
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CtaFooter.jsx
try { (() => {
/* global React */
const {
  Button
} = window.OhBelmansDesignSystem_640ded;
function CtaFooter() {
  const cols = [{
    h: "Product",
    links: ["Canvas", "Enrichment", "AI agents", "Sequencer", "API"]
  }, {
    h: "Solutions",
    links: ["Outbound", "RevOps", "Recruiting", "Investors"]
  }, {
    h: "Resources",
    links: ["Docs", "Templates", "University", "Blog"]
  }, {
    h: "Company",
    links: ["About", "Customers", "Experts", "Careers"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-strong)",
      borderRadius: "var(--radius-xl)",
      padding: "72px 64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-1px",
      lineHeight: 1.1,
      color: "var(--ink)"
    }
  }, "Turn your growth ideas into reality today"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Start for free"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      bottom: -60,
      width: 220,
      height: 220,
      borderRadius: "50% 50% 46% 54% / 58% 56% 44% 42%",
      background: "var(--brand-peach)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 90,
      bottom: -90,
      width: 200,
      height: 200,
      borderRadius: "52% 48% 50% 50%",
      background: "var(--brand-ochre)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 56px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    width: "30",
    height: "30",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.6px",
      color: "var(--ink)"
    }
  }, "Oh Belmans")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 240,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--muted)"
    }
  }, "The GTM data canvas for teams that move first.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--muted)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--hairline)",
      padding: "22px 32px",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-text)",
      fontSize: 13,
      color: "var(--muted-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Oh Belmans, Inc."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Security")));
}
window.CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
/* global React */
const {
  FeatureCard,
  Badge
} = window.OhBelmansDesignSystem_640ded;

// A tiny product-UI fragment shown inside feature cards (agent run / table rows).
function Fragment({
  rows = 3,
  accent = "rgba(255,255,255,0.6)",
  chip = "rgba(255,255,255,0.18)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: chip,
      borderRadius: 12,
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      background: accent,
      opacity: 0.9,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 4,
      background: accent,
      width: `${70 - i * 12}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 4,
      background: accent,
      opacity: 0.5,
      width: 28,
      marginLeft: "auto"
    }
  }))));
}
function FeatureGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginBottom: 36,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    uppercase: true
  }, "One platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-1.5px",
      lineHeight: 1.05,
      color: "var(--ink)"
    }
  }, "Everything your GTM motion needs, in one canvas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    color: "pink",
    eyebrow: "Outbound",
    title: "Sequence in one click",
    media: /*#__PURE__*/React.createElement(Fragment, {
      rows: 3
    })
  }, "Turn enriched lists into multichannel campaigns without leaving the canvas."), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "lavender",
    eyebrow: "AI agents",
    title: "Research on autopilot",
    media: /*#__PURE__*/React.createElement(Fragment, {
      rows: 3,
      accent: "rgba(10,10,10,0.55)",
      chip: "rgba(255,255,255,0.4)"
    })
  }, "Dispatch agents to find any data point about any account, automatically."), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "teal",
    eyebrow: "Enterprise",
    title: "Governed at scale",
    media: /*#__PURE__*/React.createElement(Fragment, {
      rows: 3
    })
  }, "SSO, audit logs and role-based access, ready out of the box."), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "peach",
    eyebrow: "Enrichment",
    title: "100+ data providers",
    media: /*#__PURE__*/React.createElement(Fragment, {
      rows: 3,
      accent: "rgba(10,10,10,0.5)",
      chip: "rgba(255,255,255,0.45)"
    })
  }, "Waterfall across providers and only pay for the data you keep."), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "ochre",
    eyebrow: "Community",
    title: "Hire a Belmans expert",
    media: /*#__PURE__*/React.createElement(Fragment, {
      rows: 3,
      accent: "rgba(10,10,10,0.5)",
      chip: "rgba(255,255,255,0.45)"
    })
  }, "Tap a network of vetted operators to build your workflows for you."), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "cream",
    eyebrow: "Platform",
    title: "Build with the API"
  }, "Every table, formula and agent is scriptable through a clean REST API.")));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* global React */
const {
  Button,
  Badge
} = window.OhBelmansDesignSystem_640ded;

// Placeholder for commissioned 3D claymation art — layered rounded shapes
// in the brand palette evoke the signature mountain/horizon motif.
function ClayScene() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "1 / 0.92",
      background: "var(--surface-soft)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 38,
      left: 44,
      width: 84,
      height: 84,
      borderRadius: "50%",
      background: "var(--brand-ochre)",
      boxShadow: "0 8px 20px rgba(232,185,74,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -30,
      bottom: -40,
      width: 260,
      height: 260,
      borderRadius: "46% 54% 50% 50% / 60% 58% 42% 40%",
      background: "var(--brand-peach)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -50,
      bottom: -70,
      width: 300,
      height: 300,
      borderRadius: "52% 48% 50% 50% / 56% 60% 40% 44%",
      background: "var(--brand-coral)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 40,
      bottom: -30,
      width: 180,
      height: 180,
      borderRadius: "50% 50% 48% 52% / 58% 56% 44% 42%",
      background: "var(--brand-teal)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      bottom: 20,
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "var(--brand-lavender)",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      right: 16,
      fontFamily: "var(--font-text)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--muted-soft)"
    }
  }, "claymation art placeholder"));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 56px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lavender",
    uppercase: true
  }, "GTM data, orchestrated"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 72,
      fontWeight: 500,
      letterSpacing: "-2.5px",
      lineHeight: 1,
      color: "var(--ink)"
    }
  }, "Go to market with unique data"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      fontFamily: "var(--font-text)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--body)"
    }
  }, "Oh Belmans pulls every signal about every account into one canvas \u2014 then lets agents enrich, score and sequence it automatically."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Start for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Book a demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 6,
      fontFamily: "var(--font-text)",
      fontSize: 13,
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Trusted by 5,000+ go-to-market teams"))), /*#__PURE__*/React.createElement(ClayScene, null));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
/* global React */
const {
  PricingCard,
  Badge
} = window.OhBelmansDesignSystem_640ded;
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      marginBottom: 44,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    uppercase: true
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-1.5px",
      lineHeight: 1.05,
      color: "var(--ink)"
    }
  }, "Start free. Scale when you do.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      maxWidth: 960,
      margin: "0 auto",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Starter",
    price: "$0",
    description: "For trying things out solo.",
    features: ["1,000 credits / mo", "2 seats", "Community support", "Core enrichment"],
    cta: "Start free"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    featured: true,
    badge: "Most popular",
    name: "Team",
    price: "$149",
    description: "For growing GTM teams.",
    features: ["50,000 credits / mo", "Unlimited seats", "AI agents", "Priority support"],
    cta: "Start trial"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For security-led orgs.",
    features: ["Volume credits", "SSO & SAML", "Audit logs", "Dedicated CSM"],
    cta: "Contact sales"
  })));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Testimonials.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  TestimonialCard,
  Badge
} = window.OhBelmansDesignSystem_640ded;
function Testimonials() {
  const items = [{
    quote: "We replaced four tools with Oh Belmans in a week and doubled reply rates the next month.",
    name: "Dana Reyes",
    role: "Head of Growth, Northwind"
  }, {
    quote: "The agents do research that used to take an SDR an entire afternoon. It feels like cheating.",
    name: "Milo Park",
    role: "RevOps Lead, Cardinal"
  }, {
    quote: "Cream canvas, real data, no noise. Our team actually enjoys prospecting now.",
    name: "Sasha Vue",
    role: "Founder, Lumen Labs"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-soft)",
      padding: "72px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginBottom: 36,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "peach",
    uppercase: true
  }, "Loved by operators"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-1px",
      lineHeight: 1.1,
      color: "var(--ink)"
    }
  }, "The fastest teams run on Belmans")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: i
  }, t))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TopNav = __ds_scope.TopNav;

})();

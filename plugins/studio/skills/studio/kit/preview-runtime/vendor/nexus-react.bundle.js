var NexusReact = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // entry.ts
  var entry_exports = {};
  __export(entry_exports, {
    Alert: () => Alert,
    AnnouncementBar: () => AnnouncementBar,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Banner: () => Banner,
    Button: () => Button,
    Checkbox: () => Checkbox,
    Collage: () => Collage,
    DataTable: () => DataTable,
    Dialog: () => Dialog,
    EmptyState: () => EmptyState,
    FallbackImage: () => FallbackImage,
    Hero: () => Hero,
    Icon: () => Icon,
    IconButton: () => IconButton,
    ImageWithText: () => ImageWithText,
    Input: () => Input,
    PageHeader: () => PageHeader,
    Pagination: () => Pagination,
    RichText: () => RichText,
    RowActionsMenu: () => RowActionsMenu,
    SectionStack: () => SectionStack,
    Select: () => Select,
    SurfaceCard: () => SurfaceCard,
    Switch: () => Switch,
    T1LifestyleCards: () => T1LifestyleCards,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Textarea: () => Textarea,
    Toast: () => Toast,
    ToastProvider: () => ToastProvider
  });

  // tokens/tokens.ts
  var COLOR_PRIMARY = "--color-primary";
  var COLOR_ACCENT = "--color-accent";
  var COLOR_BG = "--color-bg";
  var COLOR_FG = "--color-fg";
  var FONT_BODY = "--font-body";
  var FONT_HEADING = "--font-heading";
  var SPACE = "--space";
  var RADIUS = "--radius";
  var DEFAULT_TOKENS = Object.freeze({
    [COLOR_PRIMARY]: "#1a1a1a",
    [COLOR_ACCENT]: "#3b82f6",
    [COLOR_BG]: "#ffffff",
    [COLOR_FG]: "#111827",
    [FONT_BODY]: "system-ui, sans-serif",
    [FONT_HEADING]: "system-ui, sans-serif",
    [SPACE]: "8px",
    [RADIUS]: "8px"
  });

  // tokens/brand-tokens.ts
  var T1_WHITE = "--t1-white";
  var T1_OXFORD = "--t1-oxford";
  var T1_RED_50 = "--t1-red-50";
  var T1_RED_200 = "--t1-red-200";
  var T1_RED_700 = "--t1-red-700";
  var T1_GRAY_100 = "--t1-gray-100";
  var T1_GRAY_200 = "--t1-gray-200";
  var T1_GRAY_300 = "--t1-gray-300";
  var T1_GRAY_400 = "--t1-gray-400";
  var T1_GRAY_600 = "--t1-gray-600";
  var T1_GRAY_700 = "--t1-gray-700";
  var T1_GRAY_800 = "--t1-gray-800";
  var T1_GRAY_900 = "--t1-gray-900";
  var T1_GREEN_100 = "--t1-green-100";
  var T1_GREEN_500 = "--t1-green-500";
  var T1_GREEN_700 = "--t1-green-700";
  var T1_ORANGE_100 = "--t1-orange-100";
  var T1_ORANGE_500 = "--t1-orange-500";
  var T1_ORANGE_700 = "--t1-orange-700";
  var T1_YELLOW_100 = "--t1-yellow-100";
  var T1_YELLOW_500 = "--t1-yellow-500";
  var T1_YELLOW_700 = "--t1-yellow-700";
  var T1_BLUE_100 = "--t1-blue-100";
  var T1_BLUE_500 = "--t1-blue-500";
  var T1_BLUE_700 = "--t1-blue-700";
  var T1_BROWN_100 = "--t1-brown-100";
  var T1_BROWN_700 = "--t1-brown-700";
  var T1_PURPLE_100 = "--t1-purple-100";
  var T1_PURPLE_500 = "--t1-purple-500";
  var T1_PURPLE_700 = "--t1-purple-700";
  var T1_OVERLAY_MODAL = "--t1-overlay-modal";
  var COLOR_SUCCESS = "--color-success";
  var COLOR_ERROR = "--color-error";
  var COLOR_BORDER = "--color-border";
  var COLOR_DISABLED_TEXT = "--color-disabled-text";
  var COLOR_DISABLED_BG = "--color-disabled-bg";
  var DASH_PRIMARY = "--dash-primary";
  var DASH_SURFACE = "--dash-surface";
  var DASH_TABLE_HEADER = "--dash-table-header";
  var RADIUS_DASH_LG = "--radius-dash-lg";
  var RADIUS_DASH_MD = "--radius-dash-md";
  var RADIUS_DASH = "--radius-dash";
  var RADIUS_DASH_CONTROL = "--radius-dash-control";
  var RADIUS_DASH_BADGE = "--radius-dash-badge";
  var SHADOW_DASH_CARD = "--shadow-dash-card";
  var SHADOW_DASH_DROPDOWN = "--shadow-dash-dropdown";
  var Z_DROPDOWN = "--z-dropdown";
  var Z_MODAL = "--z-modal";
  var Z_TOAST = "--z-toast";
  var EASE_STANDARD = "--ease-standard";
  var DUR_BASE = "--dur-base";
  var SPACE_2 = "--space-2";
  var SPACE_3 = "--space-3";
  var SPACE_4 = "--space-4";
  var SPACE_5 = "--space-5";
  var SPACE_6 = "--space-6";
  var FONT_MANROPE = "--font-manrope";
  var LH_MANROPE = "--lh-manrope";
  var FW_SEMIBOLD = "--fw-semibold";
  var TEXT_MD = "--text-md";
  var TEXT_SM = "--text-sm";

  // shims/react/jsx-runtime/index.js
  var R = window.React;
  function jsx(type, props, key) {
    const p = props || {};
    const { children } = p;
    const rest = {};
    for (const k in p) if (k !== "children") rest[k] = p[k];
    if (key !== void 0) rest.key = key;
    return R.createElement(type, rest, children);
  }
  var jsxs = jsx;
  var Fragment = R.Fragment;

  // components/Alert.tsx
  var VARIANTS = {
    success: { bg: T1_GREEN_100, border: T1_GREEN_500 },
    error: { bg: T1_RED_50, border: T1_RED_700 },
    warning: { bg: T1_ORANGE_100, border: T1_ORANGE_500 },
    info: { bg: T1_BLUE_100, border: T1_BLUE_500 }
  };
  var roleFor = (variant) => variant === "error" || variant === "warning" ? "alert" : "status";
  var containerStyle = (variant) => {
    const v = VARIANTS[variant];
    return {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: `var(${v.bg})`,
      borderLeft: `3px solid var(${v.border})`,
      borderRadius: `var(${RADIUS_DASH_CONTROL})`,
      padding: "12px 14px",
      fontFamily: `var(${FONT_MANROPE})`,
      color: `var(${T1_OXFORD})`
    };
  };
  var iconStyle = (variant) => ({
    color: `var(${VARIANTS[variant].border})`,
    display: "inline-flex",
    marginTop: 1
  });
  var titleStyle = {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 2,
    color: `var(${T1_GRAY_900})`
  };
  var bodyStyle = { fontSize: 14, lineHeight: 1.4 };
  var closeStyle = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: `var(${T1_GRAY_600})`,
    fontSize: 16,
    lineHeight: 1,
    padding: 0
  };
  function Alert({
    children,
    title,
    variant = "info",
    icon,
    onClose,
    closeLabel = "Cerrar",
    "aria-live": ariaLive,
    "aria-atomic": ariaAtomic
  }) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        role: roleFor(variant),
        "aria-live": ariaLive,
        "aria-atomic": ariaAtomic,
        style: containerStyle(variant),
        "data-variant": variant,
        children: [
          icon && /* @__PURE__ */ jsx("span", { style: iconStyle(variant), children: icon }),
          /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
            title && /* @__PURE__ */ jsx("div", { style: titleStyle, children: title }),
            /* @__PURE__ */ jsx("div", { style: bodyStyle, children })
          ] }),
          onClose && /* @__PURE__ */ jsx("button", { type: "button", "aria-label": closeLabel, onClick: onClose, style: closeStyle, children: "\xD7" })
        ]
      }
    );
  }

  // components/AnnouncementBar.tsx
  var barStyle = {
    backgroundColor: `var(${COLOR_PRIMARY})`,
    color: `var(${COLOR_BG})`,
    fontFamily: `var(${FONT_BODY})`,
    padding: `calc(var(${SPACE}) / 2) var(${SPACE})`,
    textAlign: "center"
  };
  function AnnouncementBar({ text }) {
    return /* @__PURE__ */ jsx("div", { role: "status", style: barStyle, "data-block": "announcement-bar", children: text });
  }

  // components/Avatar.tsx
  var initialsOf = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  var avatarStyle = (size, shape) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    borderRadius: shape === "circle" ? "50%" : `var(${RADIUS_DASH_CONTROL})`,
    background: `var(${T1_GRAY_200})`,
    color: `var(${T1_GRAY_800})`,
    fontFamily: `var(${FONT_MANROPE})`,
    fontWeight: 600,
    fontSize: Math.round(size * 0.4),
    overflow: "hidden",
    flexShrink: 0
  });
  var imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
  function Avatar({
    src,
    name = "",
    size = 36,
    shape = "circle"
  }) {
    const initials = initialsOf(name);
    return /* @__PURE__ */ jsx(
      "span",
      {
        title: name || void 0,
        style: avatarStyle(size, shape),
        "data-shape": shape,
        children: src ? (
          // `alt={name || undefined}` — never `alt=""`: an empty alt marks the image *decorative*
          // (removed from the a11y tree), which would falsely hide a nameless identity image. Omitting
          // the attribute (undefined) leaves it an unlabeled image instead of a false-decorative one.
          /* @__PURE__ */ jsx("img", { src, alt: name || void 0, style: imageStyle })
        ) : initials || "?"
      }
    );
  }

  // components/Badge.tsx
  var TONES = {
    success: { bg: T1_GREEN_100, fg: T1_GREEN_700, dot: T1_GREEN_500 },
    warning: { bg: T1_ORANGE_100, fg: T1_ORANGE_700, dot: T1_ORANGE_500 },
    caution: { bg: T1_YELLOW_100, fg: T1_YELLOW_700, dot: T1_YELLOW_500 },
    error: { bg: T1_RED_50, fg: T1_RED_700, dot: T1_RED_700 },
    info: { bg: T1_BLUE_100, fg: T1_BLUE_700, dot: T1_BLUE_500 },
    neutral: { bg: T1_GRAY_100, fg: T1_GRAY_700, dot: T1_GRAY_600 },
    premium: { bg: T1_BROWN_100, fg: T1_BROWN_700, dot: T1_YELLOW_500 },
    ai: { bg: T1_PURPLE_100, fg: T1_PURPLE_700, dot: T1_PURPLE_500 }
  };
  var badgeStyle = (tone) => {
    const t = TONES[tone];
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: `var(${t.bg})`,
      color: `var(${t.fg})`,
      fontFamily: `var(${FONT_MANROPE})`,
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1.366,
      padding: "3px 8px",
      borderRadius: `var(${RADIUS_DASH_BADGE})`
    };
  };
  var dotStyle = (tone) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: `var(${TONES[tone].dot})`,
    flexShrink: 0
  });
  function Badge({ children, tone = "neutral", dot = false }) {
    return /* @__PURE__ */ jsxs("span", { style: badgeStyle(tone), "data-tone": tone, children: [
      dot && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: dotStyle(tone) }),
      children
    ] });
  }

  // shims/react/index.js
  var R2 = window.React;
  var useState = R2.useState;
  var useEffect = R2.useEffect;
  var useCallback = R2.useCallback;
  var useRef = R2.useRef;
  var useId = R2.useId;
  var useMemo = R2.useMemo;
  var useContext = R2.useContext;
  var createContext = R2.createContext;
  var createElement = R2.createElement;
  var Fragment2 = R2.Fragment;

  // components/FallbackImage.tsx
  function FallbackImage({
    src,
    alt,
    ariaHidden,
    style,
    fallback = null
  }) {
    const [erroredSrc, setErroredSrc] = useState(void 0);
    const ref = useRef(null);
    useEffect(() => {
      const img = ref.current;
      if (img !== null && img.complete && img.naturalWidth === 0) setErroredSrc(src);
    }, [src]);
    if (erroredSrc === src) return /* @__PURE__ */ jsx(Fragment, { children: fallback });
    return /* @__PURE__ */ jsx(
      "img",
      {
        ref,
        src,
        alt,
        ...ariaHidden === true ? { "aria-hidden": true } : {},
        ...style !== void 0 ? { style } : {},
        onError: () => setErroredSrc(src)
      }
    );
  }

  // components/Banner.tsx
  var HEIGHT_PX = {
    small: 300,
    medium: 400,
    large: 550
  };
  var FULLSCREEN_MIN_HEIGHT = "100vh";
  var FULLSCREEN_SVH_CSS = `
@media (max-width: 767px) {
  [data-block="banner"][data-height="fullscreen"] { min-height: 100svh !important; }
}
`;
  var TITLE_SIZE_REM = {
    s: "1.25rem",
    m: "1.5rem",
    l: "1.875rem",
    xl: "2.25rem"
  };
  var TITLE_SIZE_DESKTOP_REM = {
    s: "1.5rem",
    m: "1.875rem",
    l: "2.25rem",
    xl: "3rem"
  };
  var TEXT_SIZE_REM = {
    s: "0.875rem",
    m: "1rem",
    l: "1.125rem"
  };
  var TEXT_SIZE_DESKTOP_REM = {
    s: "1rem",
    m: "1.125rem",
    l: "1.25rem"
  };
  var TYPE_SCALE_CSS = `
[data-block="banner"] { container-type: inline-size; }
@container (min-width: 48rem) {
${Object.entries(TITLE_SIZE_DESKTOP_REM).map(
    ([size, rem]) => `  [data-block="banner"][data-title-size="${size}"] [data-field="heading"] { font-size: ${rem} !important; }`
  ).join("\n")}
${Object.entries(TEXT_SIZE_DESKTOP_REM).map(
    ([size, rem]) => `  [data-block="banner"][data-text-size="${size}"] [data-field="text"] { font-size: ${rem} !important; }`
  ).join("\n")}
}
`;
  var SECTION_SPACING_MULT = {
    none: 1.5,
    // md:py-3  = 12px
    small: 3,
    // md:py-6  = 24px
    medium: 4,
    // md:py-8  = 32px
    large: 7
    // md:py-14 = 56px
  };
  var CONTENT_SPACING_MULT = {
    none: 1.5,
    // md:gap-3 = 12px
    small: 2,
    // md:gap-4 = 16px
    medium: 3,
    // md:gap-6 = 24px
    large: 4
    // md:gap-8 = 32px
  };
  var CONTAINER_WIDTH = {
    "4xl": "56rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%"
  };
  var CONTENT_MAX_WIDTH = "48rem";
  var OVERLAY_COLOR_HEX = {
    black: "#000000",
    white: "#ffffff"
  };
  var NO_IMAGE_BACKGROUND = "linear-gradient(to bottom right, var(--color-surface, #f8f8f8) 0%, var(--color-border, #e5e5e5) 50%, var(--color-surface, #f8f8f8) 100%)";
  var space = (mult) => `calc(var(${SPACE}, ${DEFAULT_TOKENS[SPACE]}) * ${mult})`;
  var radius = () => `var(${RADIUS}, ${DEFAULT_TOKENS[RADIUS]})`;
  var token = (name) => `var(${name}, ${DEFAULT_TOKENS[name]})`;
  var PLACEHOLDER_FALLBACK = "#e5e7eb";
  var toPlainText = (html) => html.replace(/<[^>]*>/g, "");
  var flexAlign = (a) => a === "left" ? "flex-start" : a === "right" ? "flex-end" : "center";
  var verticalJustify = (v) => v === "top" ? "flex-start" : v === "bottom" ? "flex-end" : "center";
  var hexLuminance = (color) => {
    const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/iu.exec(color.trim());
    if (m === null) return void 0;
    const h = m[1] ?? "";
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const num = parseInt(full, 16);
    const channel = (shift) => {
      const s = (num >> shift & 255) / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(16) + 0.7152 * channel(8) + 0.0722 * channel(0);
  };
  var contrastMode = (bg) => {
    if (bg === void 0) return void 0;
    const lum = hexLuminance(bg);
    return lum === void 0 ? void 0 : lum > 0.179 ? "dark" : "light";
  };
  var contrastColor = (bg) => {
    const mode = contrastMode(bg);
    return mode === void 0 ? void 0 : mode === "light" ? token(COLOR_BG) : token(COLOR_FG);
  };
  function BannerContent({
    heading,
    text,
    cta,
    secondaryCta,
    baseTextColor,
    headingColor,
    textColor,
    titleSize,
    textSize,
    contentSpacing,
    textAlignment,
    ctaBackgroundColor,
    ctaBackgroundColorHex,
    ctaTextColor
  }) {
    const primaryLabelColor = ctaTextColor ?? contrastColor(ctaBackgroundColorHex) ?? "var(--text-on-accent, #ffffff)";
    const primaryCtaStyle = {
      display: "inline-block",
      backgroundColor: ctaBackgroundColor ?? token(COLOR_ACCENT),
      color: primaryLabelColor,
      borderRadius: radius(),
      padding: "0.875rem 2rem",
      fontFamily: token(FONT_BODY),
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
      textDecoration: "none"
    };
    const secondaryLabelColor = "var(--text-on-secondary, #1A1A1A)";
    const secondaryCtaStyle = {
      display: "inline-block",
      backgroundColor: "var(--color-secondary, #ffffff)",
      color: secondaryLabelColor,
      borderRadius: radius(),
      padding: "0.875rem 2rem",
      fontFamily: token(FONT_BODY),
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
      textDecoration: "none"
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        "data-field": "content",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: space(CONTENT_SPACING_MULT[contentSpacing]),
          width: "100%",
          color: baseTextColor,
          textAlign: textAlignment,
          alignItems: flexAlign(textAlignment)
        },
        children: [
          heading !== void 0 && heading !== "" ? (
            // Pre-sanitized by the caller (see the `heading` prop doc): trusted markup so a legacy
            // `<strong>`/`<em>` split survives instead of being plain-text-flattened.
            //
            // PARITY FIX (banner CTA-visibility, the user-flagged bug): `color` is now ALWAYS set inline —
            // `headingColor ?? baseTextColor`, never omitted — instead of relying on CSS inheritance from
            // this block's wrapping `color: baseTextColor`. Inheritance is the LOWEST-priority source in the
            // CSS cascade: any global `h2`/`p` rule wired by the storefront's legacy theme-bridge CSS (see
            // this module's RENDER ARCHITECTURE note) — even a plain, non-`!important` one — beats an
            // inherited value outright, which was silently painting the heading/body the theme-bridge's
            // fixed dark tone regardless of the banner's own (possibly dark) background, producing an
            // invisible dark-on-dark CTA. An inline `color` on the element itself always wins over any
            // non-`!important` stylesheet rule, closing that gap for good.
            /* @__PURE__ */ jsx(
              "h2",
              {
                "data-field": "heading",
                style: {
                  fontFamily: token(FONT_HEADING),
                  // Base (sub-48rem) arm; the ≥48rem desktop arm applies via TYPE_SCALE_CSS. Weight 300 +
                  // tracking-wide (0.025em) per legacy minimal `titleSize*` (`font-light tracking-wide`,
                  // store-admin minimal/classes.ts:695-698) — NOT bold.
                  fontSize: TITLE_SIZE_REM[titleSize],
                  fontWeight: 300,
                  letterSpacing: "0.025em",
                  margin: 0,
                  color: headingColor ?? baseTextColor
                },
                dangerouslySetInnerHTML: { __html: heading }
              }
            )
          ) : null,
          text !== "" ? (
            // Pre-sanitized by the caller (see the `text` prop doc): a rich body sink, mirroring `heading`.
            // Undimmed when a per-field textColor is set; otherwise slightly muted (legacy body is `/90`).
            // Same inline-`color`-always-set fix as `heading` above (never rely on inheritance alone).
            /* @__PURE__ */ jsx(
              "p",
              {
                "data-field": "text",
                style: {
                  fontFamily: token(FONT_BODY),
                  fontSize: TEXT_SIZE_REM[textSize],
                  margin: 0,
                  color: textColor ?? baseTextColor,
                  ...textColor !== void 0 ? {} : { opacity: 0.9 }
                },
                dangerouslySetInnerHTML: { __html: text }
              }
            )
          ) : null,
          cta !== void 0 || secondaryCta !== void 0 ? /* @__PURE__ */ jsxs(
            "div",
            {
              "data-field": "cta-group",
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: space(2),
                justifyContent: flexAlign(textAlignment)
              },
              children: [
                cta !== void 0 ? (
                  // Pre-sanitized by the caller: the label renders via `dangerouslySetInnerHTML` (legacy
                  // wraps it in a `<span dangerouslySetInnerHTML>`) so a rich migrated label survives.
                  //
                  // PARITY (BUG 1 — CTA-text-color-ignored): the button-text color is ALSO set INLINE on
                  // the label `<span>` itself, not only on the `<a>`. The `.canvas-content span { color: … }`
                  // repaint rule that originally forced this was REMOVED from both app globals.css files in
                  // the section-parity campaign (the canvas now injects theme vars only, like the legacy
                  // builder); the inline pin REMAINS deliberately as live-parity behavior — a directly-set
                  // color is immune to ANY surrounding author CSS (theme-bridge element rules included), so
                  // the label paints identically on the builder canvas and the live storefront.
                  /* @__PURE__ */ jsx("a", { "data-field": "cta-primary", href: cta.href, style: primaryCtaStyle, children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: { color: primaryLabelColor },
                      dangerouslySetInnerHTML: { __html: cta.label }
                    }
                  ) })
                ) : null,
                secondaryCta !== void 0 ? (
                  // Same BUG-1 class as the primary label above: the on-secondary channel is pinned INLINE
                  // on the span (not inherited from the `<a>`) so the label paints identically under any
                  // surrounding author CSS — the legacy fill's own `text-[var(--text-on-secondary)]` (L1).
                  /* @__PURE__ */ jsx("a", { "data-field": "cta-secondary", href: secondaryCta.href, style: secondaryCtaStyle, children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: { color: secondaryLabelColor },
                      dangerouslySetInnerHTML: { __html: secondaryCta.label }
                    }
                  ) })
                ) : null
              ]
            }
          ) : null
        ]
      }
    );
  }
  function Banner({
    text,
    image,
    imageAlt,
    heading,
    cta,
    secondaryCta,
    layout = "centered",
    height = "medium",
    overlayOpacity = 40,
    overlayColor = "black",
    textColorMode = "auto",
    titleSize = "m",
    textSize = "m",
    sectionSpacing = "none",
    contentSpacing = "medium",
    containerWidth = "7xl",
    contentAlignment = "auto",
    textAlignment,
    verticalPosition = "center",
    backgroundColor,
    headingColor,
    textColor,
    ctaBackgroundColor,
    ctaTextColor,
    imagePosition,
    backgroundColorHex,
    ctaBackgroundColorHex
  }) {
    const hasImage = image !== void 0 && image !== "";
    const minHeight = height === "fullscreen" ? FULLSCREEN_MIN_HEIGHT : `${HEIGHT_PX[height]}px`;
    const isSplit = layout === "split-left" || layout === "split-right";
    const paddingBlock = space(SECTION_SPACING_MULT[sectionSpacing]);
    const objectPosition = `${imagePosition?.x ?? 50}% ${imagePosition?.y ?? 50}%`;
    const heuristicMode = isSplit ? "dark" : overlayColor === "white" ? "dark" : "light";
    const derivedMode = textColorMode !== "auto" ? textColorMode : !isSplit && hasImage ? overlayColor === "white" ? "dark" : "light" : contrastMode(backgroundColorHex ?? backgroundColor) ?? heuristicMode;
    const baseTextColor = derivedMode === "light" ? token(COLOR_BG) : token(COLOR_FG);
    const effectiveContentAlignment = contentAlignment === "auto" ? isSplit ? "left" : "center" : contentAlignment;
    const effectiveTextAlignment = textAlignment ?? effectiveContentAlignment;
    const content = /* @__PURE__ */ jsx(
      BannerContent,
      {
        ...heading !== void 0 ? { heading } : {},
        text,
        ...cta !== void 0 ? { cta } : {},
        ...secondaryCta !== void 0 ? { secondaryCta } : {},
        baseTextColor,
        ...headingColor !== void 0 ? { headingColor } : {},
        ...textColor !== void 0 ? { textColor } : {},
        titleSize,
        textSize,
        contentSpacing,
        textAlignment: effectiveTextAlignment,
        ...ctaBackgroundColor !== void 0 ? { ctaBackgroundColor } : {},
        ...ctaBackgroundColorHex !== void 0 ? { ctaBackgroundColorHex } : {},
        ...ctaTextColor !== void 0 ? { ctaTextColor } : {}
      }
    );
    if (isSplit) {
      const imageFirst = layout === "split-left";
      return /* @__PURE__ */ jsxs(
        "aside",
        {
          "data-block": "banner",
          "data-layout": layout,
          "data-height": height,
          "data-title-size": titleSize,
          "data-text-size": textSize,
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight,
            paddingBlock,
            backgroundColor: backgroundColor ?? token(COLOR_BG),
            direction: imageFirst ? "ltr" : "rtl",
            // Query container for TYPE_SCALE_CSS (device-reflow parity) — see the constant's doc.
            containerType: "inline-size"
          },
          children: [
            height === "fullscreen" ? /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: FULLSCREEN_SVH_CSS } }) : null,
            /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: TYPE_SCALE_CSS } }),
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-field": "image-column",
                style: {
                  direction: "ltr",
                  minHeight: "200px",
                  // Legacy `bg-gradient-to-br from-surface via-border to-surface` — a soft neutral placeholder
                  // (the image, when present, covers it).
                  backgroundImage: `linear-gradient(135deg, ${token(COLOR_BG)} 0%, var(${COLOR_BORDER}, ${PLACEHOLDER_FALLBACK}) 50%, ${token(COLOR_BG)} 100%)`
                },
                children: hasImage ? (
                  // Client island (FallbackImage): a broken URL falls back to nothing here, so the column's own
                  // soft gradient placeholder shows through. `image` is a non-empty string under `hasImage`.
                  /* @__PURE__ */ jsx(
                    FallbackImage,
                    {
                      src: image ?? "",
                      alt: imageAlt ?? (heading !== void 0 ? toPlainText(heading) : ""),
                      ariaHidden: imageAlt === void 0 || imageAlt === "",
                      style: { width: "100%", height: "100%", objectFit: "cover", objectPosition, display: "block" }
                    }
                  )
                ) : null
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-field": "text-column",
                style: {
                  direction: "ltr",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: flexAlign(effectiveContentAlignment),
                  padding: space(4)
                },
                children: /* @__PURE__ */ jsx("div", { style: { width: "100%", maxWidth: CONTENT_MAX_WIDTH }, children: content })
              }
            )
          ]
        }
      );
    }
    const overlay = Math.min(100, Math.max(0, overlayOpacity)) / 100;
    return /* @__PURE__ */ jsxs(
      "aside",
      {
        "data-block": "banner",
        "data-layout": layout,
        "data-height": height,
        "data-title-size": titleSize,
        "data-text-size": textSize,
        style: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: verticalJustify(verticalPosition),
          minHeight,
          overflow: "hidden",
          paddingInline: space(4),
          paddingBlock,
          // Query container for TYPE_SCALE_CSS (device-reflow parity) — see the constant's doc.
          containerType: "inline-size",
          // A seller override wins; else a background IMAGE sits on a neutral dark fill; else the
          // no-image default paints legacy's LIGHT surface→border→surface placeholder gradient
          // (verbatim, NO scrim — legacy renders the overlay only with an image).
          ...backgroundColor !== void 0 ? { backgroundColor } : hasImage ? { backgroundColor: token(COLOR_PRIMARY) } : { backgroundImage: NO_IMAGE_BACKGROUND }
        },
        children: [
          height === "fullscreen" ? /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: FULLSCREEN_SVH_CSS } }) : null,
          /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: TYPE_SCALE_CSS } }),
          hasImage ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              FallbackImage,
              {
                src: image ?? "",
                alt: imageAlt ?? (heading !== void 0 ? toPlainText(heading) : ""),
                ariaHidden: imageAlt === void 0 || imageAlt === "",
                style: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-field": "overlay",
                "aria-hidden": "true",
                style: {
                  position: "absolute",
                  inset: 0,
                  backgroundColor: OVERLAY_COLOR_HEX[overlayColor],
                  opacity: overlay,
                  pointerEvents: "none"
                }
              }
            )
          ] }) : null,
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: CONTAINER_WIDTH[containerWidth],
                marginInline: "auto",
                // Legacy inner content padding (`py-16`, store-admin modules/Banner.tsx:552) — invisible at
                // the default seed (min-height + flex centering absorb it) but lets tall content breathe
                // identically to legacy.
                paddingBlock: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: flexAlign(effectiveContentAlignment)
              },
              children: /* @__PURE__ */ jsx("div", { style: { width: "100%", maxWidth: CONTENT_MAX_WIDTH }, children: content })
            }
          )
        ]
      }
    );
  }

  // components/Button.tsx
  var baseStyle = (variant, disabled) => {
    const radius2 = `var(${RADIUS}, ${DEFAULT_TOKENS[RADIUS]})`;
    const space2 = `var(${SPACE}, ${DEFAULT_TOKENS[SPACE]})`;
    const padding = `${space2} calc(${space2} * 2)`;
    const font = `var(${FONT_BODY}, ${DEFAULT_TOKENS[FONT_BODY]})`;
    const primary = `var(${COLOR_PRIMARY}, ${DEFAULT_TOKENS[COLOR_PRIMARY]})`;
    const stateStyle = disabled ? { cursor: "not-allowed", opacity: 0.6 } : { cursor: "pointer" };
    if (variant === "secondary") {
      return {
        backgroundColor: "transparent",
        color: primary,
        border: `1px solid ${primary}`,
        borderRadius: radius2,
        padding,
        fontFamily: font,
        ...stateStyle
      };
    }
    return {
      backgroundColor: primary,
      color: `var(${COLOR_BG}, ${DEFAULT_TOKENS[COLOR_BG]})`,
      border: "1px solid transparent",
      borderRadius: radius2,
      padding,
      fontFamily: font,
      ...stateStyle
    };
  };
  function Button({
    children,
    onClick,
    variant = "primary",
    disabled = false
  }) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick,
        disabled,
        "aria-disabled": disabled || void 0,
        style: baseStyle(variant, disabled),
        "data-variant": variant,
        children
      }
    );
  }

  // components/Checkbox.tsx
  var slugId = (prefix, label, explicit) => {
    if (explicit) return explicit;
    if (typeof label === "string" && label.trim() !== "") {
      return `${prefix}-${label.replace(/\s+/g, "-").toLowerCase()}`;
    }
    return void 0;
  };
  var rootStyle = (disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: `var(${FONT_MANROPE})`,
    opacity: disabled ? 0.55 : 1
  });
  var boxStyle = (on) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    borderRadius: 4,
    border: `1.5px solid var(${on ? DASH_PRIMARY : COLOR_BORDER})`,
    background: `var(${on ? DASH_PRIMARY : T1_WHITE})`,
    flexShrink: 0
  });
  var nativeStyle = {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    cursor: "inherit"
  };
  var labelTextStyle = { fontSize: 14, color: `var(${T1_OXFORD})` };
  var dashStyle = { width: 9, height: 2, background: `var(${T1_WHITE})`, borderRadius: 1 };
  function Checkbox({
    checked,
    onCheckedChange,
    label,
    id,
    indeterminate = false,
    disabled = false
  }) {
    const boxId = slugId("cb", label, id);
    const on = checked || indeterminate;
    return /* @__PURE__ */ jsxs("label", { htmlFor: boxId, style: rootStyle(disabled), "data-checked": checked || void 0, children: [
      /* @__PURE__ */ jsxs("span", { style: boxStyle(on), children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: boxId,
            type: "checkbox",
            checked,
            disabled,
            "aria-checked": indeterminate ? "mixed" : checked,
            onChange: (e) => onCheckedChange(e.target.checked),
            style: nativeStyle
          }
        ),
        indeterminate ? /* @__PURE__ */ jsx("span", { style: dashStyle }) : checked ? /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.5 6.2l2.4 2.4 4.6-5",
            stroke: `var(${T1_WHITE})`,
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }) : null
      ] }),
      label !== void 0 && label !== null && /* @__PURE__ */ jsx("span", { style: labelTextStyle, children: label })
    ] });
  }

  // components/Collage.tsx
  var gridStyle = (columns) => ({
    display: "grid",
    gridTemplateColumns: `repeat(${Math.max(1, columns)}, 1fr)`,
    gap: `var(${SPACE})`,
    color: `var(${COLOR_FG})`,
    padding: `calc(var(${SPACE}) * 2)`
  });
  var tileStyle = {
    margin: 0,
    overflow: "hidden",
    borderRadius: `var(${RADIUS})`
  };
  function Tile({ tile, index }) {
    const inner = /* @__PURE__ */ jsxs("figure", { style: tileStyle, "data-block": "collage-tile", "data-tile-index": index, children: [
      tile.image !== void 0 ? /* @__PURE__ */ jsx(
        "img",
        {
          src: tile.image,
          alt: tile.heading ?? "",
          style: { width: "100%", height: "auto", display: "block" }
        }
      ) : null,
      tile.heading !== void 0 ? /* @__PURE__ */ jsx("figcaption", { style: { fontFamily: `var(${FONT_HEADING})` }, children: tile.heading }) : null
    ] });
    return tile.href !== void 0 ? /* @__PURE__ */ jsx("a", { href: tile.href, style: { color: "inherit", textDecoration: "none" }, children: inner }) : inner;
  }
  function Collage({ heading, blocks, columns = 3 }) {
    return /* @__PURE__ */ jsxs("section", { "data-block": "collage", children: [
      heading !== void 0 && heading !== "" ? /* @__PURE__ */ jsx("h2", { style: { fontFamily: `var(${FONT_HEADING})`, color: `var(${COLOR_FG})` }, children: heading }) : null,
      /* @__PURE__ */ jsx("div", { style: gridStyle(columns), children: blocks.map((tile, index) => /* @__PURE__ */ jsx(Tile, { tile, index }, index)) })
    ] });
  }

  // components/DataTable.tsx
  var tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: `var(${FONT_MANROPE})`,
    fontSize: 13,
    color: `var(${T1_OXFORD})`,
    background: `var(${DASH_SURFACE})`
  };
  var theadCellStyle = (align) => ({
    textAlign: align,
    padding: "10px 12px",
    background: `var(${DASH_TABLE_HEADER})`,
    color: `var(${T1_GRAY_600})`,
    fontWeight: 600,
    fontSize: 12,
    borderBottom: `1px solid var(${COLOR_BORDER})`,
    whiteSpace: "nowrap"
  });
  var cellStyle = (align) => ({
    textAlign: align,
    padding: "12px",
    borderBottom: `1px solid var(${COLOR_BORDER})`,
    verticalAlign: "middle"
  });
  var sortButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    border: "none",
    background: "transparent",
    font: "inherit",
    color: "inherit",
    fontWeight: 600,
    cursor: "pointer",
    padding: 0
  };
  var captionStyle = {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0
  };
  var ariaSortFor = (col, sort) => {
    if (sort === void 0 || sort.key !== col.key) return void 0;
    return sort.direction === "asc" ? "ascending" : "descending";
  };
  function DataTable({
    columns,
    rows,
    rowKey,
    empty,
    onSort,
    sort,
    caption
  }) {
    const defaultRender = (col, row) => {
      if (col.render !== void 0) return col.render(row);
      const value = row[col.key];
      return value === void 0 || value === null ? null : value;
    };
    return /* @__PURE__ */ jsxs("table", { style: tableStyle, "data-console-datatable": "", children: [
      caption !== void 0 && caption !== null && /* @__PURE__ */ jsx("caption", { style: captionStyle, children: caption }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((col) => {
        const align = col.align ?? "left";
        const sortable = col.sortable === true && onSort !== void 0;
        const ariaSort = ariaSortFor(col, sort);
        return /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            "aria-sort": ariaSort,
            style: theadCellStyle(align),
            "data-column": col.key,
            children: sortable ? /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => onSort(col.key),
                style: sortButtonStyle,
                "data-sortable": "",
                children: [
                  col.header,
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: ariaSort === "ascending" ? "\u25B2" : ariaSort === "descending" ? "\u25BC" : "\u2195" })
                ]
              }
            ) : col.header
          },
          col.key
        );
      }) }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: columns.length, style: { ...cellStyle("center"), padding: 0 }, children: empty }) }) : rows.map((row) => /* @__PURE__ */ jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsx("td", { style: cellStyle(col.align ?? "left"), children: defaultRender(col, row) }, col.key)) }, rowKey(row))) })
    ] });
  }

  // shims/react-dom.js
  var RD = window.ReactDOM;
  var createPortal = RD.createPortal;

  // components/Dialog.tsx
  var prefersReducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FOCUSABLE = 'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';
  var backdropStyle = (entered, reduce, variant) => ({
    position: "fixed",
    inset: 0,
    zIndex: `var(${Z_MODAL}, 1000)`,
    background: `var(${T1_OVERLAY_MODAL}, rgba(15, 23, 42, 0.5))`,
    display: "flex",
    alignItems: variant === "drawer" ? "stretch" : "center",
    justifyContent: variant === "drawer" ? "flex-end" : "center",
    padding: variant === "drawer" ? 0 : 24,
    opacity: entered ? 1 : 0,
    transition: reduce ? "none" : `opacity var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease)`
  });
  var panelStyle = (entered, reduce, variant) => {
    const shared = {
      display: "flex",
      flexDirection: "column",
      background: `var(${T1_WHITE}, #ffffff)`,
      fontFamily: `var(${FONT_MANROPE})`,
      color: `var(${T1_OXFORD})`,
      boxShadow: `var(${SHADOW_DASH_DROPDOWN}, 0px 8px 24px rgba(0, 0, 0, 0.18))`,
      boxSizing: "border-box"
    };
    if (variant === "drawer") {
      return {
        ...shared,
        width: "min(440px, 100vw)",
        height: "100%",
        transform: entered ? "translateX(0)" : "translateX(24px)",
        opacity: entered ? 1 : 0,
        transition: reduce ? "none" : `opacity var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease), transform var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease)`
      };
    }
    return {
      ...shared,
      width: "min(520px, 100%)",
      maxHeight: "calc(100vh - 48px)",
      borderRadius: `var(${RADIUS_DASH_LG}, 12px)`,
      transform: entered ? "scale(1)" : "scale(0.98)",
      opacity: entered ? 1 : 0,
      transition: reduce ? "none" : `opacity var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease), transform var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease)`
    };
  };
  var headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "16px 20px",
    borderBottom: `1px solid var(${COLOR_BORDER})`
  };
  var bodyStyle2 = {
    padding: 20,
    overflowY: "auto",
    flex: "1 1 auto"
  };
  var footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    padding: "12px 20px",
    borderTop: `1px solid var(${COLOR_BORDER})`
  };
  var closeButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    border: "none",
    background: "transparent",
    color: `var(${T1_GRAY_600})`,
    fontSize: 20,
    lineHeight: 1,
    cursor: "pointer",
    borderRadius: 6
  };
  function Dialog({
    open,
    onClose,
    title,
    children,
    footer,
    variant = "modal",
    closeLabel = "Cerrar"
  }) {
    const [container, setContainer] = useState(null);
    const [entered, setEntered] = useState(false);
    const panelRef = useRef(null);
    const titleId = useId();
    const restoreFocusTo = useRef(null);
    useEffect(() => {
      if (!open || typeof document === "undefined") return;
      const element = document.createElement("div");
      element.setAttribute("data-nexus-dialog-portal", "");
      document.body.appendChild(element);
      setContainer(element);
      return () => {
        document.body.removeChild(element);
        setContainer(null);
        setEntered(false);
      };
    }, [open]);
    useEffect(() => {
      if (!open || container === null) return;
      restoreFocusTo.current = document.activeElement ?? null;
      setEntered(prefersReducedMotion() ? true : false);
      const raf = requestAnimationFrame(() => {
        setEntered(true);
        const panel = panelRef.current;
        if (panel === null) return;
        const first = panel.querySelector(FOCUSABLE);
        (first ?? panel).focus();
      });
      return () => {
        cancelAnimationFrame(raf);
        restoreFocusTo.current?.focus?.();
      };
    }, [open, container]);
    const onKeyDown = useCallback(
      (event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
          return;
        }
        if (event.key !== "Tab") return;
        const panel = panelRef.current;
        if (panel === null) return;
        const focusables = Array.from(panel.querySelectorAll(FOCUSABLE));
        if (focusables.length === 0) {
          event.preventDefault();
          panel.focus();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (first === void 0 || last === void 0) return;
        const active = document.activeElement;
        if (event.shiftKey && (active === first || active === panel)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      },
      [onClose]
    );
    if (!open || container === null) return null;
    const reduce = prefersReducedMotion();
    return createPortal(
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-nexus-dialog-backdrop": "",
          style: backdropStyle(entered, reduce, variant),
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) onClose();
          },
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              ref: panelRef,
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": titleId,
              tabIndex: -1,
              "data-variant": variant,
              style: panelStyle(entered, reduce, variant),
              onKeyDown,
              children: [
                /* @__PURE__ */ jsxs("div", { style: headerStyle, children: [
                  /* @__PURE__ */ jsx("h2", { id: titleId, style: { margin: 0, fontSize: 16, fontWeight: 600 }, children: title }),
                  /* @__PURE__ */ jsx("button", { type: "button", "aria-label": closeLabel, onClick: onClose, style: closeButtonStyle, children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "\xD7" }) })
                ] }),
                /* @__PURE__ */ jsx("div", { style: bodyStyle2, children }),
                footer !== void 0 && footer !== null && /* @__PURE__ */ jsx("div", { style: footerStyle, children: footer })
              ]
            }
          )
        }
      ),
      container
    );
  }

  // components/EmptyState.tsx
  var rootStyle2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 8,
    padding: "48px 24px",
    fontFamily: `var(${FONT_MANROPE})`
  };
  var iconStyle2 = {
    display: "inline-flex",
    color: `var(${T1_GRAY_600})`,
    marginBottom: 4
  };
  var titleStyle2 = {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: `var(${T1_OXFORD})`
  };
  var bodyStyle3 = {
    margin: 0,
    maxWidth: 380,
    fontSize: 13,
    color: `var(${T1_GRAY_600})`
  };
  function EmptyState({ icon, title, body, action }) {
    return /* @__PURE__ */ jsxs("div", { role: "status", style: rootStyle2, "data-nexus-empty-state": "", children: [
      icon !== void 0 && icon !== null && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: iconStyle2, children: icon }),
      /* @__PURE__ */ jsx("p", { style: titleStyle2, children: title }),
      body !== void 0 && body !== null && /* @__PURE__ */ jsx("p", { style: bodyStyle3, children: body }),
      action !== void 0 && action !== null && /* @__PURE__ */ jsx("div", { style: { marginTop: 8 }, children: action })
    ] });
  }

  // components/Hero.tsx
  var sectionStyle = (image) => ({
    color: `var(${COLOR_FG})`,
    padding: `calc(var(${SPACE}) * 4)`,
    ...image !== void 0 ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : {}
  });
  function Hero({ heading, subheading, ctaLabel, onCta, image }) {
    return /* @__PURE__ */ jsxs("section", { style: sectionStyle(image), "data-block": "hero", children: [
      /* @__PURE__ */ jsx("h1", { style: { fontFamily: `var(${FONT_HEADING})`, margin: 0 }, children: heading }),
      subheading !== void 0 ? /* @__PURE__ */ jsx("p", { style: { fontFamily: `var(${FONT_BODY})` }, children: subheading }) : null,
      ctaLabel !== void 0 ? /* @__PURE__ */ jsx(Button, { onClick: onCta, children: ctaLabel }) : null
    ] });
  }

  // components/Icon.tsx
  var iconStyle3 = (size) => ({
    display: "inline-block",
    flexShrink: 0,
    width: size,
    height: size
  });
  function Icon({ viewBox, path, size = 24, label }) {
    const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
    return /* @__PURE__ */ jsx(
      "svg",
      {
        width: size,
        height: size,
        viewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: iconStyle3(size),
        ...a11y,
        dangerouslySetInnerHTML: { __html: path }
      }
    );
  }

  // components/IconButton.tsx
  var DIMENSIONS = { sm: 32, md: 40, lg: 48 };
  var paletteStyle = (variant) => {
    switch (variant) {
      case "outline":
        return {
          background: `var(${T1_WHITE})`,
          color: `var(${T1_OXFORD})`,
          border: `1px solid var(${COLOR_BORDER})`
        };
      case "primary":
        return {
          background: `var(${DASH_PRIMARY})`,
          color: `var(${T1_WHITE})`,
          border: "1px solid transparent"
        };
      case "ghost":
        return {
          background: `var(${T1_GRAY_100})`,
          color: `var(${T1_OXFORD})`,
          border: "1px solid transparent"
        };
    }
  };
  var buttonStyle = (variant, size, disabled) => {
    const dim = DIMENSIONS[size];
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: `var(${RADIUS_DASH_CONTROL})`,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...paletteStyle(variant)
    };
  };
  function IconButton({
    children,
    label,
    onClick,
    variant = "ghost",
    size = "md",
    disabled = false
  }) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": label,
        onClick,
        disabled,
        "aria-disabled": disabled || void 0,
        style: buttonStyle(variant, size, disabled),
        "data-variant": variant,
        "data-size": size,
        children
      }
    );
  }

  // components/ImageWithText.tsx
  var DEFAULT_IMAGE_HEIGHT_PX = 380;
  var TITLE_SIZE_REM2 = {
    s: "1.25rem",
    m: "1.5rem",
    l: "1.875rem",
    xl: "2.25rem"
  };
  var TITLE_SIZE_DESKTOP_REM2 = {
    s: "1.5rem",
    m: "1.875rem",
    l: "2.25rem",
    xl: "3rem"
  };
  var TEXT_SIZE_REM2 = {
    s: "0.875rem",
    m: "1rem",
    l: "1.125rem",
    xl: "1.25rem"
  };
  var TEXT_SIZE_DESKTOP_REM2 = {
    s: "1rem",
    m: "1.125rem",
    l: "1.25rem",
    xl: "1.5rem"
  };
  var DEFAULT_MAX_WIDTH_PX = 1280;
  var SECTION_SPACING_PX = {
    none: 12,
    small: 20,
    medium: 40,
    large: 64
  };
  var REFLOW_CSS = `
[data-block="image-with-text"] { container-type: inline-size; }
@container (min-width: 48rem) {
  [data-block="image-with-text"][data-layout="split"] [data-field="columns"] { grid-template-columns: 1fr 1fr !important; }
  [data-block="image-with-text"] [data-field="text-column"] { gap: 1.25rem !important; }
${Object.entries(TITLE_SIZE_DESKTOP_REM2).map(
    ([size, rem]) => `  [data-block="image-with-text"][data-title-size="${size}"] [data-field="heading"] { font-size: ${rem} !important; }`
  ).join("\n")}
${Object.entries(TEXT_SIZE_DESKTOP_REM2).map(
    ([size, rem]) => `  [data-block="image-with-text"][data-text-size="${size}"] [data-field="text"] { font-size: ${rem} !important; }`
  ).join("\n")}
}
`;
  var PLACEHOLDER_FALLBACK2 = "#e5e7eb";
  var DEFAULT_OVERLAY_COLOR = "#000000";
  var OVERLAY_DEFAULT_TEXT = "#ffffff";
  var toPlainText2 = (html) => html.replace(/<[^>]*>/g, "");
  var token2 = (name) => `var(${name}, ${DEFAULT_TOKENS[name]})`;
  var alignItemsOf = (a) => a === "center" ? "center" : a === "end" ? "flex-end" : "flex-start";
  function ImageWithText({
    image,
    heading,
    text,
    ctaLabel,
    ctaHref,
    onCta,
    imageSide = "start",
    layout = "split",
    focalPoint,
    contentAlignment = "start",
    columnGapPx,
    maxWidthPx = DEFAULT_MAX_WIDTH_PX,
    backgroundColor,
    headingColor,
    textColor,
    ctaBackgroundColor,
    ctaTextColor,
    overlayColor = DEFAULT_OVERLAY_COLOR,
    overlayOpacity = 50,
    titleSize = "m",
    textSize = "m",
    sectionSpacing = "medium",
    imageHeightPx = DEFAULT_IMAGE_HEIGHT_PX
  }) {
    const isOverlay = layout === "overlay";
    const objectPosition = focalPoint ? `${focalPoint.x}% ${focalPoint.y}%` : "50% 50%";
    const sectionPaddingBlock = `${SECTION_SPACING_PX[sectionSpacing]}px`;
    const effHeadingColor = headingColor ?? (isOverlay ? OVERLAY_DEFAULT_TEXT : void 0);
    const effTextColor = textColor ?? (isOverlay ? OVERLAY_DEFAULT_TEXT : void 0);
    const imageRadius = `var(--image-radius, ${token2(RADIUS)})`;
    const imagePlaceholder = /* @__PURE__ */ jsx(
      "div",
      {
        "data-field": "image-placeholder",
        "aria-hidden": "true",
        style: {
          width: "100%",
          height: isOverlay ? "100%" : `${imageHeightPx}px`,
          backgroundImage: `linear-gradient(to bottom right, ${PLACEHOLDER_FALLBACK2}, #d1d5db)`,
          borderRadius: isOverlay ? 0 : imageRadius
        }
      }
    );
    const imageInner = image !== void 0 ? (
      // The <img> is a small CLIENT ISLAND (FallbackImage) — a broken URL falls back to the SAME neutral
      // placeholder. Bound to a FIXED PIXEL HEIGHT (not aspect-ratio) so a large/square source cannot run
      // its column to full height — mirrors legacy (fixed height token + `object-fit:cover`).
      /* @__PURE__ */ jsx(
        FallbackImage,
        {
          src: image,
          alt: heading !== void 0 ? toPlainText2(heading) : "",
          fallback: imagePlaceholder,
          style: {
            width: "100%",
            height: isOverlay ? "100%" : `${imageHeightPx}px`,
            objectFit: "cover",
            objectPosition,
            display: "block",
            borderRadius: isOverlay ? 0 : imageRadius
          }
        }
      )
    ) : imagePlaceholder;
    const ctaOverrideStyle = {
      ...ctaBackgroundColor !== void 0 ? { backgroundColor: ctaBackgroundColor } : {},
      ...ctaTextColor !== void 0 ? { color: ctaTextColor } : {}
    };
    const ctaNode = ctaLabel === void 0 ? null : ctaHref !== void 0 && ctaHref !== "" ? /* @__PURE__ */ jsx(
      "a",
      {
        href: ctaHref,
        "data-cta": "link",
        style: {
          display: "inline-block",
          backgroundColor: token2(COLOR_PRIMARY),
          color: token2(COLOR_BG),
          borderRadius: `var(--button-radius, ${token2(RADIUS)})`,
          padding: "0.875rem 2rem",
          fontFamily: token2(FONT_BODY),
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "uppercase",
          textDecoration: "none",
          ...ctaOverrideStyle
        },
        children: ctaLabel
      }
    ) : /* @__PURE__ */ jsx(Button, { onClick: onCta, children: ctaLabel });
    const textColumn = /* @__PURE__ */ jsxs(
      "div",
      {
        "data-field": "text-column",
        style: {
          display: "flex",
          flexDirection: "column",
          // Legacy contentSpacingMedium `gap-3 @md:gap-5`: 12px base; the ≥48rem-container arm (20px)
          // applies via REFLOW_CSS.
          gap: "0.75rem",
          justifyContent: "center",
          alignItems: isOverlay ? alignItemsOf(contentAlignment) : "stretch",
          textAlign: contentAlignment === "start" ? "left" : contentAlignment === "end" ? "right" : "center",
          direction: "ltr",
          // Legacy hardcodes `px-8` on the text-content block (store-admin ImageWithText.tsx:216) —
          // the 32px inset between the column edge and the copy.
          paddingInline: "2rem"
        },
        children: [
          heading !== void 0 ? (
            // See the `heading` prop doc: pre-sanitized by the caller, rendered as trusted markup so a
            // legacy `<strong>`/`<em>` split survives (never plain-text-flattened).
            //
            // WEIGHT (section-parity pass): rides the store typography channel `--font-weight-heading`
            // (emitted by the storefront theme bridge from the store's saved typography), falling back to
            // 700. A prior revision hardcoded 700 claiming "legacy bakes font-bold into every titleSize*
            // class" — true ONLY of the vendored default class pack (defaults.ts:201-204); the minimal
            // theme the parity store runs requests `font-light` and renders 400 via its single-weight
            // display font. Hardcoding 700 would force synthetic bold once the store font is corrected.
            // Inline `fontSize` is the BASE (sub-48rem) arm of the `titleSize` preset; the ≥48rem
            // desktop arm applies via REFLOW_CSS keyed on the root's `data-title-size` (Law-7 M3 — the
            // same mobile-first pattern as `<Banner>`, so the type reflows with the device frame).
            /* @__PURE__ */ jsx(
              "h2",
              {
                "data-field": "heading",
                style: {
                  fontFamily: token2(FONT_HEADING),
                  margin: 0,
                  fontWeight: "var(--font-weight-heading, 700)",
                  fontSize: TITLE_SIZE_REM2[titleSize],
                  ...effHeadingColor !== void 0 ? { color: effHeadingColor } : {}
                },
                dangerouslySetInnerHTML: { __html: heading }
              }
            )
          ) : null,
          text !== void 0 ? (
            // Body is a rich-text field (legacy parity): pre-sanitized by the caller, rendered as trusted
            // markup — mirrors the `heading` sink, so a merchant's bold/italic body survives.
            //
            // TONE (section-parity pass): NO opacity dim. Legacy's `textSizeM` class REPLACES the muted
            // base class, so the default-seed paragraph renders full-strength near-black (captured legacy
            // para is undimmed — the earlier 0.75 dim was a Phoenix invention). Line-height matches
            // Tailwind `text-lg` (28px at 18px ≈ 1.556), the legacy computed value, instead of the
            // browser default. Inline `fontSize` is the BASE arm of the `textSize` preset; the ≥48rem
            // desktop arm applies via REFLOW_CSS keyed on `data-text-size` (Law-7 M3, mirrors `heading`).
            /* @__PURE__ */ jsx(
              "p",
              {
                "data-field": "text",
                style: {
                  fontFamily: token2(FONT_BODY),
                  margin: 0,
                  fontSize: TEXT_SIZE_REM2[textSize],
                  lineHeight: 1.556,
                  ...effTextColor !== void 0 ? { color: effTextColor } : {}
                },
                dangerouslySetInnerHTML: { __html: text }
              }
            )
          ) : null,
          ctaNode
        ]
      }
    );
    const figure = /* @__PURE__ */ jsx("figure", { style: { margin: 0, direction: "ltr", height: isOverlay ? "100%" : void 0 }, children: imageInner });
    if (isOverlay) {
      return /* @__PURE__ */ jsxs(
        "section",
        {
          "data-block": "image-with-text",
          "data-image-side": imageSide,
          "data-layout": "overlay",
          "data-title-size": titleSize,
          "data-text-size": textSize,
          style: {
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: `${imageHeightPx}px`,
            // `sectionSpacing` is vertical-only (legacy `py-*`); the horizontal gutter stays the fixed value.
            paddingInline: `calc(${token2(SPACE)} * 3)`,
            paddingBlock: sectionPaddingBlock,
            ...backgroundColor !== void 0 ? { backgroundColor } : {}
          },
          children: [
            /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: REFLOW_CSS } }),
            /* @__PURE__ */ jsxs("div", { style: { position: "absolute", inset: 0 }, children: [
              figure,
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    inset: 0,
                    backgroundColor: overlayColor,
                    opacity: Math.max(0, Math.min(100, overlayOpacity)) / 100,
                    pointerEvents: "none"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { style: { position: "relative", zIndex: 1, maxWidth: `${maxWidthPx}px`, width: "100%" }, children: textColumn })
          ]
        }
      );
    }
    const isStacked = layout === "stacked" || layout === "stacked-reverse";
    const gap = columnGapPx !== void 0 ? `${columnGapPx}px` : `calc(${token2(SPACE)} * 2)`;
    return /* @__PURE__ */ jsxs(
      "section",
      {
        "data-block": "image-with-text",
        "data-image-side": imageSide,
        "data-layout": layout,
        "data-title-size": titleSize,
        "data-text-size": textSize,
        style: {
          color: token2(COLOR_FG),
          // `sectionSpacing` is vertical-only (legacy `py-*`); no horizontal gutter (see above).
          paddingBlock: sectionPaddingBlock,
          ...backgroundColor !== void 0 ? { backgroundColor } : {},
          maxWidth: `${maxWidthPx}px`,
          marginInline: "auto"
        },
        children: [
          /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: REFLOW_CSS } }),
          /* @__PURE__ */ jsx(
            "div",
            {
              "data-field": "columns",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr",
                gap,
                alignItems: "center",
                // `end` flips the visual order so the figure reads after the text, without reordering the
                // DOM. (Only meaningful for the two-column `split` layout.)
                direction: !isStacked && imageSide === "end" ? "rtl" : "ltr"
              },
              children: layout === "stacked-reverse" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                textColumn,
                figure
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                figure,
                textColumn
              ] })
            }
          )
        ]
      }
    );
  }

  // components/Input.tsx
  var slugId2 = (prefix, label, explicit) => {
    if (explicit) return explicit;
    if (typeof label === "string" && label.trim() !== "") {
      return `${prefix}-${label.replace(/\s+/g, "-").toLowerCase()}`;
    }
    return void 0;
  };
  var borderKey = (state) => {
    switch (state) {
      case "error":
        return COLOR_ERROR;
      case "success":
        return COLOR_SUCCESS;
      case "default":
        return COLOR_BORDER;
    }
  };
  var labelStyle = (state) => ({
    fontSize: 14,
    fontWeight: 500,
    color: `var(${state === "error" ? COLOR_ERROR : T1_OXFORD})`
  });
  var inputStyle = (state, disabled, readOnly, hasLeftIcon) => ({
    width: "100%",
    height: 40,
    padding: hasLeftIcon ? "0 12px 0 38px" : "0 12px",
    fontFamily: "inherit",
    fontSize: 14,
    color: `var(${T1_OXFORD})`,
    background: state === "error" ? `var(${T1_RED_50})` : disabled || readOnly ? `var(${COLOR_DISABLED_BG})` : `var(${T1_WHITE})`,
    border: `1px solid var(${borderKey(state)})`,
    borderRadius: `var(${RADIUS_DASH_CONTROL})`,
    // The browser paints the real accessible focus ring; we only tint it. A `:focus` pseudo-class
    // cannot be an inline style, so no JS focus state — the native outline is the ring.
    outlineColor: `var(${T1_BLUE_500})`,
    boxSizing: "border-box"
  });
  var iconStyle4 = {
    position: "absolute",
    left: 12,
    display: "inline-flex",
    color: `var(${T1_GRAY_600})`
  };
  var helperStyle = (state) => ({
    fontSize: 12,
    color: `var(${state === "error" ? COLOR_ERROR : T1_GRAY_700})`
  });
  function Input({
    value,
    onChange,
    label,
    id,
    placeholder,
    helper,
    state = "default",
    type = "text",
    disabled = false,
    readOnly = false,
    leftIcon
  }) {
    const inputId = slugId2("in", label, id);
    const hasHelper = helper !== void 0 && helper !== null;
    const helperId = hasHelper && inputId !== void 0 ? `${inputId}-helper` : void 0;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: `var(${FONT_MANROPE})` },
        "data-state": state,
        children: [
          label !== void 0 && label !== null && /* @__PURE__ */ jsx("label", { htmlFor: inputId, style: labelStyle(state), children: label }),
          /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
            leftIcon && /* @__PURE__ */ jsx("span", { style: iconStyle4, children: leftIcon }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: inputId,
                type,
                value,
                onChange: (e) => onChange(e.target.value),
                placeholder,
                disabled,
                readOnly,
                "aria-invalid": state === "error" || void 0,
                "aria-describedby": helperId,
                style: inputStyle(state, disabled, readOnly, Boolean(leftIcon))
              }
            )
          ] }),
          hasHelper && /* @__PURE__ */ jsx("span", { id: helperId, role: state === "error" ? "alert" : void 0, style: helperStyle(state), children: helper })
        ]
      }
    );
  }

  // components/PageHeader.tsx
  var headerStyle2 = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    padding: "4px 0 16px",
    fontFamily: `var(${FONT_MANROPE})`
  };
  var titleStyle3 = {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    color: `var(${T1_OXFORD})`
  };
  var descriptionStyle = {
    margin: "4px 0 0",
    fontSize: 13,
    color: `var(${T1_GRAY_600})`
  };
  function PageHeader({ title, description, action }) {
    return /* @__PURE__ */ jsxs("header", { style: headerStyle2, "data-console-page-header": "", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { style: titleStyle3, children: title }),
        description !== void 0 && description !== null && /* @__PURE__ */ jsx("p", { style: descriptionStyle, children: description })
      ] }),
      action !== void 0 && action !== null && /* @__PURE__ */ jsx("div", { style: { flexShrink: 0 }, children: action })
    ] });
  }

  // components/Pagination.tsx
  var PAGE_ELLIPSIS = "ellipsis";
  var pageWindow = (page, pageCount, window2 = 7) => {
    const clampedPage = Math.min(Math.max(page, 1), Math.max(pageCount, 1));
    if (pageCount <= window2) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    const side = Math.max(1, Math.floor((window2 - 3) / 2));
    let start = Math.max(2, clampedPage - side);
    let end = Math.min(pageCount - 1, clampedPage + side);
    const run = window2 - 2;
    if (end - start + 1 < run) {
      if (start === 2) end = Math.min(pageCount - 1, start + run - 1);
      else if (end === pageCount - 1) start = Math.max(2, end - run + 1);
    }
    const slots = [1];
    if (start > 2) slots.push(PAGE_ELLIPSIS);
    for (let p = start; p <= end; p += 1) slots.push(p);
    if (end < pageCount - 1) slots.push(PAGE_ELLIPSIS);
    slots.push(pageCount);
    return slots;
  };
  var navStyle = {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontFamily: `var(${FONT_MANROPE})`
  };
  var slotBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 32,
    height: 32,
    padding: "0 8px",
    fontSize: 13,
    fontWeight: 500,
    border: `1px solid var(${COLOR_BORDER})`,
    borderRadius: `var(${RADIUS_DASH_CONTROL})`,
    background: `var(${T1_WHITE})`,
    color: `var(${T1_OXFORD})`,
    textDecoration: "none",
    cursor: "pointer",
    boxSizing: "border-box"
  };
  var currentStyle = {
    ...slotBase,
    background: `var(${DASH_PRIMARY})`,
    borderColor: `var(${DASH_PRIMARY})`,
    color: `var(${T1_WHITE})`,
    cursor: "default",
    outlineColor: `var(${T1_BLUE_500})`
  };
  var disabledStyle = {
    ...slotBase,
    color: `var(${COLOR_DISABLED_TEXT})`,
    cursor: "not-allowed"
  };
  var ellipsisStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 32,
    height: 32,
    color: `var(${T1_GRAY_600})`,
    fontSize: 13,
    userSelect: "none"
  };
  function Pagination({
    page,
    pageCount,
    onPageChange,
    hrefForPage,
    label = "Paginaci\xF3n",
    siblingWindow = 7
  }) {
    if (pageCount <= 1) return null;
    const current = Math.min(Math.max(page, 1), pageCount);
    const slots = pageWindow(current, pageCount, siblingWindow);
    const control = (target, key, content, isCurrent, isDisabled, ariaLabel) => {
      const style = isDisabled ? disabledStyle : isCurrent ? currentStyle : slotBase;
      const aria = ariaLabel !== void 0 ? { "aria-label": ariaLabel } : {};
      if (isDisabled) {
        if (onPageChange !== void 0) {
          return /* @__PURE__ */ jsx("button", { type: "button", disabled: true, style, ...aria, children: content }, key);
        }
        return /* @__PURE__ */ jsx("span", { "aria-disabled": "true", style, ...aria, children: content }, key);
      }
      if (hrefForPage !== void 0) {
        return /* @__PURE__ */ jsx(
          "a",
          {
            href: hrefForPage(target),
            "aria-current": isCurrent ? "page" : void 0,
            onClick: onPageChange !== void 0 ? () => onPageChange(target) : void 0,
            style,
            ...aria,
            children: content
          },
          key
        );
      }
      if (onPageChange !== void 0) {
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-current": isCurrent ? "page" : void 0,
            onClick: () => onPageChange(target),
            style,
            ...aria,
            children: content
          },
          key
        );
      }
      return /* @__PURE__ */ jsx("span", { "aria-current": isCurrent ? "page" : void 0, style, ...aria, children: content }, key);
    };
    return /* @__PURE__ */ jsxs("nav", { "aria-label": label, style: navStyle, "data-nexus-pagination": "", children: [
      control(current - 1, "prev", "\u2039", false, current <= 1, "P\xE1gina anterior"),
      slots.map(
        (slot, i) => slot === PAGE_ELLIPSIS ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: ellipsisStyle, children: "\u2026" }, `gap-${i}`) : control(slot, `p-${slot}`, String(slot), slot === current, false, `P\xE1gina ${slot}`)
      ),
      control(current + 1, "next", "\u203A", false, current >= pageCount, "P\xE1gina siguiente")
    ] });
  }

  // components/RichText.tsx
  var SPACING_MULTIPLE = {
    none: 0,
    small: 1,
    medium: 2,
    large: 4
  };
  var CONTENT_MAX_WIDTH2 = {
    narrow: "32rem",
    medium: "48rem",
    wide: "64rem",
    full: "100%"
  };
  var OUTER_MAX_WIDTH = {
    default: "80rem",
    quote: "48rem"
  };
  var clamp = (value, allowed, fallback) => value !== void 0 && Object.prototype.hasOwnProperty.call(allowed, value) ? value : fallback;
  var resolvedColor = (value, sentinel) => value !== void 0 && value !== sentinel && value !== "" ? value : void 0;
  var TYPOGRAPHY_CSS = `
[data-block="rich-text"] h1,
[data-block="rich-text"] h2,
[data-block="rich-text"] h3 { font-family: var(--font-heading, inherit); }
[data-block="rich-text"] h1 { font-size: 2rem; font-weight: 700; line-height: 1.2; margin-bottom: 0.75rem; }
[data-block="rich-text"] h2 { font-size: 1.5rem; font-weight: 600; line-height: 1.3; margin-bottom: 0.75rem; }
[data-block="rich-text"] h3 { font-size: 1.25rem; font-weight: 600; line-height: 1.4; margin-bottom: 0.5rem; }
[data-block="rich-text"] p { margin-bottom: 1rem; }
[data-block="rich-text"] ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
[data-block="rich-text"] ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
[data-block="rich-text"] li { margin-bottom: 0.25rem; }
[data-block="rich-text"] a { color: var(${COLOR_ACCENT}); text-decoration: underline; }
[data-block="rich-text"] strong { font-weight: 600; }
[data-block="rich-text"] em { font-style: italic; }
[data-block="rich-text"] [style*="text-align: center"] { text-align: center; }
[data-block="rich-text"] [style*="text-align: right"] { text-align: right; }
[data-block="rich-text"] blockquote { border-inline-start: 4px solid var(${COLOR_ACCENT}); padding-inline-start: 1rem; margin: 1rem 0; font-style: italic; }
`;
  var EXPLICIT_TEXT_COLOR_CSS = `
[data-block="rich-text"] :is(p, span, div, h1, h2, h3, h4, h5, h6) { color: var(--rt-fg) !important; }
`;
  function RichText({
    html,
    children,
    layout = "default",
    sectionSpacing,
    contentWidth,
    backgroundColor,
    textColor,
    quoteAccentColor
  }) {
    const spacing = clamp(sectionSpacing, SPACING_MULTIPLE, "medium");
    const width = clamp(contentWidth, CONTENT_MAX_WIDTH2, "medium");
    const validLayout = layout === "quote" ? "quote" : "default";
    const bg = resolvedColor(backgroundColor, "auto");
    const fg = resolvedColor(textColor, "auto");
    const accent = resolvedColor(quoteAccentColor, "accent");
    const verticalPad = spacing === "none" ? "0" : `calc(var(${SPACE}) * ${SPACING_MULTIPLE[spacing]})`;
    const sectionStyle4 = {
      padding: `${verticalPad} calc(var(${SPACE}) * 2)`,
      ...bg !== void 0 ? { backgroundColor: bg } : {}
    };
    const innerStyle = {
      maxWidth: CONTENT_MAX_WIDTH2[width],
      marginInline: "auto"
    };
    const outerStyle = {
      maxWidth: OUTER_MAX_WIDTH[validLayout],
      marginInline: "auto"
    };
    const contentStyle = {
      color: fg ?? `var(${COLOR_FG})`,
      fontFamily: `var(${FONT_BODY})`,
      // When an explicit body color is set, expose it as a custom property so the scoped `!important`
      // descendant rule (EXPLICIT_TEXT_COLOR_CSS) can force it onto the nested text leaves the canvas
      // stylesheet would otherwise override. Set via the style object (CSSOM-validated) — never inlined
      // into the raw <style> text.
      ...fg !== void 0 ? { ["--rt-fg"]: fg } : {}
    };
    const typographyCss = fg !== void 0 ? `${TYPOGRAPHY_CSS}${EXPLICIT_TEXT_COLOR_CSS}` : TYPOGRAPHY_CSS;
    const contentNode = children !== void 0 ? /* @__PURE__ */ jsx("div", { style: contentStyle, "data-block": "rich-text", children }) : /* @__PURE__ */ jsx("div", { style: contentStyle, "data-block": "rich-text", dangerouslySetInnerHTML: { __html: html ?? "" } });
    const body = validLayout === "quote" ? /* @__PURE__ */ jsx(
      "blockquote",
      {
        "data-layout": "quote",
        style: {
          borderInlineStartStyle: "solid",
          borderInlineStartWidth: "4px",
          borderInlineStartColor: accent ?? `var(${COLOR_ACCENT})`,
          paddingInlineStart: `calc(var(${SPACE}) * 1.5)`,
          fontStyle: "italic",
          textAlign: "center",
          margin: 0
        },
        children: contentNode
      }
    ) : contentNode;
    return /* @__PURE__ */ jsxs("section", { "data-section": "rich-text", "data-layout": validLayout, style: sectionStyle4, children: [
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: typographyCss } }),
      /* @__PURE__ */ jsx("div", { "data-field": "outer", style: outerStyle, children: /* @__PURE__ */ jsx("div", { style: innerStyle, children: body }) })
    ] });
  }

  // components/RowActionsMenu.tsx
  function KebabGlyph({ size }) {
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1" }),
          /* @__PURE__ */ jsx("circle", { cx: "19", cy: "12", r: "1" }),
          /* @__PURE__ */ jsx("circle", { cx: "5", cy: "12", r: "1" })
        ]
      }
    );
  }
  var useOutsideClose = (onClose) => {
    const ref = useRef(null);
    useEffect(() => {
      const handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) onClose();
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);
    return ref;
  };
  var triggerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    border: "none",
    background: "transparent",
    color: `var(${T1_GRAY_400})`,
    borderRadius: "50%",
    cursor: "pointer"
  };
  var menuStyle = {
    position: "absolute",
    right: 0,
    marginTop: 4,
    minWidth: 200,
    padding: "4px 0",
    background: `var(${T1_WHITE})`,
    border: `1px solid var(${COLOR_BORDER})`,
    borderRadius: `var(${RADIUS_DASH_MD})`,
    boxShadow: `var(${SHADOW_DASH_DROPDOWN}, 0px 8px 24px rgba(0,0,0,0.14))`,
    zIndex: `var(${Z_DROPDOWN}, 900)`,
    fontFamily: `var(${FONT_MANROPE})`,
    listStyle: "none"
  };
  var itemStyle = (tone, disabled) => ({
    display: "block",
    width: "100%",
    padding: "8px 12px",
    textAlign: "left",
    border: "none",
    background: "transparent",
    font: "inherit",
    fontSize: 13,
    borderRadius: `var(${RADIUS_DASH_CONTROL})`,
    color: disabled ? `var(${COLOR_DISABLED_TEXT})` : tone === "danger" ? `var(${COLOR_ERROR})` : `var(${T1_OXFORD})`,
    cursor: disabled ? "not-allowed" : "pointer"
  });
  function RowActionsMenu({ items, label = "Acciones" }) {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef(null);
    const itemRefs = useRef([]);
    const containerRef = useOutsideClose(() => setOpen(false));
    const close = useCallback((restoreFocus) => {
      setOpen(false);
      if (restoreFocus) triggerRef.current?.focus();
    }, []);
    useEffect(() => {
      if (open) itemRefs.current[0]?.focus();
    }, [open]);
    const moveFocus = (from, delta) => {
      const count = items.length;
      if (count === 0) return;
      let next = from;
      for (let i = 0; i < count; i += 1) {
        next = (next + delta + count) % count;
        if (items[next]?.disabled !== true) break;
      }
      itemRefs.current[next]?.focus();
    };
    return /* @__PURE__ */ jsxs("div", { ref: containerRef, style: { position: "relative", display: "inline-block" }, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          ref: triggerRef,
          type: "button",
          "aria-haspopup": "menu",
          "aria-expanded": open,
          "aria-label": label,
          onClick: () => setOpen((v) => !v),
          style: triggerStyle,
          children: /* @__PURE__ */ jsx(KebabGlyph, { size: 18 })
        }
      ),
      open && /* @__PURE__ */ jsx(
        "ul",
        {
          role: "menu",
          "aria-label": label,
          style: menuStyle,
          onKeyDown: (event) => {
            if (event.key === "Escape") {
              event.stopPropagation();
              close(true);
            }
          },
          children: items.map((item, index) => {
            const tone = item.tone ?? "default";
            const disabled = item.disabled === true;
            return /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx(
              "button",
              {
                ref: (el) => {
                  itemRefs.current[index] = el;
                },
                type: "button",
                role: "menuitem",
                disabled,
                "data-tone": tone,
                style: itemStyle(tone, disabled),
                onMouseEnter: (e) => {
                  if (!disabled) e.currentTarget.style.background = `var(${T1_GRAY_100})`;
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "transparent";
                },
                onClick: () => {
                  if (disabled) return;
                  item.onSelect();
                  close(true);
                },
                onKeyDown: (event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveFocus(index, 1);
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveFocus(index, -1);
                  }
                },
                children: item.label
              }
            ) }, `${item.label}-${index}`);
          })
        }
      )
    ] });
  }

  // components/SectionStack.tsx
  var sectionStyle2 = {
    position: "relative",
    color: `var(${COLOR_FG})`,
    // canon: section padding py-20 tablet:py-28 → expressed in the spacing token, no literal px.
    padding: `calc(var(${SPACE}) * 10) calc(var(${SPACE}) * 3)`
  };
  var gridStyle2 = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    // canon §3: left ~40% / right ~60%
    gap: `calc(var(${SPACE}) * 6)`,
    alignItems: "center"
  };
  var headingStyle = {
    fontFamily: `var(${FONT_HEADING})`,
    // Sora (LANDING.md:70) — never Manrope, no font literal
    fontWeight: 400,
    // H2 = Sora Regular 400 (LANDING.md:78)
    margin: 0
  };
  var descStyle = {
    fontFamily: `var(${FONT_BODY})`,
    // Inter (LANDING.md:82)
    color: `var(${COLOR_FG})`,
    marginTop: `calc(var(${SPACE}) * 2)`
  };
  var paginationStyle = {
    fontFamily: `var(${FONT_BODY})`,
    color: `var(${COLOR_ACCENT})`,
    // accent token (theme → Red 600), never #DB3B2B (LANDING.md:36)
    marginTop: `calc(var(${SPACE}) * 4)`
  };
  var visualSlot = (active) => ({
    gridColumn: 1,
    gridRow: 1,
    borderRadius: `var(${RADIUS})`,
    // card radius from the token (LANDING.md:37)
    backgroundColor: `var(${COLOR_BG})`,
    opacity: active ? 1 : 0,
    transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)",
    // canon: opacity only, never transform
    pointerEvents: active ? "auto" : "none"
  });
  function SectionStack({ items, autoPlayMs = 0 }) {
    const baseId = useId();
    const [active, setActive] = useState(0);
    const [manual, setManual] = useState(false);
    const [hovered, setHovered] = useState(false);
    const total = items.length;
    const goTo = useCallback((i) => {
      setActive(i);
      setManual(true);
    }, []);
    useEffect(() => {
      if (autoPlayMs <= 0 || manual || hovered || total <= 1) return;
      const t = setInterval(() => setActive((a) => (a + 1) % total), autoPlayMs);
      return () => clearInterval(t);
    }, [autoPlayMs, manual, hovered, total]);
    if (total === 0) return null;
    const current = items[Math.min(active, total - 1)];
    return /* @__PURE__ */ jsx(
      "section",
      {
        style: sectionStyle2,
        "data-block": "section-stack",
        "aria-roledescription": "carousel",
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        children: /* @__PURE__ */ jsxs("div", { style: gridStyle2, children: [
          /* @__PURE__ */ jsxs("div", { style: { gridColumn: 2, gridRow: 1 }, children: [
            /* @__PURE__ */ jsx("h2", { style: headingStyle, "aria-live": "polite", children: current.title }),
            current.description !== void 0 ? /* @__PURE__ */ jsx("p", { style: descStyle, children: current.description }) : null,
            current.ctaLabel !== void 0 ? /* @__PURE__ */ jsx("div", { style: { marginTop: `calc(var(${SPACE}) * 3)` }, children: /* @__PURE__ */ jsx(Button, { onClick: current.onCta, children: current.ctaLabel }) }) : null,
            /* @__PURE__ */ jsxs("p", { style: paginationStyle, "data-pagination": "count", children: [
              Math.min(active, total - 1) + 1,
              " / ",
              total
            ] }),
            /* @__PURE__ */ jsx("div", { role: "tablist", "aria-label": "product slides", style: { display: "flex", gap: `var(${SPACE})`, marginTop: `var(${SPACE})` }, children: items.map((item, i) => {
              const isActive = i === Math.min(active, total - 1);
              return /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${baseId}-tab-${item.id}`,
                  "aria-selected": isActive,
                  "aria-controls": `${baseId}-panel-${item.id}`,
                  "aria-label": item.title,
                  onClick: () => goTo(i),
                  "data-active": isActive,
                  style: {
                    width: `calc(var(${SPACE}) * 1.5)`,
                    height: `calc(var(${SPACE}) * 1.5)`,
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    // active dot = accent token (Red 600 via theme); inactive = neutral fg
                    backgroundColor: isActive ? `var(${COLOR_ACCENT})` : `var(${COLOR_FG})`,
                    opacity: isActive ? 1 : 0.3
                  }
                },
                item.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { gridColumn: 1, gridRow: 1, display: "grid" }, children: items.map((item, i) => {
            const isActive = i === Math.min(active, total - 1);
            return /* @__PURE__ */ jsx(
              "div",
              {
                role: "tabpanel",
                id: `${baseId}-panel-${item.id}`,
                "aria-labelledby": `${baseId}-tab-${item.id}`,
                "aria-hidden": !isActive,
                "data-slide": item.id,
                "data-active": isActive,
                style: visualSlot(isActive),
                children: item.visual ?? null
              },
              item.id
            );
          }) })
        ] })
      }
    );
  }

  // components/Select.tsx
  var slugId3 = (prefix, label, explicit) => {
    if (explicit) return explicit;
    if (typeof label === "string" && label.trim() !== "") {
      return `${prefix}-${label.replace(/\s+/g, "-").toLowerCase()}`;
    }
    return void 0;
  };
  var labelStyle2 = {
    fontSize: 14,
    fontWeight: 500,
    color: `var(${T1_OXFORD})`
  };
  var selectStyle = (disabled, hasValue) => ({
    width: "100%",
    height: 40,
    padding: "0 36px 0 12px",
    fontFamily: "inherit",
    fontSize: 14,
    // A chosen value reads in Oxford; the placeholder (empty value) reads in the muted disabled-text.
    color: `var(${hasValue ? T1_OXFORD : COLOR_DISABLED_TEXT})`,
    background: `var(${disabled ? COLOR_DISABLED_BG : T1_WHITE})`,
    border: `1px solid var(${COLOR_BORDER})`,
    borderRadius: `var(${RADIUS_DASH_CONTROL})`,
    outlineColor: `var(${COLOR_BORDER})`,
    appearance: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    boxSizing: "border-box"
  });
  var chevronStyle = {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: `var(${T1_GRAY_600})`,
    fontSize: 11
  };
  function Select({
    value,
    onChange,
    options,
    label,
    id,
    placeholder,
    disabled = false
  }) {
    const selectId = slugId3("sel", label, id);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: `var(${FONT_MANROPE})` },
        children: [
          label !== void 0 && label !== null && /* @__PURE__ */ jsx("label", { htmlFor: selectId, style: labelStyle2, children: label }),
          /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: selectId,
                value,
                onChange: (e) => onChange(e.target.value),
                disabled,
                style: selectStyle(disabled, value !== ""),
                "data-value": value,
                children: [
                  placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
                  options.map((o) => /* @__PURE__ */ jsx("option", { value: o.value, children: o.label }, o.value))
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: chevronStyle, children: "\u25BE" })
          ] })
        ]
      }
    );
  }

  // components/SurfaceCard.tsx
  var RADIUS2 = {
    md: RADIUS_DASH,
    lg: RADIUS_DASH_LG
  };
  var PADDING = {
    sm: SPACE_4,
    md: SPACE_5,
    lg: SPACE_6
  };
  var rootStyle3 = (size, padding, elevated) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: `var(${DASH_SURFACE})`,
    border: `1px solid var(${T1_GRAY_200})`,
    borderRadius: `var(${RADIUS2[size]})`,
    boxShadow: elevated ? `var(${SHADOW_DASH_CARD})` : "none",
    padding: `var(${PADDING[padding]})`,
    fontFamily: `var(${FONT_MANROPE})`,
    lineHeight: `var(${LH_MANROPE})`,
    fontSize: `var(${TEXT_SM})`,
    color: `var(${T1_OXFORD})`
  });
  var headerStyle3 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: `var(${SPACE_3})`,
    marginBottom: `var(${SPACE_4})`
  };
  var titleStyle4 = {
    margin: 0,
    fontSize: `var(${TEXT_MD})`,
    fontWeight: `var(${FW_SEMIBOLD})`,
    lineHeight: `var(${LH_MANROPE})`,
    color: `var(${T1_GRAY_900})`
  };
  var headerActionStyle = {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0
  };
  var footerStyle2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: `var(${SPACE_3})`,
    marginTop: `var(${SPACE_4})`
  };
  function SurfaceCard({
    children,
    title,
    headingLevel = 3,
    headerAction,
    footer,
    size = "md",
    padding = "lg",
    elevated = true
  }) {
    const hasTitle = title !== void 0 && title !== null;
    const hasHeaderAction = headerAction !== void 0 && headerAction !== null;
    const hasFooter = footer !== void 0 && footer !== null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: rootStyle3(size, padding, elevated),
        "data-nexus-surface-card": "",
        "data-size": size,
        "data-elevated": elevated || void 0,
        children: [
          (hasTitle || hasHeaderAction) && /* @__PURE__ */ jsxs("header", { style: headerStyle3, "data-nexus-card-header": "", children: [
            hasTitle ? createElement(`h${headingLevel}`, { style: titleStyle4 }, title) : null,
            hasHeaderAction && /* @__PURE__ */ jsx("div", { style: headerActionStyle, children: headerAction })
          ] }),
          /* @__PURE__ */ jsx("div", { "data-nexus-card-body": "", children }),
          hasFooter && /* @__PURE__ */ jsx("div", { style: footerStyle2, "data-nexus-card-footer": "", children: footer })
        ]
      }
    );
  }

  // components/Switch.tsx
  var rootStyle4 = (disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: `var(${FONT_MANROPE})`,
    opacity: disabled ? 0.55 : 1
  });
  var trackStyle = (checked, disabled) => ({
    position: "relative",
    width: 38,
    height: 22,
    padding: 0,
    border: "none",
    borderRadius: 999,
    background: `var(${checked ? DASH_PRIMARY : T1_GRAY_300})`,
    cursor: disabled ? "not-allowed" : "pointer",
    flexShrink: 0
  });
  var thumbStyle = (checked) => ({
    position: "absolute",
    top: 2,
    left: 2,
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: `var(${T1_WHITE})`,
    transform: checked ? "translateX(16px)" : "translateX(0)",
    transition: "transform 150ms ease"
  });
  var labelTextStyle2 = { fontSize: 14, color: `var(${T1_OXFORD})` };
  function Switch({
    checked,
    onCheckedChange,
    label,
    ariaLabel,
    disabled = false
  }) {
    const accessibleName = ariaLabel ?? (typeof label === "string" ? label : void 0);
    return /* @__PURE__ */ jsxs("span", { style: rootStyle4(disabled), children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-label": accessibleName,
          disabled,
          onClick: () => onCheckedChange(!checked),
          style: trackStyle(checked, disabled),
          "data-checked": checked || void 0,
          children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: thumbStyle(checked) })
        }
      ),
      label !== void 0 && label !== null && /* @__PURE__ */ jsx("span", { style: labelTextStyle2, children: label })
    ] });
  }

  // components/T1LifestyleCards.tsx
  var ACCENT = "#E26153";
  var CTA_HOVER = "#FBC9C2";
  var CARD_GRADIENT = "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)";
  var splitHeadingAccent = (heading, accent) => {
    if (accent === void 0 || accent === "") return [heading, "", ""];
    const at = heading.indexOf(accent);
    if (at < 0) return [heading, "", ""];
    return [heading.slice(0, at), accent, heading.slice(at + accent.length)];
  };
  var sectionStyle3 = {
    // Main landing container — never 1600 (LANDING.md:226,233).
    maxWidth: "1018px",
    marginInline: "auto",
    paddingInline: "24px"
  };
  var headingStyle2 = {
    fontFamily: `var(${FONT_HEADING})`,
    // Sora — LANDING.md:78
    fontWeight: 400,
    // H2 Sora Regular 400 — LANDING.md:78,90
    margin: 0
  };
  var descriptionStyle2 = {
    fontFamily: `var(${FONT_BODY})`,
    // Inter — LANDING.md:82
    color: "#4C4C4C",
    // Oxford body on light — LANDING.md:87
    marginTop: "16px"
  };
  var gridStyle3 = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    // 3 profiles — LANDING-SECTIONS.md:813,819
    gap: "24px",
    marginTop: "48px"
  };
  var cardStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "28px",
    // LANDING-SECTIONS.md:832
    aspectRatio: "4 / 5"
    // portrait — LANDING-SECTIONS.md:830
  };
  var cardImageStyle = {
    position: "absolute",
    inset: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover"
  };
  var cardGradientStyle = {
    position: "absolute",
    inset: 0,
    background: CARD_GRADIENT,
    // bottom-only — LANDING-SECTIONS.md:833
    pointerEvents: "none"
  };
  var cardContentStyle = {
    position: "absolute",
    left: "24px",
    right: "24px",
    bottom: "24px"
    // absolute bottom-6 left-6 right-6 — LANDING-SECTIONS.md:834
  };
  var cardTagStyle = {
    fontFamily: `var(${FONT_BODY})`,
    // Inter SemiBold 11px uppercase — LANDING-SECTIONS.md:835
    fontWeight: 600,
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#ffffff",
    margin: 0
  };
  var cardTitleStyle = {
    fontFamily: `var(${FONT_HEADING})`,
    // H3 Sora Regular 24-28px — LANDING-SECTIONS.md:836
    fontWeight: 400,
    fontSize: "28px",
    color: "#ffffff",
    margin: "8px 0 0"
  };
  var cardDescriptionStyle = {
    fontFamily: `var(${FONT_BODY})`,
    // Inter Regular 14px — LANDING-SECTIONS.md:837
    fontSize: "14px",
    color: "#ffffff",
    margin: "8px 0 0",
    maxWidth: "300px"
  };
  var cardCtaStyle = {
    display: "inline-block",
    fontFamily: `var(${FONT_BODY})`,
    // Inter SemiBold link — LANDING-SECTIONS.md:838
    fontWeight: 600,
    fontSize: "14px",
    color: "#ffffff",
    textDecoration: "none",
    marginTop: "16px"
  };
  function LifestyleProfileCard({ card }) {
    return /* @__PURE__ */ jsxs("article", { style: cardStyle, "data-block": "lifestyle-card", "data-card-id": card.id, children: [
      /* @__PURE__ */ jsx("img", { src: card.imageSrc, alt: card.imageAlt, style: cardImageStyle, loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { style: cardGradientStyle, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { style: cardContentStyle, children: [
        card.tag !== void 0 && card.tag !== "" ? /* @__PURE__ */ jsx("p", { style: cardTagStyle, "data-part": "tag", children: card.tag }) : null,
        /* @__PURE__ */ jsx("h3", { style: cardTitleStyle, "data-part": "title", children: card.title }),
        /* @__PURE__ */ jsx("p", { style: cardDescriptionStyle, "data-part": "description", children: card.description }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: card.ctaHref,
            style: cardCtaStyle,
            "data-part": "cta",
            onMouseEnter: (e) => {
              e.currentTarget.style.color = CTA_HOVER;
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.color = "#ffffff";
            },
            children: [
              card.ctaLabel,
              " \u2192"
            ]
          }
        )
      ] })
    ] });
  }
  function T1LifestyleCards({ slice }) {
    const [before, accentSpan, after] = splitHeadingAccent(slice.heading, slice.accent);
    return /* @__PURE__ */ jsxs("section", { style: sectionStyle3, "data-block": "lifestyle", children: [
      /* @__PURE__ */ jsxs("h2", { style: headingStyle2, "data-part": "heading", children: [
        before,
        accentSpan !== "" ? /* @__PURE__ */ jsx("span", { style: { color: ACCENT }, "data-part": "accent", children: accentSpan }) : null,
        after
      ] }),
      slice.description !== void 0 && slice.description !== "" ? /* @__PURE__ */ jsx("p", { style: descriptionStyle2, "data-part": "section-description", children: slice.description }) : null,
      slice.cards.length > 0 ? /* @__PURE__ */ jsx("div", { style: gridStyle3, "data-part": "cards", children: slice.cards.map((card) => /* @__PURE__ */ jsx(LifestyleProfileCard, { card }, card.id)) }) : null
    ] });
  }

  // components/Tabs.tsx
  var tablistStyle = {
    display: "flex",
    gap: 4,
    borderBottom: `1px solid var(${T1_GRAY_200})`,
    fontFamily: `var(${FONT_MANROPE})`
  };
  var tabStyle = (active) => ({
    position: "relative",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: "10px 14px",
    fontSize: 14,
    fontWeight: 500,
    color: `var(${active ? DASH_PRIMARY : T1_GRAY_700})`
  });
  var indicatorStyle = (active) => ({
    position: "absolute",
    left: 8,
    right: 8,
    bottom: -1,
    height: 2,
    borderRadius: 2,
    background: active ? `var(${DASH_PRIMARY})` : "transparent"
  });
  var panelStyle2 = { fontFamily: `var(${FONT_MANROPE})`, paddingTop: 12 };
  var tabHeaderId = (id) => `tab-${id}`;
  var tabPanelId = (id) => `tabpanel-${id}`;
  var nextIndexFor = (key, current, count) => {
    switch (key) {
      case "ArrowRight":
        return (current + 1) % count;
      case "ArrowLeft":
        return (current - 1 + count) % count;
      case "Home":
        return 0;
      case "End":
        return count - 1;
      default:
        return null;
    }
  };
  function Tabs({ tabs, activeId, onSelect }) {
    const hasPanels = tabs.some((t) => t.content !== void 0);
    const activeIndex = tabs.findIndex((t) => t.id === activeId);
    const activeTab = tabs[activeIndex];
    const onKeyDown = (e) => {
      if (tabs.length === 0) return;
      const current = activeIndex === -1 ? 0 : activeIndex;
      const nextIndex = nextIndexFor(e.key, current, tabs.length);
      if (nextIndex === null) return;
      e.preventDefault();
      const next = tabs[nextIndex];
      if (next) onSelect(next.id);
    };
    const keepFocus = (e) => e.preventDefault();
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "tablist",
          style: tablistStyle,
          tabIndex: 0,
          "aria-activedescendant": activeTab ? tabHeaderId(activeTab.id) : void 0,
          onKeyDown,
          children: tabs.map((t) => {
            const active = t.id === activeId;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                id: tabHeaderId(t.id),
                "aria-selected": active,
                "aria-controls": t.content !== void 0 ? tabPanelId(t.id) : void 0,
                tabIndex: -1,
                onMouseDown: keepFocus,
                onClick: () => onSelect(t.id),
                style: tabStyle(active),
                "data-active": active || void 0,
                children: [
                  t.label,
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: indicatorStyle(active) })
                ]
              },
              t.id
            );
          })
        }
      ),
      hasPanels && activeTab && activeTab.content !== void 0 && /* @__PURE__ */ jsx(
        "div",
        {
          role: "tabpanel",
          id: tabPanelId(activeTab.id),
          "aria-labelledby": tabHeaderId(activeTab.id),
          style: panelStyle2,
          children: activeTab.content
        }
      )
    ] });
  }

  // components/Tag.tsx
  var chipStyle = (selected) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: `var(${selected ? T1_RED_50 : T1_GRAY_100})`,
    color: `var(${selected ? DASH_PRIMARY : T1_OXFORD})`,
    border: selected ? `1px solid var(${T1_RED_200})` : "1px solid transparent",
    fontFamily: `var(${FONT_MANROPE})`,
    fontWeight: 500,
    fontSize: 13,
    padding: "4px 10px",
    borderRadius: `var(${RADIUS_DASH_BADGE})`
  });
  var removeStyle = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "inherit",
    fontSize: 14,
    lineHeight: 1,
    padding: 0,
    opacity: 0.7
  };
  function Tag({
    children,
    onRemove,
    selected = false,
    removeLabel = "Quitar"
  }) {
    return /* @__PURE__ */ jsxs("span", { style: chipStyle(selected), "data-selected": selected || void 0, children: [
      children,
      onRemove && /* @__PURE__ */ jsx("button", { type: "button", "aria-label": removeLabel, onClick: onRemove, style: removeStyle, children: "\xD7" })
    ] });
  }

  // components/Textarea.tsx
  var slugId4 = (prefix, label, explicit) => {
    if (explicit) return explicit;
    if (typeof label === "string" && label.trim() !== "") {
      return `${prefix}-${label.replace(/\s+/g, "-").toLowerCase()}`;
    }
    return void 0;
  };
  var borderKey2 = (state) => {
    switch (state) {
      case "error":
        return COLOR_ERROR;
      case "success":
        return COLOR_SUCCESS;
      case "default":
        return COLOR_BORDER;
    }
  };
  var labelStyle3 = (state) => ({
    fontSize: 14,
    fontWeight: 500,
    color: `var(${state === "error" ? COLOR_ERROR : T1_OXFORD})`
  });
  var fieldStyle = (state, disabled, readOnly) => ({
    width: "100%",
    minHeight: 80,
    padding: "10px 12px",
    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: 1.5,
    color: `var(${T1_OXFORD})`,
    background: state === "error" ? `var(${T1_RED_50})` : disabled || readOnly ? `var(${COLOR_DISABLED_BG})` : `var(${T1_WHITE})`,
    border: `1px solid var(${borderKey2(state)})`,
    borderRadius: `var(${RADIUS_DASH_CONTROL})`,
    // The browser paints the real accessible focus ring; we only tint it. A `:focus` pseudo-class cannot
    // be an inline style, so no JS focus state — the native outline is the ring (parity with <Input>).
    outlineColor: `var(${T1_BLUE_500})`,
    resize: "vertical",
    boxSizing: "border-box"
  });
  var helperStyle2 = (state) => ({
    fontSize: 12,
    color: `var(${state === "error" ? COLOR_ERROR : T1_GRAY_700})`
  });
  function Textarea({
    value,
    onChange,
    label,
    id,
    placeholder,
    helper,
    state = "default",
    rows = 4,
    disabled = false,
    readOnly = false
  }) {
    const fieldId = slugId4("ta", label, id);
    const hasHelper = helper !== void 0 && helper !== null;
    const helperId = hasHelper && fieldId !== void 0 ? `${fieldId}-helper` : void 0;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: `var(${FONT_MANROPE})` },
        "data-state": state,
        children: [
          label !== void 0 && label !== null && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: labelStyle3(state), children: label }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: fieldId,
              value,
              onChange: (e) => onChange(e.target.value),
              placeholder,
              rows,
              disabled,
              readOnly,
              "aria-invalid": state === "error" || void 0,
              "aria-describedby": helperId,
              style: fieldStyle(state, disabled, readOnly)
            }
          ),
          hasHelper && /* @__PURE__ */ jsx("span", { id: helperId, role: state === "error" ? "alert" : void 0, style: helperStyle2(state), children: helper })
        ]
      }
    );
  }

  // components/Toast.tsx
  var DEFAULT_TOAST_DURATION_MS = 5e3;
  var resolveToastDurationMs = (severity, hasAction, durationMs) => {
    if (durationMs !== void 0) return durationMs === null || durationMs <= 0 ? null : durationMs;
    if (hasAction || severity === "error") return null;
    return DEFAULT_TOAST_DURATION_MS;
  };
  var liveFor = (severity) => severity === "error" || severity === "warning" ? "assertive" : "polite";
  var prefersReducedMotion2 = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function Toast({
    message,
    severity = "info",
    title,
    action,
    onDismiss,
    durationMs,
    dismissLabel = "Cerrar",
    icon
  }) {
    const reduce = prefersReducedMotion2();
    const [entered, setEntered] = useState(reduce);
    const [paused, setPaused] = useState(false);
    useEffect(() => {
      if (!entered) setEntered(true);
    }, [entered]);
    const duration = resolveToastDurationMs(severity, action !== void 0, durationMs);
    useEffect(() => {
      if (duration === null || paused || onDismiss === void 0) return;
      const timer = setTimeout(() => onDismiss(), duration);
      return () => clearTimeout(timer);
    }, [duration, paused, onDismiss]);
    const wrapperStyle = {
      width: "min(380px, calc(100vw - 48px))",
      // ELEVATION (fix: a floating toast must read as a CARD, not bare text). `<Alert>` is styled for the
      // INLINE case — a light tint + a 3px left border, no shadow — which over an arbitrary surface (the
      // builder canvas) is nearly invisible. A toast floats over content, so it carries its own drop
      // shadow + a matching radius here (the shadow hugs the Alert's rounded box). Inline `<Alert>`s stay
      // flat — this elevation lives on the Toast wrapper only.
      borderRadius: `var(${RADIUS_DASH_CONTROL}, 8px)`,
      boxShadow: `var(${SHADOW_DASH_DROPDOWN}, 0px 4px 8px rgba(0, 0, 0, 0.12))`,
      opacity: entered ? 1 : 0,
      transform: entered ? "translateX(0)" : "translateX(16px)",
      transition: reduce ? "none" : `opacity var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease), transform var(${DUR_BASE}, 200ms) var(${EASE_STANDARD}, ease)`,
      willChange: "opacity, transform",
      pointerEvents: "auto"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        "data-toast": "",
        "data-severity": severity,
        style: wrapperStyle,
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false),
        onKeyDown: (event) => {
          if (event.key === "Escape" && onDismiss !== void 0) onDismiss();
        },
        children: /* @__PURE__ */ jsxs(
          Alert,
          {
            variant: severity,
            title,
            icon,
            onClose: onDismiss,
            closeLabel: dismissLabel,
            "aria-live": liveFor(severity),
            "aria-atomic": true,
            children: [
              /* @__PURE__ */ jsx("div", { children: message }),
              action !== void 0 && /* @__PURE__ */ jsx("div", { style: { marginTop: `var(${SPACE_2}, 8px)` }, children: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  onClick: () => {
                    action.onClick();
                    onDismiss?.();
                  },
                  children: action.label
                }
              ) })
            ]
          }
        )
      }
    );
  }

  // components/ToastProvider.tsx
  var ToastContext = createContext(null);
  var DEFAULT_MAX_VISIBLE_TOASTS = 3;
  function ToastProvider({
    children,
    maxVisible = DEFAULT_MAX_VISIBLE_TOASTS,
    label = "Notificaciones"
  }) {
    const [toasts, setToasts] = useState([]);
    const counter = useRef(0);
    const dismiss = useCallback((id) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    const enqueue = useCallback(
      (severity) => (message, options = {}) => {
        counter.current += 1;
        const id = `nexus-toast-${counter.current}`;
        setToasts((prev) => {
          const next = [
            ...prev,
            {
              id,
              severity,
              message,
              action: options.action,
              durationMs: options.durationMs,
              title: options.title,
              dismissLabel: options.dismissLabel
            }
          ];
          return next.length > maxVisible ? next.slice(next.length - maxVisible) : next;
        });
        return id;
      },
      [maxVisible]
    );
    const api = useMemo(
      () => ({
        error: enqueue("error"),
        warning: enqueue("warning"),
        success: enqueue("success"),
        info: enqueue("info"),
        dismiss
      }),
      [enqueue, dismiss]
    );
    return /* @__PURE__ */ jsxs(ToastContext.Provider, { value: api, children: [
      children,
      /* @__PURE__ */ jsx(ToastViewport, { toasts, label, onDismiss: dismiss })
    ] });
  }
  var viewportStyle = {
    position: "fixed",
    bottom: `var(${SPACE_6}, 24px)`,
    right: `var(${SPACE_6}, 24px)`,
    zIndex: `var(${Z_TOAST}, 1100)`,
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: `var(${SPACE_3}, 12px)`,
    alignItems: "flex-end",
    // The gutter between toasts must not swallow clicks meant for the content beneath.
    pointerEvents: "none",
    maxWidth: "calc(100vw - 48px)"
  };
  function ToastViewport({ toasts, label, onDismiss }) {
    const [container, setContainer] = useState(null);
    useEffect(() => {
      if (typeof document === "undefined") return;
      const element = document.createElement("div");
      element.setAttribute("data-nexus-toast-portal", "");
      document.body.appendChild(element);
      setContainer(element);
      return () => {
        document.body.removeChild(element);
      };
    }, []);
    if (container === null) return null;
    return createPortal(
      /* @__PURE__ */ jsx("ol", { "aria-label": label, style: viewportStyle, children: toasts.map((toast) => /* @__PURE__ */ jsx("li", { style: { listStyle: "none", pointerEvents: "none" }, children: /* @__PURE__ */ jsx(
        Toast,
        {
          severity: toast.severity,
          message: toast.message,
          title: toast.title,
          action: toast.action,
          durationMs: toast.durationMs,
          dismissLabel: toast.dismissLabel,
          onDismiss: () => onDismiss(toast.id)
        }
      ) }, toast.id)) }),
      container
    );
  }
  return __toCommonJS(entry_exports);
})();

var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, r, t) => r in e ? h(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && i(e, t, r[t]);
  if (o)
    for (var t of o(r))
      n.call(r, t) && i(e, t, r[t]);
  return e;
};
var d = (e, r) => {
  var t = {};
  for (var l in e)
    c.call(e, l) && r.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      r.indexOf(l) < 0 && n.call(e, l) && (t[l] = e[l]);
  return t;
};
import { forwardRef as g } from "react";
const u = g((e, r) => {
  const s = e, {
    alt: t,
    color: l = "currentColor",
    size: a = "1em",
    mirrored: f = !1,
    children: p
  } = s, w = d(s, [
    "alt",
    "color",
    "size",
    "mirrored",
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(
    "svg",
    m({
      ref: r,
      xmlns: "http://www.w3.org/2000/svg",
      width: a,
      height: a,
      fill: l,
      viewBox: "0 0 256 256",
      transform: f ? "scale(-1, 1)" : void 0
    }, w),
    !!t && /* @__PURE__ */ React.createElement("title", null, t),
    p
  );
});
u.displayName = "OptiBase";
export {
  u as default
};

var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    m.call(e, H) && l(a, H, e[H]);
  if (r)
    for (var H of r(e))
      o.call(e, H) && l(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((t, H) => {
  var h = t, { children: a } = h, e = p(h, ["children"]);
  return /* @__PURE__ */ L.createElement(s, i({ ref: H }, e), a, /* @__PURE__ */ L.createElement("path", { d: "M192,114H158V56a14,14,0,0,0-14-14H32a6,6,0,0,0-5.6,8.15c9,23.44,11.13,76.92-.17,116.19A6.21,6.21,0,0,0,26,168v32a14,14,0,0,0,14,14H66.11a14,14,0,0,0,6.26-1.48L85,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48h28.22a14,14,0,0,0,6.26-1.48L169,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48H232a14,14,0,0,0,14-14V168A54.06,54.06,0,0,0,192,114ZM40.27,54H144a2,2,0,0,1,2,2V82H112a6,6,0,0,0,0,12h34v20H112a6,6,0,0,0,0,12h80a42.05,42.05,0,0,1,41.56,36H39.75C47.11,130.44,48.71,84.31,40.27,54ZM234,200a2,2,0,0,1-2,2H205.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H169.89a14,14,0,0,0-6.26,1.48L151,201.79a2,2,0,0,1-.9.21H121.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H85.89a14,14,0,0,0-6.26,1.48L67,201.79a2,2,0,0,1-.9.21H40a2,2,0,0,1-2-2V174H234Z" }));
});
V.displayName = "Light";
export {
  V as Light
};

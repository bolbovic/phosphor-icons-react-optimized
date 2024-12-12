var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, V = (a, e) => {
  for (var H in e || (e = {}))
    i.call(e, H) && o(a, H, e[H]);
  if (m)
    for (var H of m(e))
      p.call(e, H) && o(a, H, e[H]);
  return a;
};
var h = (a, e) => {
  var H = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (H[t] = a[t]);
  return H;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((t, H) => {
  var r = t, { children: a } = r, e = h(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: H }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M240,82H107.71L85.37,37.32A6,6,0,0,0,80,34H48a6,6,0,0,0-6,6V82H24a6,6,0,0,0,0,12H42V210H24a6,6,0,0,0,0,12H128a6,6,0,0,0,0-12H110V94H210v90a2,2,0,0,1-2,2H192a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V94h18a6,6,0,0,0,0-12ZM54,46H76.29l18,36H54Zm0,164V158H98v52Zm44-64H54V94H98Z" }));
});
v.displayName = "Light";
export {
  v as Light
};

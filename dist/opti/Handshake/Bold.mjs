var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      c.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && c.call(a, t) && (l[t] = a[t]);
  return l;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M253.88,108.11l-25.53-51a20,20,0,0,0-26.83-9L178.34,59.7,131.7,44.58a12.14,12.14,0,0,0-7.4,0L77.66,59.7,54.48,48.11a20,20,0,0,0-26.83,9L2.12,108.11a20,20,0,0,0,9,26.83l26.67,13.34,51.18,37.41A12.15,12.15,0,0,0,93,187.62l62,16a12.27,12.27,0,0,0,3,.38,12,12,0,0,0,8.48-3.52l52.62-52.62,25.83-12.92a20,20,0,0,0,8.95-26.83Zm-58.12,29.15-27.52-26a12,12,0,0,0-16.76.26c-9.66,9.74-25.06,16.81-40.81,9.55l38.19-37h22.72l25.81,51.63ZM47.32,71.37,60.59,78l-22,43.9-13.27-6.63Zm107,107.3L101.23,165l-42-30.66L85.17,82.5,128,68.61l1.69.55L90,107.68l-.13.12a20,20,0,0,0,3.4,31c20.95,13.39,46,12.07,66.33-2.73l19.2,18.15Zm63-56.77-22-43.9,13.27-6.63,21.95,43.9ZM118.55,219a12,12,0,0,1-14.62,8.62l-26.6-6.87a12,12,0,0,1-4.08-1.93L48.92,201a12,12,0,0,1,14.16-19.37l22.47,16.42,24.38,6.29A12,12,0,0,1,118.55,219Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};

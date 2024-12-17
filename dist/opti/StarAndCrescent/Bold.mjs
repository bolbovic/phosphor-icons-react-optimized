var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      d.call(e, l) && r(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import i, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = L((t, l) => {
  var o = t, { children: a } = o, e = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M157.46,195.72a76,76,0,0,1,0-135.44,12,12,0,0,0,0-21.37,100,100,0,1,0,0,178.18,12,12,0,0,0,0-21.37ZM112,204a76,76,0,0,1,0-152,77.2,77.2,0,0,1,13.57,1.19,100.14,100.14,0,0,0,0,149.62A77.2,77.2,0,0,1,112,204Zm136.75-87L224.47,106.5l-2.12-27.42a12,12,0,0,0-21.22-6.72l-17,20.58-25.26-6.25a12,12,0,0,0-13.22,17.73L159.54,128l-13.88,23.58a12,12,0,0,0,13.22,17.73l25.26-6.25,17,20.58a12,12,0,0,0,9.26,4.36,11.88,11.88,0,0,0,3.62-.56,12,12,0,0,0,8.34-10.52l2.12-27.42L248.75,139a12,12,0,0,0,0-22Zm-40.44,13.35a12,12,0,0,0-7.21,10.09l-.39,5L197.84,142a12,12,0,0,0-9.25-4.36,11.76,11.76,0,0,0-2.88.35l-4.89,1.21,3-5.07a12,12,0,0,0,0-12.18l-3-5.07,4.89,1.21a12,12,0,0,0,12.13-4l2.87-3.48.39,5a12,12,0,0,0,7.21,10.09l5.4,2.33Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};

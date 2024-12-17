var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var C = (e, t) => {
  var a = {};
  for (var c in e)
    i.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && r)
    for (var c of r(e))
      t.indexOf(c) < 0 && p.call(e, c) && (a[c] = e[c]);
  return a;
};
import n, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, a) => {
  var m = c, { children: e } = m, t = C(m, ["children"]);
  return /* @__PURE__ */ n.createElement(h, s({ ref: a }, t), e, /* @__PURE__ */ n.createElement("path", { d: "M203.64,63.34C183.37,50.87,156.51,44,128,44S72.63,50.87,52.36,63.34C31.49,76.19,20,93.48,20,112s11.49,35.83,32.36,48.68c19.29,11.87,44.55,18.65,71.51,19.28.08,1.27.13,2.56.13,3.9,0,15.49-7.28,28.44-20.51,36.46-15.79,9.57-37.34,10.28-53.64,1.77a4,4,0,1,0-3.7,7.09A62.32,62.32,0,0,0,74.91,236a63.56,63.56,0,0,0,32.73-8.82c15.71-9.52,24.36-24.9,24.36-43.3,0-1.32-.05-2.61-.12-3.9,27.06-.59,52.41-7.38,71.76-19.28C224.51,147.85,236,130.56,236,112S224.51,76.19,203.64,63.34ZM62.16,157.15c5.3-14.49,18.83-18.22,29.3-16.85,13.64,1.78,27.38,12.19,31.38,31.66C99.66,171.25,78.55,165.78,62.16,157.15ZM131,172a51.35,51.35,0,0,0-11.18-24.59,43.28,43.28,0,0,0-27.3-15.06c-16.82-2.19-31.24,6-37.33,20.74C38.33,142.35,28,127.9,28,112c0-33.09,44.86-60,100-60s100,26.93,100,60C228,144.52,184.74,171.06,131,172Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};

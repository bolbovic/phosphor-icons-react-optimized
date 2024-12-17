var c = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var t = (e, l, a) => l in e ? c(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, L = (e, l) => {
  for (var a in l || (l = {}))
    A.call(l, a) && t(e, a, l[a]);
  if (Z)
    for (var a of Z(l))
      o.call(l, a) && t(e, a, l[a]);
  return e;
};
var p = (e, l) => {
  var a = {};
  for (var m in e)
    A.call(e, m) && l.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && Z)
    for (var m of Z(e))
      l.indexOf(m) < 0 && o.call(e, m) && (a[m] = e[m]);
  return a;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var r = m, { children: e } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ M.createElement(i, L({ ref: a }, l), e, /* @__PURE__ */ M.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm76.52,147.42H170.9l-9.26-12.76,12.63-36.78,15-4.89,26.24,20.13A87.38,87.38,0,0,1,204.52,171.42Zm-164-34.3L66.71,117l15,4.89,12.63,36.78L85.1,171.42H51.48A87.38,87.38,0,0,1,40.47,137.12Zm10-50.64,5.51,18.6L40.71,116.77A87.33,87.33,0,0,1,50.43,86.48ZM109,152,97.54,118.65,128,97.71l30.46,20.94L147,152Zm91.07-46.92,5.51-18.6a87.33,87.33,0,0,1,9.72,30.29Zm-6.2-35.38-9.51,32.08-15.07,4.89L136,83.79V68.21l29.09-20A88.58,88.58,0,0,1,193.86,69.7ZM146.07,41.87,128,54.29,109.93,41.87a88.24,88.24,0,0,1,36.14,0ZM90.91,48.21l29.09,20V83.79L86.72,106.67l-15.07-4.89L62.14,69.7A88.58,88.58,0,0,1,90.91,48.21ZM63.15,187.42H83.52l7.17,20.27A88.4,88.4,0,0,1,63.15,187.42ZM110,214.13,98.12,180.71,107.35,168h41.3l9.23,12.71-11.83,33.42a88,88,0,0,1-36.1,0Zm55.36-6.44,7.17-20.27h20.37A88.4,88.4,0,0,1,165.31,207.69Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};

var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? A(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      c.call(l, e) && r(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const i = Z((t, e) => {
  var o = t, { children: a } = o, l = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, s({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M233.06,53.18a37,37,0,0,0-30.24-30.24c-15.24-2.58-38.75-4.78-64.26-.61C107.66,27.39,81.56,40.39,61,61s-33.59,46.68-38.65,77.58c-4.17,25.51-2,49,.61,64.26a37,37,0,0,0,30.24,30.24A209.43,209.43,0,0,0,87.9,236a184.13,184.13,0,0,0,29.54-2.33c30.9-5.06,57-18.06,77.58-38.65s33.59-46.68,38.65-77.58C237.84,91.93,235.64,68.42,233.06,53.18Zm-23.66,4A192,192,0,0,1,212,83.06L172.93,44a190.57,190.57,0,0,1,25.88,2.64A13,13,0,0,1,209.4,57.19ZM46.6,198.81A191.79,191.79,0,0,1,44,172.94L83.06,212a191.79,191.79,0,0,1-25.87-2.63A13,13,0,0,1,46.6,198.81Zm131.45-20.76c-11,11-31.31,26.16-63.2,31.83L46.12,141.15C51.79,109.26,67,88.93,78,78s31.3-26.16,63.2-31.83l68.73,68.73C204.21,146.74,189,167.07,178.05,178.05Zm-13.56-69.57L159,114l5.52,5.51a12,12,0,0,1-17,17L142,131l-11,11,5.52,5.52a12,12,0,0,1-17,17L114,159l-5.52,5.52a12,12,0,0,1-17-17L97,142l-5.52-5.51a12,12,0,1,1,17-17L114,125l11-11-5.52-5.52a12,12,0,1,1,17-17L142,97l5.52-5.52a12,12,0,0,1,17,17Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};

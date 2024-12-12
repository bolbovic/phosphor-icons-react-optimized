var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import A, { forwardRef as l } from "react";
import f from "../../lib/OptiBase.mjs";
const C = l((c, e) => {
  var r = c, { children: a } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M210,136a10,10,0,1,1-10-10A10,10,0,0,1,210,136Zm36,0c0,18.21-4.48,35.41-12.63,48.43C224.68,198.34,212.83,206,200,206H56c-12.83,0-24.68-7.66-33.37-21.57C14.48,171.41,10,154.21,10,136s4.48-35.41,12.63-48.43C31.32,73.66,43.17,66,56,66H93.52l38.24-38.24A6,6,0,0,1,136,26h32a6,6,0,0,1,0,12H138.49l-28,28H200c12.83,0,24.68,7.66,33.37,21.57C241.52,100.59,246,117.79,246,136Zm-72,58a57.72,57.72,0,0,1-7.4-9.57A78.09,78.09,0,0,1,158.36,166H80a6,6,0,0,1,0-12h75.52A106.2,106.2,0,0,1,154,136c0-18.21,4.48-35.41,12.63-48.43A57.72,57.72,0,0,1,174,78H56c-13.89,0-26.16,15.1-31.36,36H104a6,6,0,0,1,0,12H22.54A93.69,93.69,0,0,0,22,136c0,31.44,15.57,58,34,58Zm60-58c0-31.44-15.57-58-34-58s-34,26.56-34,58,15.57,58,34,58S234,167.44,234,136Z" }));
});
C.displayName = "Light";
export {
  C as Light
};

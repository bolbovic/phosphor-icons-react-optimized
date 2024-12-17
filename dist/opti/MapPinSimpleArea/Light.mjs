var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import C, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ C.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ C.createElement("path", { d: "M122,101.52V176a6,6,0,0,0,12,0V101.52a38,38,0,1,0-12,0ZM128,38a26,26,0,1,1-26,26A26,26,0,0,1,128,38ZM238,176c0,13.34-12.18,25.38-34.31,33.88C183.38,217.7,156.5,222,128,222s-55.38-4.3-75.69-12.12C30.18,201.38,18,189.34,18,176c0-19.6,26.46-36,69.05-42.86A6,6,0,0,1,89,145c-18,2.89-33.27,7.66-44.09,13.78C35.28,164.2,30,170.32,30,176c0,16.08,40.25,34,98,34s98-17.92,98-34c0-5.68-5.28-11.8-14.86-17.23-10.82-6.12-26.07-10.89-44.09-13.78a6,6,0,0,1,1.9-11.85C211.54,140,238,156.4,238,176Z" }));
});
n.displayName = "Light";
export {
  n as Light
};

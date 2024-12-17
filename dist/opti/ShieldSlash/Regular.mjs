var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (c)
    for (var e of c(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M53.92,34.62A8,8,0,0,0,40.26,42,16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1.36-.37,31.27-8.78,57.09-34.72l14.89,16.38a8,8,0,1,0,11.84-10.76Zm74.07,189a128.48,128.48,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56h3.71L176.41,193.15A129.26,129.26,0,0,1,128,223.62ZM224,56v56c0,20.58-3.89,39.61-11.56,56.59A8,8,0,1,1,197.86,162c6.73-14.89,10.14-31.71,10.14-50V56L98.52,56a8,8,0,1,1,0-16H208A16,16,0,0,1,224,56Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};

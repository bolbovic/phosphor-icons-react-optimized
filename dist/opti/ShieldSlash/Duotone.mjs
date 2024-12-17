var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && p(e, a, t[a]);
  if (c)
    for (var a of c(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M53.92,34.62A8,8,0,0,0,40.26,42,16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1.36-.37,31.27-8.78,57.09-34.72l14.89,16.38a8,8,0,1,0,11.84-10.76Zm74.07,189a128.48,128.48,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56h3.71L176.41,193.15A129.26,129.26,0,0,1,128,223.62ZM224,56v56c0,20.58-3.89,39.61-11.56,56.59A8,8,0,1,1,197.86,162c6.73-14.89,10.14-31.71,10.14-50V56L98.52,56a8,8,0,1,1,0-16H208A16,16,0,0,1,224,56Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};

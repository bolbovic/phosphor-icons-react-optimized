var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (l)
    for (var e of l(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((o, e) => {
  var m = o, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,32V224a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V32A16,16,0,0,1,56,16H200A16,16,0,0,1,216,32Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM101.66,53.66,120,35.31V96a8,8,0,0,0,16,0V35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32Zm52.68,148.68L136,220.69V160a8,8,0,0,0-16,0v60.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z" }));
});
H.displayName = "Duotone";
export {
  H as Duotone
};

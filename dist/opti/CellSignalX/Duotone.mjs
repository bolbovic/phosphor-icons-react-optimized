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
var L = (a, t) => {
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
const h = f((o, e) => {
  var m = o, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M200,40V160l-45.66,45.66a8,8,0,0,1-5.65,2.34H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L172.68,176l-18.34-18.35a8,8,0,0,1,11.31-11.31L184,164.68l18.34-18.34a8,8,0,0,1,11.32,11.31L195.31,176ZM120,200H32L192,40v72a8,8,0,0,0,16,0V40a16,16,0,0,0-27.31-11.32l-160,160A16,16,0,0,0,32,216h88a8,8,0,0,0,0-16Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};

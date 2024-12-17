var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (l)
    for (var e of l(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var r = o, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ m.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M219.84,73.16,131.84,25a8,8,0,0,0-7.68,0l-88,48.18a8,8,0,0,0-4.16,7v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,7.68,0l88-48.18a8,8,0,0,0,4.16-7V80.18A8,8,0,0,0,219.84,73.16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.06,48.06,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm95.68-93.85L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17h0a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,224,40,175.82V80.18L128,32l88,48.17v95.63Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};

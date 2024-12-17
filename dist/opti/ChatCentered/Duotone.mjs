var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var l = o, { children: a } = l, t = i(l, ["children"]);
  return /* @__PURE__ */ m.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,56V184a8,8,0,0,1-8,8H150.93l-16,28a8,8,0,0,1-13.9,0l-16-28H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H150.93a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H216Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};

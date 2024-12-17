var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && L.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const V = A((o, e) => {
  var c = o, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ m.createElement(M, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M215.17,127.43,184,72H72L40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28A8,8,0,0,0,215.17,127.43ZM128,152a20,20,0,1,1,20-20A20,20,0,0,1,128,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z" }));
});
V.displayName = "Duotone";
export {
  V as Duotone
};

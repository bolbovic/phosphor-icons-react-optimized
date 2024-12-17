var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var l in e)
    c.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && n.call(e, l) && (a[l] = e[l]);
  return a;
};
import r, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const h = s((l, a) => {
  var m = l, { children: e } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(A, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M223.61,102.83l-32,107.62A8,8,0,0,1,184,216H72a8,8,0,0,1-7.62-5.55l-32-107.62a8,8,0,0,1,2.88-8.9l88-68.38a8,8,0,0,1,9.46,0l88,68.38A8,8,0,0,1,223.61,102.83Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};

var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M228,48a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h48A4,4,0,0,1,228,48ZM212,88v76a32.06,32.06,0,1,1-8-21.13V88a4,4,0,0,1,8,0Zm-8,76a24,24,0,1,0-24,24A24,24,0,0,0,204,164ZM84,107.12V196a32.06,32.06,0,1,1-8-21.13V56a4,4,0,0,1,3-3.88l56-14A4,4,0,0,1,137,45.88L84,59.12V98.88l75-18.76A4,4,0,0,1,161,87.88ZM76,196a24,24,0,1,0-24,24A24,24,0,0,0,76,196Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};

var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var V = m, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ n.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M228,48a4,4,0,0,1-4,4H204V72a4,4,0,0,1-8,0V52H176a4,4,0,0,1,0-8h20V24a4,4,0,0,1,8,0V44h20A4,4,0,0,1,228,48Zm-16,64v52a32.06,32.06,0,1,1-8-21.13V112a4,4,0,0,1,8,0Zm-8,52a24,24,0,1,0-24,24A24,24,0,0,0,204,164ZM84,107.12V196a32.06,32.06,0,1,1-8-21.13V56a4,4,0,0,1,3-3.88l56-14A4,4,0,0,1,137,45.88L84,59.12V98.88l75-18.76A4,4,0,0,1,161,87.88ZM76,196a24,24,0,1,0-24,24A24,24,0,0,0,76,196Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};

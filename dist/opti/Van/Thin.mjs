var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    A.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const c = n((H, e) => {
  var r = H, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M251,109.4,205.47,56.3a12,12,0,0,0-9.21-4.3H32A12,12,0,0,0,20,64V176a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V112A4,4,0,0,0,251,109.4ZM199.36,61.47,239.3,108H172V60h24.26A4,4,0,0,1,199.36,61.47ZM100,108V60h64v48ZM32,60H92v48H28V64A4,4,0,0,1,32,60ZM80,204a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,204Zm48-24H219.71a28,28,0,0,0-55.42,0H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V116H244v60A4,4,0,0,1,240,180Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

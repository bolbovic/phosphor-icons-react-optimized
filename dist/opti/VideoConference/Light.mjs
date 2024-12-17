var h = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (A)
    for (var e of A(t))
      i.call(t, e) && Z(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && A)
    for (var m of A(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const f = s((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,14v66H166V54h50A2,2,0,0,1,218,56ZM38,200V56a2,2,0,0,1,2-2H154V202H40A2,2,0,0,1,38,200Zm178,2H166V134h52v66A2,2,0,0,1,216,202ZM182,88a10,10,0,1,1,10,10A10,10,0,0,1,182,88Zm20,80a10,10,0,1,1-10-10A10,10,0,0,1,202,168Zm-68.19-1.49A38,38,0,0,0,115.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,58.19,166.5a6,6,0,0,0,11.62,3C72.67,158.38,83.93,150,96,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM78,120a18,18,0,1,1,18,18A18,18,0,0,1,78,120Z" }));
});
f.displayName = "Light";
export {
  f as Light
};

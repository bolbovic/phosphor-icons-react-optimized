var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((m, e) => {
  var o = m, { children: a } = o, t = i(o, ["children"]);
  return /* @__PURE__ */ l.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M238,166.12V134a13.91,13.91,0,0,0-10-13.41l-.15,0L190,110.24V72a6,6,0,0,0-12,0v35l-28-7.58V54h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V90H40a6,6,0,0,0,0,12H68a70.08,70.08,0,0,1,70,70v12a6,6,0,0,0,6,6h34.06A34,34,0,1,0,238,166.12ZM68,90H62V54h76v75.34A82,82,0,0,0,68,90Zm82,82V111.84l74.63,20.21A2,2,0,0,1,226,134V157a34,34,0,0,0-46.5,21H150Zm62,38a22,22,0,1,1,22-22A22,22,0,0,1,212,210ZM68,122a50,50,0,1,0,50,50A50.06,50.06,0,0,0,68,122Zm0,88a38,38,0,1,1,38-38A38,38,0,0,1,68,210Zm10-38a10,10,0,1,1-10-10A10,10,0,0,1,78,172Z" }));
});
f.displayName = "Light";
export {
  f as Light
};

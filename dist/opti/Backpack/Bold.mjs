var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M172,48.55V36A28,28,0,0,0,144,8H112A28,28,0,0,0,84,36V48.55A60.08,60.08,0,0,0,32,108V220a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V108A60.08,60.08,0,0,0,172,48.55ZM112,32h32a4,4,0,0,1,4,4V48H108V36A4,4,0,0,1,112,32Zm48,128H96v-8a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4ZM96,184h64v32H96Zm104,32H184V152a28,28,0,0,0-28-28H100a28,28,0,0,0-28,28v64H56V108A36,36,0,0,1,92,72h72a36,36,0,0,1,36,36ZM160,100a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,100Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};

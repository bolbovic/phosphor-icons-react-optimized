var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      p.call(t, a) && m(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var l in e)
    V.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((l, a) => {
  var r = l, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M229.7,82.84l-175.94-54-.16-.05A20,20,0,0,0,28,48V192a20,20,0,0,0,19.94,20,20.38,20.38,0,0,0,5.66-.81l.16,0,78.24-24V196a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V165.06l25.7-7.89A20.1,20.1,0,0,0,244,138V102A20.1,20.1,0,0,0,229.7,82.84ZM52,186.58V53.43L132,78V162ZM180,192H156V179.78l24-7.36Zm40-56.95-64,19.63V85.33L220,105Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};

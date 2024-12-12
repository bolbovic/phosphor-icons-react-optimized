var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && A(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && A(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var m in e)
    h.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import Z, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const c = n((m, a) => {
  var o = m, { children: e } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(V, p({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H153.66l40.75-40.75A51.55,51.55,0,0,1,196,80Zm-4.51-21.15L142.34,108H132V81.66l43.22-43.22A52.5,52.5,0,0,1,191.49,58.85ZM168.3,34.05,132,70.34V28h12A51.61,51.61,0,0,1,168.3,34.05ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

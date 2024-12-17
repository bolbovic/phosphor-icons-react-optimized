var A = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, h, e) => h in a ? A(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, p = (a, h) => {
  for (var e in h || (h = {}))
    V.call(h, e) && o(a, e, h[e]);
  if (t)
    for (var e of t(h))
      i.call(h, e) && o(a, e, h[e]);
  return a;
};
var v = (a, h) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && h.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      h.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = H((m, e) => {
  var r = m, { children: a } = r, h = v(r, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, p({ ref: e }, h), a, /* @__PURE__ */ n.createElement("path", { d: "M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H148V88a12,12,0,0,0-12-12h-4V28h12A52.06,52.06,0,0,1,196,80Zm-80,8a4,4,0,0,1,4-4h16a4,4,0,0,1,4,4v48a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4Zm-4-60h12V76h-4a12,12,0,0,0-12,12v20H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116h48v20a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V116h48v60A52.06,52.06,0,0,1,144,228Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

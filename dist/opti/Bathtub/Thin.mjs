var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      v.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M240,100H204V96a4,4,0,0,0-4-4H136a4,4,0,0,0-4,4v4H60V52A16,16,0,0,1,76,36,16.49,16.49,0,0,1,92.08,48.8a4,4,0,1,0,7.84-1.6A24.32,24.32,0,0,0,76,28,24,24,0,0,0,52,52v48H16a4,4,0,0,0-4,4v40a52.06,52.06,0,0,0,52,52h4v20a4,4,0,0,0,8,0V196H180v20a4,4,0,0,0,8,0V196h4a52.06,52.06,0,0,0,52-52V104A4,4,0,0,0,240,100Zm-100,0h56v40H140Zm96,44a44.05,44.05,0,0,1-44,44H64a44.05,44.05,0,0,1-44-44V108H132v36a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V108h32Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};

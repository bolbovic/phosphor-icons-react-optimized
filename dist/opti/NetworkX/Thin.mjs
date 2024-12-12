var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && l.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((H, e) => {
  var V = H, { children: a } = V, t = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M232,116H132V84h12a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V72a12,12,0,0,0,12,12h12v32H24a4,4,0,0,0,0,8H60v40H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H68V124H188v20a4,4,0,0,0,8,0V124h36a4,4,0,0,0,0-8ZM108,72V40a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V72a4,4,0,0,1-4,4H112A4,4,0,0,1,108,72ZM84,176v32a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80A4,4,0,0,1,84,176Zm134.83-5.17L197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};

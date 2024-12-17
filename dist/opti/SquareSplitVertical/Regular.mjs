var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, c = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      H.call(r, a) && p(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    l.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const d = R((t, a) => {
  var o = t, { children: e } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm0,144H56V136H200v64Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};

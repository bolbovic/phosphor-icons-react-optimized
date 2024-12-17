var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM187.31,187.31a8,8,0,0,1-11.31,0L68.69,80A8,8,0,0,1,80,68.69L187.31,176A8,8,0,0,1,187.31,187.31Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};

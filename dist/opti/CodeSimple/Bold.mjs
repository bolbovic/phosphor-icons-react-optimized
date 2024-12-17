var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (r)
    for (var t of r(a))
      A.call(a, t) && m(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var o in e)
    p.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && A.call(e, o) && (t[o] = e[o]);
  return t;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((o, t) => {
  var l = o, { children: e } = l, a = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M96,73,34.06,128,96,183A12,12,0,1,1,80,201L8,137A12,12,0,0,1,8,119L80,55A12,12,0,0,1,96,73ZM248,119,176,55A12,12,0,1,0,160,73l61.91,55L160,183A12,12,0,1,0,176,201l72-64A12,12,0,0,0,248,119Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};

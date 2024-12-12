var A = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var Z = (e, m, l) => m in e ? A(e, m, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[m] = l, o = (e, m) => {
  for (var l in m || (m = {}))
    H.call(m, l) && Z(e, l, m[l]);
  if (a)
    for (var l of a(m))
      h.call(m, l) && Z(e, l, m[l]);
  return e;
};
var i = (e, m) => {
  var l = {};
  for (var t in e)
    H.call(e, t) && m.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && a)
    for (var t of a(e))
      m.indexOf(t) < 0 && h.call(e, t) && (l[t] = e[t]);
  return l;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, l) => {
  var r = t, { children: e } = r, m = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: l }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M245.37,125.32l-40-80A6,6,0,0,0,200,42H56a6,6,0,0,0-5.37,3.32l-40,80A6.07,6.07,0,0,0,10,128v56a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V128A6.07,6.07,0,0,0,245.37,125.32ZM99.71,122l-14-28h34.58l14,28Zm.58-68,14,28H79.71l-14-28Zm48,0,14,28H127.71l-14-28Zm-.58,68-14-28h34.58l14,28Zm48,0-14-28h34.58l14,28Zm14.58-40H175.71l-14-28h34.58ZM22,184V129.42l34-68,34,68V186H24A2,2,0,0,1,22,184Zm210,2H102V134H234v50A2,2,0,0,1,232,186Z" }));
});
s.displayName = "Light";
export {
  s as Light
};

import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNzIsNDh2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0VjgwSDQ4VjQ4Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhabS00OC01NmE4LDgsMCwwLDEtOCw4SDEwNGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMTYwLDE1MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZIMTgwVjI0YTQsNCwwLDAsMC04LDBWMzZIODRWMjRhNCw0LDAsMCwwLTgsMFYzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDIwOCwzNlpNNDgsNDRINzZWNTZhNCw0LDAsMCwwLDgsMFY0NGg4OFY1NmE0LDQsMCwwLDAsOCwwVjQ0aDI4YTQsNCwwLDAsMSw0LDRWODRINDRWNDhBNCw0LDAsMCwxLDQ4LDQ0Wk0yMDgsMjEySDQ4YTQsNCwwLDAsMS00LTRWOTJIMjEyVjIwOEE0LDQsMCwwLDEsMjA4LDIxMlptLTUyLTYwYTQsNCwwLDAsMS00LDRIMTA0YTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDE1NiwxNTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRIMTgyVjI0YTYsNiwwLDAsMC0xMiwwVjM0SDg2VjI0YTYsNiwwLDAsMC0xMiwwVjM0SDQ4QTE0LDE0LDAsMCwwLDM0LDQ4VjIwOGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wk00OCw0Nkg3NFY1NmE2LDYsMCwwLDAsMTIsMFY0Nmg4NFY1NmE2LDYsMCwwLDAsMTIsMFY0NmgyNmEyLDIsMCwwLDEsMiwyVjgySDQ2VjQ4QTIsMiwwLDAsMSw0OCw0NlpNMjA4LDIxMEg0OGEyLDIsMCwwLDEtMi0yVjk0SDIxMFYyMDhBMiwyLDAsMCwxLDIwOCwyMTBabS01MC01OGE2LDYsMCwwLDEtNiw2SDEwNGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMTU4LDE1MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTg4VjI0YTEyLDEyLDAsMCwwLTI0LDB2NEg5MlYyNGExMiwxMiwwLDAsMC0yNCwwdjRINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTY4LDUyYTEyLDEyLDAsMCwwLDI0LDBoNzJhMTIsMTIsMCwwLDAsMjQsMGgxNlY3Nkg1MlY1MlpNNTIsMjA0VjEwMEgyMDRWMjA0Wm0xMTItNTJhMTIsMTIsMCwwLDEtMTIsMTJIMTA0YTEyLDEyLDAsMCwxLDAtMjRoNDhBMTIsMTIsMCwwLDEsMTY0LDE1MloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNMTUyLDE2MEgxMDRhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDAsMTZabTU2LTgwSDQ4VjQ4SDcydjhhOCw4LDAsMCwwLDE2LDBWNDhoODB2OGE4LDgsMCwwLDAsMTYsMFY0OGgyNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWODhINDBWNDhhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiw0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNzIsNDh2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0VjgwSDQ4VjQ4Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhabS00OC01NmE4LDgsMCwwLDEtOCw4SDEwNGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMTYwLDE1MloiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as CalendarMinus };
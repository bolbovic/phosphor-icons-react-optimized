import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTEySDIyMC4wOGwtNDcuNS02NS40MWExNiwxNiwwLDAsMC0yNS4zMS0uNzJsLTEyLjg1LDE0LjktLjIuMjNhNy45NSw3Ljk1LDAsMCwxLTEyLjQ0LDBsLS4yLS4yMy0xMi44NS0xNC45YTE2LDE2LDAsMCwwLTI1LjMxLjcyTDM1LjkyLDExMkg4YTgsOCwwLDAsMCwwLDE2SDI0OGE4LDgsMCwwLDAsMC0xNlpNOTYuMzQsNTZsLjE5LjIzLDEyLjg1LDE0Ljg5YTI0LDI0LDAsMCwwLDM3LjI0LDBsMTIuODUtMTQuODljLjA2LS4wOC4xLS4xNS4xNy0uMjNsNDAuNjYsNTZINTUuNjlaTTE4MCwxNDRhMzYsMzYsMCwwLDAtMzUuNzcsMzJIMTExLjc3YTM2LDM2LDAsMSwwLTEuODMsMTZoMzYuMTJBMzYsMzYsMCwxLDAsMTgwLDE0NFpNNzYsMjAwYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDc2LDIwMFptMTA0LDBhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTgwLDIwMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTE2SDIxOEwxNjkuMzUsNDlhMTIsMTIsMCwwLDAtMTktLjUxTDEzNy40NSw2My4zOGwtLjEuMTJhMTIsMTIsMCwwLDEtMTguNywwbC0uMS0uMTJMMTA1LjY2LDQ4LjQ0YTEyLDEyLDAsMCwwLTE5LC41MUwzOCwxMTZIOGE0LDQsMCwwLDAsMCw4SDI0OGE0LDQsMCwwLDAsMC04Wk05My4xMyw1My42NUE0LDQsMCwwLDEsOTYuMjYsNTJhNCw0LDAsMCwxLDMuMiwxLjVsLjEuMTIsMTIuODksMTQuOTRBMTkuODYsMTkuODYsMCwwLDAsMTI4LDc2aDBhMTkuODYsMTkuODYsMCwwLDAsMTUuNTUtNy40NGwxMi44OS0xNC45NC4xLS4xMmE0LjA2LDQuMDYsMCwwLDEsMy4yLTEuNSw0LDQsMCwwLDEsMy4xMywxLjY1TDIwOC4xNSwxMTZINDcuODVaTTE4MCwxNDhhMzIsMzIsMCwwLDAtMzIsMzJIMTA4YTMyLDMyLDAsMSwwLTEsOGg0MmEzMiwzMiwwLDEsMCwzMS00MFpNNzYsMjA0YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDc2LDIwNFptMTA0LDBhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTgwLDIwNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTE0SDIxOS4wNkwxNzEsNDcuNzdhMTQsMTQsMCwwLDAtMjIuMTYtLjYxTDEzNS45Myw2Mi4wOGExLjE1LDEuMTUsMCwwLDAtLjE0LjE3LDEwLDEwLDAsMCwxLTE1LjU4LDAsMS4xNSwxLjE1LDAsMCwwLS4xNC0uMTdMMTA3LjIsNDcuMTZBMTQsMTQsMCwwLDAsODUsNDcuNzdMMzYuOTQsMTE0SDhhNiw2LDAsMCwwLDAsMTJIMjQ4YTYsNiwwLDAsMCwwLTEyWk05NC43NSw1NC44MmEyLDIsMCwwLDEsMy4xNS0uMDdsLjE1LjE3LDEyLjg2LDE0LjkyQTIxLjg4LDIxLjg4LDAsMCwwLDEyOCw3OGgwYTIxLjg4LDIxLjg4LDAsMCwwLDE3LjA5LTguMTZMMTU4LDU0LjkybC4xNS0uMTdhMiwyLDAsMCwxLDMuMTUuMDdsNDMsNTkuMThINTEuNzdaTTE4MCwxNDZhMzQsMzQsMCwwLDAtMzMuOTQsMzJIMTA5Ljk0YTM0LDM0LDAsMSwwLTEuNDQsMTJoMzlBMzQsMzQsMCwxLDAsMTgwLDE0NlpNNzYsMjAyYTIyLDIyLDAsMSwxLDIyLTIyQTIyLDIyLDAsMCwxLDc2LDIwMlptMTA0LDBhMjIsMjIsMCwxLDEsMjItMjJBMjIsMjIsMCwwLDEsMTgwLDIwMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTA0SDIxOS4yMUwxNzUuODIsNDQuMjRhMjAsMjAsMCwwLDAtMzEuNjEtLjk0TDEzMS4zOSw1OC4xNmMtLjEuMTEtLjIuMjMtLjI5LjM1YTQsNCwwLDAsMS02LjIsMGMtLjA5LS4xMi0uMTktLjI0LS4yOS0uMzVMMTExLjc5LDQzLjNhMjAsMjAsMCwwLDAtMzEuNjEuOTRMMzYuNzksMTA0SDEyYTEyLDEyLDAsMCwwLDAsMjRIMjQ0YTEyLDEyLDAsMCwwLDAtMjRaTTk2LjYyLDYyLjQ1bDkuNjksMTEuMjRhMjgsMjgsMCwwLDAsNDMuMzgsMGw5LjY5LTExLjI0TDE4OS41NSwxMDRINjYuNDVaTTE4MCwxNDBhNDAuMDcsNDAuMDcsMCwwLDAtMzguMTYsMjhIMTE0LjE2YTQwLDQwLDAsMSwwLDAsMjRoMjcuNjhBNDAsNDAsMCwxLDAsMTgwLDE0MFpNNzYsMTk2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDc2LDE5NlptMTA0LDBhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTgwLDE5NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTIwYTgsOCwwLDAsMS04LDhIOGE4LDgsMCwwLDEsMC0xNkgzNS45Mmw0Ny41LTY1LjQxYTE2LDE2LDAsMCwxLDI1LjMxLS43MmwxMi44NSwxNC45LjIuMjNhNy45NSw3Ljk1LDAsMCwwLDEyLjQ0LDBsLjItLjIzLDEyLjg1LTE0LjlhMTYsMTYsMCwwLDEsMjUuMzEuNzJMMjIwLjA4LDExMkgyNDhBOCw4LDAsMCwxLDI1NiwxMjBabS03NiwyNGEzNiwzNiwwLDAsMC0zNS43NywzMkgxMTEuNzdhMzYsMzYsMCwxLDAtMS44MywxNmgzNi4xMkEzNiwzNiwwLDEsMCwxODAsMTQ0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTgwYTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDEwNCwxODBabTc2LTI4YTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDE4MCwxNTJaTTE2Ni4xMSw1MS4yOWE4LDgsMCwwLDAtMTIuNy0uMjlMMTQwLjQ3LDY2YTE2LDE2LDAsMCwxLTI0Ljk0LDBMMTAyLjU5LDUxYTgsOCwwLDAsMC0xMi43LjI5TDQwLDEyMEgyMTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ4LDExMkgyMjAuMDhsLTQ3LjUtNjUuNDFhMTYsMTYsMCwwLDAtMjUuMzEtLjcybC0xMi44NSwxNC45LS4yLjIzYTcuOTUsNy45NSwwLDAsMS0xMi40NCwwbC0uMi0uMjMtMTIuODUtMTQuOWExNiwxNiwwLDAsMC0yNS4zMS43MkwzNS45MiwxMTJIOGE4LDgsMCwwLDAsMCwxNkgyNDhhOCw4LDAsMCwwLDAtMTZaTTk2LjM0LDU2bC4xOS4yNCwxMi44NSwxNC44OWEyNCwyNCwwLDAsMCwzNy4yNCwwbDEyLjg1LTE0Ljg5Yy4wNi0uMDguMS0uMTYuMTctLjI0bDQwLjY2LDU2SDU1LjY5Wk0xODAsMTQ0YTM2LDM2LDAsMCwwLTM1Ljc3LDMySDExMS43N2EzNiwzNiwwLDEsMC0xLjgzLDE2aDM2LjEyQTM2LDM2LDAsMSwwLDE4MCwxNDRaTTc2LDIwMGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw3NiwyMDBabTEwNCwwYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDE4MCwyMDBaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Detective };
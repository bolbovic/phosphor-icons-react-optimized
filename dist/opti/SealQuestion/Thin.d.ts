import type { Icon } from "../../lib/types";
/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMsMTA1LjU4Yy00LTQuMi04LjItOC41NC0xMC0xMi44LTEuNjUtNC0xLjczLTkuNTMtMS44Mi0xNS40MS0uMTQtOS0uMjktMTkuMTktNi44My0yNS43NHMtMTYuNzQtNi42OS0yNS43NC02LjgzYy01Ljg4LS4wOS0xMS40My0uMTctMTUuNDEtMS44Mi00LjI2LTEuNzYtOC42LTUuOTMtMTIuOC05Ljk1LTYuNjgtNi40MS0xMy41OS0xMy0yMi40Mi0xM3MtMTUuNzQsNi42Mi0yMi40MiwxM2MtNC4yLDQtOC41NCw4LjItMTIuOCwxMC00LDEuNjUtOS41MywxLjczLTE1LjQxLDEuODItOSwuMTQtMTkuMTkuMjktMjUuNzQsNi44M1M0NC45NCw2OC4zNyw0NC44LDc3LjM3Yy0uMDksNS44OC0uMTcsMTEuNDMtMS44MiwxNS40MS0xLjc2LDQuMjYtNS45Myw4LjYtOS45NSwxMi44LTYuNDEsNi42OC0xMywxMy41OS0xMywyMi40MnM2LjYyLDE1Ljc0LDEzLDIyLjQyYzQsNC4yLDguMiw4LjU0LDEwLDEyLjgsMS42NSw0LDEuNzMsOS41MywxLjgyLDE1LjQxLjE0LDksLjI5LDE5LjE5LDYuODMsMjUuNzRzMTYuNzQsNi42OSwyNS43NCw2LjgzYzUuODguMDksMTEuNDMuMTcsMTUuNDEsMS44Miw0LjI2LDEuNzYsOC42LDUuOTMsMTIuOCw5Ljk1LDYuNjgsNi40MSwxMy41OSwxMywyMi40MiwxM3MxNS43NC02LjYyLDIyLjQyLTEzYzQuMi00LDguNTQtOC4yLDEyLjgtMTAsNC0xLjY1LDkuNTMtMS43MywxNS40MS0xLjgyLDktLjE0LDE5LjE5LS4yOSwyNS43NC02LjgzczYuNjktMTYuNzQsNi44My0yNS43NGMuMDktNS44OC4xNy0xMS40MywxLjgyLTE1LjQxLDEuNzYtNC4yNiw1LjkzLTguNiw5Ljk1LTEyLjgsNi40MS02LjY4LDEzLTEzLjU5LDEzLTIyLjQyUzIyOS4zOCwxMTIuMjYsMjIzLDEwNS41OFptLTUuNzgsMzkuM2MtNC41NCw0LjczLTkuMjQsOS42My0xMS41NywxNS4yOC0yLjIzLDUuMzktMi4zMywxMi0yLjQzLDE4LjM1LS4xMiw4LjItLjI0LDE2LTQuNDksMjAuMnMtMTIsNC4zNy0yMC4yLDQuNDljLTYuMzcuMS0xMywuMi0xOC4zNSwyLjQzLTUuNjUsMi4zMy0xMC41NSw3LTE1LjI4LDExLjU3QzEzOS4wOSwyMjIuNzUsMTMzLjYyLDIyOCwxMjgsMjI4cy0xMS4wOS01LjI1LTE2Ljg4LTEwLjhjLTQuNzMtNC41NC05LjYzLTkuMjQtMTUuMjgtMTEuNTctNS4zOS0yLjIzLTEyLTIuMzMtMTguMzUtMi40My04LjItLjEyLTE1Ljk1LS4yNC0yMC4yLTQuNDlzLTQuMzctMTItNC40OS0yMC4yYy0uMS02LjM3LS4yLTEzLTIuNDMtMTguMzUtMi4zMy01LjY1LTctMTAuNTUtMTEuNTctMTUuMjhDMzMuMjUsMTM5LjA5LDI4LDEzMy42MiwyOCwxMjhzNS4yNS0xMS4wOSwxMC44LTE2Ljg4YzQuNTQtNC43Myw5LjI0LTkuNjMsMTEuNTctMTUuMjgsMi4yMy01LjM5LDIuMzMtMTIsMi40My0xOC4zNS4xMi04LjIuMjQtMTUuOTUsNC40OS0yMC4yczEyLTQuMzcsMjAuMi00LjQ5YzYuMzctLjEsMTMtLjIsMTguMzUtMi40Myw1LjY1LTIuMzMsMTAuNTUtNywxNS4yOC0xMS41N0MxMTYuOTEsMzMuMjUsMTIyLjM4LDI4LDEyOCwyOHMxMS4wOSw1LjI1LDE2Ljg4LDEwLjhjNC43Myw0LjU0LDkuNjMsOS4yNCwxNS4yOCwxMS41Nyw1LjM5LDIuMjMsMTIsMi4zMywxOC4zNSwyLjQzLDguMi4xMiwxNiwuMjQsMjAuMiw0LjQ5czQuMzcsMTIsNC40OSwyMC4yYy4xLDYuMzcuMiwxMywyLjQzLDE4LjM1LDIuMzMsNS42NSw3LDEwLjU1LDExLjU3LDE1LjI4LDUuNTUsNS43OSwxMC44LDExLjI2LDEwLjgsMTYuODhTMjIyLjc1LDEzOS4wOSwyMTcuMiwxNDQuODhaTTEzNiwxODBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTM2LDE4MFptMjgtNzJjMCwxNi40NC0xNCwzMC0zMiwzMS44VjE0NGE0LDQsMCwwLDEtOCwwdi04YTQsNCwwLDAsMSw0LTRjMTUuNDQsMCwyOC0xMC43NywyOC0yNHMtMTIuNTYtMjQtMjgtMjQtMjgsMTAuNzctMjgsMjR2NGE0LDQsMCwwLDEtOCwwdi00YzAtMTcuNjQsMTYuMTUtMzIsMzYtMzJTMTY0LDkwLjM2LDE2NCwxMDhaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Thin };
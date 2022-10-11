import parse from "html-react-parser";
export const convertHTMLToString = (html) => parse(html || "");

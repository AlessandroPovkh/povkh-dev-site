import prototypeHtml from "../../.superpowers/brainstorm/63039-1787593737/content/homepage-hifi-draft-10.html?raw";

const styleMatch = prototypeHtml.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = prototypeHtml.match(/<body>([\s\S]*?)<script>/);
const scriptMatch = prototypeHtml.match(/<script>([\s\S]*?)<\/script>/);

if (!styleMatch || !bodyMatch || !scriptMatch) {
  throw new Error("The approved Russian homepage visual lock is incomplete");
}

export const editorialStyles = styleMatch[1]
  .replace(/@font-face\{font-family:Plex;[^}]+\}@font-face\{font-family:Plex Mono;[^}]+\}/, "")
  .replaceAll("Plex Mono", "IBM Plex Mono")
  .replaceAll("Plex", "IBM Plex Sans Variable");

export const editorialBody = bodyMatch[1];
export const editorialScriptSource = scriptMatch[1];

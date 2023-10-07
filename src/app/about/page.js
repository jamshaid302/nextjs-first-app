import Page from "../page";

export const metadata = {
  title: "About Page",
  description: "This is the about page",
};

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function AboutPaage() {
  return <Page>Hello, About Page!</Page>;
}

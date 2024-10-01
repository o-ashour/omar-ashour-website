import Form from "./form";

// // var Airtable = require('airtable');
// import Airtable from "airtable";

// const base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base('appxUoVfshIweTdcA');



export default function CTA() {
  return (
    <section id='contact-section' className="pt-12 relative md:max-w-md md:mx-auto xl:flex xl:max-w-full xl:gap-x-64 xl:pt-20 z-50">
      <div className="xl:max-w-md">
        <h3 className="text-4xl mb-4 font-bold text-center md:text-7xl md:mb-6 xl:text-left xl:mb-10">Contact</h3>
        <p className="text-center xl:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <Form />
    </section>
  )
}

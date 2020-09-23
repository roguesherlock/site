import React from "react";

export default function Subscribe() {
  return (
    <div>
      <h1 className="text-lg font-medium px-2 sm:px-0">
        Get notified when I launch something new & note-worthy
      </h1>
      <form
        className="mt-5 flex flex-col items-center justify-center space-y-5"
        action="https://buttondown.email/api/emails/embed-subscribe/roguesherlock"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open("https://buttondown.email/roguesherlock", "popupwindow")
        }
      >
        <div className="flex items-center justify-between space-x-5">
          <input
            id="bd-email"
            type="email"
            name="email"
            className="p-2 border outline-none focus:shadow-outline rounded bg-primary placeholder-secondary"
            placeholder="Enter your email"
          />
          <input type="hidden" value="1" name="embed" />
        </div>
        <div>
          <button
            className="px-4 py-2 border leading-6 font-medium rounded-md hover:bg-secondary hover:text-primary focus:outline-none focus:shadow-outline active:bg-secondary active:text-primary transition ease-in-out duration-150"
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <div className="text-xs tracking-wide leading-loose">
          <i>I hereby solemnly swear to never spam you.</i>
        </div>
      </form>
    </div>
  );
}

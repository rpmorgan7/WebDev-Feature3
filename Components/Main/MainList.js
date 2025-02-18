import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ mentors }) => {
  return html`
    <div>
      <hr />
      <h3>List of Mentors</h3>
      <ul>
        ${mentors.map(
          (mentor, index) =>
            html`<li key="${index}">
              ${mentor.firstName} ${mentor.lastName} | Expertise:
              ${mentor.expertise}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;

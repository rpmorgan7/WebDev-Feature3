import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllMentors, createMentor } from "../../Services/Mentors.js";
import MainList from "./MainList.js";

const Main = () => {
  const [mentors, setMentors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expertise, setExpertise] = useState("");

  // Load mentors from JSON on component mount
  useEffect(() => {
    getAllMentors().then((mentors) => {
      setMentors(mentors);
    });
  }, []);

  // Handle form submission to add a new mentor
  const handleAddMentor = () => {
    if (firstName && lastName && expertise) {
      const newMentor = { firstName, lastName, expertise };
      createMentor(newMentor).then((savedMentor) => {
        setMentors([...mentors, savedMentor]); // Update state with the new mentor
      });

      // Clear form fields
      setFirstName("");
      setLastName("");
      setExpertise("");
    }
  };

  return html`
    <div>
      <h1>Mentor Directory</h1>
      <p>Add your details to join our site as a mentor!</p>

      <!-- Mentor Input Form -->
      <div>
        <input
          type="text"
          value=${firstName}
          onInput=${(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value=${lastName}
          onInput=${(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          value=${expertise}
          onInput=${(e) => setExpertise(e.target.value)}
          placeholder="Expertise"
        />
        <button onClick=${handleAddMentor}>Submit</button>
      </div>

      <!-- Mentor List Component -->
      <${MainList} mentors=${mentors} />
    </div>
  `;
};

export default Main;

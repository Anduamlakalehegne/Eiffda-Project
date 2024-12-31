import React from 'react';
import './CoreFocusAreas.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

// Sample icons for each focus area (can replace with actual SVG or image imports)
const icons = {
  peace: "🕊️",
  rights: "⚖️",
  gender: "♀️",
  youth: "👩‍🎓",
  climate: "🌍",
  humanitarian: "🤝"
};

const focusAreas = [
  {
    title: "Peacebuilding & Interfaith Dialogue",
    description: "EIFDDA fosters peaceful coexistence by promoting dialogue among different faith communities, enhancing tolerance and understanding. Through initiatives like the Joint Initiative for Strategic Religious Action (JISRA), we focus on Freedom of Religion and Belief (FoRB), creating platforms for diverse religious leaders to engage in constructive conversations that address communal tensions and build trust.",
    icon: icons.peace,
  },
  {
    title: "Human Rights Advocacy",
    description: "We are committed to promoting and protecting human rights in Ethiopia, particularly for marginalized communities, women, and youth. Our advocacy efforts focus on gender equality and combating harmful practices such as child marriage and female genital mutilation (FGM). By raising awareness and pushing for policy changes, we strive to create a society where everyone’s rights are respected and upheld.",
    icon: icons.rights,
  },
  {
    title: "Gender Justice & Women's Empowerment",
    description: "EIFDDA supports women's rights through various programs, including the Keeping Girls in School (KGIS) initiative, which emphasizes education and empowerment. We combat gender-based violence (GBV) by advocating for access to justice for women and girls, ensuring that their voices are heard and their rights protected.",
    icon: icons.gender,
  },
  {
    title: "Youth Empowerment",
    description: "Our initiatives aim to build the capacity of youth and encourage their active participation in peacebuilding, development, and leadership roles. We offer educational programs and skill-building workshops designed to empower young people, equipping them with the tools they need to drive positive change in their communities.",
    icon: icons.youth,
  },
  {
    title: "Climate Change & Environmental Sustainability",
    description: "EIFDDA addresses climate-related issues affecting vulnerable communities by promoting environmental sustainability and climate justice. Our projects engage faith leaders in advocacy efforts, encouraging community-driven solutions to environmental challenges and fostering a culture of stewardship for the planet.",
    icon: icons.climate,
  },
  {
    title: "Refugee & Humanitarian Support",
    description: "We are dedicated to humanitarian efforts that support refugees and internally displaced persons (IDPs), particularly in conflict-affected regions. Through targeted initiatives, we provide essential aid, education, and psychosocial support, helping vulnerable populations rebuild their lives and foster resilience in their communities.",
    icon: icons.humanitarian,
  }
];

const CoreFocusAreas = () => {
  return (
    <>
   <Header activeLink={"PROGRAMS & INITIATIVES"} />

    <div className="core-focus-areas">
      <h2 style={{color:"#039472", fontSize:"27px"}}>Core Focus Areas</h2>
      <div className="focus-area-cards">
        {focusAreas.map((area, index) => (
          <div key={index} className="focus-area-card">
            <div className="icon">{area.icon}</div>
            <h3>{area.title}</h3>
            <p className="project-description">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CoreFocusAreas;

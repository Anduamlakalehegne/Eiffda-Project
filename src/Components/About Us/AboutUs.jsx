import { useEffect } from 'react';
import './AboutUs.css';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
// import { FaHandHoldingHeart, FaChild, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from 'react-icons/fa';
// import card1 from "../../assets/dd.jpg";
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import aboutUs from "../../assets/nandu.jpg";
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { scrollToElement } from '../utils/scrollToElement';

const MySwal = withReactContent(Swal);

const AboutUs = () => {

    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1); // Remove the '#' character
            scrollToElement(hash, 100); // Adjust the offset for the header height
        }
    }, []);

    const handleSlideClick = () => {

        MySwal.fire({
            // title: <h6 style={{ fontSize: '22px' }}>About Us</h6>,
            html: (
                <div style={{ padding: '15px' }}>
                    <div className="info-content">
                        <h4 style={{ fontSize: '27px', paddingBottom: '5px' }}>ABOUT EIFDDA</h4>
                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Brief Overview of EIFDDA</h4>

                        <p>The Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA) was established to serve as a beacon of hope and collaboration in a nation characterized by rich religious diversity. Recognizing that Ethiopia&apos;s myriad faith communities possess unique strengths and perspectives, EIFDDA was founded with a clear mission: to unite these communities in addressing the pressing social challenges that affect the lives of countless individuals across the country.<br /></p>
                        <p>At its core, EIFDDA is driven by the belief that interfaith cooperation is not only possible but essential for fostering peace and understanding in a landscape often marked by division. Through meaningful dialogue and collaborative initiatives, EIFDDA aims to break down barriers and build bridges among different religious groups, cultivating a culture of mutual respect and shared purpose.</p>
                        <p>In a country where faith plays a pivotal role in daily life, EIFDDA harnesses the influence of religious leaders and communities to advocate for human rights and sustainable development. By engaging with diverse faith traditions, the organization empowers leaders to become agents of change, equipping them with the tools and knowledge to address critical issues such as poverty, gender inequality, and environmental degradation.</p>
                        <p>Through its programs and initiatives, EIFDDA seeks to create an inclusive and harmonious society where every voice is heard and valued. The organization facilitates interfaith dialogues, community engagement activities, and educational workshops that encourage collaboration and understanding among various religious groups. These efforts are instrumental in transforming societal perceptions, fostering a sense of belonging, and inspiring collective action for the common good.</p>
                        <p>EIFDDA&apos;s impact is evident in the tangible changes it brings to communities across Ethiopia. By creating platforms for dialogue and collaboration, the organization helps to nurture a sense of shared responsibility and commitment to peacebuilding. It serves as a catalyst for positive change, where faith leaders and their communities come together to address the root causes of conflict and work toward lasting solutions.</p>
                        <p>In essence, EIFDDA stands as a testament to the power of unity in diversity. Through its unwavering commitment to fostering interfaith cooperation and driving social change, the organization embodies the hope for a future where faith transcends boundaries, and communities unite to build a peaceful and prosperous Ethiopia for all.</p>
                        <p></p>
                    </div>
                </div>
            ),
            position: "top-end",
            width: "900px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };

    const CoreValues = () => {

        MySwal.fire({
            html: (
                <div style={{ padding: '15px' }}>
                    <div className="info-content">
                        <h4 style={{ fontSize: '27px', paddingBottom: '5px' }}>Core Values of EIFDDA</h4>
                        <p>At the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA), our work centers on fostering interfaith cooperation, promoting human rights, and driving sustainable development across Ethiopia. We engage diverse religious communities in collaborative efforts to address pressing social challenges, aiming to create a more inclusive and harmonious society. Our initiatives empower individuals and communities, ensuring that every voice is heard and every need is met.<br /></p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Partnership</h4>
                        <p>We facilitate constructive dialogue among various faith traditions, encouraging mutual respect and understanding. By creating platforms for discussion, we enable religious leaders and communities to collaborate on shared values and common goals. Our interfaith initiatives build trust, reduce tensions, and promote peaceful coexistence, particularly in conflict-affected areas.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Integrity</h4>
                        <p>Integrity is at the heart of our work. We uphold transparency, accountability, and ethical conduct in all our initiatives. By maintaining high ethical standards, we build trust with our partners, beneficiaries, and the communities we serve. Our integrity strengthens our advocacy efforts and reinforces our commitment to human rights and social justice.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Diversity</h4>
                        <p>Embracing diversity is fundamental to our identity. We recognize the richness that different faith traditions, cultures, and perspectives bring to our work. By valuing diversity, we foster an inclusive environment where all voices are heard, ensuring that our initiatives are representative and responsive to the needs of the communities we serve. This commitment to diversity aligns with our goal of fostering interfaith networking and collective engagement.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Mutual Respect and Dignity</h4>
                        <p>We champion the inherent dignity of every individual, regardless of their background or beliefs. Our approach is rooted in mutual respect, recognizing the worth and contributions of all people. This value guides our interactions and helps us create safe spaces for dialogue and collaboration, essential for building trust and promoting peace.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Love and Inclusiveness</h4>
                        <p>Love and inclusiveness are the cornerstones of our mission. We strive to cultivate an environment where compassion and empathy thrive, enabling us to address the root causes of conflict and inequality. By promoting inclusiveness, we create opportunities for marginalized voices to be heard and empower individuals to participate in shaping their communities.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Peace and Non-Violence</h4>
                        <p>Our commitment to peace and non-violence drives every initiative we undertake. We believe that sustainable peace is achievable through dialogue, understanding, and cooperation among different faith communities. By promoting peaceful coexistence, we work to break cycles of violence and foster an environment where all can thrive.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Trustworthiness</h4>
                        <p>Building and maintaining trust is essential for effective collaboration. We are dedicated to being reliable and dependable partners, ensuring that our commitments are met and our promises are kept. Trustworthiness enhances our ability to mobilize support, engage stakeholders, and create lasting change in the communities we serve.</p>
                        <p>Together, these core values not only reflect the ethos of EIFDDA but also propel us toward our strategic goals of fostering faith-based networking, expanding our constituency, and advancing research and knowledge development. They guide us in our mission to create a just and peaceful society, where every individual has the opportunity to thrive and contribute to the well-being of all.</p>
                    </div>
                </div>
            ),
            position: "top-end",
            width: "900px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };

    const whatWeDo = () => {

        MySwal.fire({
            html: (
                <div style={{ padding: '15px' }}>
                    <div className="info-content">
                        <h4 style={{ fontSize: '27px', paddingBottom: '5px' }}>What We Do</h4>
                        <p>At the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA), our core values are the foundation of our mission and guide our actions as we work toward a more peaceful and equitable society. These values not only reflect our commitment to our strategic goals but also shape the culture and operations of our organization.<br /></p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>1. Interfaith Dialogue and Cooperation</h4>
                        <p>We facilitate constructive dialogue among various faith traditions, encouraging mutual respect and understanding. By creating platforms for discussion, we enable religious leaders and communities to collaborate on shared values and common goals. Our interfaith initiatives build trust, reduce tensions, and promote peaceful coexistence, particularly in conflict-affected areas.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>2. Advocacy for Human Rights</h4>
                        <p>EIFDDA is committed to advocating for the rights of marginalized groups, including women, youth, and religious minorities. We work to raise awareness about human rights issues and mobilize support for policy changes that promote equality and justice. Through community engagement, capacity building, and partnerships with local and international organizations, we strive to ensure that human rights are upheld and protected for all.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>3. Sustainable Development Programs</h4>
                        <p>Our development programs focus on addressing the root causes of poverty and inequality. We implement initiatives that enhance access to education, healthcare, and economic opportunities, particularly for women and youth. By empowering these groups through skill-building, resource access, and advocacy, we create pathways out of poverty and foster sustainable livelihoods.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>4. Women’s Empowerment and Gender Justice</h4>
                        <p>Recognizing the critical role of women in community development, EIFDDA prioritizes gender justice and the empowerment of women. Our programs address harmful practices such as gender-based violence and child marriage, providing support and resources for survivors. We engage women as leaders and advocates, equipping them with the tools to effect change in their communities and promote gender equality.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>5. Youth Engagement and Leadership</h4>
                        <p>We believe in the power of youth as catalysts for change. EIFDDA actively involves young people in our programs, providing them with opportunities for leadership and advocacy. Through capacity-building workshops, mentorship, and community projects, we empower youth to take an active role in promoting peace and development in their communities.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>6. Climate Action and Environmental Sustainability</h4>
                        <p>Recognizing the impact of climate change on vulnerable communities, EIFDDA integrates environmental sustainability into our initiatives. We promote awareness of climate issues and advocate for practices that protect natural resources. By engaging faith communities in environmental stewardship, we work to foster a culture of sustainability that benefits both people and the planet.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>7. Research and Knowledge Sharing</h4>
                        <p>EIFDDA emphasizes the importance of evidence-based advocacy and program development. We conduct research to understand the social landscape and inform our initiatives. By establishing a knowledge bank and hosting learning platforms, we facilitate the sharing of insights and best practices among faith-based and non-faith-based organizations, fostering collaboration and innovation.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>8. Monitoring and Evaluation</h4>
                        <p>To ensure the effectiveness of our initiatives, we prioritize robust monitoring and evaluation practices. Our M&E team assesses the impact of our programs, gathering data to refine strategies and enhance outcomes. By measuring our progress, we remain accountable to our communities and stakeholders, continuously striving for improvement.</p>

                        <p>Through these multifaceted efforts, EIFDDA is committed to driving positive social change in Ethiopia. By uniting diverse religious communities, advocating for human rights, and promoting sustainable development, we aim to create a future where everyone can thrive in peace and dignity. Join us in our mission to build a better Ethiopia for all.</p>
                    </div>
                </div>
            ),
            position: "top-end",
            width: "900px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };

    const ourImpact = () => {

        MySwal.fire({
            html: (
                <div style={{ padding: '15px' }}>
                    <div className="info-content">
                        <h4 style={{ fontSize: '27px', paddingBottom: '5px' }}>Our Impact</h4>
                        <p>At the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA), our initiatives have led to profound changes in communities across Ethiopia. Through collaborative efforts, we have witnessed remarkable transformations that highlight our commitment to peacebuilding, gender equality, and community empowerment.<br /></p>

                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Success Stories</h4>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>1. Empowered Women Leaders</h4>
                        <p>In a rural community affected by child marriage and gender-based violence, EIFDDA facilitated workshops that equipped women with leadership skills and knowledge of their rights. As a result, several women formed a local advocacy group that successfully campaigned for the enforcement of laws against child marriage. Their efforts led to a significant reduction in cases and increased community awareness about gender equality.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>2. Youth as Agents of Peace</h4>
                        <p>In Dire Dawa, young people from diverse religious backgrounds came together through our youth engagement programs. They initiated interfaith dialogue sessions that fostered understanding and cooperation among their peers. Their project, “Voices for Peace,” reached over 1,000 youth, promoting a culture of dialogue and respect that has contributed to a decline in tensions in the area. </p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>3. Community-Led Climate Initiatives</h4>
                        <p>Responding to the challenges posed by climate change, EIFDDA partnered with local faith leaders to launch an environmental stewardship program. Communities adopted sustainable farming practices and organized tree-planting campaigns, resulting in a 30% increase in local vegetation cover and improved soil health. These efforts not only enhanced food security but also strengthened community bonds.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>4. Strengthened Faith-Based Organizations (FBOs)</h4>
                        <p>By providing capacity-building support to FBOs, EIFDDA has enabled these organizations to become more effective advocates for social change. For instance, a newly trained FBO in the Somali region successfully lobbied for increased access to education for girls, resulting in a 20% rise in school enrollment among girls in their community.</p>

                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Data Points</h4>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}> • Peacebuilding</h4>
                        <p>EIFDDA facilitated over 50 interfaith dialogue sessions, engaging more than 2,000 participants from various religious backgrounds, resulting in enhanced cooperation and reduced conflict in targeted areas.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>• Gender Equality</h4>
                        <p>Through our women&apos;s empowerment programs, over 1,500 women have received training on their rights and leadership, with 400 of them taking on leadership roles in their communities.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}> • Youth Engagement</h4>
                        <p>Our youth initiatives have reached over 5,000 young people, fostering a new generation of peacebuilders who actively participate in community development.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}> • Climate Action</h4>
                        <p>EIFDDA has supported the planting of thousands trees across various regions, contributing to improved environmental health and community resilience against climate change.</p>

                        <p>The stories and data reflect the tangible impact of EIFDDA&apos;s work in promoting peace, equality, and sustainable development. Our collective efforts continue to inspire hope and drive positive change in Ethiopia, demonstrating that when faith communities unite, they can transform lives and create a brighter future for all. Join us as we continue this vital work, amplifying voices, building bridges, and fostering a more equitable and harmonious society.</p>
                    </div>
                </div>
            ),
            position: "top-end",
            width: "900px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };

    const Leadership = () => {

        MySwal.fire({
            html: (
                <div style={{ padding: '15px' }}>
                    <div className="info-content">
                        <h4 style={{ fontSize: '27px', paddingBottom: '5px' }}>Leadership and Team</h4>
                        <p>The leadership team at the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA) is pivotal in advancing the organization’s mission of promoting peace, sustainable development, and interfaith cooperation. Comprising seasoned professionals with diverse expertise in interfaith dialogue, development, and community engagement, this team ensures that all initiatives are impactful and aligned with EIFDDA’s core values and strategic goals.<br /></p>

                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Leadership Structure</h4>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Executive Leadership</h4>
                        <p>The executive director guides the organization’s strategic vision and oversees program implementation. With decades of experience, this leader ensures EIFDDA remains responsive to the evolving needs of diverse communities across Ethiopia.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Board of Directors</h4>
                        <p>The board provides essential strategic direction and oversight, focusing on policy development, resource mobilization, and fostering religious cooperation among various faith traditions. Board members bring extensive knowledge and experience, helping navigate complex social challenges.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Advisory Committee</h4> 
                        <p>Specialized advisors lend insights on critical areas such as human rights, gender equality, and advocacy strategies. Their expertise shapes programs that effectively address the rights and needs of marginalized communities, ensuring EIFDDA’s work is informed by best practices and current research.</p>

                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Operational Team</h4>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Program Management</h4>
                        <p>Dedicated program coordinators oversee the execution of initiatives in health, women&apos;s empowerment, and youth engagement. They work closely with communities to tailor programs to local contexts, fostering ownership and sustainability.</p>

                        <h4 style={{ fontSize: '19px', textAlign: "left" }}>Fundraising Team</h4>
                        <p>A specialized fundraising unit develops strategies to diversify funding sources, ensuring financial stability and institutional longevity. By building partnerships with donors and stakeholders, the team enhances EIFDDA&apos;s capacity to implement impactful projects.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Monitoring and Evaluation (M&E)</h4>
                        <p>The M&E team is crucial in assessing program effectiveness and impact. They design evaluation frameworks to measure outcomes, ensuring that lessons learned inform future initiatives and contribute to continuous improvement.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Communications Team</h4>
                        <p>The communications manager develops compelling narratives that amplify the voices of communities served by EIFDDA. This team enhances outreach efforts, engaging stakeholders and the public through various media platforms to raise awareness and garner support for initiatives.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Finance and Administration</h4>
                        <p>A finance officer ensures transparent financial management and accountability, overseeing budgets and resource allocation. This role is critical for maintaining the trust of partners and funders, enabling EIFDDA to operate sustainably.</p>

                        <h4 style={{ fontSize: '18px', textAlign: "left" }}>Field Operations</h4>
                        <p>Field project managers coordinate on-the-ground activities, liaising with local communities to implement projects that address specific social issues. Their firsthand knowledge of community dynamics allows EIFDDA to adapt strategies and maximize impact.</p>
                        
                        <h4 style={{ fontSize: '21px', textAlign: "left" }}>Commitment to Impact</h4>
                        <p>Together, the leadership team, board, advisors, and staff are dedicated to advancing EIFDDA’s mission. They foster a collaborative and respectful environment, ensuring that the organization not only responds to immediate needs but also builds long-term capacity within communities. 
                            By leveraging their collective expertise in health, women&apos;s and youth empowerment, fundraising, and monitoring and evaluation, EIFDDA continues to drive meaningful change, empowering individuals and fostering interfaith harmony across Ethiopia.</p>
                    </div>
                </div>
            ),
            position: "top-end",
            width: "900px",
            showCloseButton: true, 
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };


    return (
        <>
            <Header activeLink={"ABOUT US"}  />

            <section className="info-section">
                <div className="info-content">
                    <h4>ABOUT EIFDDA</h4>
                    <h2>Brief Overview:</h2>
                    <p>
                        Discover how EIFDDA is transforming communities through interfaith collaboration and social advocacy.
                        Join us in our mission to promote peace, human rights, and sustainable development across Ethiopia.
                        To learn more about our initiatives and how you can get involved:
                    </p>
                    <a href="#" className="btn" onClick={() => handleSlideClick()}>Read More</a>
                </div>
                <div className="info-images">
                    <img src={aboutUs} alt="Image 1" />
                </div>
            </section>

            <section className="impact-section">
                <div className="impact-content2">
                    <h4>Mission, Vision, and <br /> Values</h4>
                </div>
                <div className="impact-cards2">
                    <div className="card2">
                        <div className="card-icon"><FaBullseye /></div>
                        <h3>Mission</h3>
                        <p>
                            EIFDDA is dedicated to promoting value-based developmental dialogue and action,
                            strengthening the capacities of member faith-based organizations (FBOs),
                            and fostering an environment conducive to their collaborative efforts.
                        </p>
                    </div> 
                    <div className="card2"> 
                        <div className="card-icon"><FaEye /></div> 
                        <h3>Vision</h3> 
                        <p>EIFDDA envisages seeing spiritual and material prosperity of the Ethiopian people. </p> 
                    </div> 
                    <div className="card2"> 
                        <div className="card-icon"><FaHeart /></div> 
                        <h3>Core Values</h3> 
                        <p> 
                            At the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA), our core values are the foundation
                            of our mission and guide our actions as we work toward a more peaceful and equitable society. These values not only
                            reflect our commitment to our strategic goals but also shape the culture and operations of our organization.
                        </p> 
                        <a onClick={CoreValues} className="read-more">Learn More</a> 
                    </div> 
                </div> 
            </section> 

            <section> 

                <div className="what-we-do"> 
                    <div className="what-we-do-item"> 

                        <h3>Strategic Goals and Objectives (2024-2029)</h3> 
                        <p> 
                            Looking ahead to 2024-2029, EIFDDA has set three strategic goals to enhance interfaith cooperation, promote sustainable development,
                            and advocate for human rights in Ethiopia. These goals build on our successes and align with key priorities. Explore how we aim to
                            drive meaningful social change through our strategic objectives. 
                        </p> 
                        {/* <a href="#" className="read-more">Read more</a> */} 
                    </div> 
                    <div className="what-we-do-item">  
                        <h3>What We Do</h3> 
                        <p> 
                            At the Ethiopia Interfaith Forum for Development, Dialogue, and Action (EIFDDA), we promote interfaith cooperation, human rights, and
                            sustainable development across Ethiopia. By uniting diverse religious communities, we address pressing social challenges, fostering
                            an inclusive society where every voice is valued and every need is met.
                        </p> 
                        <a onClick={whatWeDo} className="read-more">Read more</a> 
                    </div> 
                    <div className="what-we-do-item"> 
                        <h3>Our Impact</h3> 
                        <p> 
                            EIFDDA has fostered interfaith cooperation, empowered women, and engaged youth across Ethiopia. From reducing conflicts through dialogues to promoting
                            gender equality and climate action, our initiatives continue to create lasting social change. Explore more of our success stories and impact here.
                        </p> 
                        <a onClick={ourImpact} className="read-more">Read more</a> 
                    </div> 
                    <div className="what-we-do-item"> 
                        <h3>Leadership and Team</h3> 
                        <p> 
                            The EIFDDA leadership team, comprising experienced professionals, board members, and advisors, drives the organization&apos;s strategic vision and program
                            implementation, ensuring impactful initiatives in interfaith dialogue, development, and human rights through dedicated management and collaboration.
                        </p> 
                        <a onClick={Leadership} className="read-more">Read more</a> 
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
};

export default AboutUs;

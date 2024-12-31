// src/PrivacyPolicy.jsx

import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import './PrivacyPolicy.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const privacyPolicyData = [
    {
        // title: 'Changes to This Policy',
        content: (
            <p>
                Effective Date: January 1st, 2023 <br />
                At EIFDDA, your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or engage with our services.
            </p>
        ),
    },
    {
        title: 'Information We Collect',
        content: (
            <ul style={{ marginLeft: "10px", color: "#004360" }}>
                <li>
                    <strong> Personal Information:</strong>We may collect personal information that you voluntarily provide, such as your name, email address, phone number, and any other information you choose to share when you contact us, sign up for newsletters, or participate in our programs.
                </li>
                <li>
                    <strong>Usage Data: </strong>We automatically collect certain information about your device and how you interact with our site, including your IP address, browser type, operating system, and pages visited. This information helps us improve our website.
                </li>
            </ul>
        ),
    },
    {
        title: 'How We Use Your Information',
        content: (
            <>
                <p>
                    We utilize your personal information for the following reasons:
                </p>
                <ul style={{ marginLeft: "10px", color: "#004360" }}>
                    <li>To provide, maintain, and improve our website and services.</li>
                    <li>To communicate with you, including sending updates, newsletters, and promotional materials.</li>
                    <li>To respond to your inquiries and fulfill your requests.</li>
                    <li>To analyze website usage and enhance user experience.</li>
                </ul>
            </>

        ),
    },
    {
        title: 'Cookies and Tracking Technologies', 
        content: (
            <>
                <p>
                    Our website may use cookies and similar tracking technologies to collect information about your interactions.
                    You can manage cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of our site.
                </p>
            </>

        ),
    },
    {
        title: 'Data Sharing and Disclosure', 
        content: (
            <>
                <p>
                We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and 
                conducting our activities, subject to confidentiality agreements. We may also disclose your information when required by law or to protect our rights, privacy, safety, or property, or that of others.
                </p>
            </>

        ),
    },
    {
        title: 'Data Security',
        content: (

            <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, 
                disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is completely secure.
            </p>

        ),
    },
    {
        title: 'Your Rights',
        content: (
            <p>
               You have the right to access, correct, or delete your personal information. You can also object to or 
               restrict the processing of your data and withdraw consent at any time where we rely on your consent to process your information.
            </p>
        ),
    },
    {
        title: 'Childrens Privacy',
        content: (
            <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. 
                If we become aware that we have collected personal information from a child, we will take steps to delete such information.
            </p>
        ),
    },

    {
        title: 'Third-Party Links',
        content: (
            <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites, and we encourage you to review their privacy policies.
            </p>
        ),
    },

    {
        title: 'Changes to This Privacy Policy',
        content: (
            <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes through our website or by other means. Your continued use of the site after such changes constitutes your acceptance of the new policy.
            </p>
        ),
    },

    {
        title: 'Contact Us',
        content: (
            <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:eifdda.foryou@gmail.com">eifdda.foryou@gmail.com</a>.
        </p>
        ),
    },
];

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="terms-container">
                <Typography variant="h4" className="privacy-title" gutterBottom>
                    Privacy Policy
                </Typography>
                <Paper elevation={3} className="privacy-paper">
                    {privacyPolicyData.map((section, index) => (
                        <Box key={index} className="privacy-section">
                            <Typography variant="h5" className="privacy-subtitle">
                                {section.title}
                            </Typography>
                            <Typography className="privacy-content">
                                {section.content}
                            </Typography>
                        </Box>
                    ))}
                </Paper>
            </div>
            <Footer />
        </>
    );
};


export default PrivacyPolicy;

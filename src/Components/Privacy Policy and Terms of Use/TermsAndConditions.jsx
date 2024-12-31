
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import './TermsAndConditions.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const termsData = [
    {
        // title: 'Changes to This Policy',
        content: (
            <p>
                Effective Date: January 1st, 2023 <br />
                Welcome to the EIFDDA website. By accessing or using our site, you agree to the following terms and conditions. If you do not agree, please do not use our site.
            </p>
        ),
    },
    {
        title: 'Acceptance of Terms',
        content: (
            <>
                <p>
                    By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
            </>

        ),
    },
    {
        title: 'Use of Content',
        content: (
            <>
                <p>
                    All content on this site, including text, graphics, logos, and images, is the property of EIFDDA or its content providers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.
                </p>
            </>

        ),
    },
    {
        title: 'User Responsibilities',
        content: (

            <p>
                You agree to use the website for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else's use of the site. This includes, but is not limited to, avoiding any conduct that is harmful, threatening, abusive, or otherwise objectionable.
            </p>

        ),
    },
    {
        title: 'User-Generated Content',
        content: (
            <p>
                If you submit any content to our site (e.g., comments, feedback), you grant EIFDDA a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content. You are solely responsible for the content you submit.
            </p>
        ),
    },
    {
        title: 'Disclaimer of Liability',
        content: (
            <p>
                EIFDDA makes no representations or warranties regarding the accuracy, reliability, or completeness of the information on this site. Your use of the website is at your own risk. EIFDDA shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website or any information contained therein.
            </p>
        ),
    },

    {
        title: 'Links to Third-Party Sites',
        content: (
            <p>
                Our website may contain links to third-party websites. We do not endorse or have any control over the content of these sites and are not responsible for their practices. Accessing third-party sites is at your own risk.
            </p>
        ),
    },

    {
        title: 'Indemnification',
        content: (
            <p>
                You agree to indemnify and hold harmless EIFDDA, its affiliates, and their respective officers, directors, and employees from any claims, losses, liabilities, damages, costs, or expenses arising from your use of the website or violation of these Terms of Use.
            </p>
        ),
    },

    {
        title: 'Changes to Terms',
        content: (
            <p>
                EIFDDA reserves the right to modify these Terms of Use at any time. We will notify you of any significant changes, and your continued use of the website after such changes constitutes your acceptance of the new terms.
            </p>
        ),
    },

    {
        title: 'Governing Law',
        content: (
            <p>
                IThese Terms of Use shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].
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

const TermsAndConditions = () => {
    return (
        <>
            <Header />
            <div className="terms-container">
                <Typography variant="h4" className="terms-title" gutterBottom>
                    Terms of Use
                </Typography>
                <Paper elevation={3} className="terms-paper">
                    {termsData.map((term, index) => (
                        <Box key={index} className="terms-section">
                            <Typography variant="h5" className="terms-subtitle">
                                {term.title}
                            </Typography>
                            <Typography className="terms-content">
                                {term.content}
                            </Typography>
                        </Box>
                    ))}
                </Paper>


            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;

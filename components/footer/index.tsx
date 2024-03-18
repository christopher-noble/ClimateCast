import React from 'react';

const Footer: React.FC = () => {
    return (
        <main>
            <footer className="text-slate-400 text-center pt-60 pb-20 inset-x-0 bottom-0">
                © {new Date().getFullYear()} ClimateCast. All rights reserved.
            </footer>
        </main>
    );
};

export default Footer;
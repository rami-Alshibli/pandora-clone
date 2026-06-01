import React from 'react';
// استيراد الشعارات التجارية الرسمية من مكتبة react-icons
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaTiktok, FaPinterestP } from 'react-icons/fa6';

const footerData = [
    {
        title: 'SHOP',
        links: ['Charms', 'Bracelets', 'Rings', 'Necklaces & Pendants', 'Earrings', 'Lab-Grown Diamonds', 'Pandora Collections', 'Gifts'],
    },
    {
        title: 'RESOURCES',
        links: ['Check Order Status', 'Shipping', 'Returns & Exchanges', 'FAQ', 'Contact Us', 'Product Care', 'Warranty', 'Size Guide', 'Blog'],
    },
    {
        title: 'SERVICES',
        links: ['My Pandora', 'Buy Now, Pay Later', 'Student & Military Discount Program', 'Pick Up In Store', 'Engraving', 'Gift Cards', 'Pandora Credit Card', 'Pandora Cares'],
    },
    {
        title: 'LEGAL',
        links: ['Terms & Conditions', 'My Pandora Terms & Conditions', 'Cookie Policy', 'Privacy Policy', 'Privacy Rights Request Form', 'Do Not Sell or Share My Personal Information', 'Transparency in Supply Chains Statement', 'California Transparency in Supply Chains Statement', "Dealer's Hallmark Notice", 'Accessibility'],
    },
    {
        title: 'ABOUT US',
        links: ['About Pandora', 'News & Investor Relations', 'Sustainability', 'Craftsmanship', 'Careers', 'Store Finder', 'Site Map'],
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-16 pb-10 border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {footerData.map((column, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-6">
                                {column.title}
                            </h3>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-[13px] text-gray-500 hover:text-text-primary transition-colors duration-200">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="h-20"></div>

                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

                    <div className="flex-shrink-0 cursor-pointer">
            <span className="font-sans font-bold text-3xl tracking-widest uppercase text-text-primary">
              PANDORA
            </span>
                    </div>

                    <div className="text-xs text-text-primary font-medium tracking-wide text-center">
                        <a href="#" className="hover:underline underline-offset-4">UNITED STATES English</a>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-500">© ALL RIGHTS RESERVED. {new Date().getFullYear()} Pandora</span>
                    </div>

                    {/* أيقونات السوشيال ميديا بعد ربطها بالمكتبة الجديدة */}
                    <div className="flex space-x-4">
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaInstagram size={14} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaXTwitter size={14} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaYoutube size={14} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaTiktok size={14} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-text-primary hover:border-text-primary hover:bg-gray-50 transition-all">
                            <FaPinterestP size={14} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
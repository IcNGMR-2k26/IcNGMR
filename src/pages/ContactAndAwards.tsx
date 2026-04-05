import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Users, Trophy, GraduationCap, Award, Calendar, ArrowRight, UserCheck, ChevronDown } from 'lucide-react';

const ContactAndAwards: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ fullName: '', email: '', message: '' });
    };

    const awardCategories = [
        {
            id: 'young-researcher',
            title: 'Young Researcher Award',
            description: 'Recognizing outstanding early-career scholars for their innovative contributions and future potential in their respective fields.',
            icon: <GraduationCap className="h-8 w-8 text-sky-600" />,
            theme: 'from-sky-500/10 to-sky-600/5',
            accentColor: 'text-sky-600',
            btnColor: 'bg-sky-600 hover:bg-sky-700'
        },
        {
            id: 'women-researcher',
            title: 'Women Researcher in Science and Technology',
            description: 'Honoring exceptional women researchers whose work has significantly advanced scientific knowledge and technological innovation.',
            icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
            theme: 'from-indigo-500/10 to-indigo-600/5',
            accentColor: 'text-indigo-600',
            btnColor: 'bg-indigo-600 hover:bg-indigo-700'
        }
    ];

    const scrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white animate-in fade-in duration-700">

            {/* 1. Awards Section (Visible First) - Tightened Top Spacing */}
            <section className="relative overflow-hidden border-b border-slate-100 py-8 lg:py-12">
                {/* Background Orbs */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Header Section - Reduced mb-20 to mb-12 */}
                    <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 text-[10px] font-bold uppercase tracking-widest shadow-sm mb-4">
                            <Trophy className="h-3 w-3 text-amber-500" />
                            <span>ICNGMR 2026 Recognition</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                            Call for <span className="text-sky-500">Awards</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                            Celebrate and honor the exceptional contributions of researchers driving innovation.
                        </p>
                    </div>

                    {/* Featured Image Section - Optimized for smaller gaps */}
                    <div className="mb-16 relative group max-w-5xl mx-auto animate-in zoom-in-95 duration-1000">
                        <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative aspect-[16/7] overflow-hidden rounded-[2rem] shadow-xl bg-slate-200">
                            <img
                                src="/01.JPG"
                                alt="Awards Ceremony"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-8 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">Excellence in Research</p>
                                <h3 className="text-2xl font-black">Annual Recognition Ceremony</h3>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section - Reduced Gap */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {awardCategories.map((category) => (
                            <div
                                key={category.id}
                                className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 shadow-lg shadow-slate-200/30 hover:-translate-y-1.5 transition-all duration-300"
                            >
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.theme} w-fit mb-6 shadow-sm`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                    {category.description}
                                </p>
                                <button
                                    className={`flex items-center space-x-2 px-6 py-3 ${category.btnColor} text-white rounded-xl font-bold shadow-md transition-all active:scale-95 text-sm`}
                                >
                                    <span>Apply Now</span>
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Application Guide - Tightened Padding */}
                    <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 opacity-5">
                            <Award size={200} />
                        </div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="max-w-md text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-black mb-4">How to Apply?</h2>
                                <p className="text-slate-400 text-sm mb-8 font-medium">
                                    Submit your application form before the deadline of 10th August, 2026.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                                        <div className="p-2 bg-white/10 rounded-lg"><Calendar className="h-5 w-5 text-sky-400" /></div>
                                        <div className="text-left">
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Deadline</p>
                                            <p className="text-base font-bold">10th August, 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                                        <div className="p-2 bg-white/10 rounded-lg"><Mail className="h-5 w-5 text-sky-400" /></div>
                                        <div className="text-left">
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Email To</p>
                                            <p className="text-base font-bold text-sky-100">icngmr2026@vbithyd.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-72">
                                <div className="bg-white rounded-3xl p-6 text-center space-y-4 shadow-2xl">
                                    <Trophy className="h-10 w-10 text-sky-500 mx-auto" />
                                    <h4 className="text-slate-900 font-black text-lg">Nomination Form</h4>
                                    <button className="w-full bg-sky-500 text-white py-3 rounded-xl font-bold hover:bg-sky-600 transition shadow-lg text-sm">
                                        Download Form
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-12 flex flex-col items-center">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Contact Details</p>
                        <button onClick={scrollToContact} className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-sky-500 transition-all animate-bounce">
                            <ChevronDown size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Contact Section - py-16 instead of py-24 */}
            <section id="contact-section" className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">Contact Us</h2>
                        <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Form */}
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 p-8 border border-slate-100">
                            <h3 className="text-xl font-black text-slate-900 mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-sm"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-sm resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center text-sm"
                                >
                                    <Send className="h-4 w-4 mr-2" />
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 p-8 border border-slate-100">
                                <h3 className="text-xl font-black text-slate-900 mb-6">Get in Touch</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: MapPin, color: 'text-sky-500', bg: 'bg-sky-50', title: 'Location', detail: 'VBIT, Aushapur, Ghatkesar, Telangana - 501301' },
                                        { icon: Mail, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Email', detail: 'icngmr2026@vbithyd.ac.in' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className={`p-3 rounded-xl ${item.bg} ${item.color} mr-4`}>
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-widest">{item.title}</h4>
                                                <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-[2rem] shadow-xl p-3 border border-slate-100 overflow-hidden h-52">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.840742512683!2d78.71886857591636!3d17.470509699818817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76ea23dfa8d5%3A0x72d3ea7f454e19ea!2sVignana%20Bharathi%20Institute%20of%20Technology%20(VBIT)%20%7C%20Top%20Engineering%20Colleges%20In%20Telangana!5e0!3m2!1sen!2sin!4v1743510360000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '1.2rem' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="VBIT Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactAndAwards;
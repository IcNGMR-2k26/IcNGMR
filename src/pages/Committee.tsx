import React from 'react';
import { User, Users, ShieldCheck, Globe, Star, Mic2, Heart, ClipboardCheck, Coffee, Award } from 'lucide-react';

interface Member {
  name: string;
  title: string;
}

const chiefPatrons: Member[] = [
  { name: 'Dr. N. Gowtham Rao', title: 'Chairman, VBIT' },
  { name: 'Dr. G. Manohar Reddy', title: 'Secretary, VBIT' },
];

const patrons: Member[] = [
  { name: 'Dr. P.V.S. Srinivas', title: 'Principal, VBIT' },
  { name: 'Dr. Y.V.S.S.S.V. Prasada Rao', title: 'Director, VBIT' },
];

const conferenceChair: Member[] = [
  { name: 'Dr. Dara Raju', title: 'Head of The Department, Dept. of C.S.E.' },
];

const internationalAdvisory: Member[] = [
  { name: 'Dr. Asadi Srinivasulu', title: 'Visiting Professor, New Castle University, Australia' },
  { name: 'Dr. Bhavani Prasad Yalagala', title: 'Research Manager, University of Glasgow, U.K' },
  { name: 'Dr. Satyaranjan Bairagi', title: 'Postdoctoral Researcher, ETH Zurich' },
  { name: 'Dr. Anuj Kumar Goel', title: 'Focus College BC, Canada' },
  { name: 'Dr. Venkat Rao', title: 'Professor, University of Glasgow, U.K' },
  { name: 'Joshin Kumar Reddy Darreddy', title: 'Community Health Systems LLC, USA' },
  { name: 'Prof. Dr. Midhunchakkaravarthy', title: 'Dean, School of AI Computing and Multimedia, Lincoln University College, Malaysia' }
];

const nationalAdvisory: Member[] = [
  { name: 'Dr. A. Govardhan', title: 'Vice Chancellor, RGUKT, Basara' },
  { name: 'Dr. V. Kamakshi Prasad', title: 'Senior Professor, JNTUH, Hyderabad' },
  { name: 'Dr. G. Mallikarjuna Rao', title: 'Scientist, RCI' },
  { name: 'Dr. Ch. Sudhakar', title: 'Professor, NIT, Warangal' },
  { name: 'Mr. S. Praveen Kumar', title: 'Dy. General Manager, BEL, Hyderabad' },
  { name: 'Dr. M. Naresh Babu', title: 'Associate Professor, IIITDM, Kurnool' },
  { name: '⁠Dr. C. R. Rao', title: 'Rtd. Senior Professor, Hyderabad Central University, Hyderabad' },
  { name: 'Dr. M. S. Jagadeesh', title: 'Associate Professor, NITTTR Kolkata, West Bengal' },
  { name: 'Dr. Kranthi Kumar L', title: 'Associate Professor, Manipal Institute of Technology, Karnataka' },
  { name: 'Dr. Ripon Patgiri', title: 'NIT, Silchar, Assam' },
  { name: 'Dr. V. Ramesh', title: 'Professor, Tezpur University, Assam' }
];

const organizingCommittee: Member[] = [
  { name: 'Dr. M. Venkateswara Rao', title: 'Professor, Dept. of C.S.E. Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301.' },
  { name: 'Dr. G. Arun', title: 'Associate Professor, Dept. of C.S.E. Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301.' },
  { name: 'Dr. N. Arjun', title: 'Associate Professor, Dept. of C.S.E. Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301.' },
  { name: 'Dr. P. Yamini Devi', title: 'Associate Professor, Dept. of C.S.E. Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301.' },
];

const steeringCommittee: Member[] = [
  { name: 'Dr. C. Ramaseshagiri Rao', title: 'Professor, Dept. of C.S.E.' },
  { name: 'Dr. Ch. Venkataramana Reddy', title: 'Professor, VBIT' },
  { name: 'Dr. S. Pothalaiah', title: 'Professor, HoD – E.C.E., VBIT' },
  { name: 'Dr. P. Sathish Kumar', title: 'Professor, Dept. of M.E.' },
  { name: 'Dr. V. Sridhar Reddy', title: 'HoD – I.T' },
  { name: 'Dr. Y. Raju', title: 'HoD – C.S.E. (DS)' },
  { name: 'Dr. K. Sireesha', title: 'HoD – C.S.E. (A.I. & M.L.)' },
  { name: 'Dr. P. Sushma', title: 'HoD – C.S.E. (Cyber Security)' },
  { name: 'Dr. G. Swamy', title: 'HoD – C.S.B.S.' },
  { name: 'Dr. U. Poornalakshmi', title: 'HoD – E.C.E.' },
  { name: 'Dr. Sundeep Siddula', title: 'Director - R&D, Dept. of EEE' },
  { name: 'Dr. K. Neelima', title: 'HoD – E.E.E.' },
  { name: 'Dr. P. Kishore Kumar', title: 'HoD – M.E.' },
  { name: 'Dr. U. Ramakrishna', title: 'HoD – C.E.' },
  { name: 'Dr. P. Kalyani', title: 'HoD – FME' },
  { name: 'Dr.N.Sathyanarayan', title: 'Rtd.Senior Scientist,BARC,Professor of Physics,VBIT' }
];

const technicalProgrammeCommittee: Member[] = [
  { name: 'Dr. G. Sreeram', title: 'Professor, Dept. of C.S.E., Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301' },
  { name: 'Dr. N. Swapna', title: 'Associate Professor, Dept. of C.S.E., Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301.' },
  { name: 'Mr. V. Sathish', title: 'Assistant Professor, Dept. of C.S.E, Aushapur (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad, Telangana – 501301' },
];

const publicationCommittee: Member[] = [
  { name: 'Dr. S. Rajesh', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Dr. P. Subhadra', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Dr. M. Kalpana', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Mr. D. Srinivas Goud', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Mr. S. Venkata Satyakrishna', title: 'Associate Professor, Dept. of C.S.E.' },
];


const registrationCommittee: Member[] = [
  { name: 'Dr. N. Srinivas', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Ms. P. Suvarnapushpa', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. K. Priyabhashini', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. A. Sandhyarani', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. R. Sumathi', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Ms. P. Swathi', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. A.P. Chaitanyasri Mouli', title: 'Professor, Dept. of C.S.E.' },
];

const publicityCommittee: Member[] = [
  { name: 'Dr. Praveen Talari', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'Dr. A. L. Srinivasulu', title: 'Associate Professor, Dept. of C.S.E.' },
  { name: 'P. Hanumantha Rao', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. J. Kumari', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. U. Kavya', title: 'Assistant Professor, Dept. of C.S.E.' },
];

const hospitalityCommittee: Member[] = [
  { name: 'Dr. S. Ramesh', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Mr. G. Srikanth Reddy', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Mr. S. Nagarjuna', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Ms. N. Sudharani', title: 'Assistant Professor, Dept. of C.S.E.' },
  { name: 'Mr. Degavath Raju', title: 'Assistant Professor, Dept. of C.S.E.' },
];

const CommitteeSection = ({ title, members, icon }: { title: string; members: Member[]; icon: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-2.5 bg-sky-500 rounded-xl shadow-md shadow-sky-100">
        {icon}
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
        <div className="w-10 h-1 bg-sky-500 rounded-full mt-1"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {members.map((member, index) => (
        <div key={index} className="group bg-white p-5 rounded-[1.2rem] border border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-1 hover:shadow-xl hover:border-sky-200 transition-all duration-300">
          <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-sky-600 transition-colors leading-tight">{member.name}</h3>
          <p className="text-slate-500 text-xs font-medium leading-relaxed italic">{member.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const Committee = () => (
  <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
          <Star className="h-3 w-3" />
          <span>ICNGMR 2026 Organizing Body</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
          Conference <span className="text-sky-500">Committee</span>
        </h1>
      </div>

      <CommitteeSection title="Chief Patrons" members={chiefPatrons} icon={<ShieldCheck className="text-white h-5 w-5" />} />
      <CommitteeSection title="Patrons" members={patrons} icon={<Star className="text-white h-5 w-5" />} />
      <CommitteeSection title="Conference Chair" members={conferenceChair} icon={<User className="text-white h-5 w-5" />} />
      <CommitteeSection title="International Advisory Committee" members={internationalAdvisory} icon={<Globe className="text-white h-5 w-5" />} />
      <CommitteeSection title="National Advisory Committee" members={nationalAdvisory} icon={<Award className="text-white h-5 w-5" />} />
      <CommitteeSection title="Organizing Committee" members={organizingCommittee} icon={<Users className="text-white h-5 w-5" />} />
      <CommitteeSection title="Steering Committee" members={steeringCommittee} icon={<ShieldCheck className="text-white h-5 w-5" />} />
      <CommitteeSection title="Publication Committee" members={publicationCommittee} icon={<ClipboardCheck className="text-white h-5 w-5" />} />
      <CommitteeSection title="Registration Committee" members={registrationCommittee} icon={<ClipboardCheck className="text-white h-5 w-5" />} />
      <CommitteeSection title="Technical Programme Committee" members={technicalProgrammeCommittee} icon={<Mic2 className="text-white h-5 w-5" />} />
      <CommitteeSection title="Publicity Committee" members={publicityCommittee} icon={<Users className="text-white h-5 w-5" />} />
      <CommitteeSection title="Hospitality Committee" members={hospitalityCommittee} icon={<Coffee className="text-white h-5 w-5" />} />
    </div>
  </div>
);

export default Committee;
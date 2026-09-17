export const clinicInfo = {
  name: "Shaheen Medical Center",
  tagline: "We Care For You",
  type: "Polyclinic offering general medicine with gynea specialty",
  address:
    "Street No. 9, Main VIP Road, near Inayatullah Masjid, Ghouri Town, Islamabad",
  phone: "051-2158025",
  phoneHref: "tel:0512158025",
  whatsapp: "0339-9814850",
  whatsappHref: "https://wa.me/923399814850",
  email: "shaheenmedicalcenter.com.pk@gmail.com",
  hours: "Open daily, walk-in patients welcome",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Gynea Checkup",
    description:
      "Routine and specialized gynecological consultations in a private, comfortable setting, handled with care and confidentiality.",
  },
  {
    name: "Infectious Diseases",
    description:
      "Diagnosis and treatment for common and complex infectious conditions, with prompt lab support when needed.",
  },
  {
    name: "Chronic Disease Management",
    description:
      "Ongoing care plans and regular monitoring for diabetes, hypertension and other long-term conditions.",
  },
  {
    name: "Family Planning",
    description:
      "Confidential guidance and consultations tailored to each family's needs and preferences.",
  },
  {
    name: "Hepatitis & General Disease",
    description:
      "Screening and management for hepatitis alongside everyday general illness and seasonal conditions.",
  },
  {
    name: "Stitching & Dressing",
    description:
      "Wound care, minor procedures and dressing changes handled on-site by trained staff.",
  },
  {
    name: "ECG",
    description:
      "On-site electrocardiogram testing with prompt reporting, no need to travel to a separate lab.",
  },
  {
    name: "Blood Tests",
    description:
      "A full range of blood and lab tests available directly at the clinic, with fast turnaround.",
  },
  {
    name: "Medical Store",
    description:
      "An in-house pharmacy so prescriptions from your consultation are filled the moment you need them.",
  },
];

export type Doctor = {
  name: string;
  initials: string;
  role: string;
  credentials: string;
  /** null = client has not provided this yet */
  bio: string | null;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Umer Bin Khatab Abbasi",
    initials: "UA",
    role: "Registrar, Holy Family Hospital RWP",
    credentials: "RMP, MBBS (Gold Medalist), FCPS (Medicine)",
    // TODO: client to provide — bio to be written by Dr. Umer
    bio: null,
  },
  {
    name: "Dr. Madiha Umer Abbasi",
    initials: "MA",
    role: "General Physician, Ex-Holy Family Physician",
    credentials: "RMP, MBBS (Gold Medalist)",
    // TODO: client to provide — bio to be written by Dr. Madiha
    bio: null,
  },
];

export type StaffMember = {
  name: string;
  initials: string;
  role: string;
  credentials: string;
  /** null = client has not provided this yet */
  bio: string | null;
};

export const staff: StaffMember[] = [
  {
    name: "Dr. Haider Ali Abbasi",
    initials: "HA",
    role: "Pharmacist",
    credentials: "Rph, manages the in-house medical store",
    // TODO: client to provide
    bio: null,
  },
  {
    name: "Mr. M. Kashif",
    initials: "MK",
    role: "Staff Nurse",
    credentials: "Supports consultations, ECG and dressing procedures",
    // TODO: client to provide
    bio: null,
  },
  {
    name: "Ravish",
    initials: "R",
    role: "Housekeeping Staff",
    credentials: "Keeps the clinic clean and patient-ready every day",
    // TODO: client to provide
    bio: null,
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  isPlaceholder: true;
};

// TODO: client to provide real patient testimonials — these are structural
// placeholders only, clearly flagged via isPlaceholder.
export const testimonials: Testimonial[] = [
  {
    quote: "Placeholder testimonial. Real patient quote to be provided.",
    author: "Placeholder patient name",
    isPlaceholder: true,
  },
  {
    quote: "Placeholder testimonial. Real patient quote to be provided.",
    author: "Placeholder patient name",
    isPlaceholder: true,
  },
];

type HeroCopy = {
  eyebrow: string;
  headline: string;
  subheading: string;
};

type SectionCopy = {
  eyebrow: string;
  heading: string;
  subheading?: string;
};

const contactCtaCopy = {
  heading: "Visit or call us today",
  subheading:
    "Walk-ins welcome. For urgent queries, reach us directly on call or WhatsApp. No appointment system needed.",
};

export const pageCopy = {
  home: {
    hero: {
      eyebrow: "Ghouri Town · Islamabad",
      headline: "Family healthcare, close to home and cared for properly.",
      headlineEmphasis: "close to home",
      subheading:
        "Shaheen Medical Center is a polyclinic offering general medicine, gynea care, chronic disease management and full diagnostic services, led by senior physicians from Holy Family Hospital.",
      trustBadges: [
        "MBBS Gold Medalist",
        "Walk-in, No Booking Needed",
        "In-House Pharmacy & Lab",
      ] as string[],
    } satisfies HeroCopy & { headlineEmphasis: string; trustBadges: string[] },
    servicesPreview: {
      eyebrow: "What We Treat",
      heading: "Complete outpatient care, under one roof",
      subheading:
        "A quick look at what we handle daily. See the full list with details on our Services page.",
    } satisfies SectionCopy,
    doctorsPreview: {
      eyebrow: "Our Team",
      heading: "The people looking after you",
      subheading:
        "Led by two gold medalist physicians, supported by dedicated pharmacy and nursing staff.",
    } satisfies SectionCopy,
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      heading: "Care you can trust, close to home",
      subheading:
        "The details that make a walk-in visit to Shaheen Medical Center feel like a well-run clinic, not a waiting game.",
      stats: [
        {
          title: "MBBS Gold Medalist",
          description: "Top-ranked physicians leading every consultation.",
        },
        {
          title: "FCPS Holy Family Hospital",
          description: "Specialist training from one of Islamabad's leading hospitals.",
        },
        {
          title: "In-House Pharmacy & Lab",
          description: "Tests and prescriptions handled on-site, same visit.",
        },
        {
          title: "Walk-in, No Booking Needed",
          description: "No appointment system. Just come by during open hours.",
        },
      ] satisfies { title: string; description: string }[],
    },
    testimonials: {
      eyebrow: "Patients Say",
      heading: "Trusted by families in Ghouri Town",
    } satisfies SectionCopy,
    contactCta: contactCtaCopy,
    aboutTeaser: {
      eyebrow: "Who We Are",
      heading: "A polyclinic built around Ghouri Town",
      paragraph:
        "Shaheen Medical Center brings general medicine and gynea care together under one roof, on Main VIP Road, led by two MBBS Gold Medalist physicians with direct Holy Family Hospital experience.",
      ctaLabel: "Learn More About Us",
    },
    visitSteps: [
      {
        title: "Walk In",
        description:
          "No appointment needed. Visit us any day, any time during open hours.",
      },
      {
        title: "Consult",
        description:
          "See one of our Gold Medalist physicians for your general or gynea consultation.",
      },
      {
        title: "On-Site Diagnostics",
        description:
          "Need an ECG or blood test? Both are done right here, same visit.",
      },
      {
        title: "Pick Up Medicine",
        description:
          "Our in-house pharmacy fills your prescription before you leave.",
      },
    ] satisfies { title: string; description: string }[],
    faq: [
      {
        question: "Do I need an appointment?",
        answer:
          "No, Shaheen Medical Center is walk-in only. Just come by during our open hours.",
      },
      {
        question: "Is the gynea consultation private?",
        answer:
          "Yes, all gynea consultations are conducted privately and confidentially.",
      },
      {
        question: "Do you have a pharmacy on-site?",
        answer:
          "Yes, our in-house medical store fills prescriptions the same visit.",
      },
      {
        question: "Can I get blood tests and ECG done at the clinic?",
        answer:
          "Yes, both are available on-site with prompt reporting. No need to visit a separate lab.",
      },
      {
        question: "What are your clinic hours?",
        answer:
          "We're open daily for walk-in patients. Call 051-2158025 if you'd like to check before visiting.",
      },
    ] satisfies { question: string; answer: string }[],
  },
  about: {
    hero: {
      eyebrow: "Our Story",
      headline: "Care that feels like family, because it's run like one.",
      subheading:
        "Shaheen Medical Center was built around one idea: a polyclinic in Ghouri Town where patients don't need referrals, appointments, or waiting rooms full of strangers. Just trustworthy, close-to-home care.",
    } satisfies HeroCopy,
    story: {
      eyebrow: "We Care For You",
      heading: "A polyclinic built around Ghouri Town",
      paragraphs: [
        "Shaheen Medical Center brings general medicine and gynea care together under one roof, on Main VIP Road, so families don't have to travel across the city for everyday healthcare needs.",
        "From routine checkups to chronic condition management, our team is led by two MBBS Gold Medalist physicians with direct Holy Family Hospital experience, supported by an in-house pharmacy and on-site diagnostics.",
      ],
    },
    values: {
      eyebrow: "What We Stand For",
      heading: 'The values behind "We Care For You"',
      items: [
        {
          title: "Accessible Care",
          description:
            "Walk-in friendly, no referral or booking system required.",
        },
        {
          title: "Qualified Team",
          description:
            "Gold Medalist physicians with hospital-level training.",
        },
        {
          title: "All Under One Roof",
          description:
            "Consultation, lab tests, ECG and pharmacy. No referrals out.",
        },
        {
          title: "Genuine Attention",
          description: "A small clinic means your visit is never rushed.",
        },
      ],
    },
    facilities: {
      eyebrow: "On-Site Facilities",
      heading: "Everything a routine visit needs, in one place",
      items: [
        { title: "ECG", description: "On-site testing, same-visit reporting" },
        { title: "Lab", description: "Full blood test availability" },
        { title: "Pharmacy", description: "In-house medical store" },
        { title: "Minor OT", description: "Stitching & dressing on-site" },
      ],
    },
    closingCta: {
      heading: "Ready to visit Shaheen Medical Center?",
      subheading:
        "Walk in any day of the week, or reach out on call/WhatsApp before you come.",
    },
  },
  services: {
    hero: {
      eyebrow: "What We Treat",
      headline: "Complete outpatient care, under one roof",
      subheading:
        "From routine checkups to chronic condition management, every service below is available on a walk-in basis, no appointment needed.",
    } satisfies HeroCopy,
    closingCta: {
      heading: "Not sure which service you need?",
      subheading:
        "Call or message us directly and our team will guide you to the right consultation.",
    },
  },
  doctors: {
    hero: {
      eyebrow: "Our Team",
      headline: "The people looking after you",
      subheading:
        "Every member of our team writes their own bio. This shows the intended card layout with placeholders where personal notes will go.",
    } satisfies HeroCopy,
    closingCta: {
      heading: "Want to consult one of our doctors?",
      subheading: "Walk in any day, or call ahead to check who's available.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Get In Touch",
      headline: contactCtaCopy.heading,
      subheading: contactCtaCopy.subheading,
    } satisfies HeroCopy,
  },
};
